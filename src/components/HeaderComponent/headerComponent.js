import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderComponent() {
    const useSelectorUser = useSelector(state => state.user);
    // console.log(useSelectorUser);
    return (<>
        <header className="bg-primary">
            <nav className="navbar navbar-expand-lg navbar-light p-4 ">
                <div className="container-fluid container container-sm container-md">
                    {/* header logo */}
                    <div className="col-3">
                        <Link className="navbar-brand text-light fs-lg-4 fs-sm-6 fw-bold fst-italic" to="/">SHOPITPRICECHEAP</Link>
                    </div>
                    {/* Toggle mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* header search */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-75 justify-content-center col-6 mt-sm-2">
                            <div className="d-flex w-75 w-md-75 w-sm-100">
                                <input type="search" className="form-control input_search d-block " placeholder="Xe, Phụ Kiện - Giá Từ 300K" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append ">
                                    <button className="input-group-text header_search_search_customer text-muted fs-4 fw-normal p-sm-1" id="basic-addon2">
                                        <i className="fa-solid fa-magnifying-glass p-lg-1 p-sm-0 fs-5 "></i> Search
                                    </button>
                                </div>
                            </div>
                        </ul>
                        {/* header account */}
                        <div className="col-3 header_customer_account mt-sm-2 ">
                            <div className="header_customer_col_account w-80">
                                <div className="header_customer_col_account_account w-100">
                                    <div className="d-flex  align-items-center" >
                                        <div className="header_customer_col_account_icon pe-2 ">
                                            <i className="fa-solid fa-user text-light fs-4"></i>
                                        </div>
                                        {
                                            useSelectorUser.name ?
                                                <div className="header_customer_col_account_account_login d-block float-start">
                                                    <h6><Link className=" float-none text-light text-decoration-none" to="#">{useSelectorUser.name || useSelectorUser.email}</Link></h6>
                                                </div> :
                                                <div className="header_customer_col_account_account_login d-block float-start ">
                                                    <h6><Link className="text-light text-decoration-none" to={"/login"}>Register/Login</Link></h6>
                                                    <h6><Link className=" float-none text-light text-decoration-none" to="#">Account</Link></h6>
                                                </div>
                                        }
                                        <div className="header_customer_col_account_cart_cart d-sm-block ps-lg-3 ps-sm-0">
                                            <Link to="#" className="text-light text-decoration-none position-relative">
                                                <i className="fa-solid header_customer_col_account_cart_cart_icon fa-cart-shopping customer_cart pe-1 fs-4"></i>
                                                Cart
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    12
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    </>);
}

export default HeaderComponent;