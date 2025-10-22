import { Box, Chart, useChart } from 'bako-ui';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const defaultData = [
  { name: 'windows', value: 400, color: 'blue.solid' },
  { name: 'mac', value: 300, color: 'orange.solid' },
  { name: 'linux', value: 300, color: 'pink.solid' },
  { name: 'other', value: 200, color: 'green.solid' },
];

const BasicDonutChart = () => {
  const chart = useChart({ data: defaultData });

  return (
    <Box boxSize="200px" mx="auto">
      <Chart.Root chart={chart}>
        <PieChart>
          <Tooltip
            cursor={false}
            animationDuration={100}
            content={<Chart.Tooltip hideLabel />}
          />
          <Pie
            innerRadius={60}
            outerRadius={100}
            isAnimationActive={false}
            data={chart.data}
            dataKey={chart.key('value')}
            nameKey="name"
          >
            {chart.data.map((item) => (
              <Cell key={item.name} fill={chart.color(item.color)} />
            ))}
          </Pie>
        </PieChart>
      </Chart.Root>
    </Box>
  );
};

export default BasicDonutChart;
