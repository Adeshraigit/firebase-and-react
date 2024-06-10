import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

const OrderPage = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.fetchMyBooks()?.then((books) => setBooks(books))
    },[firebase])

    console.log(books);

    return (
        <div>
            Orders
        </div>
    )
}

export default OrderPage;