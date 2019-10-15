import React from "react"
import { renderToNodeStream } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import App from "../client/app"

const render = ( {
	url
} ) => {

	return new Promise( resolve => {

		const stream = renderToNodeStream( (
			<ServerLocation url={url}>
				<App />
			</ServerLocation>
		) )
	
		resolve( stream )
		
	} )
}

export default render