import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from '../context/Firebase'

const ViewOrderDetails = () => {
    const params = useParams();
    const firebase = useFirebase();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs))
    }, [])

    return <div className="container mt-3" >
        <h1>Orders</h1>
        {
            orders.map((order,key) => {
                const data = order.data();
                return <div 
                className="mt-5"
                style={{ border: '1px solid', padding: '10px' }}
                key={key} >
                    <h5>Order By: {data.displayName}</h5>
                    <h6>Quantity: {data.qty}</h6>
                    <p>Email: {data.userEmail}</p>
                    </div>
            })
        }
    </div>
}

export default ViewOrderDetails;