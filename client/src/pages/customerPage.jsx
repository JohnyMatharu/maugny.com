// HERE is an example of what page will look like after the auth has been approved and only 
//then they can see the logged in info, customer can only then see their customer history
//from back end, previous purchases and personal details, speacial one to one chats etc.
/*
import React from 'react';
import Auth from '../utils/auth';
import Loading from '../components/Loading'
import AuctionForm from '../components/AuctionForm';
import { useParams } from 'react-router-dom';

const AddAuction = ( ) => {

        // check for params. if yes, is edit form. if no, is new form
    const { id: _id } = useParams();

    const loggedIn = Auth.loggedIn();

    return (
        <>
        { ( !loggedIn ) && <Loading /> }
        { ( loggedIn && !{id: _id }.id ) && <><h1>Create New Auction</h1><AuctionForm /></> }
        { ( loggedIn && {id: _id }.id ) && <><h1>Edit Auction</h1><AuctionForm mode={ 'edit' } auction={ { id: _id } }/></> }
        
        </>
    );
};
export default AddAuction;

*/

/*
This is an example of actual orderHistory page from myBid

import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Auctions</Link>

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
                  {order.auctions.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/auctions/${_id}`}>
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
    </>
  );
}

export default OrderHistory;




*/








import './customerPage.scss';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';


function customerPage() {
    return (
        <section>
      <MDBContainer id="size">
         
    {/* Following can be adjused for bold as needed */}
    <div id="height1"><h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>This is Customer Page</h3>
</div>
    </MDBContainer >  
    </section>    
    )
}

export default customerPage()