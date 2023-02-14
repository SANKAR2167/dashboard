import { faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons';
import { SummaryBox } from './SummaryBox';

export function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
      linePercent: 75,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
      linePercent: 60,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
      linePercent: 50,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
      linePercent: 40,
    }
  ];
  return (
    <div className='summary-box-list'>
      {dataList.map((dt) => (<SummaryBox data={dt} />))}
    </div>
  );
}
