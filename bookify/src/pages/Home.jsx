import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";

const HomePage = () => {

    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mb-3" >List Books Here</h1>
            {
            books.map((book) => <BookCard link={`/book/view/${book.id}`} id={book.id} key={book.id} {...book.data()} />)
            }
        </div>
    )
}

export default HomePage;