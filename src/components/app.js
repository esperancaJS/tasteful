import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import Match from 'preact-router/match';

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
		route('/', true);
	}

	handleRoute = e => {
		console.log(e.url);
		this.currentUrl = e.url;
	};

	render({ showModal }) {
		return (
			<div id="app">
				
				<div
					class={`
						tasteful-modal-container
						${showModal && 'visible'}
					`}
					onClick={this.closeModal}
				>
					<div class="tasteful-modal-container-inner">
						<div class="tasteful-modal">
							Modal Here

							<Router onChange={this.handleRoute}>
								<div path="/workshop/:workshop">
									workshop
								</div>
								<div path="/services/:services">
									services
								</div>
							</Router>
						</div>
					</div>
				</div>

				<Home/>

			</div>
		);
	}
}
