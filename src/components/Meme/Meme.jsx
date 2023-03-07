import {useState, useEffect} from 'react';
import './Meme.scss';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/345v97.jpg'
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, []);

    function getNewMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handlerChange(event) {
        const {name, value} = event.target;
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }));
    }

    return (
        <main className="main--wrapper">
            <form className="form">
                <input 
                    type="text" 
                    className="top--text" 
                    placeholder="Top text"
                    name="topText" 
                    value={meme.topText}
                    onChange={handlerChange}
                />
                <input 
                    type="text" 
                    className="bottom--text" 
                    placeholder="Bottom text"
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handlerChange}
                /> 
                <button
                    type="button" 
                    onClick={getNewMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
}
