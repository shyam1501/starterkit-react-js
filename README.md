This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Starter Kit (JavaScript)

### Get Started

Install the dependencies, devDependencies and start the server.

```sh
$ cd starterkit-react-js
$ yarn
$ yarn dev
```

### Tech Stack

This starter-kit is currently extended with the following technologies. Instructions on how to use them in your own application are linked below.

| Technology | Resource |
| ------ | ------ |
| React | [Getting Started with React](https://reactjs.org/docs/getting-started.html) |
| Redux | [Getting Started with Redux](https://redux.js.org/introduction/getting-started) |
| React-Redux | [The official React binding for Redux. ](https://redux.js.org/introduction/getting-started) |
| Redux Thunk | [Middleware to enable interacting asynchronously with Redux Store ](https://github.com/reduxjs/redux-thunk) |
| Connected React Router | [A Redux binding for React Router ](https://github.com/supasate/connected-react-router) |
| Redux-Persist | [Caching done easy by persisting and rehydrating redux store ](https://github.com/rt2zz/redux-persist) |
| React Hot Loader | [Preserve application state. Also works well with HMR plugin of web pack ](https://www.npmjs.com/package/react-hot-loader) |
| React-loadable | [HOC to implement Lazy loading and Code splitting ](https://github.com/jamiebuilds/react-loadable) |
| React-i18Next | [Localization](https://react.i18next.com/) |
| React-Helmet| [Dynamic Document Head](https://github.com/nfl/react-helmet) |
| Webpack | [Static Module Builder](https://webpack.js.org/concepts/) |
| Sass| [Sass is a stylesheet language that allows you to use variables, nested rules, mixins, functions, and more](https://sass-lang.com/documentation) |
| Axios| [A Promise based HTTP client also provide features like Interceptors, Cancellation, Error handling, and more](https://sass-lang.com/documentation) |

### Folder Structure

There are few ways we can implement the folder structure.

#### Basic Structure (Default Structure of this starter kit)

```
app
├── analytics
│   └── index.js
├── components
│   ├── Button.js
│   └── index.js
├── constants
│   ├── actionTypes.js
│   └── apis.js
├── containers
│   ├── Home.js
│   └── Login.js
├── i18n.js
├── index.js
├── locale
│   ├── en
│   │   └── translate.json
│   └── hi
│       └── translate.json
├── redux
│   ├── actions
│   │   ├── auth.js
│   │   ├── home.js
│   │   └── index.js
│   ├── reducers
│   │   ├── auth
│   │   │   ├── auth.js
│   │   │   └── index.js
│   │   ├── home
│   │   │   ├── home.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── initialState.js
│   └── store
│       └── configureStore.js
├── root
│   ├── LoadableApp.js
│   └── Root.js
├── routes
│   ├── AppRouter.js
│   ├── PrivateRoute.js
│   └── PublicRoute.js
├── serviceWorker.js
├── services
│   └── sampleService.js
└── styles
    ├── app.scss
    ├── base
    │   ├── _base.scss
    │   └── _settings.scss
    ├── components
    │   └── _button.scss
    └── containers
        ├── _home.scss
        └── _login.scss
```

#### Nested Components/Containers
While the folder structure can remain same, we can modify the structure of components and containers in the following manner.

```
app
├── ...
├── components
│   ├── Button
│   │   ├── RoundedButton.js
│   │   ├── RectangleButton.js
│   │   └── index.js
│   └── NavBar
│   │   ├── NavList.js
│   │   ├── NavItem.js
│   │   └── index.js
├── containers
│   ├── Home
│   │   ├── UserList
│   │   │   ├── PremiumUserList.js
│   │   │   ├── FreeUserList.js
│   │   │   └── index.js
│   │   ├── UserItem
│   │   │   ├── UserCard.js
│   │   │   └── index.js
│   │   ├── HomeContainer.js
│   │   └── index.js
│   └── AuthScreen
│   │   ├── AuthContainer.js
│   │   └── index.js
└── ...
```

#### Nested Actions/Reducers
We can arrange feature specific actions/reducers in the following manner.

```
app
├── ...
├── redux
│   ├── actions
│   │   ├── UserActions
│   │   │   ├── PremiumUser
│   │   │   │   ├── PremiumContent.js
│   │   │   │   ├── SharableContent.js
│   │   │   │   └── index.js
│   │   │   ├── FreeUser
│   │   │   └── index.js
│   │   ├── AuthActions
│   │   └── index.js
│   ├── reducers
│   │   ├── UserReducers
│   │   │   ├── PremiumUser
│   │   │   │   ├── PremiumContent.js
│   │   │   │   ├── SharableContent.js
│   │   │   │   └── index.js
│   │   │   ├── FreeUser
│   │   │   └── index.js
│   │   ├── home
│   │   ├── index.js
│   │   └── initialState.js
└── ...
```

### Bonus:
I empathize developers who use VS Code for coding React JS. I left a vscode workspace settings file to do your linting job easy. You download required extensions and the linting should work out of the box. 