import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { BorderLinearProgress } from './App';

export function SummaryBox({ data }) {
  const iconStyles = { color: data.iconColor };
  return (
    <div className='summary-box-container'>
      <div className='summary-box-spec'>
        <p className='summary-box-text'>{data.text}</p>
        <FontAwesomeIcon style={iconStyles} icon={data.icon} />
      </div>
      <h2 className='summary-box-number'>
        {data.type === 'money' ? '$' : null}
        {data.number}</h2>
      <BorderLinearProgress lineColor={data.iconColor} variant="determinate" value={data.linePercent} />
      <div className='summary-box-time-container'>
        <p>{data.time}</p>
        <p><FontAwesomeIcon
          style={{
            color: data.performance === 'up'
              ? 'hsl(164deg 97% 40%)' : 'hsl(3deg 99% 62%)'
          }} icon={data.performance === 'up'
            ? faCaretUp : faCaretDown} />{data.percent}%</p>
      </div>
    </div>
  );
}
