import css from './Footer.module.css';
import FooterFirstSection from './FooterSections/FooterFirstSection';
import FooterSecondSection from './FooterSections/FooterSecondSection';
import FooterThirdSection from './FooterSections/FooterThirdSection';
import FooterFourthSection from './FooterSections/FooterFourthSection';

function Footer() {
    return(
        <section className={css.footerContainer}>
            <footer className={css.mainFooter}>
                <FooterFirstSection />
                <FooterSecondSection />
                <FooterThirdSection />
                <FooterFourthSection />
            </footer>
        </section>
    );
}

export default Footer;