

const getPokemon = (name) =>{
  console.log(name)
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const res = fetch(url)
  const data = res.then(result => result.json())
 
  return data
  
}

export default getPokemon