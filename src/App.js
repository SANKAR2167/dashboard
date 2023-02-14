import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faChartLine, faCaretDown,faCoins,faDollar,faSignal,} from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {StackedChart} from './StackedChart';
import {ToggleButtonOverview} from './togglebutton';
function App() {
// ------ JS Starts -------


// ------ JS Ends ---------
  return (
    // ----- JSX starts -------
    <div className="App">
      {/* component call */}
     <Dashboard/>
    </div>
    //  ----- JSX Ends --------
  );
}

// component declaration
function Dashboard(){
  return(
    <div>
      <h1>Welcome To Your DASHBOARD</h1>
      <SummaryBoxList/>
      <MonthlyProfits/>
      <Overview/>
    </div>
    
  )
}

function Overview() {
  return(
    <div className='overview-container'>
      <div className='overview-spec'>
        <div>
        <h4 className='overview-heading'>Overview of Sales Win/Lost</h4>
        <p className='overview-text'>Comapred to last month sales.</p>
        </div>
      <ToggleButtonOverview/>
      </div>
      <StackedChart/>
    </div>
  )
}

function SummaryBoxList(){
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
      linePercent:75,
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
      linePercent:60,
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
      linePercent:50,
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
      linePercent:40,
    }
  ];
  return(
    <div className='summary-box-list'>
      {dataList.map((dt) =>(<SummaryBox data={dt}/>))}
    </div>
  )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'hsl(221deg 36% 91%)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor:lineColor,
  },
}));


function SummaryBox({data}){
  const iconStyles = {color: data.iconColor};
  return(
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
        ? 'hsl(164deg 97% 40%)' : 'hsl(3deg 99% 62%)'}} icon={data.performance === 'up' 
        ? faCaretUp : faCaretDown} />{data.percent}%</p>
      </div>
    </div>
  )
}

function PercentProgress({data}){
  return(
    <div>
      <div className='profit-box-time-container'>
        <p>{data.time}</p>
        <p>{data.percent}%</p>
      </div>
      <BorderLinearProgress lineColor={data.color} variant="determinate" value={data.percent} />
    </div>
  )
}

function MonthlyProfits(){
  const profits=[{
    time:'This month',
    percent: 75,
    color:"rgb(135, 96, 251)",
  },{
    time:'Last month',
    percent: 50,
    color:"#03c895",
  }];
  
  const PercentList = <div className='percent-box-container'>
    {profits.map((dt) => (<PercentProgress data={dt} />))}
  </div>;
  return(
    <div className='profit-box-container'>
      <h3 className='profit-box-heading'>Monthly Profits</h3>
      <p className='profit-box-sub-text'>Excepteur sint occaecat cupidatat non proident.</p>
      <h2 className='profit-box-number'>$22,534</h2>
      {PercentList}
    </div>
  )
}
export default App;
