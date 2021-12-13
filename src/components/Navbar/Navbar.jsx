import css from './Navbar.module.css';
import NavigationLinkUI from '../UI/NavigationLinkUI';
import { NavLink } from 'react-router-dom';

const linksArr = [
    {id: 1, title: "Home", class: "isActive", to: "/"},
    {id: 2, title: "Login", class: "isActive", to: "/login"},
    {id: 3, title: "Register", class: "isActive", to: "/register"},
];

function Navbar() {
    return(
        <section className={css.navContainer}>
            <div>
                <img src="https://www.radiustheme.com/demo/wordpress/themes/classilist/wp-content/themes/classilist/assets/img/logo-dark.png" alt="logo"/>
            </div>
            <nav className={css.linksContainer + ' main-nav'}>
                {linksArr.map((item) => (
                    <NavLink exact={true} key={item.id} to={item.to} className={css.active}>{item.title}</NavLink>
                ))}
            </nav>
        </section>
    );
}

export default Navbar;