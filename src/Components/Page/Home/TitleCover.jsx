import img from '../../../assets/title.jpg'

const TitleCover = ({heading}) => {

    return (
        <div className="hero bg-fixed rounded-xl my-11" style={{ backgroundImage: `url(${img})` }}>

            <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className='md:text-5xl text-xl font-bold my-4 text-white'>{heading}</h2>
                </div>
            </div>
        </div>
    );
};

export default TitleCover;