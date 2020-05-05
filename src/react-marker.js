// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useMap } from './google-map';

type ReactMarkerProps = {|
  lat: number,
  lng: number,
  children: React.Node,
|};

export const ReactMarker = (props: ReactMarkerProps) => {
  return props.children;
};

type OverlayProps = {|
  children?: React.ChildrenArray<
    null | boolean | React.Element<typeof ReactMarker>,
  >,
  // Debug is used to center markers right
  debug?: boolean,
|};

export const Overlay = (props: OverlayProps) => {
  const { api, map } = useMap();
  // because I have 2 ;-), doesnt matter here, will be set before 1st usage
  const pixelRatioRef = React.useRef(2);
  // $FlowFixMe no block level $FlowFixMe so splitted on 2 lines
  const anyChildren = (React.Children.toArray(props.children ?? []): any);

  const children: $ReadOnlyArray<
    React.Element<typeof ReactMarker>,
  > = anyChildren;

  const [overlay, setOverlay] = React.useState(null);

  const childrenLatLngRefs = React.useRef<
    Array<$NonMaybeType<{| lat: number, lng: number |}>>,
  >([]);

  const childrenDivRefs = React.useRef([]);

  const subPixelRound = v =>
    Math.round(v * pixelRatioRef.current) / pixelRatioRef.current;

  // We can't use useEffect here because it causes glitches
  // when in draw we update commited markers with previous markers coordinates
  // it is visible if make a lot of zoomin zoomout, as map draw is fully independent of react
  React.useLayoutEffect(() => {
    childrenLatLngRefs.current = children.map(ch => ({
      lat: ch.props.lat,
      lng: ch.props.lng,
    }));
  });

  // Create overlay https://developers.google.com/maps/documentation/javascript/examples/overlay-simple
  React.useEffect(() => {
    if (api) {
      pixelRatioRef.current = window.devicePixelRatio;

      const overlayView = new api.OverlayView();
      let elt = null;

      overlayView.onAdd = () => {
        elt = document.createElement('div');
        elt.style.position = 'absolute';
        elt.style.width = '0';
        elt.style.height = '0';
        elt.style.left = '0';
        elt.style.top = '0';

        var panes = overlayView.getPanes();
        // on all other panes there is issues with events like hover etc
        panes.floatPane.appendChild(elt);

        setOverlay({
          element: elt,
          view: overlayView,
        });
      };

      overlayView.onRemove = () => {
        if (elt != null) {
          const { parentNode } = elt;
          if (parentNode != null) {
            // same as panes.overlayMouseTarget.removeChild
            parentNode.removeChild(elt);
          }
          setOverlay(null);
        }
      };

      overlayView.draw = () => {
        var projection = overlayView.getProjection();

        const latLngs = childrenLatLngRefs.current;

        latLngs.forEach(({ lat, lng }, index) => {
          const { current: childElt } = childrenDivRefs.current[index];
          if (childElt != null) {
            const pos = projection.fromLatLngToDivPixel(
              new api.LatLng(lat, lng),
            );
            // Move react markers directly changing dom element position
            // Element is created by us, not by library user, so no issues
            childElt.style.left = subPixelRound(pos.x) + 'px';
            childElt.style.top = subPixelRound(pos.y) + 'px';
          }
        });
      };

      overlayView.setMap(map);

      return () => {
        overlayView.setMap(null);
      };
    }
  }, [api, map]);

  if (overlay != null && children != null && api != null) {
    const projection = overlay.view.getProjection();

    return ReactDOM.createPortal(
      children.map((ch, index) => {
        const pos = projection.fromLatLngToDivPixel(
          new api.LatLng(ch.props.lat, ch.props.lng),
        );

        // Its not a side effect, its just a cache for refs
        // instead of creating it initially like Array(MAX_POSSIBLE_MARKERS), we just extend it here
        if (childrenDivRefs.current[index] == null) {
          childrenDivRefs.current[index] = { current: null };
        }

        return (
          <div
            key={ch.key}
            ref={childrenDivRefs.current[index]}
            style={{
              position: 'absolute',
              left: subPixelRound(pos.x),
              top: subPixelRound(pos.y),
              display: 'grid',
              gridTemplateColumns: 0,
              gridTemplateRows: 0,
            }}
          >
            {ch}
            {(process.env.NODE_ENV !== 'production' ||
              process.env.DOCUMENTATION === 'true') &&
              props.debug === true && (
                <div
                  style={{
                    position: 'absolute',
                    borderRadius: '100%',
                    width: 4,
                    height: 4,
                    left: -2,
                    top: -2,
                    opacity: 0.8,
                    boxShadow:
                      '0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue',
                  }}
                />
              )}
          </div>
        );
      }),
      overlay.element,
    );
  }
  return null;
};