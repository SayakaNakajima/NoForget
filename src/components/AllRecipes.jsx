import React from "react";

export default function AllRecipes(props) {
  const recipeList = [];
  for (const rec of props.list) {
    recipeList.push(
      <li className="article">
        <div
            onClick={() => {
               props.getId(rec.r_id)
            }}
            className="recipe-name"
        >
            {rec.r_title}
        </div>
        <div
            onClick={() => {
            props.getId(rec.r_id)
            }}
            className="recipe-description"
        >
            {rec.r_introduction}
        </div>
      </li>
    );
  };

  return (
    <div className="recipes">
      <ul>{recipeList}</ul>
    </div>
  );
}
