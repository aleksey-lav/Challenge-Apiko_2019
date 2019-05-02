import React, { Component } from 'react';
import './PreloadHOC.css';
import MyPortal from '../portal/MyPortal'

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const PreloadHOC = (loadingProp) => (WrappedComponent) => {
  return class PreloadHOC extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ?
      <div className="loader" />
      :
      <MyPortal>This is Portal
        <WrappedComponent {...this.props} />
      </MyPortal> 
    }
  }
}
export default PreloadHOC;
