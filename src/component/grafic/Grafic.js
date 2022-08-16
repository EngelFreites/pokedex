import { Bar } from "react-chartjs-2"

const Grafic = ({hp, def, speed, atk})=>{
  const data = {
    labels:['HP','ATK', 'DEFF', 'SPEED',],
    datasets:[{
      label:'Information',
      backgroundColor:'green',
      borderColor:'black',
      borderWidth: 1,
      data:[hp, atk, def, speed]
    }]
  }
  const options = {
    responsive: true 
  }

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}


export default Grafic