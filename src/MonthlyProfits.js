import { PercentProgress } from './PercentProgress';

export function MonthlyProfits() {
  const profits = [{
    time: 'This month',
    percent: 75,
    color: "rgb(135, 96, 251)",
  }, {
    time: 'Last month',
    percent: 50,
    color: "#03c895",
  }];

  const PercentList = <div className='percent-box-container'>
    {profits.map((dt) => (<PercentProgress data={dt} />))}
  </div>;
  return (
    <div className='profit-box-container'>
      <h3 className='profit-box-heading'>Monthly Profits</h3>
      <p className='profit-box-sub-text'>Excepteur sint occaecat cupidatat non proident.</p>
      <h2 className='profit-box-number'>$22,534</h2>
      {PercentList}
    </div>
  );
}
