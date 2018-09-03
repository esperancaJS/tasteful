import { Link } from 'preact-router/match';

import style from '../style.scss';
import Cube from '../shared/cube';

export default () => (
    <div class={style.content} id={`services`}>
        <div class={style.cubeRightWrapper}>
            <Cube right />
        </div>
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-12 text-center">
                    <h1
                        class="h1 pb-3"
                    >When workshops aren't enough</h1>
                </div>
            </div>
            <div class="row justify-content-center" style={{padding: '20px 0px'}}>
                <div class="col-sm-4 box-wrapper-wrapper">
                    <Link href={`/service/workflow-auditing`}>
                        <div class="box-wrapper">
                            <p class="t1">
                                <span>
                                    Workflow Auditing
                                    <br />
                                    <b>Service</b>
                                </span>
                                <span class="emoji">🚄</span>
                            </p>
                            <p class="t2">React, Angular, Redux, Webpack - What you really need to know.</p>
                            <div class="action-button-wrapper" style={{ 'justify-content' : 'space-around'}}>
                                <div class="action-button">learn more</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="col-sm-4 box-wrapper-wrapper">
                    <Link href={`/service/cto-on-demand`}>
                        <div class="box-wrapper">
                            <p class="t1">
                                <span>
                                    CTO on-demand
                                    <br />
                                    <b>Service</b>
                                </span>
                                <span class="emoji">💎</span>
                            </p>
                            <p class="t2">Get an unbiased opinion from a Tech Veteran</p>
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
    </div>
)