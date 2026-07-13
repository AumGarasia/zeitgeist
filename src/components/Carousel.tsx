import Hero from "../Screens/Hero";
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
        </div>
    )
}

export default Carousel;