import { BrowseByCategory } from "./BrowseByCategory";
import { BuyAndSell } from "./BuyAndSell";
import { ElectronicsAndAppliancesSlider } from "./ElectronicsAndAppliancesSlider";
import { Footer } from "./Footer";
import { HomeAndLifestyleSlider } from "./HomeAndLifestyleSlider";
import InputElement from "./InputElement";
import PopularProductsSlider from "./PopularProductsSlider";
import { DropDownMenu } from "./DropDownMenu";
import WithSubnavigation from "./WithSubNavigation";
import {MobileAndTabletsSlider} from "./MobileAndTabletsSlider";


export const Homepage = () => {
  return (
    <div>
      <WithSubnavigation/>
      <DropDownMenu />
      <PopularProductsSlider />
      <BuyAndSell />
      <MobileAndTabletsSlider/>
      <HomeAndLifestyleSlider />
      <ElectronicsAndAppliancesSlider />
      <BrowseByCategory />
      <InputElement />
      <Footer />
    </div>
  );
};
