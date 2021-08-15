import React from 'react';

const Header = ({ someNode }) => {
	console.log('>> TEST RENDER HEADER:', someNode);

	return (
		<>
			<h1>HEADER IS_WORKING</h1>
		</>
	);
};

export default Header;