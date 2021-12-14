import ListingCard from './ListingCard/ListingCard';
import css from './Listing.module.css';

const myArr = [
    {id: 1, title: 'very cool', imgUrl: 'https://g2.dcdn.lt/images/pix/vytautas-sustauskas-62270925.jpg', price: 420},
    {id: 1, title: 'very cool', imgUrl: 'https://g2.dcdn.lt/images/pix/vytautas-sustauskas-62270925.jpg', price: 420},
    {id: 1, title: 'very cool', imgUrl: 'https://g2.dcdn.lt/images/pix/vytautas-sustauskas-62270925.jpg', price: 420},
    {id: 1, title: 'very cool', imgUrl: 'https://g2.dcdn.lt/images/pix/vytautas-sustauskas-62270925.jpg', price: 420},
    {id: 1, title: 'very cool', imgUrl: 'https://g2.dcdn.lt/images/pix/vytautas-sustauskas-62270925.jpg', price: 420},
    {id: 1, title: 'very cool', imgUrl: 'https://g2.dcdn.lt/images/pix/vytautas-sustauskas-62270925.jpg', price: 420},
];

function Listing() {
    return(
        <section className={css.listingContainer}>
            {myArr.map((item) => (
               <ListingCard key={item.id} title={item.title} price={item.price} imgUrl={item.imgUrl} />
            ))}
        </section>
    );
}

export default Listing;
