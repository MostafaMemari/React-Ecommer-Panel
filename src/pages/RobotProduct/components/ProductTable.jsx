import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="">تصاویر</th>
          <th className="whitespace-nowrap">نام محصول</th>
          <th className="text-center whitespace-nowrap">ربات</th>
          <th className="text-center whitespace-nowrap">بای باکس</th>
          <th className="text-center whitespace-nowrap">چک قیمت</th>
          <th className="text-center whitespace-nowrap">کاهش</th>
          <th className="text-center whitespace-nowrap">کمترین</th>
          <th className="text-center whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody>
        {products && products.length > 0 ? (
          products.map((product) => <ProductRow key={product.id} product={product} />)
        ) : (
          <tr>
            <td colSpan="8" className="text-center">
              هیچ محصولی یافت نشد.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
