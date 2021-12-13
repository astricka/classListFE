import { NavLink } from 'react-router-dom';

function NavigationLinkUI({ to, title, linkClassName }) {
    return(
        <NavLink activeClassName={linkClassName} to={to}>{title}</NavLink>
    );
}

export default NavigationLinkUI