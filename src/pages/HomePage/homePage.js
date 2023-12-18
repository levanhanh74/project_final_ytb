import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../../components/sliderComponent/SliderComponent";
import CardComponent from "../../components/cardComponent/CardComponent";
import NavBarComponent from "../../components/navBarComponent/NavBarComponent";
import TypeProduct from "../../components/TypeProduct/typeProduct";

function HomePage() {


    return (
        <>
            <TypeProduct />
            <SliderComponent />
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-lg-3 col-sm-3 ">
                        <NavBarComponent />
                    </div>
                    <div className="col-9">
                        <div className="row customer_cart_col ">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-sml-12">
                                <CardComponent />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-sml-12">
                                <CardComponent />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-sml-12">
                                <CardComponent />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-sml-12">
                                <CardComponent />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-sml-12">
                                <CardComponent />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-sml-12">
                                <CardComponent />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;