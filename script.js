const cancion = {
    _id: '1',
    author: 'Molotov',
    title: 'Give me the power',
    duration: '4:10',
    audio: {
        id: '',
        url: '',
        filename: ''
    },
    image: {
        id: '',
        url: '',
        filename: ''
    },
}




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

console.log(
    crearComponenteCancion(cancion)
)
