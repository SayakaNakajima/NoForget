# NoForget(Tentative)
このリポジトリはCode Chrysalisの生徒であるときに作成しました

This was created during my time as a student at Code Chrysalis

# How to use

お買い物リスト作成アプリです
レシピブックとしても使えます
いくつかのレシピを選んだ後、すぐに材料のお買い物リストが作れます

## Screen

![Main](./img/screen01.png)
基本画面です
レシピ名か説明文をクリックするとレシピ詳細へ飛びます
また、どのページでも、"NoForget!"ロゴをクリックするとこのページへ戻ります

![Detail](./img/screen02.png)
レシピ詳細ページです
作りたいと思ったら"Make It For Dinner?"をクリックします
クリック後は基本画面に戻ります

![Jump](./img/screen03.png)
"Make It For Dinner?"を一度でもクリックすると、
画面下部に"Create ShoppingList?"ボタンが出てきます
ボタンをクリックするまでは何度でもレシピを選べます

![List](./img/screen04.png)
![List02](./img/screen05.png)
"Create ShoppingList?"ボタンをクリックするとお買い物リストが作成されます
買ったものはどんどんクリックして消してください

# API endpoint

## GET /api/recipes
全レシピのデータを取得します

## GET /api/recipes?id=(NUM)
単独レシピの詳細情報のみ取得します

## GET /api/lists?id=(NUM1)_(NUM2)...
レシピ内の"ingridients"のリストを取得します
idの指定はそれぞれrecipesのidから、recipes同士で重複した場合も単独のアイテムのみ返します

# Tech

## Backend
JavaScript, Node.js, express, knex, axios, PostgreSQL

## Frontend
React, CSS



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
