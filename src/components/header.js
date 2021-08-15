import React from 'react';

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
		</header>
	);
};

export default Header;