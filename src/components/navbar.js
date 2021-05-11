import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div className="navbar-wrapper">
			<div className="aux-navbar">
				<div className="d-flex justify-content-between align-items-center">
					<div className="logo-wrapper">
						<Link to="/">
							<img src="/assets/images/logo.png"></img>
						</Link>
					</div>
					<div className="links-wrapper">
						<div className="d-flex justify-content-left align-items-center">
							<Link to={'/about'}>
								<div className="link">about</div>
							</Link>
							<a href="https://github.com/APNovichkov/aux-ai-api">
								<div className="link">github</div>
							</a>
							<a href={'https://www.buymeacoffee.com/andreynovichkov'}>
								<div className="link">support</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
