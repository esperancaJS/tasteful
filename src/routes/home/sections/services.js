import { Link } from 'preact-router/match';
import Slider from "react-slick";

import style from '../style.scss';
import Cube from '../shared/cube';

export default () => (
    <div class={style.content}>
        <Cube right />
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-8">
                    <h1
                        class="h1 pb-3"
                    >Our services</h1>

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
                        <Link href={`/service/1`} class={style.slickElement}>
                            <h3>CTO on-demand</h3>
                            <p>How code, teams, products and tech debt work at scale</p>
                        </Link>
                        <Link href={`/service/2`} class={style.slickElement}>
                            <h3>Workflow Auditing</h3>
                            <p>content</p>
                        </Link>
                        <Link href={`/service/3`} class={style.slickElement}>
                            <h3>Code Auditing</h3>
                            <p>content</p>
                        </Link>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
)