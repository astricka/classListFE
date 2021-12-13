import css from '../Footer.module.css';

const secondSectionArr = [
    {id: 1, title: 'Selling tips'},
    {id: 2, title: 'Buy and Sell Quickly'},
    {id: 3, title: 'Membership'},
    {id: 4, title: 'Banner Advertising'},
    {id: 5, title: 'Promote Your Ad'},
];

function FooterSecondSection() {
    return(
        <div className={css.secondSection}>
            <h3>Information</h3>
            <div className={css.borderBottom}></div>
            <ul>
                {secondSectionArr.map((item) => (
                    <li key={item.id}><a href='www.facebook.com'>{item.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default FooterSecondSection;