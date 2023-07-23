// import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Videos from './pages/Videos';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
