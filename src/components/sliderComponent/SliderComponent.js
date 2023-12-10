import Slider from "react-slick";

import { SaveImg } from "../../assets/saveImg";

function SliderComponent() {
    const arrImg = SaveImg;
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
    };
    return (<>
        <Slider {...settings}>
            {
                arrImg.map((value, index) => {
                    return (
                        <div key={index} className="bg_slider_img">
                            <img className="customer_Slider_img" src={value} alt={value} />
                        </div>
                    )
                })
            }
        </Slider>
    </>);
}
export default SliderComponent;