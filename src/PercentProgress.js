import { BorderLinearProgress } from './App';

export function PercentProgress({ data }) {
  return (
    <div>
      <div className='profit-box-time-container'>
        <p>{data.time}</p>
        <p>{data.percent}%</p>
      </div>
      <BorderLinearProgress lineColor={data.color} variant="determinate" value={data.percent} />
    </div>
  );
}
