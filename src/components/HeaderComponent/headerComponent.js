import TypeProduct from "../TypeProduct/typeProduct";


function HeaderComponent() {
    return (<>
        <header className="header bg-primary ">
            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light p-0 ">
                    <div class="container-fluid container p-0">
                        {/* header Logo */}
                        <div className="col-3">
                            <span className="header_logo text-light">SHOPITPRICECHEAP</span>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="navbar-nav">
                                {/* header Search */}
                                <div className="col-6 header_search m-auto">
                                    <div className="input-group">
                                        <input type="search" className="form-control input_search" placeholder="Xe, Phụ Kiện - Giá Từ 300K" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append ">
                                            <button className="input-group-text header_search_search_customer" id="basic-addon2">
                                                <i className="fa-solid fa-magnifying-glass p-2 "></i> Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* header account */}
                                <div className="col-3 header_customer_account">
                                    <div className="header_customer_col_account  w-80">
                                        <div className="header_customer_col_account_account w-100">
                                            <div className="d-flex  align-items-center">
                                                <div className="header_customer_col_account_icon">
                                                    <i className="fa-solid fa-user text-light"></i>
                                                </div>
                                                <div className="header_customer_col_account_account_login d-block float-start ">
                                                    <h6><a className="text-light text-decoration-none" href="#">Register/Login</a></h6>
                                                    <h6><a className=" float-none text-light text-decoration-none" href="#">Account</a></h6>
                                                </div>
                                                <div className="header_customer_col_account_cart_cart ps-5  ">
                                                    <a href="#" className="text-light text-decoration-none position-relative">
                                                        <i className="fa-solid header_customer_col_account_cart_cart_icon fa-cart-shopping customer_cart pe-2"></i>
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
                    </div>
                </nav>
            </div>
        </header >
        <TypeProduct />
        {/* <header className="bg-primary">
            <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
                <div className="container">
                    <div className="row">
                        <div class="container-fluid">
                            <div class="col-3" href="#">Navbar</div>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>


                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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