import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Chart, ThemeProvider, theme, useChart } from 'bako-ui';
import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts';

const meta: Meta = {
  title: 'Bako UI/Charts/Donut',
  decorators: [
    (Story) => (
      <ThemeProvider value={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const defaultData = [
  { name: 'windows', value: 400, color: 'blue.solid' },
  { name: 'mac', value: 300, color: 'orange.solid' },
  { name: 'linux', value: 300, color: 'pink.solid' },
  { name: 'other', value: 200, color: 'green.solid' },
];

// Wrapper component to use hooks properly
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

export const Basic: Story = {
  render: () => <BasicDonutChart />,
};

const DonutChartWithPadding = () => {
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
            paddingAngle={8}
            cornerRadius={4}
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

export const WithPaddingAngle: Story = {
  render: () => <DonutChartWithPadding />,
};

const DonutChartWithText = () => {
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
            innerRadius={80}
            outerRadius={100}
            isAnimationActive={false}
            data={chart.data}
            dataKey={chart.key('value')}
            nameKey="name"
          >
            <Label
              content={({ viewBox }) => (
                <Chart.RadialText
                  viewBox={viewBox}
                  title="1200"
                  description="users"
                />
              )}
            />
            {chart.data.map((item) => (
              <Cell key={item.name} fill={chart.color(item.color)} />
            ))}
          </Pie>
        </PieChart>
      </Chart.Root>
    </Box>
  );
};

export const WithCenteredText: Story = {
  render: () => <DonutChartWithText />,
};

const SemiCircleDonutChart = () => {
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
            startAngle={180}
            endAngle={0}
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

export const SemiCircle: Story = {
  render: () => <SemiCircleDonutChart />,
};
