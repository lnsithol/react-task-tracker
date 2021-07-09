# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run application
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Backend using json-server

Install json-server local, run:

### `npm i json-server`

Add script to run the json-server:

### `"server" : "json-server --watch db.json --port 5000" `


## Routing in React

Fistly, install a package named React Router DOM:
### `npm i react-router-dom`

## Deployment

In the project directory, you can run:

### `npm run build` or 

### `yarn build`

But first install the serve package globally by:

### `npm i -g serve`

## Serve the build

To serve the build folder, you can run:

### `serve -s build -p 4300`

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

