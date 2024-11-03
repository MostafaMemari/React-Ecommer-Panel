import React, { useContext, useEffect, useState } from 'react';
import { transactionsProductService } from '../../../services/Axios/Request/transactions';
import { ProductContext } from '../BuyAndSellProduct';
import { Toast } from '../../../components/Notification';

function CardProductItem({ product }) {
  const { pageType, reloadProductsAndFocus } = useContext(ProductContext);

  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');

  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handletypeChange = (e) => setType(e.target.value);

  useEffect(() => {
    if (pageType === 'sell') {
      setType('sale');
    } else if (pageType === 'buy') {
      setType('purchase');
    }
  }, [pageType]);

  const handleTransactionProduct = async (productId, quantity, type) => {
    try {
      if (pageType === 'sell' && product.quantity < quantity) {
        Toast(`${type == 'sale' ? 'فروش' : 'خرید'} خطا مواجه شد ثبت شد`, 'error');
      } else {
        const res = await transactionsProductService(productId, { quantity, type });
        if (res.status === 201) {
          Toast(`${type == 'sale' ? 'فروش' : 'خرید'} با موفقیت ثبت شد`, 'success');
          reloadProductsAndFocus();
        } else {
          Toast(`${type == 'sale' ? 'فروش' : 'خرید'} خطا مواجه شد`, 'error');
        }
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
            <img className="rounded-full" alt={product.name} src={product.image} />
          </div>
          <div className="text-center mt-3">
            <a
              href={`https://www.digikala.com/product/dkp-${product.dkp}`}
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
          <div className="text-gray-600 text-xs mt-0.5">
            فروش ماهانه <span className="text-red-500 font-bold me-3">: {product.lastMonthQuantity} عدد</span>
            فروش کلی <span className="text-red-500 font-bold">: {product.totalQuantity} عدد</span>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-2 mt-3">
            <input
              type="number"
              className="form-control w-full sm:w-3/5 p-2 border rounded-md"
              placeholder="تعداد"
              value={quantity}
              onChange={handleQuantityChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleTransactionProduct(product.id, quantity, type);
                }
              }}
            />
            <select
              className="form-select w-full sm:w-3/5 p-2 border rounded-md"
              value={type}
              onChange={handletypeChange}
            >
              {pageType === 'sell' ? (
                <>
                  <option value="sale">فروش</option>
                  <option value="depo">دپو</option>
                  <option value="damage">خرابی</option>
                </>
              ) : (
                <option value="purchase">خرید</option>
              )}
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
