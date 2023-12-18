import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

function SliderDetailComponent() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    useEffect(() => {
        setNav1(slider1Ref.current);
        setNav2(slider2Ref.current);
    }, []);

    return (<>
        <Slider
            asNavFor={nav2}
            ref={slider1Ref}
            className="h-100" style={{ 'height': "500px" }}
        >
            <div>
                <h3 style={{ minHeight: "300px" }}>1</h3>
            </div>
            <div>
                <h3 style={{ minHeight: "300px" }}>2</h3>
            </div>
            <div>
                <h3 style={{ minHeight: "300px" }}>3</h3>
            </div>
            <div>
                <h3 style={{ minHeight: "300px" }}>4</h3>
            </div>
            <div>
                <h3 style={{ minHeight: "300px" }}>5</h3>
            </div>
            <div>
                <h3 style={{ minHeight: "300px" }}>6</h3>
            </div>
        </Slider>
        <Slider
            asNavFor={nav1}
            ref={slider2Ref}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
        >
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    </>);
}

export default SliderDetailComponent;