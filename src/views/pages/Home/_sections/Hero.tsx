import hero from "./../../../../../src/assets/hero.png";

function Hero() {
    return (
        <div className="mt-12">
        <div className="grid lg:grid-cols-12">

            <div className="col-span-6 px-8 lg:px-24 mb-8">
                <div className="max-w-[330px] lg:mt-20 mb-20">
                    <h1 className="text-5xl leading-[1.25] mb-8"><span className="font-bold underline">Own</span> your Mental Health with self.</h1>
                    <p className="text-md">Take quick assesment and learn about your well-being.</p>
                </div>

                <div className="">
                    <button className="bg-[#3d4c48] text-white rounded-full py-1.5 px-6 mb-6">Sign Up</button>
                    <p className="text-xs">Already have an account? <a href="" className="text-blue-900 font-bold">Login</a></p>
                </div>
            </div>

            <div className="col-span-6">
                <img src={hero} alt="Hero image" className="rounded-tl-[50px] w-full" />
            </div>
        </div>
        </div>
    )
}

export default Hero;