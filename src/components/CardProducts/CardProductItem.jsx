import React, { useState } from 'react';
import { transactionsProductService } from '../../services/Axios/Request/transactions';

function CardProductItem({ product, reloadProductsAndFocus }) {
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState('sale');

  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handletypeChange = (e) => setType(e.target.value);

  const handleTransactionProduct = async (productId, quantity, type) => {
    try {
      const res = await transactionsProductService(productId, { quantity, type });
      if (res.status === 201) {
        alert('ثبت شد');
        reloadProductsAndFocus();
      } else {
        alert('متاسفم');
      }
    } catch (error) {
      console.error('Error buying product:', error);
    }
  };

  return (
    <div className="intro-y zoom-in">
      <div className="box h-full tooltip" title={`آخرین فروش :  عدد ساعت  تاریخ `}>
        <div className="flex flex-col items-center p-4 sm:p-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 image-fit">
            <img className="rounded-full" alt={product.name} src={product.img} />
          </div>
          <div className="text-center mt-3">
            <a
              href={`https://www.digikala.com/product/dkp-${product.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold line-clamp-2 h-10 text-sm"
            >
              {product.name}
            </a>
          </div>

          <div className="text-gray-600 text-xs mt-0.5">
            موجودی <span className="text-red-500 font-bold">: {product.quantity} عدد</span>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-2 mt-3">
            <input
              type="number"
              className="form-control w-full sm:w-3/5 p-2 border rounded-md"
              placeholder="تعداد"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <select
              className="form-select w-full sm:w-3/5 p-2 border rounded-md"
              value={type}
              onChange={handletypeChange}
            >
              <option value="sale">فروش</option>
              <option value="damage">خرابی</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-2 mt-3">
            <button
              className="btn btn-primary w-full sm:w-3/5"
              onClick={() => handleTransactionProduct(product.id, quantity, type)}
            >
              ثبت
            </button>
            <button className="btn btn-outline-secondary w-full sm:w-3/5">گزارش</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductItem;
