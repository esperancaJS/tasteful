import { h } from 'preact';
import style from './style.scss';
import { Parallax, Background } from 'react-parallax';
import Slider from "react-slick";

import Cube from './cube';
import Cubes from './cubes';
import Logo from './logo';

const Home = () => (
	<span>
		<Parallax
			bgImage={require('../../assets/backgrounds/1_compressed.jpg')}
		>
			<div class={style.home}>
				<div class={style.inner}>
					<Logo />
					<h1
						class="h1"
					>Tasteful</h1>
					<h2
						class={`p ${style.p}`}
					>
						We help humans enjoy making high quality and infinitelly
						scaleable software, as it's meant to be.
					</h2>
					<a class={style.link} href={``}>Book us!</a>
				</div>
			</div>
		</Parallax>

		<div class={style.content}>
			<Cubes />
			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-8">
						<h1
							class="h1 pb-3"
						>Our approach</h1>

						<ul class={style.list}>
							<li>
								<h1 class="h4">General Accessibility</h1>
								<p class={`p ${style.p}`} >
									Software is meant to simplify things.
									<br />
									Yet, the industry insists on labeling tech expertises as advanced.
									<br />
									<br />
									We condense the key takeaways into easily consumeable information,
									without need for prior knowledge.

								</p>
							</li>
							<li>
								<h1 class="h4">We have very good taste</h1>
								<p class={`p ${style.p}`} >
									As the name implies, we are prowd of our good taste developing software.
									<br />
									We architecting and working on simple, scaleable and future aware code.
									<br />
									<small> <a href="https://hackernoon.com/the-cost-of-bad-code-and-preventing-it-aeabd3074fba">(we wrote about it)</a></small>
								</p>
							</li>
							<li>
								<h1 class="h4">We learn to teach</h1>
								<p class={`p ${style.p}`} >
									Software development is an ever evolving landscape, however many best practices
								 	in architecture, work ethic, project development, etc, strenghten
									with every new technology and with ever obstacle. <br />
									As a team we help each other learn faster as well as deliver faster
									by being active learners and sharers.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<span>
			<Parallax
				bgImage={require('../../assets/backgrounds/1_compressed.jpg')}
			>
				<br />
				<br />
				<br />
				<br />
				<br />
			</Parallax>
		</span>

		<div class={style.content}>
			<Cube />
			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-8">
						<h1
							class="h1 pb-3"
						>Our workshops</h1>

						<Slider {...{
							infinite: true,
							speed: 500,
							slidesToShow: 3,
							slidesToScroll: 3
						}}>
							<a href={``} class={style.slickElement}>
								<h3>Project Management</h3>
								<p>Understanding developer biases, tracking progress, iterating, ... </p>
								<div class={style.pills}>
									<div class={style.pill}>for executives</div>
								</div>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>Understanding developers</h3>
								<p>content</p>
								<div class={style.pills}>
									<div class={`${style.pill} ${style.color1}`}>for executives</div>
									<div class={style.pill}>for developers</div>
								</div>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>Validating tech ideas</h3>
								<p>content</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>Scaleability</h3>
								<p>How code, teams, products and tech debt work at scale</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>5</h3>
								<p>content</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>6</h3>
								<p>content</p>
							</a>
						</Slider>
					</div>
				</div>
			</div>
		</div>

		<span>
			<Parallax
				bgImage={require('../../assets/backgrounds/1_compressed.jpg')}
			>
				<br />
				<br />
				<br />
				<br />
				<br />
			</Parallax>
		</span>

		<div class={style.content}>
			<Cube right />
			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-8">
						<h1
							class="h1 pb-3"
						>Our services</h1>

						<Slider {...{
							infinite: true,
							speed: 500,
							slidesToShow: 3,
							slidesToScroll: 3
						}}>
							<a href={``} class={style.slickElement}>
								<h3>CTO on-demand</h3>
								<p>How code, teams, products and tech debt work at scale</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>Workflow Auditing</h3>
								<p>content</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>Code Auditing</h3>
								<p>content</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>Executive Coaching</h3>
								<p>Understanding developer biases, tracking progress, iterating, ... </p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>5</h3>
								<p>content</p>
							</a>
							<a href={``} class={style.slickElement}>
								<h3>6</h3>
								<p>content</p>
							</a>
						</Slider>
					</div>
				</div>
			</div>
		</div>

		<span>
			<Parallax
				bgImage={require('../../assets/backgrounds/1_compressed.jpg')}
			>
				<br />
				<br />
				<br />
				<br />
				<br />
			</Parallax>
		</span>

		<div class={style.content}>
			{/* <Cubes /> */}
			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-8">
						<h1
							class="h1 pb-3"
						>Who are we?</h1>

						<p>[TODO: D3.js force graph]</p>

						<ul class={style.list}>
							<li>
								<h1 class="h4">Pedro Esperança</h1>
								<h1 class="h4">João Ribeiro</h1>
								<h1 class="h4">Rui Vilela</h1>
								<h1 class="h4">André Henderson</h1>
								<h1 class="h4">Alexander Kustov</h1>
								<h1 class="h4">Diogo Cardoso</h1>
							</li>
						</ul>

						<h1
							class="h1 pb-3"
						>Join us?</h1>
						<p class={`p ${style.p}`} >
							Is optimizing your output something you like to think about ? <br />
							Have you had your own entrepreneurial endeavors ? <br />
							Are you organized enough to work with remotely ? <br />
							Do you actively learn new technologies ? <br />
							<br />
							Yes to all ? <br />
							<a class={style.link} href={``}>Get in touch!</a>
						</p>
					</div>
				</div>
			</div>
		</div>

	</span>
);

export default Home;