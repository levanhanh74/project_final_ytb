import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../../components/sliderComponent/SliderComponent";
import CartComponent from "../../components/Carts/Carts";

function HomePage() {


    return (
        <>

            <SliderComponent />

            <div className="container mt-5">
                <div className="row  d-flex">
                    <div className="col-3">
                        NavBar
                    </div>
                    <div className="col-9">
                        <div className="row customer_cart_col">
                            <div className="col-lg-3 col-sm-5 col-sm-6 col-sm-4">
                                <CartComponent />
                            </div>
                            <div className="col-lg-3 col-sm-5 col-sm-6 col-sm-4">
                                <CartComponent />
                            </div>
                            <div className="col-lg-3 col-sm-5 col-sm-6 col-sm-4">
                                <CartComponent />
                            </div>
                            <div className="col-lg-3 col-sm-5 col-sm-6 col-sm-4">
                                <CartComponent />
                            </div>
                            <div className="col-lg-3 col-sm-5 col-sm-6 col-sm-4">
                                <CartComponent />
                            </div>
                            <div className="col-lg-3 col-sm-5 col-sm-6 col-sm-4">
                                <CartComponent />
                            </div>
                           
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;