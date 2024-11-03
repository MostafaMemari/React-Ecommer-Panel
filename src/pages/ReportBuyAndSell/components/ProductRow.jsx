function ProductRow({ product }) {
  return (
    <tr className="intro-x" key={product.id}>
      <td className="w-40">
        <div className="flex">
          <div className="w-10 h-10 image-fit zoom-in">
            <img
              alt={product.product.name}
              className="tooltip rounded-full"
              src={product.product.image}
              title={`به روز شده در ${product.updated_at}`}
            />
          </div>
        </div>
      </td>
      <td>
        <a href="" className="font-medium whitespace-nowrap">
          {product.product.name}
        </a>
        <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">{product.category}</div>
      </td>
      <td className="text-center">{product.quantity}</td>
      <td className="w-40">{product.type === 'sale' ? 'فروش' : product.type === 'purchase' ? 'خرید' : ''}</td>
      <td className="table-report__action w-56">
        {product.created_at ? new Date(product.created_at).toLocaleString('fa-IR') : 'N/A'}
      </td>
    </tr>
  );
}

export default ProductRow;
