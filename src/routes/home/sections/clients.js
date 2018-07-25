import style from '../style.scss';
import Slider from "react-slick";

export default () => (
    <div class={style.content}>
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-8">

                    <br />
                    <br />

                    <h1
                        class="h1 pb-3"
                    >Companies we've colaborated with</h1>

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
                        <div class={style.slickElement}>
                            <p>Google</p>
                        </div>
                        <div class={style.slickElement}>
                            <p>Google</p>
                        </div>
                        <div class={style.slickElement}>
                            <p>Google</p>
                        </div>
                        <div class={style.slickElement}>
                            <p>Google</p>
                        </div>
                        <div class={style.slickElement}>
                            <p>Google</p>
                        </div>
                    </Slider>

                
                </div>
            </div>
        </div>
    </div>
)