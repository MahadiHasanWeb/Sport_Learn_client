import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleCover from './TitleCover';

const StudentSay = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <TitleCover heading="Our Students Say"></TitleCover>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/337142972_215484911135178_7803658602356113669_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=LrqFfNURrAAAX8lcmkc&_nc_ht=scontent.fdac137-1.fna&oh=00_AfBCM9BeR7GofCnW-dJpbGDbYv5iZ_11Ozj126Cz0jF61w&oe=64896431" />
                            <p className="leading-relaxed">ToyTrek is a game-changer for toy car collectors! The quality of their products is outstanding, with incredible attention to detail. The customer service is fantastic, and the team goes above and beyond to ensure customer satisfaction. ToyTrek is my go-to destination for all my toy car needs. Highly impressed and highly recommended!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Ajoy Nandi Joy</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.6435-9/55835430_816293102068160_8513686772033519616_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=foDVXcTSzMYAX8pgz1R&_nc_ht=scontent.fdac137-1.fna&oh=00_AfCLNstW4xPQBCrOcQBc0jtuSsjJCxealE9LeHWrVspftg&oe=6490ECB3" />
                            <p className="leading-relaxed">ToyTrek is a game-changer for toy car collectors like me. The range and quality of their products are outstanding. The attention to detail in their miniature cars is exceptional, bringing them to life. The customer service is top-notch, with friendly and knowledgeable staff. ToyTrek is a must-visit for any toy car enthusiast. Highly recommended!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Chowdory Showmik</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.6435-9/66756325_714000272368773_196067597819576320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=0ewAMJ1WGtcAX_hD6_S&_nc_ht=scontent.fdac137-1.fna&oh=00_AfA6uHOOem0-lwFsKyOuCr4uZANvHqQIusafxwHSi8pXFQ&oe=64ABFB66" />
                            <p className="leading-relaxed">ToyTrek has taken my toy car collecting experience to new heights! Their impressive selection of high-quality cars, combined with their exceptional customer service, has made me a loyal customer. The attention to detail in their products is remarkable. I highly recommend ToyTrek to fellow collectors and enthusiasts.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Tahmim Mahfuj</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentSay;