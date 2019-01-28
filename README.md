## Table of Contents

- Process in building this app
- To Dos
- Available Scripts


## Process in building this app

This app was built using React + Typescript, mainly because it most closely reflects the technology stack Spotahome uses.

The app also uses Redux for state management.

### Does it really need state management?

No, you could argue that the architecture and scope of the project does not demand the need for a library like redux; however, when has a project ever *truly* remained in scope before? Relying on a single store to handle all state changes throughout the app allows for much greater flexibility and adapatation, especially as the complexity of such a project would grow if one of the hiring managers begins asking "What if" questions.

### Why are you using Redux-actions?

Redux-actions is a package we've begun implementing into our project at work. It helps addresses how verbose defining actions can be. It isn't a big deal here as we only have a single reducer, but again, as the scope of the project scales, the benefit of redux-actions becomes more obvious


### Why Typescript?

Because once you go Typescript, you don't go back.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.




