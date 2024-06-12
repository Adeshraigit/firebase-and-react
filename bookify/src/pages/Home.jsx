import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import { Col, Row } from "react-bootstrap";

const HomePage = () => {

    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, [])

    return (
    <>
        <div className="grid">
            <Row>
            {
            books.map((book) => <BookCard link={`/book/view/${book.id}`} id={book.id} key={book.id} {...book.data()} />)
            }
            </Row>
        </div>
        </>
    )
}

export default HomePage;