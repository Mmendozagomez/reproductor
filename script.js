
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
        <div><img src="" alt=""></div>
        <p>${song.title}</p>
        <p>${song.author}</p>
    `
    return div

}




