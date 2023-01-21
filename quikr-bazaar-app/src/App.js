import './App.css';
import { DropDownMenu } from './Mushtaq/DropDownMenu';
import { Homepage } from './Mushtaq/Homepage';

import { Navbar } from './Mushtaq/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <DropDownMenu />
      <Homepage/> */}
    </div>
  );
}

export default App;
