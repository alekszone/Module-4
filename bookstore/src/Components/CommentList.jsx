import React from 'react'
import {ListGroup} from 'react-bootstrap' 

 class CommentList extends React.Component{
    state = {
        reservations: [],
      
      }
  
componentDidMount = async () => {
    // THIS IS THE PERFECT PLACE TO MAKE FETCHES
    // console.log("I'm in the componentDidMount method")
    try {
      let response = await fetch("https://striveschool.herokuapp.com/api/comments" ,{
      headers:{
          "Authorization" : "Basic" + btoa('user2:4Lr9nqHZZZDNUy7L'),
          "Content-Type": 'application/json'

      }


      } )
      let reservations = await response.json()
      console.log('RESERVATIONS ARE: ', reservations)
      this.setState({
        reservations: reservations
      })
    } catch (err) {
      console.log('error!', err)
    }
  }
 render(){
    return(
        <div className="mt-2">
        <ListGroup>
          {this.state.reservations.map((reservation, i) => {
            return (
              <ListGroup.Item key={i}>
                From: {reservation.comment}, for {reservation.rate}
                  at {reservation.elementId}
              </ListGroup.Item>
            )
          })
          }
        </ListGroup>
        {this.state.reservations.length === 0 && (<div>No comments</div>)}
      </div>
    )

    
        
}
}


export default CommentList