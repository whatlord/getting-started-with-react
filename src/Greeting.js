function Greeting({language="en"}){
    switch(language){
        case "es":
            return <h1>Hola!</h1>
        case "fr":
            return <h1>Bonjour!</h1>
        case "en": 
            return <h1>Hello!</h1>
        case "th": 
            return <h1>Sawasdee!</h1>
    }
}

export default Greeting;