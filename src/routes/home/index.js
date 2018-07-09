import style from './style.scss';
import { Parallax } from 'react-parallax';

import HomeSection from './sections/home';
import WhyUsSection from './sections/whyus';
import WorkshopsSection from './sections/workshops';
import ServicesSection from './sections/services';
import PeopleSection from './sections/people';
import ParallaxDivider from './sections/paralaxDivider';

const Home = () => (
	<span>
		<Parallax
			bgImage={require('../../assets/backgrounds/1_compressed.jpg')}
		>
			<HomeSection />
		</Parallax>

		<WhyUsSection />

		<ParallaxDivider />

		<WorkshopsSection />

		<ParallaxDivider />

		<ServicesSection />

		<ParallaxDivider />

		<PeopleSection />

	</span>
);

export default Home;