import { Link } from 'preact-router/match';

export default () => (

    <span>

        <h1>Front End Architecture</h1>

        <br />

        <blockquote class="blockquote">
            <p class="mb-0">
                Front End Architecture impacts developer hapyness, productivity and quality.
                <br /><br />
                Getting it right means a code base that is enjoyable to work with and easy to improve upon.
            </p>
        </blockquote>

        <br />

        <dl class="row">
            <dd class="col-sm-12 text-center">
                <Link href={`/workshop/front-end-architecture/book`}>
                    <button class={`btn`}>Book us!</button>
                </Link>
            </dd>
        </dl>

        <br />

        <dl class="row">
            <dt class="col-sm-2">Motivation</dt>
            <dd class="col-sm-10">
                <p>
                    Building Front End Architectures that scale is one of the most confusing problems for web developers.
                    The reason being that there are a wide variety of contradictory ways to do it. Due
                    to strong fanatism amoung developers, specially in available online resources.
                </p>
                <p>
                    However once developers are shown opinionated ways of architecting projects they can visualize what are the problems that are important to leverage and how to best pick and use the latest availble technologies, continuously.
                </p>
            </dd>
        </dl>

        <br />

        <dl class="row">
            <dt class="col-sm-2">Approach</dt>
            <dd class="col-sm-10">
                <p>
                    We've come up with a 'straight to the point' curriculum to facilitate learning via interactive explanations and the bulding of project starters, that can the be used as starting points for future projects.
                </p>
                <p>Composed of 3 parts:</p>


                <dl class="row">
                    <dt class="col-sm-4">
                        Theory <br />
                        <small>(~6h)</small>
                    </dt>
                    <dd class="col-sm-8">
                        <ul class={'less-padding'}>
                            <li>History and Predictions</li>
                            <li>Why scalability is key</li>
                            <li>What diferent Frameworks have in common</li>
                            <li>Good and Bad Practices</li>
                            <li>Why state management is essential to scale</li>
                            <li>State management options</li>
                            <li>Angular - most relevant parts</li>
                            <li>React - most relevant parts</li>
                            <li>Tools we'll be using</li>
                        </ul>
                    </dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-4">
                        Building a Starter with <i>Angular & Redux</i>
                        <br />
                        <small>(~6h)</small>
                    </dt>
                    <dd class="col-sm-8">
                        <ul class={'less-padding'}>
                            <li>Boostrapping with Angular CLI</li>
                            <li>Optimizing the build</li>
                            <li>Setting up environment variables</li>
                            <li>Encapsulating UI code</li>
                            <li>Installing twitter bootstrap</li>
                            <li>Setting up routing</li>
                            <li>Setting up Redux (with Effects)</li>
                            <li>Building a TODO app 'quick and dirty'</li>
                            <li>Building a TODO app 'cleanly'</li>
                        </ul>
                    </dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-4">
                        Building a Starter with <i>React & Redux</i>
                        <br />
                        <small>(~6h)</small>
                    </dt>
                    <dd class="col-sm-8">
                        <ul class={'less-padding'}>
                            <li>Boostrapping with Parcel</li>
                            <li>Optimizing the build</li>
                            <li>Setting up environment variables</li>
                            <li>Encapsulating UI code</li>
                            <li>Installing twitter bootstrap</li>
                            <li>Setting up routing</li>
                            <li>Setting up Redux (with Effects)</li>
                            <li>Building a TODO app 'quick and dirty'</li>
                            <li>Building a TODO app 'cleanly'</li>
                        </ul>
                    </dd>
                </dl>
            </dd>

        </dl>

        <br />

        <dl class="row">

            <dt class="col-sm-2">Audience</dt>
            <dd class="col-sm-10">
                Young developers about to embark on a journey to build great Front End projects that are easy to work with and scale.
            </dd>

        </dl>

        <br />

        <dl class="row">

            <dt class="col-sm-2 text-truncate">Tech</dt>
            <dd class="col-sm-4">

                <ul class={'less-padding'}>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                    <li>Parcel</li>
                </ul>

            </dd>

            <dd class="col-sm-4">

                <ul class={'less-padding'}>
                    <li>Angular CLI</li>
                    <li>Redux</li>
                    <li>ngrx/store</li>
                    <li>NPM scripts</li>
                    <li>latest Javascript</li>
                </ul>

            </dd>

        </dl>


        <br />

        <dl class="row">

            <dt class="col-sm-2 text-truncate">Options</dt>
            <dd class="col-sm-10">
                <dl class="row">
                    <dt class="col-sm-3">3 full days</dt>
                    <dd class="col-sm-9">
                        <p>3 information rich days, 1 theoretical, 2 hands on.</p>
                    </dd>

                </dl>
                <dl class="row">
                    <dt class="col-sm-3">6x 3h sessions</dt>
                    <dd class="col-sm-9">
                        <p>6 high intensity sessions, 2 theoretical, 4 hands on.</p>
                    </dd>

                </dl>
            </dd>

        </dl>

        <br />

        <dl class="row">

        <dt class="col-sm-2 text-truncate">Teacher</dt>
        <dd class="col-sm-10">
            <dl class="row">
                <dt class="col-sm-3">Pedro Esperança</dt>
                <dd class="col-sm-9">
                    <p>Created 4 startups, sold 1 and worked with another 4 startups and 2 software houses.</p>
                </dd>

            </dl>
        </dd>

        </dl>

        <br />

        <dl class="row">
            <dd class="col-sm-12 text-center">
                <Link href={`/workshop/front-end-architecture/book`}>
                    <button class={`btn`}>Book us!</button>
                </Link>
            </dd>
        </dl>

    </span>
);
