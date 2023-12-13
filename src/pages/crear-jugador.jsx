import { useState } from "react";

function CrearJugador() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [cuadro, setCuadro] = useState("");
  const [foto, setFoto] = useState("");
  const handleSubmit = async () => {
    const body = {
      name: nombre,
      age: edad,
      cuadro: cuadro,
      img: foto,
    };
    const respuesta = await fetch("http://localhost:8080/jugador/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    console.log(respuesta);
  };
  return (
    <div>
      <h1>Crear Jugador</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Edad:
          <input value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <label>
          Cuadro:
          <input value={cuadro} onChange={(e) => setCuadro(e.target.value)} />
        </label>
        <label>
          Foto:
          <input value={foto} onChange={(e) => setFoto(e.target.value)} />
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearJugador;