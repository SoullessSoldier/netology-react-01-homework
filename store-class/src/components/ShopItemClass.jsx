import { Component } from "react";
import PropTypes from "prop-types";


export default class ShopItemClass extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price}</div>
          <button>Add to cart</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
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
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
