import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1 className='titleColor'>Welcome to <span className="nowrap">Winnipeg Auto Shop!</span></h1>
            </header>
            <main className="public__main">
                <p className='titleColor'>Located in South Winnipeg, close to University of Manitoba.</p>
                <address className="public__addr">
                    Winnipeg Auto Shop<br />
                    1234 University Drive<br />
                    Winnipeg, MB, R3T 4X6<br />
                    <a className='titleColor' href="tel:+12049601111">(204) 960-1111</a>
                </address>
                <br />
                <p className='titleColor'> Owner: Prakhar Sharma</p>
            </main>
            <footer>
                <Link to="/login" >Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public