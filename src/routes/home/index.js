import { h } from 'preact';
import style from './style.scss';

import Cubes from './cubes';

const Home = () => (
	<span>
		<div class={style.home}>
			<div class={style.inner}>
				<h1
					class="h1"
				>Tasteful</h1>
				<h2
					class="p"
				>We are a group of developers, all ex-tech-founders, on a mission to develop world changing software.</h2>
				<a href={``}>Hire us!</a>
			</div>
		</div>

		<div class={style.content}>
			<Cubes />
			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-8">
						<h1
							class="h1 pb-3"
						>Why us?</h1>

						<ul class={style.list}>
							<li>
								<h1 class="h4">We are not an agency</h1>
								<p>We are a self chosen group of people with long experience working toghether</p>
							</li>
							<li>
								<h1 class="h4">We have very good taste</h1>
								<p></p>
							</li>
							<li>
								<h1 class="h4">We learn very fast</h1>
								<p></p>
							</li>
							<li>
								<h1 class="h4">We <b>only</b> pick work that motivates us</h1>
								<p></p>
							</li>
							<li>
								<h1 class="h4">We seriously understand software development</h1>
								<p></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</span>
);

export default Home;