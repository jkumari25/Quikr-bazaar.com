import { BrowseByCategory } from './BrowseByCategory';
import { BuyAndSell } from './BuyAndSell';
import { ElectronicsAndAppliancesSlider } from './ElectronicsAndAppliancesSlider';
import { Footer } from './Footer';
import { HomeAndLifestyleSlider } from './HomeAndLifestyleSlider';
import InputElement from './InputElement';
import { MobileAndTabletsSlider } from './MobileAndTabletsSlider';
import PopularProductsSlider from './PopularProductsSlider';
import { Navbar } from './Navbar';
import { DropDownMenu } from './DropDownMenu';
export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <DropDownMenu />
      <PopularProductsSlider />
      <BuyAndSell />
      <MobileAndTabletsSlider />
      <HomeAndLifestyleSlider />
      <ElectronicsAndAppliancesSlider />
      <BrowseByCategory />
      <InputElement />
      <Footer />
    </div>
  );
};
