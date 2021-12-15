import css from './ListingCard.module.css';
import IconUI from '../../UI/IconUI';

function ListingCard({imgUrl, title, price}) {
    return (
        <div className={css.cardContainer}>
            <img src={imgUrl} alt=""/>
            <h2>{title}</h2>
            <h5><IconUI iconName={'fa-clock-o'}/>Time added</h5>
            <h5><IconUI iconName={'fa-tag'}/>Category</h5>
            <h2>$ {price}</h2>
        </div>
    );
}

export default ListingCard;
