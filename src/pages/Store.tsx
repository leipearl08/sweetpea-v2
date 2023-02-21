import { MDBCol, MDBRow } from "mdb-react-ui-kit"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return (
    <>
    <h1>Our Cakes</h1>
    <Row md={2} xs={1} lg={3} className="g-3 mb-5">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
    </Row>
    <hr />
    <div id='contSection'>
    <MDBRow>
        <MDBCol md='7' className='col-example'>
        <h1 className='mb-3'>Contact Us</h1>
        <h2>SweetPea Group Inc.</h2>
            <p>201 A. Charleston Blvd.
            <br />Brooklyn, NY 11211
            <br />phone: (212) 509-6995
            <br />email: shop@sweetpea.com</p>
        </MDBCol>
    </MDBRow>
</div>
    </>
    )
}