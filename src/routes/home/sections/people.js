import style from '../style.scss';

export default () => (
    <div class={style.content}>
        {/* <Cubes /> */}
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-8">
                    <h1
                        class="h1 pb-3"
                    >Who are we?</h1>

                    <h1 class="h4">Culture</h1>
                    <p class={`p ${style.p}`} >
                        We are a collective of ambitious thinkers and doers, all ex-founders.
                        <br />
                        <br />
                        What brings us toghether most of all is our desire to learn as fast and effectively as we can.
                        <br />
                        Which implies open mindedness, radical transparancy and an ever present eaguerness to know more.
                    </p>

                    <h1 class="h4">Humans</h1>

                    <div class="row">
                        <div class="col-6">

                            <ul class={style.list}>
                                <li>
                                    <a
                                        class={style.link}
                                        target={`_blank`}
                                        href={`https://www.linkedin.com/in/esperancajs/`}
                                    >Pedro Esperança</a>
                                    <p>Created 4 startups, sold 1 and worked with another 4 startups and 2 software houses.</p>
                                </li>
                                <li>
                                    <a
                                        class={style.link}
                                        target={`_blank`}
                                        href={`https://github.com/JonnyBGod`}    
                                    >João Ribeiro</a>
                                    <p>Maintainer and contributer of many open source repositories and organizations.</p>
                                </li>
                                <li>
                                    <a
                                        class={style.link}
                                        target={`_blank`}
                                        href={`https://www.linkedin.com/in/ruivilela/`}
                                    >Rui Vilela</a>
                                    <p>Business strategy focused entrepreneur surrendered to the simplicity of good code.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class={style.list}>
                                <li>
                                    <a
                                        class={style.link}
                                        target={`_blank`}
                                        href={`https://www.linkedin.com/in/alexanderkustov/`}
                                    >Alexander Kustov</a>
                                    <p>Bootstrapped many startups, colaborated for many others as well as many big companies such as Oxford Dictionaries.</p>
                                </li>
                                <li>
                                    <a
                                        class={style.link}
                                        target={`_blank`}
                                        href={`https://www.linkedin.com/in/pedrombafonso/`}
                                    >Pedro Afonso</a>
                                    <p>Passionate Developer, with a special focus for the React and GraphQl world</p>
                                </li>
                                <li>
                                    <a
                                        class={style.link}
                                        target={`_blank`}
                                        href={`https://www.linkedin.com/in/joaopfigueiredo/`}
                                    >João Figueiredo</a>
                                    <p>Seasoned Splunk Architect.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <br />
                    

                    <Link class={style.link} href={`/contact/2`}>
                        Join us?
                    </Link> */}

                </div>
            </div>
        </div>
    </div>
)