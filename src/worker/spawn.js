require("@babel/register")()
const { parentPort } = require("worker_threads")
const { default: render } = require("./render")

parentPort.on( "message", ( [ reqId, { url } ] ) => {
	parentPort.postMessage( [ reqId, render( { url } ) ] )
} )