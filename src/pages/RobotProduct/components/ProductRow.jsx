import { useState } from 'react';
import { createSettingProductsService } from '../../../services/Axios/Request/products';
import { Toast } from '../../../components/Notification';

function ProductRow({ product }) {
  const {
    is_active: initialIsActive = false,
    is_buyBox: initialIsBuyBox = false,
    is_check_price: initialIsCheckPrice = false,
    min_price: initialMinPrice,
    reduce_price: initialReducePrice,
  } = product?.product_settings || {};

  // مدیریت وضعیت فیلدها
  const [isActive, setIsActive] = useState(initialIsActive);
  const [isBuyBox, setIsBuyBox] = useState(initialIsBuyBox);
  const [isCheckPrice, setIsCheckPrice] = useState(initialIsCheckPrice);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [reducePrice, setReducePrice] = useState(initialReducePrice);

  const handleSubmit = async () => {
    const data = {
      is_active: isActive,
      is_buyBox: isBuyBox,
      is_check_price: isCheckPrice,
      min_price: minPrice,
      reduce_price: reducePrice,
    };

    const res = await createSettingProductsService(product.id, data);
    console.log(res.status);
    try {
      if (res.status === 200) {
        Toast(`اطلاعات با موفقیت ثبت شد`, 'success');
        reloadProductsAndFocus();
      } else if (res.status === 400) {
        Toast(`خطایی در ثبت اطلاعات رخ داد`, 'error');
      }
    } catch (error) {
      console.error('Error buying product:', error);
    }
  };

  return (
    <tr className="intro-x" key={product.id}>
      <td className="">
        <div>
          <div className="w-10 h-10 image-fit zoom-in">
            <img
              alt={product.name}
              className="tooltip rounded-full"
              src={product.image}
              title={`به روز شده در ${product.updatedAt}`}
            />
          </div>
        </div>
      </td>

      <td className="whitespace-normal max-w-xs">
        <a
          href=""
          className="font-medium break-words overflow-hidden text-ellipsis leading-relaxed"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {product.name}
        </a>
      </td>

      <td className="text-center whitespace-nowrap">
        <input
          checked={isActive}
          class="form-check-switch"
          type="checkbox"
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </td>

      <td className="text-center whitespace-nowrap">
        <input
          checked={isBuyBox}
          class="form-check-switch"
          type="checkbox"
          onChange={(e) => setIsBuyBox(e.target.checked)}
        />
      </td>

      <td className="text-center whitespace-nowrap">
        <input
          checked={isCheckPrice}
          class="form-check-switch"
          type="checkbox"
          onChange={(e) => setIsCheckPrice(e.target.checked)}
        />
      </td>

      <td className="text-center  whitespace-nowrap w-20">
        <input
          id=""
          type="text"
          class="form-control w-20 text-center"
          value={reducePrice}
          onChange={(e) => setReducePrice(e.target.value)}
        />
      </td>

      <td className="text-center whitespace-nowrap w-20">
        <input
          id=""
          type="text"
          class="form-control w-20 text-center"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </td>

      <td className="text-center whitespace-nowrap">
        <button onClick={handleSubmit} class="btn btn-primary w-24 ml-1 mb-2">
          ثبت
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
