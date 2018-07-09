import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import Match from 'preact-router/match';

import Modal from './Modal';
import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			showModal : false
		}
	}

	closeModal() {
		route('/');
	}

	handleRoute = e => {
		console.log(e.url, e.url !== '/');
		this.currentUrl = e.url;
		this.setState({showModal: e.url !== '/'})
	};

	render({ }, { showModal}) {
		return (
			<div id="app">

				<Router onChange={this.handleRoute} />
				
				<div
					class={`tasteful-modal-container ${showModal && 'visible'}`}
					onClick={this.closeModal}
				>
					<Modal />
				</div>

				<Home/>

			</div>
		);
	}
}
