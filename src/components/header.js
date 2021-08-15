import React from 'react';

import Navigation from './navigation';

// styles
const headerStyles = {
	border: "1px solid red",
	height: "200px",
 }

const Header = ({ someNode }) => {
	console.log('>> TEST RENDER HEADER:', someNode);

	return (
		<header style={headerStyles}>
			<h1>HEADER IS_WORKING</h1>
			<Navigation/>
		</header>
	);
};

export default Header;