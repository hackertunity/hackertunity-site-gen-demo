import React from 'react';

import Header from "./header";
import Footer from "./footer";

// styles
const pageStyles = {
	color: "#232129",
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
 }

const PrimaryLayout = ({ children }) => {
	console.log('>> TEST RENDER PRIMARY_LAYOUT:');

	return (
		<main style={pageStyles}>
			<Header/>
				<section>
					<h1>PRIMARY_LAYOUT IS_WORKING</h1>
					{children}
				</section>
			<Footer/>
		</main>
	);
};

export default PrimaryLayout;