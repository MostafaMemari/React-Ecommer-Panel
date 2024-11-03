import { useState } from 'react';

function ProductFilter({ onFilterChange }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [quantityMin, setQuantityMin] = useState('');
  const [quantityMax, setQuantityMax] = useState('');
  const [quantityOrder, setQuantityOrder] = useState('asc');

  const handleColorChange = (e) => {
    const colorId = e.target.value !== 'default' ? e.target.value : null;
    setSelectedColor(colorId);
    onFilterChange({
      colorId,
      categoryId: selectedCategory,
      sellerId: selectedSeller,
      quantityMin,
      quantityMax,
      quantityOrder,
    });
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value !== 'default' ? e.target.value : null;
    setSelectedCategory(categoryId);
    onFilterChange({
      colorId: selectedColor,
      categoryId,
      sellerId: selectedSeller,
      quantityMin,
      quantityMax,
      quantityOrder,
    });
  };

  const handleSellerChange = (e) => {
    const sellerId = e.target.value !== 'default' ? e.target.value : null;
    setSelectedSeller(sellerId);
    onFilterChange({
      colorId: selectedColor,
      categoryId: selectedCategory,
      sellerId,
      quantityMin,
      quantityMax,
      quantityOrder,
    });
  };

  const handleQuantityMinChange = (e) => {
    const qtyMin = e.target.value ? e.target.value : null;
    setQuantityMin(qtyMin);
    onFilterChange({
      colorId: selectedColor,
      categoryId: selectedCategory,
      sellerId: selectedSeller,
      quantityMin: qtyMin,
      quantityMax,
      quantityOrder,
    });
  };

  const handleQuantityMaxChange = (e) => {
    const qtyMax = e.target.value ? e.target.value : null;
    setQuantityMax(qtyMax);
    onFilterChange({
      colorId: selectedColor,
      categoryId: selectedCategory,
      sellerId: selectedSeller,
      quantityMin,
      quantityMax: qtyMax,
      quantityOrder,
    });
  };

  const handleQuantityOrderChange = (e) => {
    const order = e.target.value;
    setQuantityOrder(order);
    onFilterChange({
      colorId: selectedColor,
      categoryId: selectedCategory,
      sellerId: selectedSeller,
      quantityMin,
      quantityMax,
      quantityOrder: order,
    });
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center space-y-2">
        <div className="sm:ml-2 w-full sm:w-auto">
          <input
            className="form-control w-full"
            placeholder="موجودی کمتر از"
            value={quantityMax || ''}
            onChange={handleQuantityMaxChange}
          />
        </div>
        <div className="sm:ml-2 w-full sm:w-auto">
          <input
            className="form-control w-full"
            placeholder="موجودی بیشتر از"
            value={quantityMin || ''}
            onChange={handleQuantityMinChange}
          />
        </div>
        <div className="sm:ml-2 w-full sm:w-auto">
          <select className="form-select w-full" value={quantityOrder} onChange={handleQuantityOrderChange}>
            <option value="asc">مرتب‌سازی صعودی</option>
            <option value="desc">مرتب‌سازی نزولی</option>
          </select>
        </div>
      </div>
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center space-y-2">
        <select className="form-select mt-2 sm:ml-2" value={selectedColor || 'default'} onChange={handleColorChange}>
          <option value="default" disabled>
            انتخاب رنگ
          </option>
          <option value={1}>سفید</option>
          <option value={3}>مشکی</option>
          <option value={2}>قرمز</option>
          <option value={4}>طلایی</option>
          <option value={5}>چند رنگ</option>
        </select>

        <select
          className="form-select mt-2 sm:ml-2"
          value={selectedCategory || 'default'}
          onChange={handleCategoryChange}
        >
          <option value="default" disabled>
            انتخاب دسته‌بندی
          </option>
          <option value={10704}>آرم و برچسب خودرو</option>
          <option value={5857}>سایر لوازم خودرو</option>
          <option value={8431}>استیکر و پوستر</option>
          <option value={9280}>سایر لوازم جانبی موتور سیکلت</option>
        </select>

        <select className="form-select mt-2 sm:ml-2" value={selectedSeller || 'default'} onChange={handleSellerChange}>
          <option value="default" disabled>
            انتخاب فروشنده
          </option>
          <option value={1}>ماتریسیو</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
