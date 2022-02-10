import Navbar from "./Nav/Navbar";
import DisplayofProductImages from "./display of product images/DisplayofProductImages";
import Info from "./product info/Info";
import ProductAction from "./product action/ProductAction";
import { Container, Row, Col } from "react-bootstrap";



export default function App() {
    return (
        <div className="container p-sm-0 p-0 mb-5" >

            <Navbar />

            <Container className="mt-md-5 mt-lg-5">
                <Row className="d-flex">

                    <Col className="p-sm-0 p-0" md sm="12">

                        <DisplayofProductImages />

                    </Col>

                    <Col 
                     md 
                     sm="12" 
                     className="d-flex flex-column justify-content-center my-2"
                    >
                        
                        <Info />
                        <ProductAction />

                    </Col>

                </Row>
            </Container>


        </div>
    )
}