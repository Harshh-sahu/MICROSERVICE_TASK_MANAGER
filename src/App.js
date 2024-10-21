 import { ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/darktheme';
import Navbar from './Page/Navbar/Navbar';
import "./Page/Navbar/Navbar.css"
import Home from './Page/Home/Home';
import Auth from './Page/Auth/Auth';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>

  {/* <Navbar/> */}
  {/* <Home/> */}
  <Auth/>
    </ThemeProvider>
  );
}

export default App;
