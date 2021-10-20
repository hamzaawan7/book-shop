import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import {
    Card,
    CardBody,
    Col,
    Row,
    CardHeader,
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            books: []
        };
    }

    componentDidMount() {
        this.setState({loading: true})
        this.loadBooks();
    }

    loadBooks() {
        axios.get('books')
            .then(resp => {
                if (resp && resp.data) {
                    this.setState({
                        books: resp.data
                    })
                }
                this.setState({loading: false})
            })
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            this.state.loading ? this.loading() :
                <Container fluid="sm">
                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" lg="12">
                                <Card>
                                    <CardHeader>
                                        All Available Books
                                    </CardHeader>
                                    <CardBody>
                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                                <th>Book Name</th>
                                                <th>Author Name</th>
                                                <th>Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                !this.state.books || this.state.books.length === 0 ?
                                                    <tr>
                                                        <td className="text-center" colSpan="100">No Books Found</td>
                                                    </tr>
                                                    :
                                                    this.state.books.map((book, bookIndex) => {
                                                        return <tr key={bookIndex}>
                                                            <td>
                                                                <Link
                                                                    to={"books/" + book.shopify_product_id}>
                                                                    {book.title}
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                {book.author}
                                                            </td>
                                                            <td>
                                                                {book.price}
                                                            </td>
                                                        </tr>
                                                    })
                                            }
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
        );
    }
}

export default Home;
