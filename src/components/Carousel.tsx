import Hero from "../Screens/Hero";
import BedroomStudio from "../Screens/Sparse/BedroomStudio";
import Origins from "../Screens/Sparse/Origins";
import Polyphony from "../Screens/Sparse/Polyphony";
import TwoCoasts from "../Screens/Sparse/TwoCoasts";

function Carousel() {
    return (
        <div className="flex">
            <Hero />
            <Origins />
            <TwoCoasts />
            <Polyphony />
            <BedroomStudio />
        </div>
    )
}

export default Carousel;