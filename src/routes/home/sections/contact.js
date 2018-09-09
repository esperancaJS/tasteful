import style from '../style.scss';

export default () => (
    <div class="container py-5">
        <div class="row justify-content-center py-2">
            <div class="col-12 text-center">
                <h3
                    class="h1 pb-4 text-center"
                    style={{color: 'white'}}
                >Contact us now</h3>

            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 text-center pb-4">

                <a
                    class={style.twitterButton}
                    target="_blank"
                    href="https://twitter.com/direct_messages/create/tastefulCode"
                >
                    <i class="fa fa-twitter" />Message
                </a>
            </div>
        </div>
    </div>
)