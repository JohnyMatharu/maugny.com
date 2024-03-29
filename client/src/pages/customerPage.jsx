// OrderHistory to be developed later after payment section is set, link chat and logged in chat here
// Mutation for addOrder is done on success page and information about order will be stored
// That info about the order is being accessed here. Logged chat will be put in later

import './customerPage.scss';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


export default function OrderHistory()  {

  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

    return (
        <section>
      <MDBContainer id="size">
 
    <div id="height1">


<div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>






</div>
    </MDBContainer >  
    </section>    
    )
}
