import { Link } from 'preact-router/match';

import style from '../style.scss';
import Cube from '../shared/cube';

export default () => (
    <div class={style.content} id={`workshops`}>
        <Cube />
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-12 text-center">
                    <h1
                        class="h1 pb-3"
                    >Learn the skills of the future</h1>
                </div>
            </div>
            <div class="row justify-content-center" style={{padding: '20px 0px'}}>
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
            </div>
        </div>
    </div>
);
