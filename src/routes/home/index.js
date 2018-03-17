import { h } from 'preact';
import style from './style.scss';
import { Parallax, Background } from 'react-parallax';

import Cube from './cube';
// import Cubes from './cubes';
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
					>We are a group of developers, all ex-tech-founders, on a mission to develop world changing software.</h2>
					<a class={style.link} href={``}>Hire us!</a>
				</div>
			</div>
		</Parallax>

		<div class={style.content}>
			{/* <Cubes /> */}
			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-8">
						<h1
							class="h1 pb-3"
						>Why us?</h1>

						<ul class={style.list}>
							<li>
								<h1 class="h4">We are not an agency</h1>
								<p class={`p ${style.p}`} >
									Instead, a self chosen group of developers who enjoy the work we can do toghether.
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
								<h1 class="h4">We keep learning faster</h1>
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
						>Why not us?</h1>

						<ul class={style.list}>
							<li>
								<h1 class="h4">We <b>only</b> pick work that motivates us</h1>
								<p class={`p ${style.p}`} >
									Not trying to be dismissive of projects we might not accept! <br />
									We simply learned that by focusing on projects we are passionate about working on we 
									can output greater value with less aparent effort.
								</p>
							</li>
							<li>
								<h1 class="h4">We work better from home</h1>
								<p class={`p ${style.p}`} >
									Meaning we only come to the office for meetings.
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