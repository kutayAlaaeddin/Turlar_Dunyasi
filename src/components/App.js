import React, { Component } from 'react';
import Head from './Head';
import Content from './Content';
class App extends Component {
	render() {
		return (
			<div className="container ">
				<Head />
				<Content />

			</div>
		);
	}
}

export default App;
