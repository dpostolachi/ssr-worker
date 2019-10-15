import { Worker } from "worker_threads"
import { randomBytes } from "crypto"
import { Readable } from 'stream'
import { Duplex } from "stream"

const ReqMap = new Map()

const worker = new Worker("./src/worker/spawn.js")

worker.on( "message", ( [ reqId, part ] ) => ReqMap.get( reqId )( part ) )

const processReq = ( ctx ) => {

	const { req: { url } } = ctx

	return new Promise( resolve => {

		randomBytes( 8, ( _, buff ) => {

			const reqId = buff.toString( "hex" )

			ctx.set('Content-Type', 'text/html');

			const readable = new Readable()
			readable._read = () => {}

			ctx.body = readable
			resolve()

			readable.push( "<!DOCTYPE html>" )

			ReqMap.set( reqId, ( part ) => {
			
				if ( part === null ) {
					readable.push( null )
				} else {
					const buff = new Buffer.from( part )
					readable.push( buff )
				}

			} )

			worker.postMessage( [ reqId, { url } ] )

		} )

	} )

}

export default processReq