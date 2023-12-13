function Jugador ({infoJugador}) {
    return (

        <h1>{infoJugador.nombre}</h1>,
        <p>{infoJugador.edad}</p>,
        <p>{infoJugador.cuadro}</p>,
        <img src={infoJugador.url}/>,
      
    )
}
export default Jugador;