import React from "react";

export default function Logo(props) {
  return (
    <div className="logo">
      <div
        onClick={() => {
          props.changeMode("AllRecipes");
        }}
        className="logo-title"
      >
        NoForget!
      </div>
    </div>
  );
}
