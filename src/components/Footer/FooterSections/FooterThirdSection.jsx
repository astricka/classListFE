import css from '../Footer.module.css';

const thirdSectionArr = [
    {id: 1, title: 'Live Chat'},
    {id: 2, title: 'FAQ'},
    {id: 3, title: 'How to Stay Safe'},
    {id: 4, title: 'Terms & Conditions'},
    {id: 5, title: 'Contact Us'},
];

function FooterThirdSection() {
    return(
        <div className={css.secondSection}>
            <h3>Help & Support</h3>
            <div className={css.borderBottom}></div>
            <ul>
                {thirdSectionArr.map((item) => (
                    <li key={item.id}><a href='www.facebook.com'>{item.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default FooterThirdSection;