import React from 'react';
import { Link } from 'gatsby';

// styles
const navLinkStyles = {
	margin: '15px',
	padding: '20px',
	border: '1px solid black'
}

const Navigation = ({ someNode }) => {
	console.log('>> TEST RENDER NAVIGATION:', someNode);

	return (
		<nav role="main">
			<h1>NAVIGATION IS_WORKING</h1>

			<Link
				to={'/'}
				activeClassName="w--current"
				style={navLinkStyles}
			>
				HOME
			</Link>
			<Link
				to={'/students'}
				activeClassName="w--current"
				style={navLinkStyles}
			>
				STUDENTS
			</Link>
			<Link
				to={'/educators'}
				activeClassName="w--current"
				style={navLinkStyles}
			>
				EDUCATORS
			</Link>
			<Link
				to={'/about-us'}
				activeClassName="w--current"
				style={navLinkStyles}
			>
				ABOUT US
			</Link>
			<Link
				to={'/donate'}
				activeClassName="w--current"
				style={navLinkStyles}
			>
				DONATE
			</Link>
		</nav>
	);
};

export default Navigation;
