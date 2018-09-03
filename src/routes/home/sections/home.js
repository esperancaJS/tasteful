import { Link } from 'preact-router/match';

import style from '../style.scss';
import Logo from '../shared/logo';

export default () => (
    <div class={style.home}>
        <div class={style.inner}>
            <Logo />
            <h1
                class="h1"
            >Tasteful</h1>
            <h2
                class={`p ${style.slogan}`}
            >
                We teach you to make high quality and
                scalable software.
            </h2>
        </div>
        <div class="container">
            <div class="row" style={{padding: '20px 0px'}}>
                <div class="col-sm-4 box-wrapper-wrapper">
                    <Link href={`/workshop/front-end-architecture`}>
                        <div class="box-wrapper">
                            <p class="t1">
                                <span>
                                    Front End Architecture
                                    <br />
                                    <b>Workshop</b>
                                </span>
                                <span class="emoji">🏗</span>
                            </p>
                            <p class="t2">React, Angular, Redux, Webpack - What you really need to know.</p>
                            <div class="action-button-wrapper" style={{ 'justify-content' : 'space-around'}}>
                                <div class="action-button">learn more</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="col-sm-4 box-wrapper-wrapper">
                    <Link href={`/workshop/front-end-architecture`}>
                        <div class="box-wrapper">
                            <p class="t1">
                                <span>
                                    Ultimate React
                                    <br />
                                    <b>Workshop</b>
                                </span>
                                <span class="emoji">⚡️</span>
                            </p>
                            <p class="t2">Using Recompose and GraphQL to scale React to the Moon</p>
                            <div class="action-button-wrapper" style={{ 'justify-content' : 'space-around'}}>
                                <div class="action-button">learn more</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="col-sm-4 box-wrapper-wrapper">
                    <Link href={`/service/code-auditing`}>
                        <div class="box-wrapper">
                            <p class="t1">
                                <span>
                                Code Auditing
                                    <br />
                                    <b>Service</b>
                                </span>
                                <span class="emoji">🔬</span>
                            </p>
                            <p class="t2">Get actionable advice on how to effectively improve your developer satisfaction</p>
                            <div class="action-button-wrapper" style={{ 'justify-content' : 'space-around'}}>
                                <div class="action-button">learn more</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div class={style.inner}>
            <div>
                <a class={style.link} href={`#workshops`}>More workshops</a>
                <span style={{ padding: `0 10px` }}>|</span>
                <a class={style.link} href={`#services`}>More services</a>
            </div>
        </div>
    </div>
)