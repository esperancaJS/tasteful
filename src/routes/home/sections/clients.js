import style from '../style.scss';
import Slider from "react-slick";

export default () => (
    <div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-8">

                    <h3
                        class="h1 py-3 text-center"
                        style={{color: 'white'}}
                    >We have trained people at</h3>
                
                </div>
            </div>
            <div class="row">
                <div class="animated-lister">
                    <div class="lister-container">
                        <ul>
                            {/* {Array.from({length: 12}, (x, i) => ( */}
                            <li>
                                <img
                                    src={require('../../../assets/clients/gh.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/g.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/gh.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/g.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/gh.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/g.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/gh.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/g.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/gh.png')}
                                />
                            </li>
                            <li>
                                <img
                                    src={require('../../../assets/clients/g.png')}
                                />
                            </li>
                            {/* ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)