import React, { useState } from 'react';
import Image from './Image';
function Search(props) {
    const apiKey = "NwFTlAHi4toyBcW3PTsb8JmJIJwqweQa";
    const [text, setText] = useState("")
    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }
    let data = "123"

    function handleSubmit(e) {
        console.log("setText is.." + setText)
        console.log(text)
        let requestURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + text + "&limit=25&offset=0&rating=g&lang=en"
        console.log(requestURL)
        fetch(requestURL)
            .then(response => response.json())
            .then(response => {
                data = response;
                console.log("see this data" + response)
            })
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={text} />
            </form >
            <Image max="12qwe3" data={data} />
        </React.Fragment >
    );
}

export default Search;