import React from "react";

import ItemDescription from "../item-description";

const ItemPage = ({selectedItemId}) => {
  return (
    <ItemDescription selectedItemId={selectedItemId}/>
  );
};
export default ItemPage;