import { Link } from 'preact-router/match';

import style from '../style.scss';
import Logo from '../shared/logo';

export default () => (
    <div class={style.home}>
        <div class={style.inner}>
            <Logo />
            <h1
                class="h1"
            >Tasteful</h1>
            <h2
                class={`p ${style.p}`}
            >
                We teach humans to enjoy making high quality and infinitelly
                scaleable software, as it's meant to be.
            </h2>
            <Link class={style.link} href={`/contact/1`}>Book us!</Link>
        </div>
    </div>
)