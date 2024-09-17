import CardProductItem from './CardProductItem';

function CardProducts({ products, reloadProductsAndFocus }) {
  return (
    <div className="grid grid-cols-4 gap-6 mt-5 mb-5">
      {products && products.length > 0 ? (
        products.map((product) => (
          <CardProductItem key={product.id} product={product} reloadProductsAndFocus={reloadProductsAndFocus} />
        ))
      ) : (
        <h2 className="text-center">هیچ محصولی یافت نشد ...</h2>
      )}
    </div>
  );
}

export default CardProducts;
