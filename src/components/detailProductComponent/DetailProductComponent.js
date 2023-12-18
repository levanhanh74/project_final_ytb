import { useState } from "react";
import SliderDetailComponent from "../SliderDetailComponent/SliderDetailComponent";

function DetailProductComponent() {
    const [Quantity, setQuantity] = useState(1);
    return (
        <>
            <div className="pe-5 ps-5 col-5 bg-body-secondary ">
                <SliderDetailComponent />
            </div>
            <div className="col-6 flex-fill bg-info ps-3">
                <h3 className="text-secondary mb-2 fs-5 text-justify ">[Nhập mã CECAMP230KD1 giảm 230K cho đơn 6500k]Google Tivi Xiaomi A 4K 55 Inch L55M8-P2SEA</h3>
                <div className="d-flex">
                    <div className="d-flex">
                        <i class="fa-solid fa-star text-warning m-1"></i>
                        <i class="fa-solid fa-star text-warning m-1"></i>
                        <i class="fa-solid fa-star text-warning m-1"></i>
                    </div> |
                    <div className="ms-2 text-secondary "> Da ban 1000+</div>
                </div>
                <h2>200.000</h2>
                <p>Giao đến Q. Hải Châu, P. Hải Châu I, Đà Nẵng <a href="#">Change Address</a></p>
                <p>
                    Quanity
                    <div className="d-flex align-items-center">
                        <button className="btn border" onClick={() => setQuantity(prev => {
                            if (prev === 1) {
                                let setQun = 1;
                                return setQun;
                            } else {
                                let Quantity = prev - 1;
                                return Quantity
                            }
                        })}>-</button>
                        <p className="btn pe-flex pt-2 pb-2 m-0 text-light">{Quantity}</p>
                        <button className="btn border" onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>
                </p>
                <div className="mt-3 d-flex gap-2">
                    <button type="button" className="btn bg-danger text-light border-primary ps-5 pe-5">Chon Mua</button>
                    <button type="button" className="btn bg-light border-light text-info ps-5 pe-5">Mua Tra Sau</button>
                </div>
            </div>
        </>
    );
}
export default DetailProductComponent;