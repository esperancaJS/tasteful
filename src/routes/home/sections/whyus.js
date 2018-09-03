import style from '../style.scss';
import Cubes from '../shared/cubes';

export default () => (
    <div class={style.content}>
        <Cubes />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1
                        class="h1 pt-5"
                    >Teaching is in our blood</h1>
                </div>
            </div>

            <div class="row pb-5">

                <div class={`col-6 ${style.iframeWrapper}`}>

                    <iframe
                        src="https://www.youtube.com/embed/FfiQmfiYOzo"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    ></iframe>

                </div>

                <div class="col-6">

                    <br />
                    <br />

                    <h1
                        class="h3 pb-3"
                    >Our Motivation</h1>

                    <p>
                        Learning is our biggest passion in tech and teaching is the most effective way to learn.
                        <br />
                        <br />
                        Sharing and debating on what we have learned has proven to be our biggest source of meaning and wisdom in our work.
                    </p>

                    <br />
                    <br />

                    <h1
                        class="h3 pb-3"
                    >Our Approach</h1>

                    <p>
                        The most effective and less boring way to learn anything is
                        to start by acquiring the 20% of the information with which
                        80% of the work can be done.
                        <br />
                        <br />
                        This is what we start with on our workshops, and what we make
                        sure everyone participating understands by putting it into practice,
                        another key practice for effective learning.
                    </p>

                    <br />
                    <br />
                
                </div>
            </div>
        </div>
    </div>
)