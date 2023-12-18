import TypeProduct from "../TypeProduct/typeProduct";


function HeaderComponent() {
    return (<>
        <header className="bg-primary header">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="container-fluid container">
                    {/* header logo */}
                    <div className="col-3">
                        <a className="navbar-brand text-light fs-4 fw-normal fst-italic" href="#">SHOPITPRICECHEAP</a>
                    </div>
                    {/* Toggle mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* header search */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto col-6 w-75">
                            <div className="d-flex w-75">
                                <input type="search" className="form-control input_search d-block" placeholder="Xe, Phụ Kiện - Giá Từ 300K" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append ">
                                    <button className="input-group-text header_search_search_customer text-muted fs-4 fw-normal" id="basic-addon2">
                                        <i className="fa-solid fa-magnifying-glass p-1 fs-5 "></i> Search
                                    </button>
                                </div>
                            </div>
                        </ul>
                        {/* header account */}
                        <div className="col-3 header_customer_account">
                            <div className="header_customer_col_account  w-80">
                                <div className="header_customer_col_account_account w-100">
                                    <div className="d-flex  align-items-center">
                                        <div className="header_customer_col_account_icon pe-2">
                                            <i className="fa-solid fa-user text-light fs-4"></i>
                                        </div>
                                        <div className="header_customer_col_account_account_login d-block float-start ">
                                            <h6><a className="text-light text-decoration-none" href="#">Register/Login</a></h6>
                                            <h6><a className=" float-none text-light text-decoration-none" href="#">Account</a></h6>
                                        </div>
                                        <div className="header_customer_col_account_cart_cart ps-3">
                                            <a href="#" className="text-light text-decoration-none position-relative">
                                                <i className="fa-solid header_customer_col_account_cart_cart_icon fa-cart-shopping customer_cart pe-1 fs-4"></i>
                                                Cart
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    12
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
        <TypeProduct />
        {/* <header className="bg-primary">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                <div className="container">
                    <div className="row">
                        <div className="container-fluid">
                            <div className="col-3" href="#">Navbar</div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <div className="col-6">Col-6</div>
                                    <div className="col-3">Col-3</div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header> */}
    </>);
}

export default HeaderComponent;