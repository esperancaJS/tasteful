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
                            <p>Understanding developer biases, tracking progress, iterating, ... </p>
                            <div class={style.pills}>
                                <div class={style.pill}>for executives</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/2`} class={style.slickElement}>
                            <h3>Understanding developers</h3>
                            <p>content</p>
                            <div class={style.pills}>
                                <div class={`${style.pill} ${style.color1}`}>for executives</div>
                                <div class={style.pill}>for developers</div>
                            </div>
                        </Link>
                        <Link href={`/workshop/3`} class={style.slickElement}>
                            <h3>Validating tech ideas</h3>
                            <p>content</p>
                        </Link>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
);
