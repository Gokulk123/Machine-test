import React from "react";
import "../css/dropdown.css";
function user({ property, component_name }) {
  return (
    <div className="componentsDetails">
      Component Name : {component_name}
      <br />
      Output :
      {property.prefix +
        property.firstName +
        property.secondName +
        property.suffix}
    </div>
  );
}

export default user;
