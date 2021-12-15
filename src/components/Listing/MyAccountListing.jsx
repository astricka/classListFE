import { useEffect, useState } from 'react';
import { useAuthContext } from '../../store/AuthContext';
import ListingCard from './ListingCard/ListingCard';
import css from './MyAccountListing.module.css';

function MyAccountListing() {
    const { authData } = useAuthContext();
    const [myListings, setMyListings] = useState([]);

    useEffect(() => {
        if (authData.email !== null) {
            fetchedData();
        }
    },  );

    const fetchedData = async () => {
        const resp = await fetch(`http://localhost:7000/api/listings/${authData.email}`);
        const data = await resp.json();
        setMyListings(data.data);
    }

    return(
        <section className={css.myListingContainer}>
            {myListings.map((item) => (
                <ListingCard key={item.id} title={item.title} price={item.price} imgUrl={item.image} />
            ))}
        </section>
    );
}

export default MyAccountListing;
