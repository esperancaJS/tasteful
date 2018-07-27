import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import { Link } from 'preact-router/match';
import style from './style.scss';

import Workshop1 from './Workshops/1';
import Workshop2 from './Workshops/2';
import Workshop3 from './Workshops/3';
import Workshop4 from './Workshops/4';
import Workshop5 from './Workshops/5';
import Workshop6 from './Workshops/6';
import Workshop7 from './Workshops/7';


import Service1 from './Services/1';
import Service2 from './Services/2';
import Service3 from './Services/3';

import People1 from './Peoples/1';
import People2 from './Peoples/2';
import People3 from './Peoples/3';

import Contact1 from './Contacts/1';
import Contact2 from './Contacts/2';
import Contact3 from './Contacts/3';


export default class Modal extends Component {

	constructor() {
		super();
		this.state = {
			showModal: false
		}
	}

	closeModal() {
		route('/');
	}

	handleRoute = e => {
		console.log(e.url, e.url !== '/');
		this.currentUrl = e.url;
		this.setState({ showModal: e.url !== '/' })
	};

	prevent = e => {
		e.stopPropagation();
	}

	render({}, {showModal}) {
		return (
			<div
				class={`tasteful-modal-container ${showModal && 'visible'}`}
				onClick={this.closeModal}
			>
				<div class={style.tastefulModalContainerInner}>
					<div onClick={this.prevent} class={style.tastefulModal}>

						<Router onChange={this.handleRoute}>
							{/*
								[ HACK ]
								for preact-router to react to `route('/');`
							*/}
							<div path="/" />

							<Workshop1 path="/workshop/front-end-architecture" />
							<Workshop2 path="/workshop/2" />
							<Workshop3 path="/workshop/3" />
							<Workshop4 path="/workshop/4" />
							<Workshop5 path="/workshop/5" />
							<Workshop6 path="/workshop/6" />
							<Workshop7 path="/workshop/7" />

							<Service1 path="/service/1" />
							<Service2 path="/service/2" />
							<Service3 path="/service/3" />

							<People1 path="/people/1" />
							<People2 path="/people/2" />
							<People3 path="/people/3" />

							<Contact1 path="/contact/1" />
							<Contact2 path="/contact/2" />
							<Contact3 path="/contact/3" />
						</Router>
					</div>
				</div>
			</div>
		);
	}
}
