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
                                We are a collective of ambitious thinkers and doers, all ex-founders.
                                <br />
                                <br />
                                What brings us toghether most of all is our desire to learn as fast and effectively as we can.
                                <br />
                                Which implies open mindedness, radical transparancy and an ever present eaguerness to know more.
                            </p>
                        </li>

                        <li>
                            <h1 class="h4">Humans</h1>
                            <ul class={style.list}>
                                <li>
                                    <Link
                                        class={style.link}
                                        href={`https://www.linkedin.com/in/esperancajs/`}
                                    >Pedro Esperança</Link>
                                    <p>Created 4 startups, sold 1 and worked with another 4 startups and 2 software houses.</p>
                                </li>
                                <li>
                                    <Link
                                        class={style.link}
                                        href={`https://github.com/JonnyBGod`}    
                                    >João Ribeiro</Link>
                                    <p>Maintainer and contributer of many open source repositories and organizations.</p>
                                </li>
                                <li>
                                    <Link
                                        class={style.link}
                                        href={`https://www.linkedin.com/in/ruivilela/`}
                                    >Rui Vilela</Link>
                                    <p>Basterd.</p>
                                </li>
                                <li>
                                    <Link
                                        class={style.link}
                                        href={`https://www.linkedin.com/in/alexanderkustov/`}
                                    >Alexander Kustov</Link>
                                    <p>Created many startups, colaborated for many others as well as many big companies such as Oxford Dictionaries.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* <br />
                    

                    <Link class={style.link} href={`/contact/2`}>
                        Join us?
                    </Link> */}

                </div>
            </div>
        </div>
    </div>
)