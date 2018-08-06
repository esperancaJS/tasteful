import { Link } from 'preact-router/match';
import Slider from "react-slick";

import style from '../style.scss';
import Cube from '../shared/cube';

export default () => (
    <div class={style.content} id={`workshops`}>
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
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        responsive: [
                            {
                              breakpoint: 1000,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                              }
                            }
                          ]
                    }}>
                        <Link href={`/workshop/front-end-architecture`} class={style.slickElement}>
                            <h3>Front End Architecture</h3>
                            <p>React, Angular, Redux, Webpack - What you really need to know.</p>
                            <div class={style.pills}>
                                {/* <div class={`${style.pill} ${style.color1}`}>for executives</div> */}
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        {/* <Link href={`/workshop/2`} class={style.slickElement}>
                            <h3>Code your own Landing Pages</h3>
                            <p>[ Alex Please Help ! ]</p>
                            <div class={style.pills}>
                                <div class={`${style.pill} ${style.color1}`}>for marketers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>Code-Less Backends</h3>
                            <p>[ João Ribeiro Please Help ! ]</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/4`} class={style.slickElement}>
                            <h3>CI/CD for FE Developers</h3>
                            <p>[ João Ribeiro Please Help ! ]</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/5`} class={style.slickElement}>
                            <h3>How to Git</h3>
                            <p>[ Rui Please Help ! ]</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link> */}
                        {/* <Link href={`/workshop/6`} class={style.slickElement}>
                            <h3>Understanding developers</h3>
                            <p>Types of developers, Spectrum of yes and no, Optimizing productivity, etc. </p>
                            <div class={style.pills}>
                                <div class={`${style.pill} ${style.color1}`}>for executives</div>
                               
                            </div>
                        </Link> */}
                        {/* <Link href={`/workshop/7`} class={style.slickElement}>
                            <h3>Splunk done right</h3>
                            <p>[ João Figueiredo please help! ]</p>
                            <div class={style.pills}>
                                <div class={`${style.pill} ${style.color1}`}>for executives</div>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/8`} class={style.slickElement}>
                            <h3>Ultimate React</h3>
                            <p>[ Pedro please help! ]</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link> */}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
);
