import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...OtherCollectionProps }) => (
          <CollectionPreview key={id} {...OtherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
