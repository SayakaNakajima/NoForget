import React from "react";

export default function SingleRecipe(props) {
  const ingridients = props.data.ingridients;
  const procedures = [];
  for (let i = 0; i < (props.data.procedures).length; i++) {
    procedures.push((props.data.procedures).find(item => item.p_order_num === i + 1));    
  }

  return (
    <div className="SingleRecipe">
      <h1>{props.data.r_title}</h1>
      <div>{props.data.r_introduction}</div>
      <div>How to time : {props.data.r_time} min</div>
      <h2>Ingridients</h2>
      <dl className="ingridients">
          {ingridients.map((item, i) => {
            return (
              <>
                <dt key={i}>{item.i_name}</dt>
                <dd>{item.amount}</dd>
              </>
          )})}
      </dl>
      <h2>Procedures</h2>
      <ul className="procedures">
          {procedures.map((item, i) => {
            return (
              <>
                <li key={i}>{item.p_text}</li>
              </>
          )})}
      </ul>
      <div className="button-area">
          <button
            onClick={() => {
              props.getStack(props.data.r_id);
              props.changeMode(true);
              props.getMode("AllRecipes");
            }}
          >Make It For Dinner?</button>
      </div>

    </div>
  );
}
