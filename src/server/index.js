import koa from "koa"
import proccessReq from "./processReq"

const app = new koa()
const { PORT = 3000 } = process.env

export default () => {

	app.use( async ctx => {

		await proccessReq( ctx )

	} )

	app.listen( 3000, () => {
		console.log( `listening on port: ${ PORT }` )
	} )

}