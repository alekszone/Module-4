import React, {Component} from 'react';
import {Jumbotron,Container,Col} from 'react-bootstrap'

export default class Head extends Component {
    render()
    {
        return(
            <>
            <Jumbotron fluid>
                <Container>
                    <h1 className="text-center">{this.props.text}</h1>
                    <p className="text-center mt-5">
                   {this.props.description}
                    </p>    
                </Container>
            </Jumbotron>
            </>
        )
    }
}