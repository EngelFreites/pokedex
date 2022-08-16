import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler } from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  BarElement,
  PointElement,
  Title,
  LinearScale,
  Tooltip, 
  Legend,
  Filler
)



const Grafic = ({hp, def, speed, atk})=>{
  const labels = ['HP','ATK', 'DEFF', 'SPEED']
  console.log(isNaN(hp))
  const data = {
    datasets:[{
      label:'Information',
      data:[hp, atk, def, speed],
      backgroundColor:'green',
      borderColor:'black',
      borderWidth: 1,
    }],
    labels
  }
   
  const options = {
    fill: true,
    responsive: true,
    scales:{
      y:{
        min:0,
        max:100,
      },
    },
     plugins:{
      legend:{
        display:true
      }
     }
  }

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}


export default Grafic