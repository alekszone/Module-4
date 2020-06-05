import React, {Component} from 'react';
import {Container,Col,Row,Form,Dropdown,InputGroup,DropdownButton,FormControl} from 'react-bootstrap'
import Categories from './Categories'

// import warningSign from './WarningSign';

let bookCategory = ['fantasy','romance','horror','scifi','history'],
booksArray = {
    fantasy : require('../data/fantasy.json'),
    romance : require('../data/romance.json'),
    horror : require('../data/horror.json'),
    scifi : require('../data/scifi.json'),
    history : require('../data/history.json')
}


export default class bookList extends Component {
        
    
    constructor(props) {
            super(props);
        
            this.state = {
              books: booksArray.fantasy.slice(0, 12),
              categorySelected: 'fantasy',
            };
          }
            
        handleDropdownChange = (category) => {
              this.setState({
              books: booksArray[category].slice(0, 12),
              categorySelected: category,
                });
        };
        handleSearchQuery = (searchQuery) => {
            let category = this.state.categorySelected;
            console.log(searchQuery)
            if (searchQuery) {
              let filteredBooks = booksArray[category].filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              this.setState({ books: filteredBooks.slice(0, 12) });
              console.log(this.state.books)
            } else {
              this.setState({ books: booksArray[category].slice(0, 12) });
            }
          };
        render () {
        return (
            <>

            <Container>
               
            <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.categorySelected}
            >
              {bookCategory.map((category, index) => {
                return (
                  <Dropdown.Item
                        href="#/action-1"
                        key={`dropdown-category-${index}`}
                        onClick={() => this.handleDropdownChange(category)}
                      >
                        {category}

                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <FormControl
            style={{width:"10rem;"}}
           
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
            </Container>
            <Container>
                <Row sm={4}>
               {this.state.books.map(book => {
                    return (
                    
                        <Categories
                        img={book.img}
                        title={book.title}
                        price={book.price}
                        category={book.category}
                        />)

               })}
                </Row>
            </Container>
            </>

        )
    }
}