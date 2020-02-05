const app = require('express')();
const cli = require('socket.io-client')('http://localhost:5000');

app.listen(7005, () => {
  console.log('Client listen on port 7005');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

cli.on('connect', () => {
  console.log('Client has send a request.');
  cli.emit('client request', { data_of_client: 'Can I have a certification?' });
});

cli.on('server response', (data) => {
  console.log('I got data from server', data);
});

// TODO: Open a socket with an event to send data with security in a single channel. 