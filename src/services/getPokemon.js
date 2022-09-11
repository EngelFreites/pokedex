

const getPokemon = async (name) =>{
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  try{
    const res = await fetch(url)
    if(!res.ok) throw Error()
    console.log('res ', res)
    const data = await res.json()
    return {data, found:true}
  }
  catch (error){
    console.log('error ',error)
    return {data:[], found:false} 
  }
}

export default getPokemon