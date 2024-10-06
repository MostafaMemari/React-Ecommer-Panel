import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap">تصاویر</th>
          <th className="whitespace-nowrap">نام محصول</th>
          <th className="text-center whitespace-nowrap">موجودی</th>
          <th className="text-center whitespace-nowrap">عملیات</th>
          <th className="text-center whitespace-nowrap">تاریخ</th>
        </tr>
      </thead>
      <tbody>
        {products && products.length > 0 ? (
          products.map((product) => <ProductRow key={product.id} product={product} />)
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              هیچ محصولی یافت نشد.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
