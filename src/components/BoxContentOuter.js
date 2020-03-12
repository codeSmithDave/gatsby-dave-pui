import React from "react";
import PropTypes from "prop-types";

const BoxContentOuter = ({ children }) => {
  return (
    <ul id="box-cnt-container" className="box-content-container d-sm-flex flex-sm-wrap justify-content-sm-center">
      {children}
    </ul>
  )
}

BoxContentOuter.propTypes = {
  children: PropTypes.node.isRequired,
}


export default BoxContentOuter;
