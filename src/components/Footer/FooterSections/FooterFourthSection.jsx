import css from '../Footer.module.css';
import IconUI from '../../UI/IconUI';

const fourthSectionArr = [
    {id: 1, title: '44 New Design Street, Australia', iconName: 'fa-map-marker'},
    {id: 2, title: '32480043363', iconName: 'fa-volume-control-phone'},
    {id: 3, title: 'info@example.com', iconName: 'fa-envelope-o'},
    {id: 4, title: '(123) 118 9999', iconName: 'fa-fax'},
];

function FooterFourthSection() {
    return(
        <div className={css.secondSection}>
            <h3>Contact info</h3>
            <div className={css.borderBottom}></div>
            <ul className={css.contactInfoContainer}>
                {fourthSectionArr.map((item) => (
                    <li key={item.id}><IconUI iconName={item.iconName} /><a href="www.facebook.com">{item.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default FooterFourthSection;