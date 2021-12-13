import css from './Navbar.module.css';
import NavigationLinkUI from '../UI/NavigationLinkUI';

const linksArr = [
    {id: 1, title: "Home", class: "isActive", to: "/home"},
    {id: 2, title: "Login", class: "isActive", to: "/login"},
    {id: 3, title: "Register", class: "isActive", to: "/register"},
];

function Navbar() {
    return(
        <section className={css.navContainer}>
            <div>
                <img src="https://www.radiustheme.com/demo/wordpress/themes/classilist/wp-content/themes/classilist/assets/img/logo-dark.png" alt="logo"/>
            </div>
            <nav className={css.linksContainer}>
                {linksArr.map((item) => (
                    <NavigationLinkUI exact key={item.id} title={item.title} to={item.to} linkClassName={css.isActive}/>
                ))}
            </nav>
        </section>
    );
}

export default Navbar;