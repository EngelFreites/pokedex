const getPokemons = (url) =>{

  const res = fetch(url).then( result => result.json())

  console.log('hola res', res)
  return res
}

export default getPokemons


