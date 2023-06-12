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
                            <p className="leading-relaxed">I can't imagine my sporting journey without Sport Learn. The academy's emphasis on technique, strategy, and mental preparedness has made a significant impact on my performance. The friendships I've forged here are priceless, and I'm excited for the continued growth and success that Sport Learn offers.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className=" font-medium title-font tracking-wider text-sm">Ajoy Nandi Joy</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.6435-9/55835430_816293102068160_8513686772033519616_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=foDVXcTSzMYAX8pgz1R&_nc_ht=scontent.fdac137-1.fna&oh=00_AfCLNstW4xPQBCrOcQBc0jtuSsjJCxealE9LeHWrVspftg&oe=6490ECB3" />
                            <p className="leading-relaxed">Choosing Sport Learn was the best decision I made for my sports development. The personalized attention and tailored training programs have helped me overcome challenges and reach new heights. I'm grateful for the lifelong friendships and unforgettable experiences I've gained along the way.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className=" font-medium title-font tracking-wider text-sm">Chowdory Showmik</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.6435-9/66756325_714000272368773_196067597819576320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=0ewAMJ1WGtcAX_hD6_S&_nc_ht=scontent.fdac137-1.fna&oh=00_AfA6uHOOem0-lwFsKyOuCr4uZANvHqQIusafxwHSi8pXFQ&oe=64ABFB66" />
                            <p className="leading-relaxed">Sport Learn has transformed my athletic journey. The expert coaches have honed my skills and pushed me to new limits. The supportive environment and camaraderie among fellow athletes have made every training session enjoyable. Thanks to Sport Learn, I've grown both as an athlete and as an individual.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className=" font-medium title-font tracking-wider text-sm">Tahmim Mahfuj</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentSay;