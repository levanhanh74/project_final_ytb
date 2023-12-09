import { Col, Row } from 'antd';


function HeaderComponent() {
    return (<>
        <header>
            <Row>
                <Col span={6}>col-6</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
            </Row>
            <Row>
                <Col span={6}>col-6</Col>
            </Row>
        </header>
    </>);
}

export default HeaderComponent;