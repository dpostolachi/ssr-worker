import { Worker } from "worker_threads"
import { randomBytes } from "crypto"

const ReqMap = new Map()

const worker = new Worker("./src/worker/spawn.js")

worker.on( "message", ( [ reqId, html ] ) => ReqMap.get( reqId )( html ) )

const processReq = ( ctx ) => {

	const { req: { url } } = ctx

	return new Promise( resolve => {

		randomBytes( 8, ( _, buff ) => {

			const reqId = buff.toString( "hex" )

			ReqMap.set( reqId, ( html ) => {

				ctx.body = html
				resolve()

			} )

			worker.postMessage( [ reqId, { url } ] )

		} )

	} )

}

export default processReq