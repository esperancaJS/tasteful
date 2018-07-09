import { h } from 'preact';
import style from './style.scss';

const Home = () => (
    <div class={style.wrapper}>
        {
            new Array(12).fill()
                .map(() => <div class={style.bars} />)
        }
    </div>
);

export default Home;