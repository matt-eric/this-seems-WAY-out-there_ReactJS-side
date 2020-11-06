# This seems WAY out there. *(Front End)*

### *A visual effect web app generating responses based on mouse/touch placement and movement. Parameters are adjustable through a user-controllable effect bus.*

## [Live Demo](https://this-seems-way-out-there.web.app/)

### This project has an accompanying [back end repository](https://github.com/matt-eric/this-seems-WAY-out-there-node-side).

## Steps for starting the development environment:

### 1. Add ENV variables:

Create a `.env` file in the root directory and add the following variables:

`REACT_APP_NODE_ENV=development`

`REACT_APP_DEVELOPMENT_SERVER_URL=http://localhost:8000/graphql`

*NOTE: Auth implementation is currently in progress. Additional authentication-related ENV variables will be added here when the feature becomes fully-functional.*

### 2. Scripts

*Note: Run the [back end](https://github.com/matt-eric/this-seems-WAY-out-there-node-side) before starting the front end.*

### `npm start`

Runs the React app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

🔥 Hot module replacement is in use. The Redux store will retain its state when files are changed.

### Tech stack:

- [x] React.js
- [x] Redux.js
- [x] Material-UI
- [x] Pts.js
- [ ] Okta

This repository is configured for deployment with [Firebase](https://firebase.google.com/).

#### Contributing guidelines to be added soon.
