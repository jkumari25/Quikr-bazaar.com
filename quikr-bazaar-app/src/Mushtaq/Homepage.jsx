import { BrowseByCategory } from './BrowseByCategory';
import { BuyAndSell } from './BuyAndSell';
import { ElectronicsAndAppliancesSlider } from './ElectronicsAndAppliancesSlider';
import { Footer } from './Footer';
import { HomeAndLifestyleSlider } from './HomeAndLifestyleSlider';
import InputElement from './InputElement';
import { MobileAndTabletsSlider } from './MobileAndTabletsSlider';
import PopularProductsSlider from './PopularProductsSlider';
export const Homepage = () => {
  return (
      <div>
      <PopularProductsSlider />
      <BuyAndSell />
      <MobileAndTabletsSlider />
      <HomeAndLifestyleSlider />
      <ElectronicsAndAppliancesSlider />
      <BrowseByCategory />
      <InputElement />
      <Footer/>
    </div>
  )
}
