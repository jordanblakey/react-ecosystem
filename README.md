# React Ecosystem

Learning about the React Ecosystem by bringing together:

- Storybook
- Babel
- Webpack
- Enzyme
- Jest
- ESLint
- Redux
- React Router

## Coming Soon

- Yarn
- Husky
- Prettier

## Project Commands & What's in the Box?

``` json
  "scripts": {
    "build": "flow-remove-types src/ -d lib/",
    "prepublish": "npm run build",
    "flow": "flow",
    "start": "webpack --config webpack.config.js",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
    "devDependencies": {
    "@storybook/addon-actions": "^3.2.12",
    "@storybook/addon-links": "^3.2.12",
    "@storybook/react": "^3.2.12",
    "babel-cli": "^6.26.0",
    "babel-jest": "^21.2.0",
    "babel-preset-react": "^6.24.1",
    "enzyme": "^3.1.0",
    "enzyme-adapter-react-16": "^1.0.1",
    "flow-bin": "^0.56.0",
    "flow-remove-types": "^1.2.1",
    "jest": "^21.2.1",
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "regenerator-runtime": "^0.11.0",
    "webpack": "^3.6.0"
  },
  "dependencies": {
    "lodash": "^4.17.4",
    "react-redux": "^5.0.6",
    "redux": "^3.7.2",
    "redux-devtools": "^3.4.0"
  },
```

## Setup Commands in No Particular Order

`npm run storybook`<br>
`npm i --save react react-dom`<br>
`npm i --save-dev @storybook/react`<br>
`getstorybook`<br>
`npm i -g @storybook/cli`<br>
`webpack --config webpack.config.js`<br>
`npm install --save lodash`<br>
`npm install -g babel-cli`<br>
`npm install --save-dev babel-cli babel-preset-react`<br>
`npm install webpack --save-dev`<br>
`npm install react react-dom --save-dev`<br>
`pwn`<br>
`yarn init`<br>
`create-react-app .`<br>
`npm install -g create-react-app`<br>
`npm i --save-dev enzyme enzyme-adapter-react-16`<br>
`npm install --save redux react-redux redux-devtools`<br>
`npm install --save-dev react-router react-router-dom`<br>
`npm install --save-dev babel-jest regenerator-runtime`<br>

### Redux Explained:

- The whole state of your app is stored in an object tree inside a single store.
- The only way to change the state tree is to emit an action, an object describing what happened.
- To specify how the actions transform the state tree, you write pure reducers.

That's it!