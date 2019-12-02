import app from '../app';
import http from 'http';

const port = 3000;
let server = http.createServer(app);

server.listen(port);
