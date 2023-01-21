import './App.css';
import Sidebar from './Jagriti/Components/Sidebar';
import { DropDownMenu } from './Mushtaq/DropDownMenu';
import { Homepage } from './Mushtaq/Homepage';

import { Navbar } from './Mushtaq/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      {/* <DropDownMenu />
      <Homepage/> */}
      <Sidebar />
    </div>
  );
}

export default App;
