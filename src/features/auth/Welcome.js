import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {
    const { username, isManager, isAdmin } = useAuth()
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p className='titleColor'>{today}</p>

            <h1 className='titleColor'>Welcome {username}!</h1>

            <p className='titleColor'><Link to="/dash/notes"> View Current Auto Notes </Link></p>
            <p className='titleColor'><Link to="/dash/notes/new"> Add Auto New Notes </Link></p>

            {(isManager || isAdmin) && <p className='titleColor'><Link to="/dash/users">View User Settings</Link></p>}
            {(isManager || isAdmin) && <p className='titleColor'><Link to="/dash/users/new"> Add New User </Link></p>}

        </section>
    )

    return content
}
export default Welcome