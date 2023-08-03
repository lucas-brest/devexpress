import PieChartExample from "./PieChartExample"
import BarChartExample from "./BarChartExample"
import AreaChartExample from "./AreaChartExample"

const Graficos = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      gap:'2rem'}}
    >
      <BarChartExample />
      <AreaChartExample />
      <PieChartExample />
    </div>
  )
}

export default Graficos