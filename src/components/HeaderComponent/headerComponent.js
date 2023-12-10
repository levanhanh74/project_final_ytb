import TypeProduct from "../TypeProduct/typeProduct";


function HeaderComponent() {
    return (<>
        <header className="header bg-primary topnav">
            <div className="text-center">
                <div className="row">
                    {/* header Logo */}
                    <div className="col-3">
                        <span className="header_logo text-light">SHOPITPRICECHEAP</span>
                    </div>

                    {/* header Search */}
                    <div className="col-6 header_search m-auto">
                        <div className="input-group">
                            <input type="search" className="form-control " placeholder="Xe, Phụ Kiện - Giá Từ 300K" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="input-group-text " id="basic-addon2">
                                    <i className="fa-solid fa-magnifying-glass pe-2"></i> Search
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
                                    <div className="header_customer_col_account_cart_cart ps-5 text-light">
                                        <a href="#" className="text-light text-decoration-none"> <i className="fa-solid fa-cart-shopping customer_cart pe-1"></i> Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <TypeProduct />
    </>);
}

export default HeaderComponent;