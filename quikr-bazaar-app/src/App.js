import './App.css';
import { DropDownMenu } from './Mushtaq/DropDownMenu';
import { Homepage } from './Mushtaq/Homepage';

import { Navbar } from './Mushtaq/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DropDownMenu />
      <Homepage/>
    </div>
  );
}

export default App;
