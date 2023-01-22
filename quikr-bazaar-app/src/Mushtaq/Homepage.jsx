import { DropDownMenu } from './DropDownMenu';
import { Navbar } from './Navbar';
import PopularProductsSlider from './PopularProductsSlider';
export const Homepage = () => {
  return (
      <div>
        <Navbar/>
        <DropDownMenu/>
        <PopularProductsSlider/>
    </div>
  )
}
