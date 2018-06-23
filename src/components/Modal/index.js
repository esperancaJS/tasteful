import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import { Link } from 'preact-router/match';
import style from './style.scss';

export default class Modal extends Component {
	render() {
		return (
			<div class={style.tastefulModalContainerInner}>
				<div class={style.tastefulModal}>

					<Router>
						<div path="/workshop/:workshop">
							<h1>Simple highly scaleable FE starters</h1>

							<br />

							<blockquote class="blockquote">
								<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							</blockquote>

							<br />

							<dl class="row">
								<dt class="col-sm-3">Description lists</dt>
								<dd class="col-sm-9">A description list is perfect for defining terms.</dd>
							</dl>

							<br />

							<dl class="row">
								<dt class="col-sm-3">Euismod</dt>
								<dd class="col-sm-9">
									<p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
									<p>Donec id elit non mi porta gravida at eget metus.</p>
								</dd>

							</dl>

							<br />

							<dl class="row">

								<dt class="col-sm-3">For</dt>
								<dd class="col-sm-9">
									<div class="d-flex">
										<div class="pill">junior developers</div>
										<div class="pill">executives</div>
									</div>
								</dd>

							</dl>

							<br />

							<dl class="row">

								<dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
								<dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

							</dl>

							<br />

							<dl class="row">

								<dt class="col-sm-3">Nesting</dt>
								<dd class="col-sm-9">
									<dl class="row">
										<dt class="col-sm-4">Nested definition list</dt>
										<dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
									</dl>
								</dd>
							</dl>

						</div>
						<div path="/services/:services">
							services
						</div>
						<div path="/book">
							book
						</div>
					</Router>
				</div>
			</div>
		);
	}
}
