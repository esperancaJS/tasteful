import { Link } from 'preact-router/match';

import style from '../style.scss';
import Logo from '../shared/logo';

export default () => (
    <div class={style.content}>
        {/* <Cubes /> */}
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-8">
                    <h1
                        class="h1 pb-3"
                    >Who are we?</h1>

                    <ul class={style.list}>
                        <li>
                            <h1 class="h4">Culture</h1>
                            <p class={`p ${style.p}`} >
                                Perfectionists, dreamers, thorough, ...

                            </p>
                        </li>

                        <li>
                            <h1 class="h4">Humans</h1>
                            {/* <p class={`p ${style.p}`} >
                                Software development is an ever evolving landscape, however many best practices
                                in architecture, work ethic, project development, etc, strenghten
                                with every new technology and with ever obstacle. <br />
                                As a team we help each other learn faster as well as deliver faster
                                by being active learners and sharers.
                            </p> */}
                            <ul class={style.list}>
                                <li>
                                    <Link href={`/people/1`}><h1 class="h4">Pedro Esperança</h1></Link>
                                    <Link href={`/people/2`}><h1 class="h4">João Ribeiro</h1></Link>
                                    <Link href={`/people/3`}><h1 class="h4">Rui Vilela</h1></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class={style.list}>
                        <li>
                            <Link href={`/people/1`}><h1 class="h4">Pedro Esperança</h1></Link>
                            <Link href={`/people/2`}><h1 class="h4">João Ribeiro</h1></Link>
                            <Link href={`/people/3`}><h1 class="h4">Rui Vilela</h1></Link>
                        </li>
                    </ul>

                    <Link href={`/contact/2`}>
                        <h1
                            class="h1 pb-3"
                        >Join us?</h1>
                    </Link>

                </div>
            </div>
        </div>
    </div>
)