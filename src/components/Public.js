import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Winnipeg Auto Shop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in South Winnipeg, close to University of Manitoba.</p>
                <address className="public__addr">
                    Winnipeg Auto Shop<br />
                    1234 University Drive<br />
                    Winnipeg, MB, R3T 4X6<br />
                    <a href="tel:+12049601111">(204) 960-1111</a>
                </address>
                <br />
                <p>Owner: Prakhar Sharma</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public