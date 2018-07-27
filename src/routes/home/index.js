import style from './style.scss';
import { Parallax } from 'react-parallax';

import HomeSection from './sections/home';
import WhyUsSection from './sections/whyus';
import WorkshopsSection from './sections/workshops';
import ServicesSection from './sections/services';
import PeopleSection from './sections/people';
import ParallaxDivider from './sections/paralaxDivider';
import Tech from './sections/tech';
import Location from './sections/location';
import Clients from './sections/clients';

const Home = () => (
	<span>
		<Parallax
			bgImage={require('../../assets/backgrounds/1_compressed.jpg')}
		>
			<HomeSection />
		</Parallax>

		<WhyUsSection />

		<ParallaxDivider /> {/* Divider */}

		<WorkshopsSection />

		<ParallaxDivider /> {/* Divider */}

		<ServicesSection />

		<ParallaxDivider /> {/* Divider */}

		<PeopleSection />

		<ParallaxDivider /> {/* Divider */}

		<Location />

	</span>
);

export default Home;