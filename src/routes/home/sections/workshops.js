import { Link } from 'preact-router/match';
import Slider from "react-slick";

import style from '../style.scss';
import Cube from '../shared/cube';

export default () => (
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
                        slidesToScroll: 3,
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
                        <Link href={`/workshop/1`} class={style.slickElement}>
                            <h3>Project Management</h3>
                            <p>Understanding biases, tracking progress, planning for failure, making jargon a crime, etc.</p>
                            <div class={style.pills}>
                                <div class={`${style.pill} ${style.color1}`}>for executives</div>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/2`} class={style.slickElement}>
                            <h3>Understanding developers</h3>
                            <p>Types of developers, Spectrum of yes and no, Optimizing productivity, etc. </p>
                            <div class={style.pills}>
                                <div class={`${style.pill} ${style.color1}`}>for executives</div>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>Future Ready FE that Scales</h3>
                            <p>content content content content content content</p>
                            <div class={style.pills}>
                                {/* <div class={`${style.pill} ${style.color1}`}>for executives</div> */}
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>

                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>Graphql</h3>
                            <p>content content content content content content</p>
                            <div class={style.pills}>
                                {/* <div class={`${style.pill} ${style.color1}`}>for executives</div> */}
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>FE State Management</h3>
                            <p>The most inuse or recent ways of managing FE State, what each is good for and not.</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>FE Component Management</h3>
                            <p>React, Angular, Vue and Preact. What they have in common and in particular.</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        
                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>How to Git</h3>
                            <p>The most inuse or recent ways of managing FE State, what each is good for and not.</p>
                            <div class={style.pills}>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
);
