import React, {Component} from 'react';
import {Container,Row,Col,Card,Form,Carousel,Badge} from 'react-bootstrap'
import Fantasy from '../data/fantasy.json'
export default class fantasy extends Component {
    

    state ={
        books:fantasy,
        category:'romance'
    }
    render () 
    {
        return(
            <>
                <Col className="mt-5 pl-2">
                <Card style={{ width: '16rem',height :'30rem' }} className="ml-2">
                    <Card.Img   style={{height :'20rem' }} variant="top" src={this.props.img}  />
                    <Card.Body className="pt-auto">
                     <Card.Title >{this.props.title.slice(0,30)}</Card.Title>
                        <Card.Text className="text-center mt-auto">
                        <Badge variant="danger">{this.props.price}</Badge>
                        <p>{this.props.category.toUpperCase()}</p>
                        </Card.Text>
                    </Card.Body>


                    
            </Card>
            </Col>
        </>
        )
    }
}