import React from "react";
import '../styles/App.css';

export default function ShoppingList(props) {
  // リスト作成
  const buyList = {
    ingridient: [],
    seasoning: [],
    other: []
  };
  (props.list).forEach(element => {
    if (buyList[element.i_category].indexOf(element.i_name) < 0) {
      buyList[element.i_category].push(element.i_name)
    };
  });
  


  // 各コンポーネント
  function ViewIng() {
    // console.log(buyList.ingridient);
    if ((buyList.ingridient).length) {
      return (
        <>
        <h2>Ingridients</h2>
        <ul>
          {(buyList.ingridient).map((item,i) => {
            return (
              <li
                key={i}
                className="yet"
                onClick={(e) => {
                  if (e.target.className === "yet") {
                    e.target.className = "bought";
                  } else {
                    e.target.className = "yet";
                  }
                }}
              >
                {item}
              </li>
          )})}
        </ul>
        </>
      )
    };
    return null;
  };
  function ViewSea() {
    if ((buyList.seasoning).length) {
      return (
        <>
        <h2>Seasoning</h2>
        <ul>
          {(buyList.seasoning).map((item,i) => {
            return (
              <li
                key={i}
                className="yet"
                onClick={(e) => {
                  if (e.target.className === "yet") {
                    e.target.className = "bought";
                  } else {
                    e.target.className = "yet";
                  }
                }}
              >
                {item}
              </li>
          )})}
        </ul>
        </>
      )
    };
    return null;
  };
  function ViewOth() {
    if ((buyList.other).length) {
      return (
        <>
      <h2>Others</h2>
        <ul>
          {(buyList.other).map((item,i) => {
            return (
              <li
                key={i}
                className="yet"
                onClick={(e) => {
                  if (e.target.className === "yet") {
                    e.target.className = "bought";
                  } else {
                    e.target.className = "yet";
                  }
                }}
              >
                {item}
            </li>
        )})}
      </ul>
        </>
      )
    };
    return null;
  };


  return (
    <div className="ShoppingList">
      <ViewIng />
      <ViewSea />
      <ViewOth />
    </div>
  );
}
