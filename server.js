const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(express.static('public'))

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
    const location = url.parse(req.url, true);

    console.log(location);

    ws.on('message', function incoming(message) {
        var message = JSON.parse(message);
        console.log('received: %s', message.data);

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    });
});

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});
