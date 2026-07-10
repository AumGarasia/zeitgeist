import Hero from "../Screens/Hero";
import Origins from "../Screens/Sparse/Origins";
import TwoCoasts from "../Screens/Sparse/TwoCoasts";

function Carousel() {
    return (
        <div className="flex">
            <Hero />
            <Origins />
            <TwoCoasts />
        </div>
    )
}

export default Carousel;