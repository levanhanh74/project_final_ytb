import HeaderComponent from "../HeaderComponent/headerComponent";

function DefaultComponent({ children }) {
    return (<>
        <HeaderComponent />
        {children}
    </>);
}

export default DefaultComponent;