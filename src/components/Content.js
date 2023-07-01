import React from 'react';

export default function Content() {

    const [meme, setMeme] = React.useState({})
    let [url, setUrl] = React.useState('https://i.imgflip.com/grr.jpg')

    React.useEffect(function(){
        fetch('https://api.imgflip.com/get_memes')
        .then(x => x.json())
        .then(x => setMeme(x.data.memes))
    }, [url])

    function getMemeImage(){
        const randomeNumber = Math.floor(Math.random() * meme.length)
        setUrl(x => meme[randomeNumber].url)
    }

    const [text, setText] = React.useState({
        topText: '',
        buttomText: ''
    })

    function setTexts(event){
        event.preventDefault()
        setText(x => ({...x, [event.target.name]: event.target.value}))
    }

    return(

        <div className='content'>
            <div className='content--buttons'>
                <input
                    className='br'
                    type='text'
                    name='topText'
                    value={text.topText}
                    placeholder='Top text' 
                    onChange={setTexts}
                />

                <input
                    className='br'
                    type='text'
                    name='buttomText'
                    value={text.buttomText}
                    placeholder='Buttom text' 
                    onChange={setTexts}
                />
                <input
                    className='content--input--button br'
                    type='button'
                    value='Get a new Meme image' 
                    onClick={getMemeImage}
                />
            </div>

            <div className='content--memeImage'>
                <img
                    className='content--memeImage--image'
                    src={url}
                    alt='MemeImage' 
                />
                <p>Abdul Wahid Husaini loves the Mohammad Waris Fayiz</p>
                <h1 className='topText'>{text.topText}</h1>
                <h1 className='buttomText'>{text.buttomText}</h1>
            </div>
        </div>
    )
}
