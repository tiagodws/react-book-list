import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    render() {
        const { book } = this.props;

        if (!book) {
            return (
                <div>
                    <i>No book selected.</i>
                </div>
            );
        }

        return (
            <div className="col-sm-8">
                <div className="form-group">
                    <h3>Details for:</h3>
                    <span>
                        <strong>{book.title}</strong>
                    </span>
                </div>
                <table className="table table-bordered book-detail-table">
                    <tbody>
                        <tr>
                            <th>Author</th>
                            <td>{book.author}</td>
                        </tr>
                        <tr>
                            <th>Pages</th>
                            <td>{book.pages}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

// Anything returned from this function will end up as props on the BookDetail container
function mapStateToProps(state) {
    return {
        book: state.activeBook,
    };
}

// Promote BookDetail to a container
export default connect(mapStateToProps)(BookDetail);
