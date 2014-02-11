
var WebSocket = require('websocket').server,
	Http      = require('http'),
	Config    = require('config')
;




console.log("========= Start ===========");
console.log("NODE_ENV="+process.env.NODE_ENV);
console.log("NODE_PATH="+process.env.NODE_PATH);
console.log("port="+Config.websocket.port);


console.log("logging="+Config.logging);

console.log("env="+Config.const.env);
console.log("ver="+Config.const.ver);
console.log("=================================");








