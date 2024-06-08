import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import CardGroup from 'react-bootstrap/CardGroup';

const HomePage = () => {

    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mb-3" >List Books Here</h1>
            <CardGroup>
            {
            books.map(book => <BookCard key={book.id} {...book.data()} />)
            }
            </CardGroup>
        </div>
    )
}

export default HomePage;