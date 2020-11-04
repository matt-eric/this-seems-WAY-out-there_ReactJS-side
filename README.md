# *This seems WAY out there. (Client)*

### *A visual effect web app generating responses based on mouse/touch placement and movement. Parameters are adjustable through a user-controllable effect bus.*

## [Live Demo](https://this-seems-way-out-there.web.app/)

### This project has an accompanying [server-side repository](https://github.com/matt-eric/this-seems-WAY-out-there-node-side).

#### This React.js application currently sources the default values for the effect module parameters from seed data in the GraphQL Apollo server (both in development and production). More client/server communication methods will be implemented as development continues.

## Steps for starting the development environment:

### 1. Add ENV variables:

Create a `.env` file in the root directory and add the following variables:

`REACT_APP_VERSION=development`

`REACT_APP_DEVELOPMENT_SERVER_URL=http://localhost:8000/graphql`

*NOTE: Auth implementation is currently in progress. Additional authentication-related ENV variables will be added here once the feature is fully-functional.*

### 2. Scripts

*Note: Run the [server-side](https://github.com/matt-eric/this-seems-WAY-out-there-node-side) before starting the client. The seed data used to generate the effects in the React.app is sourced from the Apollo Server.*

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Hot module replacement is in use. The Redux store will retain its state when files are changed.

### Technologies used:

- [x] React.js
- [x] Redux.js
- [x] Pts.js
- [x] Material-UI
- [x] Firebase
- [ ] Okta

#### Contributing guidelines to be added soon.
