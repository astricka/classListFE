import css from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../../store/AuthContext';

const linksArr = [
    {id: 1, title: "Home", class: "isActive", to: "/", auth: true},
    {id: 2, title: "Login", class: "isActive", to: "/login", auth: false},
    {id: 3, title: "Register", class: "isActive", to: "/register", auth: false},
    {id: 4, title: "My account", class: "isActive", to: "/myAccount", auth: true},
];

function Navbar() {
    const { authData, isLoggedIn, logout } = useAuthContext();
    const filteredArr = linksArr.filter(({ auth }) => auth === isLoggedIn);

    return(
        <section className={css.navContainer}>
            <div>
                <img src="https://www.radiustheme.com/demo/wordpress/themes/classilist/wp-content/themes/classilist/assets/img/logo-dark.png" alt="logo"/>
            </div>
            <nav className={css.linksContainer + ' main-nav'}>
                {filteredArr.map((item) => (
                    <NavLink exact={true} key={item.id} to={item.to} className={css.active}>{item.title}</NavLink>
                ))}
                {isLoggedIn && (
                    <Link to='/logout'
                        onClick={(e) => {
                            e.preventDefault();
                            logout();
                        }}
                    >
                        LOGOUT ({authData.email})
                    </Link>
                    )}
            </nav>
        </section>
    );
}

export default Navbar;
