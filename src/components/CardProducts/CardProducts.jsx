import CardProductItem from './CardProductItem';

function CardProducts({ products, reloadProductsAndFocus }) {
  return (
    <div className="grid min-[2300px]:grid-cols-8 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-5">
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
