import ShopItemFunc from "./ShopItemFunc"
import Item from "@/utils/ItemClass";

const item = new Item(
  "Tiger of Sweden",
  "Leonard coat",
  "Minimalistic coat in cotton-blend",
  "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  "399",
  "£"
);

function StoreFunc() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

export default StoreFunc;
