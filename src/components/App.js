import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import AllRecipes from './AllRecipes';
import SingleRecipe from './SingleRecipe';
import ShoppingList from './ShoppingList';
import '../styles/App.css';
// import { BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import axios from 'axios';

export default function App() {
  // レシピリスト
  const [recepiList, setRecipes] = useState([]);
  // 画面切り替え
  const [viewMode, setMode] = useState("AllRecipes");
  // 選択したレシピ番号
  const [viewId, setId] = useState(0);
  // 選択したレシピ番号から詳細データ生成
  const [recipeDetail, setDetail] = useState({});
  // ShoppingListに持っていくクエリスタック
  const [stackRecipe, setStack] = useState([]);
  // AskChangeList用のstatus
  const [stackStatus, setStatus] = useState(false);
  // ShoppingList
  const [listToBuy, setToBuy] = useState([]);

  // ShoppingList表示用のボタンON/OFF
  function AskChangeList() {
    if(stackStatus) {
      return (
        <div className="make-list">
          <button
            onClick={() => {
              setMode("ShoppingList");
              setStatus(false);
            }}
          >Create ShoppingList?</button>
        </div>
      )
    };
    return null;
  };

  // リストをスタックする
  function getStackLists(num) {
    const tempList = stackRecipe;
    tempList.push(num);
    setStack(tempList);
  };

  // ShoppingList用のクエリ作成・送信
  useEffect(async () => {
    if(viewMode === "ShoppingList") {
      const tempList = new Set(stackRecipe);
      setStack(Array.from(tempList));

      const paramStr = stackRecipe.join("_");

      let ShoppingList = await axios({
        method: 'get',
        url: '/api/lists',
        params: {id : paramStr },
        responseType: 'stream'
      });
      setToBuy(ShoppingList.data);
      setStack([]);
    }
  }, [viewMode]);

  // レシピクリックでシングルレシピに切り替える
  useEffect(() => {
    if (viewId !== 0) {
      recepiList.forEach(item => {
        if (item.r_id === viewId) setDetail(item);
      })
      setMode("SingleRecipe");
    }
  }, [viewId]);

  // レシピリストを入手
  useEffect(async () => {
    let recipes = await axios({
      method: 'get',
      url: '/api/recipes',
      responseType: 'stream'
    });
    recipes = recipes.data.map(item => item.recipes);
    
    setRecipes(recipes);
  }, []);

  return (
    <div className="App">
      <Logo changeMode={setMode} />
      <div className="main">
        {viewMode === "AllRecipes" ? (
          <AllRecipes list={recepiList} getId={setId} />
        ) : viewMode === "SingleRecipe" ? (
            <SingleRecipe data={recipeDetail} getStack={getStackLists} getMode={setMode} changeMode={setStatus} />
        ) : (
          <ShoppingList list={listToBuy} />
        )}
      </div>
      <AskChangeList />
    </div>
  );
};
