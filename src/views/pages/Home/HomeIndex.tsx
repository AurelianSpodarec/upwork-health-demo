import Hero from "./_sections/Hero";
import InfoBanner from "./_sections/InfoBanner";

function HomeIndex() {
    return (
        <div>
            <Hero />
            <InfoBanner title="A holistic view of you." description="With everything in one place we can combine the psychometric and quantitive analysis with AI to help you understand your strenghts, weaknesses and everything else" />
            {/* <InfoBanner title="Protect yourself with preventative and proactive mental health" /> */}
        </div>
    )
}

export default HomeIndex;