import React from "react";
import "./style.css";

//// This DeleteBtn is currently not being used. Set as a plase holder.. KW ////

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
