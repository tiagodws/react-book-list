import React, { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

export default class App extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <h1 class="page-title">Book List</h1>
                </div>
                <div class="row">
                    <BookList />
                    <BookDetail />
                </div>
            </div>
        );
    }
}
