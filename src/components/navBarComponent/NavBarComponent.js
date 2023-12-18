function NavBarComponent() {
    const renderContent = (type, option) => {
        switch (type) {
            case "text":
                return option.map(value => {
                    return (
                        <li key={value} className="list-unstyled fst-italic ps-1 text-secondary">{value}</li>
                    )
                })
            case "checkbox":
                return option.map(value => {
                    return (
                        <div key={value.label} className="m-2">
                            <label htmlFor={value.label} className="pe-1"> {value.label}</label>
                            <input type="checkbox" id={value.label} value={value.inputVal} />
                        </div>
                    )
                })
            case "star":
                return option.map(value => {
                    return (
                        <div key={value.numStar} className="m-2 d-flex">
                            <li className="list-unstyled pe-2">{value.iconStar}</li>
                            <li className="list-unstyled">tu {value.numStar} sao</li>
                        </div>
                    )
                })
            case "price":
                return option.map(value => {
                    return (
                        <div className="d-block mt-2" key={value}>
                            <li className="bg-info text-light list-unstyled d-inline ps-2 pe-2 pt-1 pb-1 rounded-4">{value}</li>
                        </div>
                    )
                })

            default:
                break;
        }
    }
    return (<>
        <h5 className="text-secondary fst-italic fs-5 fw-bold">Lable</h5>
        <hr className="me-5" />
        <div className="pe-1">
            {renderContent('text', ["TV", "Tu Lanh", "May Giat"])}
            <hr className="me-5" />
            <div className="d-flex">
                {renderContent('checkbox', [
                    { label: "A", inputVal: "A" },
                    { label: "B", inputVal: "B" },
                    { label: "C", inputVal: "C" },
                ])}
            </div>
            <hr className="me-5" />
            <div className="d-block">
                {renderContent('star', [
                    { iconStar: "A", numStar: 3 },
                    { iconStar: "B", numStar: 4 },
                    { iconStar: "C", numStar: 5 },
                ])}
            </div>
            <hr className="me-5" />
            {renderContent('price', ["duoi 40.000", "tren 100.000000"])}
        </div>
    </>);
}

export default NavBarComponent;