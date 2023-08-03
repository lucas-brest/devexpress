import { dataSource, seriesTypeLabel } from './../data/areaChartData.js'
import { Chart, Series, Legend, ArgumentAxis, Export, CommonSeriesSettings } from 'devextreme-react/chart'

const AreaChartExample = () => {
  return (
    <Chart dataSource={dataSource} palette="Harmony Light">
        <CommonSeriesSettings argumentField='country'/>
        <Series valueField="y1564" name="15-64 years"></Series>
        <Series valueField="y014" name="0-14 years"></Series>
        <Series valueField="y65" name="65 years and older"></Series>
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
          />
        <Export enabled={true} />
    </Chart>
  )
}

export default AreaChartExample