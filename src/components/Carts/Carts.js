function CartComponent() {
    return (
        <div className="container_cart">
            <div className="card customer_cart m-1" >
                <img src="https://down-vn.img.susercontent.com/file/sg-11134201-7rbkq-loaziwhlr9kj52" className="card-img-top customer_cart_img" alt="..." />
                <div className="card-body customer_cart_title">
                    <h5 className="card-title customer_cart_title_el">SET BÁNH TRÁNG PHƠI SƯƠNG DẺO- MUỐI TÔM HÀNH PHI BƠ BÉO NGẬY</h5>
                </div>
                <ul className="d-flex customer_cart_feedback">
                    <li className="list-group-item ">4.96 <i className="fa-solid fa-star customer_cart_feedback_icon"></i></li> | <li className="list-group-item">Đã bán 1000+</li>
                </ul>
                <div className="card-body customer_cart_price">
                    <p>1.000.000đ <span className="customer_cart_price_small">-5 %</span></p>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;