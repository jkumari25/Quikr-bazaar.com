import './App.css';
import ProductDetail from './Shubham/ProductDetail';
import { DropDownMenu } from './Mushtaq/DropDownMenu';
import { Homepage } from './Mushtaq/Homepage';

import { Navbar } from './Mushtaq/Navbar';

function App() {
  return (
    <div className="App">
      <ProductDetail/>
      <Navbar />
      <DropDownMenu />
      <Homepage/>
    </div>
  );
}

export default App;
