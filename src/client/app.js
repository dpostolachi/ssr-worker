import React from "react"
import { Router } from "@reach/router"
import Home from "./pages/home"
import Another from "./pages/another"
import Layout from "./layout"

const App = () => {
	return (
		<Layout>
			<Router>
				<Another path="/another" />
				<Home path="/" />
			</Router>
		</Layout>
	)
}

export default App