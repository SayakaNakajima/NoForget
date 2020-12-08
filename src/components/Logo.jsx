import React from "react";

export default function Logo(props) {
  return (
    <div className="logo">
      <span
        onClick={() => {
          props.changeMode("AllRecipes");
        }}
      >ロゴ部分だよ</span>
    </div>
  );
}
