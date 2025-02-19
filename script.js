
// pedimos la información al servidor con axios
// el protocolo es http

axios.get('https://api.institutoalfa.org/api/songs')
// cuando la informacion este lista se activa el .then
.then(function (respuesta) {

    // guardo en canciones lo que venga de la respuesta
    const canciones = respuesta.data.songs
    // .map mapea, recorre o descompone las canciones
    canciones.map(function (cancion){
        // lo que esta aqui dentro se va a repetir en toda la lista
        console.log(cancion.title)
        document.getElementById('container').appendChild(
            crearComponenteCancion(cancion)
        )
    })
  })


//   crea un componente cancion y lo regresa
function crearComponenteCancion(song) {
    const div = document.createElement('div')

    div.setAttribute('class', 'cancion')
    div.innerHTML = `
        <div><img src="${song.image.url}" alt=""></div>
        <div><p>${song.title}</p>
        <p>${song.author}</p></div>
    `
    div.addEventListener("click",function(){
        
        document.getElementById("audio")
            .setAttribute("src", song.audio.url)

        document.getElementById("imagen")
            .setAttribute("src", song.image.url)
        
        document.getElementById("title") 
            .innerHTML = song.title
        
        document.getElementById("author")
            .innerHTML = song.author
        
        document.getElementById("album")
            .innerHTML = song.album

        document.getElementById("duration")
            .innerHTML = song.duration

    })

    return div

}

const audio = document.getElementById("audio")


document.getElementById("play-button").addEventListener("click", function(){
   
    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
})




