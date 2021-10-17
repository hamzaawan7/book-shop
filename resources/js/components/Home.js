import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  CardHeader,
} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      summaryData: null,
      books: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.loadBooks();
  }

  loadBooks() {
    axios.get('products')
      .then(resp => {
        if (resp && resp.data) {
          this.setState({
            books: resp.data
          })
        }
        this.setState({ loading: false })
      })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      this.state.loading ? this.loading() : <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader>
                All Available Books
              </CardHeader>
              <CardBody>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Book ID</th>
                      <th>Author</th>
                      <th>WholeSale Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      !this.state.books || this.state.books.length == 0 ?
                      <tr>
                        <td className="text-center" colSpan="100">No Chat History Found</td>
                      </tr>
                      :
                      this.state.books.map((book, bookIndex) => {
                        return <tr key={bookIndex}>
                          <td>
                          {book.book_id}
                          </td>
                          <td>
                          {book.author}
                          </td>
                          <td>
                          {book.wholesale_price}
                          </td>
                        </tr>
                    })
                    }
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
export default Home;
