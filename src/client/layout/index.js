import React from "react"

const Layout = ( { children } ) => {

	return (
		<html>
			<head>
				<title>SSR</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossOrigin="anonymous"/>
			</head>
			<body>
				<header>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/another">Another Page</a>
							</li>
						</ul>
					</nav>
				</header>
				<section className="container">
					{ children }
				</section>
			</body>
		</html>
	)

}

export default Layout