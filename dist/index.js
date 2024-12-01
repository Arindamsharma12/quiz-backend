"use strict";
// import { IoManager } from './managers/IoManager';
// import { UserManager } from './managers/UserManager';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const io = IoManager.getIo();
// io.listen(3000);
// const userManager = new UserManager();
// io.on('connection',(socket)=>{
//   userManager.addUser(socket)
// })
const http_1 = __importDefault(require("http"));
const IoManager_1 = require("./managers/IoManager");
const UserManager_1 = require("./managers/UserManager");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const io = IoManager_1.IoManager.getIo();
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from server!');
});
io.attach(server);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const userManager = new UserManager_1.UserManager();
io.on('connection', (socket) => {
    userManager.addUser(socket);
});
