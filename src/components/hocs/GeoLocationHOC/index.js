import React from 'react'
import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
    return `Geolocated(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
}

const GeoLocationHOC = ({
    positionOptions = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
    },
    geolocationProvider = (typeof (navigator) !== 'undefined' && navigator.geolocation),
  } = {}) => (WrappedComponent) => {
  let result = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        coords: null,
        isGeolocationAvailable: Boolean(geolocationProvider),
        isGeolocationEnabled: true, // be optimistic
        positionError: null,
      };

      this.onPositionError = this.onPositionError.bind(this);
      this.onPositionSuccess = this.onPositionSuccess.bind(this);
      this.getLocation = this.getLocation.bind(this);
    }

      onPositionError(positionError) {
            if (this.isCurrentlyMounted) {
                this.setState({
                    coords: null,
                    isGeolocationEnabled: false,
                    positionError,
                });
            }
        }

        onPositionSuccess(position) {
            if (this.isCurrentlyMounted) {
                this.setState({
                    coords: {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    },
                    isGeolocationEnabled: true,
                    positionError: null,
                });
            }
        }

        getLocation() {
            if (!geolocationProvider || !geolocationProvider.getCurrentPosition) {
                throw new Error('The geolocation provider is invalid');
            }

            geolocationProvider.getCurrentPosition(this.onPositionSuccess, this.onPositionError, positionOptions);
        }

        componentDidMount() {
           this.isCurrentlyMounted = true;
           this.getLocation();
       }

        render() {
          return <WrappedComponent {...this.state} {...this.props} />;
        }
  };
    result.displayName = getDisplayName(WrappedComponent);
    return result;
}

export const GeolocatedPropTypes = {
    coords: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        altitude: PropTypes.number,
        accuracy: PropTypes.number,
        altitudeAccuracy: PropTypes.number,
        heading: PropTypes.number,
        speed: PropTypes.number,
    }),
    isGeolocationAvailable: PropTypes.bool,
    isGeolocationEnabled: PropTypes.bool,
    positionError: PropTypes.shape({
        code: PropTypes.oneOf([1, 2, 3]),
        message: PropTypes.string,
    }),
};

export default GeoLocationHOC
