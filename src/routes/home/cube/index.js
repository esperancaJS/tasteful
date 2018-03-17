import { h, Component } from 'preact';
import style from './style.scss';

// https://codepen.io/davidkpiano/pen/XbpEKe

export default class Cube extends Component {

    render() {
        return (
            <div class={style.container}>
                <div class={style.cube}>
                    <div class={style.facesTop}>
                        { new Array(10).fill().map(() => <div class={style.face}></div>)}
                    </div>
                    <div class={style.facesLeft}>
                        { new Array(10).fill().map(() => <div class={style.face}></div>)}
                    </div>
                    <div class={style.facesRight}>
                        { new Array(10).fill().map(() => <div class={style.face}></div>)}
                    </div>
                </div>
            </div>
        );
    }
}