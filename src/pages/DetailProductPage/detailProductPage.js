import DetailProductComponent from "../../components/detailProductComponent/DetailProductComponent";

function DetailProductPage() {
    return (<>
        <div className="container ">
            <h1>Home</h1>
            <div className="row p-2 gap-2">
                <DetailProductComponent />
            </div>
        </div>
    </>);
}

export default DetailProductPage;