import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart';

import { areas } from '../data/pieChartData';

const PieChartExample = () => {
  return (
    <PieChart
      id="pie"
      dataSource={areas}
      palette="Soft"
      title="Area of Countries"
    >
      <Series
        argumentField="country"
        valueField="area"
      >
        <Label visible={true}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>

      <Size width={500} />
    </PieChart>
  );
}

export default PieChartExample