import css from '../Footer.module.css';
import IconUI from '../../UI/IconUI';

const iconsArr = [
    {id: 1, name: 'fa-facebook', link: '//www.facebook.com'},
    {id: 2, name: 'fa-twitter', link: '//www.twitter.com'},
    {id: 3, name: 'fa-google-plus', link: '//www.google.com'},
    {id: 4, name: 'fa-linkedin', link: '//www.linkedin.com'},
    {id: 5, name: 'fa-pinterest-p', link: '//www.pinterest.com'},
];

function FooterFirstSection() {
    return(
        <div>
            <img src="https://www.radiustheme.com/demo/wordpress/themes/classilist/wp-content/uploads/2018/11/dark.png" alt="logo"/>
            <p>ClassiList a Largest Classified Marketplace offers perfect WordPress Ads classified Themes to build your own classified websites.</p>
            <ul className={css.iconsList}>
                {iconsArr.map((iconItem) => (
                    <li key={iconItem.id}><a rel="noreferrer" href={iconItem.link} target="_blank"><IconUI iconName={iconItem.name} /></a></li>
                ))}
            </ul>
        </div>
    );
}

export default FooterFirstSection;