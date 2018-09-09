import style from '../style.scss';

const clients = [
    {
        img: 'pe.jpg',
        name: 'James Druid',
        testimonial: `
            I loved the hands-on
            approach. The teachers
            know exactly what
            they’re talking about !
        `
    },
    {
        img: 'pa.jpg',
        name: 'Peter Mage',
        testimonial: `
            The course is super
            practical, you work by
            doing! The teachers are
            fantastic and have a
            diverse range of skills.
        `
    },
    {
        img: 'ak.jpeg',
        name: 'James Druid',
        testimonial: `
            I loved the hands-on
            approach. The teachers
            know exactly what
            they’re talking about !
        `
    },
    {
        img: 'jr.jpeg',
        name: 'Peter Mage',
        testimonial: `
            The course is super
            practical, you work by
            doing! The teachers are
            fantastic and have a
            diverse range of skills.
        `
    },
];

export default () => (
    <div style={{color: 'white'}}>
        <div class="container-fluid pb-5">
            <div class="row justify-content-center">
                <div class="col-8">

                    <h3
                        class="h1 py-3 pt-5 text-center"
                    >What our students say about our courses <b>(wip)</b></h3>
                
                </div>
            </div>
            <div class="row pb-5">
                <div class="animated-lister-2">
                    <div class="lister-container">
                        <ul>
                            {[
                                ...clients,
                                ...clients,
                                ...clients
                            ].map(({img, name, testimonial}) => (
                                <li>
                                    <div class={style.testimonialWrapper}>
                                        <div class={style.testimonialImgWrapper}>
                                            <img
                                                src={require(`../../../assets/avatars/${img}`)}
                                            />
                                        </div>
                                        <div class={style.testimonialTextWrapper}>
                                            <p>{name}</p>
                                            <p>{testimonial}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)