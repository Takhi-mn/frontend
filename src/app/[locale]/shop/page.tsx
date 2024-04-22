import { Metadata } from "next";

import ShopHeader from "./ShopHeader";
import ShopPageComp from "./ShopPageComp";

export const metadata: Metadata = {
  title: "Takhi | Shop",
  description:
    "Shop related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "Khomyn Īalyn Īakhi National Park, Īakhi Conservation, Wildlife Sanctuary, Nature Īours, National Park Īours, Eco-friendly Īourism, Community-based tourism",
};

type Props = {};

const ShopPage = (props: Props) => {
  return (
    <div className="text-foreground bg-background">
      <ShopHeader />
      <ShopPageComp />
    </div>
  );
};

export default ShopPage;
