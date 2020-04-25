import React, {useState} from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from '../../components/collection-preview/collection-preview'
const ShopPage = function(){
  const [collection, setCollection] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {collection.map(({id, ...collectionProps}) => <CollectionPreview key={id} {...collectionProps}/>)}
    </div>
  )
}

export default ShopPage;
