import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import Description from '../components/Description/Description';
import ProductDisplay from '../components/ProductDisplay/ProductDply';
import RelatedProduct from '../components/RelatedProduts/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  if (!all_product) return <div>Loading...</div>;

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct/>
    </div>
  );
};

export default Product;
