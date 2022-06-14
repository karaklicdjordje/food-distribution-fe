import GoogleMapReact from "google-map-react";
import React, { Component } from 'react';

class MapWrapper extends React.Component {
  static defaultProps = {
    center: {lat: 45.2396, lng: 19.8227},
    zoom: 14
  };

  render() {
    return (
      <div>
        <GoogleMapReact
          style={{width: "100%", height: "20%"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          />
      </div>
    )
  }
}

export default MapWrapper;