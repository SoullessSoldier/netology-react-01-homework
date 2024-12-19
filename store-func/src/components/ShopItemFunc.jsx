import PropTypes from "prop-types";

function ShopItemFunc({ item }) {
  return (
    <div className="main-content">
      <h1>{item.brand}</h1>
      <h2>{item.title}</h2>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          {item.currency} {item.price.toFixed(2)}
        </div>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: (props, propName, componentName) => {
      if (typeof props[propName] !== "number") {
        return new Error(
          `Invalid prop \`${propName}\` of type \`${typeof props[
            propName
          ]}\` supplied to \`${componentName}\`, expected \`number\`.`
        );
      }
      return null;
    },
  }).isRequired,
};

export default ShopItemFunc;
