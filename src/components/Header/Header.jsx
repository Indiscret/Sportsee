import Logo from '../../assets/Sportsee_logo.png';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <img className='header_logo' src={Logo} alt='Logo SportSee'/>
            <nav className='header_nav'>
                <ul>
                    <li className='header_link'>Accueil</li>
                    <li className='header_link'>Profil</li>
                    <li className='header_link'>Réglage</li>
                    <li className='header_link'>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header