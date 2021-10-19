import Page from "./Page";
import Loading from "./Loading";
import axios from "axios";
import React, {Component} from 'react';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            book: []
        };
    }

    componentDidMount() {
        this.setState({loading: true})
        this.loadBook();
    }

    loadBook() {
        axios.get("/books/" + this.props.match.params.id)
            .then(resp => {
                if (resp && resp.data) {
                    this.setState({
                        book: resp.data
                    })
                }

                this.setState({loading: false})
            });
    }

    buyNow() {
        alert("Thank you for your purchase");
    };

    render() {
        return this.props.loading ? (
            <Loading/>
        ) : (
            <Page breadCrumbs="Book" title={this.state.book.title}>
                <img src={this.state.book.image} height={200} width={200}/>
                <br/>
                Author : {this.state.book.author}
                <br/>
                Price : {this.state.book.price}
                <br/>
                Pages : {this.state.book.pages}
                <br/>
                <button
                    type="button"
                    style={{marginRight: '0.5%'}}
                    className="btn btn-rounded btn-sm btn-primary float-right mt-2"
                    onClick={this.buyNow}
                >
                    <i className="fas fa-share"/>
                    &nbsp;
                    Buy Now
                </button>
            </Page>
        );
    }
}

export default Books;
