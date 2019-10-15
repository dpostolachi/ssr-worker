import React from "react"
import { renderToString } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import App from "../client/app"

const render = ( {
	url
} ) => {
	return `<!DOCTYPE html>` + renderToString( (
		<ServerLocation url={url}>
			<App />
		</ServerLocation>
	) )
}

export default render