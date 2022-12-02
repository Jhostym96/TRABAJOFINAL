import axios from "axios";

const todoslosEstadios = async (state) => {

  const peticion = await axios.get("https://6363105c66f75177ea3c9307.mockapi.io/stadium")


  state(peticion.data)
}

export {
  todoslosEstadios
}