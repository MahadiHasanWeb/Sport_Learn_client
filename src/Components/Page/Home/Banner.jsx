
const Banner = () => {
    return (
        <>
            <div className="relative w-full my-8 md:my-20">
                <img src='https://i.ibb.co/1ZVfxf1/pexels-pavel-danilyuk-6295871e-1.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 md:space-y-10 px-8 md:px-28 text-center'>
                        <h2 className='md:text-5xl text-xl font-bold '>Experience Excellence in Sports Education with <span className="text-blue-600">Sport Learn</span></h2>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;