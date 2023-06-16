import Header from '../Header/Header';
import Meme from '../Meme/Meme';
import Footer from '../Footer/Footer';
import './App.scss';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Meme />
            <Footer />
        </div>
    );
}