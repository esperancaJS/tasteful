import style from '../style.scss';
import Slider from "react-slick";

export default () => (
    <div style={{color: 'white'}}>
        <div class="container pt-3">
            <div class="row justify-content-center pt-5 pb-3">
                <div class="col-8">

                    <h1
                        class="h1 pb-3 text-center"
                    >Location</h1>

                </div>
            </div>

            <div class="row justify-content-center pb-5 text-center">
                <div class="col-4">

                    <h3 class="h4"><b>Where are we based?</b></h3>
                    <p class={`p ${style.p}`} >London</p>

                </div>
                <div class="col-4">

                    <h3 class="h4"><b>Where do we work?</b></h3>
                    <p class={`p ${style.p}`}>Basically Anywhere</p>

                </div>
            </div>
        </div>
    </div>
)