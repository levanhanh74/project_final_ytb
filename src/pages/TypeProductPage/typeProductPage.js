import CardComponent from "../../components/cardComponent/CardComponent";
import NavBarComponent from "../../components/navBarComponent/NavBarComponent";

function TypeProductPage() {
    return (<>
        <div className="container">
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
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mt-3">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>);
}

export default TypeProductPage;