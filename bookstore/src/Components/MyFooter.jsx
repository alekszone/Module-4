import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap'

export default class MyFooter extends Component {
    render()
    {
        return(
            <Container fluid className="mt-5">
            <Row>
                <Col sm={12} className="mt-5 footer mx-0 p-0">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid p-3" style={{width:'80px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt=""/>
                        </div>
                    <div className="row text-center text-dark">
                        <p className="col-3 p-0 m-0">Name</p>
                        <p className="col-3 p-0 m-0">Address</p>
                        <p className="col-3 p-0 m-0">Phone Number</p>
                        <p className="col-3 p-0 m-0">Email</p>
                    </div>
                    </Col>
                
                </Row>
</Container>
        )
    }
}