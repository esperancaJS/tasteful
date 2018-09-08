export default () => (
    <div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-8">

                    <h3
                        class="h1 py-3 pt-5 text-center"
                        style={{color: 'white'}}
                    >We have trained people at</h3>
                
                </div>
            </div>
            <div class="row pb-5">
                <div class="animated-lister">
                    <div class="lister-container">
                        <ul>
                            {[
                                { img: 'gh.png' },
                                // { img: 'g.png' },
                                { img: 'beamery.svg' },
                                { img: 'ibm5.png' },
                                { img: 'ua.png', maxHeight: '60px' },
                                { img: 'od.png', maxHeight: '60px' },
                                { img: 'sony.png' },
                                { img: 'iw.png', maxHeight: '65px' },
                                { img: 'altar-37.png' }
                            ].map(({img, maxHeight}) => (
                                <li>
                                    <img
                                        style={{ maxHeight }}
                                        src={require(`../../../assets/clients/${img}`)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)