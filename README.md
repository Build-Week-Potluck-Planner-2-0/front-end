We have been using Live-Share, so many of our changes were made in a single branch - all team members contributed to shared branches!

# Potluck Planner

https://front-end-five-beta.vercel.app/

Test login:

username: test
password: test


## Table of contents

- [Overview](#overview)
  - [The App](#the-app)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Authors](#authors)
- [Fast Instructions for running this project](#fast-instructions-for-running-this-project)
- [General Instructions for React Apps](#general-instructions-for-react-apps)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [The process](#the-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)


## Overview

Coordinating plans among groups of people has become a pain, Potluck Planner fixes this.

### The App

- Users can create events, add items that need to be brought, and invite guests who also have an account.

- Users can find events they have been invited to, accept/decline them, and select which items they want to bring.

### Screenshot

![](./src/assets/anywherefitnesshomepagess.png)

### Links

- Assignment: https://www.notion.so/lambdaschool/Potluck-Planner-c18aaf15de0348db8a04c3bf523b79e9
- Flow Chart: https://www.figma.com/file/nPCRTRiBFYKudte72zrR3I/Potluck-Planner-2.0
- Live Site URL: https://front-end-five-beta.vercel.app/

- Login Endpoint: https://bw-potluck-planner-2.herokuapp.com/api/auth/login

## Authors

- Erika Bahena
- Morgan Jones
- Austin Marrazza
- Noella Hirwa 
- Rongjun Geng
- Jake Barnett
- James Robertson 

## Fast Instructions for running this project

- You need React and Node.js on your local environment.
- clone project
- in terminal `npm install`
- then `npm start`
- find all necesssary imports at the top of each file. Be sure you load...
  - npm i yup
  - npm i styled-components
  - npm i axios
  - npm i react-router-dom


## General Instructions for React Apps

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## The process

- Built flow chart with Figma to visualize components and data needed
- Assigned tasks to team members depending on strengths
- Held daily meetings to pair program and regroup
- Created basic functionality, then added style and launched
- Connected front end to back end

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styled components

### Continued development

- Invite people who don't have accounts
- Connect to default OS calender apps
- Allow users to share their schedule with friends and family
