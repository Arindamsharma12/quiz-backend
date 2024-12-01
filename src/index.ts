// import { IoManager } from './managers/IoManager';
// import { UserManager } from './managers/UserManager';

// const io = IoManager.getIo();

// io.listen(3000);
// const userManager = new UserManager();
// io.on('connection',(socket)=>{
//   userManager.addUser(socket)
// })

import http from 'http';  
import { IoManager } from './managers/IoManager'; 
import { UserManager } from './managers/UserManager';  
import dotenv from 'dotenv'; 
dotenv.config();

const io = IoManager.getIo();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from server!');
});

io.attach(server);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const userManager = new UserManager();

io.on('connection', (socket) => {
  userManager.addUser(socket);
});
