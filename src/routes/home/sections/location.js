import style from '../style.scss';
import Slider from "react-slick";

export default () => (
    <div style={{color: 'white'}}>
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-8">

                    <br />
                    <br />

                    <h1
                        class="h1 pb-3"
                    >Location</h1>

                    <h1 class="h4">Where do we work?</h1>
                    <p class={`p ${style.p}`} >
                        Basically Anywhere
                    </p>

                    <br />
                    <br />

                    <h1 class="h4">Where are we based?</h1>
                    <p class={`p ${style.p}`} >
                        London
                    </p>

                </div>
            </div>
        </div>
    </div>
)