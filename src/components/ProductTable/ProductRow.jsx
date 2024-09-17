import FeatherIcon from '../FeatherIcon/FeatherIcon';

function ProductRow({ product }) {
  return (
    <tr className="intro-x" key={product.id}>
      <td className="w-40">
        <div className="flex">
          <div className="w-10 h-10 image-fit zoom-in">
            <img
              alt={product.name}
              className="tooltip rounded-full"
              src={`https://bocket-product.storage.iran.liara.space/uploads/products/${product.dkp}.jpg`}
              title={`به روز شده در ${product.updatedAt}`}
            />
          </div>
        </div>
      </td>
      <td>
        <a href="" className="font-medium whitespace-nowrap">
          {product.name}
        </a>
        <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">{product.category}</div>
      </td>
      <td className="text-center">{product.quantity}</td>
      <td className="w-40">
        <div className={`flex items-center justify-center ${product.status ? 'text-theme-20' : 'text-theme-21'}`}>
          <FeatherIcon icon={product.status ? 'check-square' : 'x-square'} className="w-4 h-4 ml-2" />
          {product.status ? 'فعال' : 'غیرفعال'}
        </div>
      </td>
      <td className="table-report__action w-56">
        <div className="flex justify-center items-center">
          <a className="flex items-center ml-3" href="#">
            <i data-feather="edit" className="w-4 h-4 ml-1"></i> ویرایش
          </a>
          <a
            className="flex items-center text-theme-21"
            href="#"
            data-toggle="modal"
            data-target="#delete-confirmation-modal"
          >
            <i data-feather="trash-2" className="w-4 h-4 ml-1"></i> حذف
          </a>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
