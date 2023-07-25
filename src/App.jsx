// import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Videos from './pages/Videos';
import SearchHeader from './components/SearchHeader';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      {/* <Navbar /> */}
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
      <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
