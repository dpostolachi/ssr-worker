require("@babel/register")()
const { parentPort } = require("worker_threads")
const { default: renderToStream } = require("./render")

parentPort.on( "message", ( [ reqId, { url } ] ) => {
	renderToStream( { url } )
		.then( stream => {

			stream.on( "data", buff => {
				const ab = buff.buffer.slice(buff.byteOffset, buff.byteOffset + buff.byteLength)
				parentPort.postMessage( [ reqId, ab ], [ ab ] )
			} )

			stream.on( "end", () => {
				parentPort.postMessage( [ reqId, null ] )
			} )

		} )
} )