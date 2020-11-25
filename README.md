# fortune-teller
A fortune teller app using Dialogflow and Firebase.

## Description

This repo is the week4 assignment of the "Hello, Computer" course at ITP.
The assignment was to create something with Dialogflow, including fulfillment and logic.

I basically followed the example from the class but tried to create a stand-alone app with it.

I deployed the app on [Glitch](https://cuinjune-fortune-teller-app.glitch.me/) but it currently doesn't work because of an authentication issue.  
It works perfectly fine using a local server though.

## Example dialog
The user can communicate with the computer using voice.

```
The user: "Hello."
Computer: "Hello, I'm your fortune teller."
The user: "Gimme my fortune!"
Computer: "Okay, what is your name?"
The user: "Zack."
Computer: "Hello Zack, What did you dream about last night?"
The user: "I dreamed about killing you."
Computer: "You're gonna have a horrible life!"
```

## Thoughts

For this project, my goal was to learn how to setup a stand-alone voice-assistant app using Dialogflow, Firebase, and Node.js.  
It was pretty painful to setup the project and I still need to fix the authentication problem when the app is deployed to Glitch. But I got the basic idea of how things work together.    
In the future, I would like to develop a more advanced project than this simple class example.

## Setup

1. Installation of node.js is required. Follow [this guide](https://github.com/itp-dwd/2020-spring/blob/master/guides/installing-nodejs.md) to install it.
2. Run the following commands in the Terminal
```
git clone https://github.com/cuinjune/fortune-teller.git
cd fortune-teller
npm install dependencies
npm run deploy
npm start
```
3. Open your web browser and navigate to http://localhost:3000

## Author
* [Zack Lee](https://www.cuinjune.com/about): an MPS Candidate at [NYU ITP](https://itp.nyu.edu).
