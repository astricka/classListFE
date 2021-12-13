import css from './Footer.module.css';

function Footer() {
    return(
        <section className={css.footerContainer}>
            <footer>
                <div>
                    first section
                </div>
                <div>
                    second section
                </div>
                <div>
                    third section
                </div>
                <div>
                    fourth section
                </div>
            </footer>
        </section>
    );
}

export default Footer;