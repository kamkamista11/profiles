# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# About the project

## What assumptions did you make ?
### I took them from the task
Logo in a header
Navigation under header
Content part below navigation
Footer at the bottom
### Where I could I thought I would use atlaskit components

## Why did you decide to use specific techniques ?

### React
It was suppose to be SPA. At first I thought about Vue.js but I chose React based on official documentation (vue found only here https://github.com/spartez/vue-atlaskit)
### Create-react-app
Its the fastest way to setup React project.
### Router
For front-end navigation
### Sessionstorage
For keeping submited data alive, this also allows to have data accessable in all components in this case
### Base64 for images convertion
Because files cant be parsed
### Footer
Used flex to keep footer at the bottom in case content's height is not big enough to push it down 

## What could be the alternative solutions ?
### I could use for example Reactstrap components instead of atlaskit. 
It is much more customizable compared to atlaskit components
### https://github.com/spartez/vue-atlaskit 
Is an alternative to React but in Vue
### Redux
To keep data accessable everywhere, but not needed in applications of this size
