import React from "react";

export default function AllRecipes(props) {
  const recipeList = [];
  for (const rec of props.list) {
    recipeList.push(
      <li className="article">
        <div
            onClick={() => {
               props.getId(rec.r_id)
            }
        }>
            {rec.r_title}
        </div>
        <div
            onClick={() => {
            props.getId(rec.r_id)
            }
        }>
            {rec.r_introduction}
        </div>
      </li>
    );
  };

  return (
    <div className="recipes">
      レシピが並ぶよ
      <ul>{recipeList}</ul>
    </div>
  );
}
