import Meditation from '../../assets/Meditation.png';
import Swimming from '../../assets/Swimming.png';
import Cycling from '../../assets/Cycling.png';
import Dumbbell from '../../assets/Dumbbell.png';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <nav className='footer_nav'>
                <ul>
                    <li className='footer_link'><img src={Meditation} alt='icon meditation' /></li>
                    <li className='footer_link'><img src={Swimming} alt='icon swimming' /></li>
                    <li className='footer_link'><img src={Cycling} alt='icon cycling' /></li>
                    <li className='footer_link'><img src={Dumbbell} alt='icon dumbbell' /></li>
                </ul>
            </nav>
            <p className='copyright'>Copiryght, SportSee 2020</p>
        </footer>
    )
}

export default Footer