function TypeProduct() {
    const arrType = ['TV', "Tu Lanh", "May Giat", "Dieu Hoa"];

    return (
        <>

            <ul className="nav justify-content-center nav_type_customer">
                {
                    arrType.map(value => {
                        return (
                            <li className="nav-item nav_type_customer_element" key={value}>
                                <a className="nav-link nav_type_customer_element_link" aria-current="page" href="#">{value}</a>
                            </li>
                        );
                    })
                }
            </ul>
            <hr  className="nav_type_product"/>
        </>
    );
}

export default TypeProduct;