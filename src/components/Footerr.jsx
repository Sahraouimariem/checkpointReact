function Footerr(props) {
    console.log(props)
    return(
    <footer style={{background:props.dark===true?"black":"white",color:props.dark===true?"white":"black"}} className="footer">
    <div className="container container-fluid">
        <div className="row footer__links">
            <div className="col footer__col">
                <div className="footer__title">Docs
                </div>
                <ul className="footer__items clean-list">
                    <li className="footer__item"><a className="footer__link-item" href="/docs/getting-started/introduction">Getting Started</a></li>
                    <li className="footer__item"><a className="footer__link-item" href="/docs/layout/breakpoints">Layout</a></li>
                    <li className="footer__item"><a className="footer__link-item" href="/docs/forms/overview">Forms</a></li>
                    <li className="footer__item"><a className="footer__link-item" href="/docs/components/accordion">Components</a></li>
                    <li className="footer__item"><a className="footer__link-item" href="/docs/utilities/transitions">Utilities</a></li>
                </ul>
            </div>
            <div className="col footer__col">
                <div className="footer__title">Community
                </div>
                <ul className="footer__items clean-list"><li className="footer__item"><a href="https://stackoverflow.com/questions/tagged/react-bootstrap" target="_blank" rel="noopener noreferrer" className="footer__link-item">Stack Overflow<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                    <li className="footer__item"><a href="https://discord.gg/AKfs9vpvRW" target="_blank" rel="noopener noreferrer" className="footer__link-item">Discord<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li></ul>
            </div>
            <div className="col footer__col">
                <div className="footer__title">More</div>
                <ul className="footer__items clean-list"><li className="footer__item"><a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank" rel="noopener noreferrer" className="footer__link-item">GitHub<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li></ul>
            </div>
        </div>
        <div className="footer__bottom text--center"><div className="footer__copyright">Copyright © 2024 React Bootstrap. Built with Docusaurus.</div></div></div>
</footer>
 );
}
export default Footerr;