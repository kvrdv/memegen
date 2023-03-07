import trollFace from '../../images/trollFace.png';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} />
            <h1>Meme Generator</h1>
        </header>
    );
}
