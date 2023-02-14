import './App.css';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { UserLogin, UserRegister } from './navbar';
import { MonthlyProfits } from './MonthlyProfits';
import { SummaryBoxList } from './SummaryBoxList';
import { Overview } from './Overview';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar} from '@mui/material';

function App() {

  const navigate= useNavigate();

  return (
    // ----- JSX starts -------
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/user/login")}>Login</Button>
          <Button color="inherit" onClick={() => navigate("/productdetails")}>Product Details</Button>
          <Button color="inherit" onClick={() => navigate("/userdetails")}>User Details</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>


    </div>
    //  ----- JSX Ends --------
  );
}

function NotFound() {

  const navigate= useNavigate();
  
  return (
    <div className='notfound'>
      <h1>Page Is Not Found</h1>
      <h5>404 error</h5>
      <img className='notfoundimg' src="https://thumbs.dreamstime.com/b/website-error-bad-request-vector-artwork-depicts-funny-humorous-scenario-human-stick-figure-http-85523122.jpg" alt="" />

      <Button varient="contained" onClick={() => navigate("/")}>Go Home</Button>
    </div>
  )
}


function ProductDetails() {
  return (
    <div>

    </div>
  )
}

function UserDetails() {
  return (
    <div>

    </div>
  )
}



// component declaration
function Dashboard() {
  return (
    <div>
      <h1>Welcome To Your DASHBOARD</h1>
      <SummaryBoxList />
      <MonthlyProfits />
      <Overview />
    </div>

  )
}

export const BorderLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'hsl(221deg 36% 91%)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: lineColor,
  },
}));


export default App;
