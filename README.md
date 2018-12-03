# nodejs-ws-chat
Simple chat on WebSockets, using NodeJS with Express.

This project was created by [Maxim Mazurok](https://maxim.mazurok.com) during a teaching session to showcase use of WebSockets to students.

## Demo
Demo is deployed to heroku and can be acceced by this URl: https://nodejs-ws-chat.herokuapp.com/

(It may take a couple of minutes to start sleeping server) 

You can open this URL on multiple devices, or in different browser tabs (simulating multiple chat users).
Type your message and hit `enter` or press `send` button. Message will be recieved by all other currently opened instances of the app.

## Getting started

1. Clone repo:
```bash
git clone https://github.com/Maxim-Mazurok/nodejs-ws-chat
```
2. Install dependecies:
```bash
npm install
```
3. Install and run ngrok:
Note: `ngrok` is not required, I'm using it to make WebSockets work on local environment and to share url to other devices
```bash
npm install --global ngrok
```
4. Run the server:
```bash
npm start
```
5. Open chat:
After starting server, run `ngrok http 8080` and open provided `https://xxxxxx.ngrok.io` page on multiple devices, or in different browser tabs (simulating multiple chat users).
Type your message and hit `enter` or press `send` button. Message will be recieved by all other currently opened instances of the app.
