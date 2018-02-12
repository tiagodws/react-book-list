// Action creator, returns an action
export function selectBook(book) {
    return {
        type: "BOOK_SELECTED",
        payload: book,
    };
}
