import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectBook } from "../actions/index";

class BookList extends Component {
    render() {
        return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
    }

    renderList() {
        return this.props.books.map(book => (
            <li key={book.title} className="list-group-item" onClick={() => this.props.selectBook(book)}>
                {book.title}
            </li>
        ));
    }
}

// Anything returned from this function will end up as props on the BookList container
function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result is passed to all our reducers
    return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList to a container - it needs to know about the dispatch method, selectBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
