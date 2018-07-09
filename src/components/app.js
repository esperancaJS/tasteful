import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

import Modal from './Modal';
import Home from '../routes/home';


if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div id="app">

				<Modal />

				<Home/>

			</div>
		);
	}
}
