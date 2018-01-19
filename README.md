# beezy-frontend-test

This app uses webpack as a bundling tool to prepare the development of this project and take care of bundling all assets.
It also uses [antd](https://ant.design/) as UI library and I use [BEM](http://getbem.com/introduction/) as methodology for write my own styles.

[Try live demo](https://beezy-frontend-test.surge.sh/)

## ▶️ Installing / Getting started

In order to work locally you need clone this repo:

```
git clone https://github.com/marioterron/beezy-frontend-test.git
cd beezy-frontend-test
```

Once inside the project folder, install all dependencies:

```
yarn
```

Once the dependencies have been installed, run the development server:

```
yarn watch
```

**NOTE!** You can also use the following commands:

`yarn build`

Buils a bundle for production mode.

`yarn deploy`

Deploys the app on [surge.sh](https://surge.sh/)

`yarn test`

Runs all the test suites of the app.

`yarn test:watch`

Runs all the test suites of the app and it's keeps listening.

## 🏗 Folder Structure

The project have the next structure (I have been followed by the [Directory per Component](https://survivejs.com/react/advanced-techniques/structuring-react-projects/#directory-per-component) concept that I read on SurviveJS site):

```
beezy-front-test/
  config/
    common-paths.js
    webpack.common.js
    webpack.dev.js
    webpack.prod.js
  node_modules/
  public/
    images/
    index.html
    favicon.png
  src/
    actions/
      actionTypes.js
      addBook.js
      editBook.js
      removeBook.js
    components/
      BookstoreApp/
      BookstoreCard/
      BookstoreContent/
      BookstoreForm/
      BookstoreLogo/
      BookstoreMenu/
    containers/
      BookstoreAppContainer.js
      BookstoreCardContainer.js
      BookstoreFormContainer.js
    reducers/
    index.js
  .babelrc
  .editorconfig
  .eslintrc
  .gitignore
  webpack.config.js
  package.json
  yarn.lock
  README.md
```
