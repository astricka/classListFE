import ListingCard from './ListingCard/ListingCard';
import css from './Listing.module.css';
import { useEffect, useState } from 'react';

function Listing() {
    const [listingArr, setListingArr] = useState([]);
    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        const resp = await fetch('http://localhost:7000/api/listings');
        const data = await resp.json();
        setListingArr(data.data);
        console.log(data.data);
    }

    return(
        <section className={css.listingContainer}>
            {listingArr.map((item) => (
               <ListingCard key={item.id} title={item.title} price={item.price} imgUrl={item.image} />
            ))}
        </section>
    );
}

export default Listing;
