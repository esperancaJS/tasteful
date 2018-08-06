import { h, Component } from 'preact';
import Helmet from 'preact-helmet';

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
			<div id='app'>

				<Helmet
					title='the 20% you need'
					titleTemplate='Tasteful - %s'
					meta={[
						{
							name: 'description',
							content: `
								We teach humans to enjoy making high quality and
								infinitely scalable software,
								as it's meant to be.
							`
						}
					]}
				/>

				{/*
					[ HACK ]
					Router is in the Modal
				*/}
				<Modal />

				<Home/>

			</div>
		);
	}
}
