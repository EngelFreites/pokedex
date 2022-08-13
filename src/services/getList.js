const getList = (array) => {
  const allpokemon = Promise.all(
    array.map(pokemon => {
      const call = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const convert = call.then(result => result.json())
      return convert
    })
  )
  return allpokemon
}



export default getList