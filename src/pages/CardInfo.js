import '../component/container/container.css'

const CardInfo = () =>{
  return(
    <div className="container container-info">
      <img src="https://cdn.dribbble.com/users/642793/screenshots/6643317/attachments/1419559/untitled_artwork_4.jpg?compress=1&resize=768x576&vertical=top" 
      style={{width: 400}}
      alt='imagen pokemon'
      ></img>
      <div className='info'>
        <h3>POKEDEX ENG</h3>
        <p> El pokédex en el mundo ficticio de Pokémon, es un dispositivo electrónico que interviene en los videojuegos y la serie de anime. En los juegos, su función es registrar los datos de un pokémon. En el manga y el anime, el Pokédex es una enciclopedia electrónica, la cual proporciona al entrenador información sobre un pokémon que es desconocido con tan solo exponer el pokédex en frente del pokémon.</p> 
      </div>
    </div>
  )
}


export default CardInfo