import { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { newProductValidation } from '../../utils/formValidation';
import { resetProduct, saveProduct, setProductField } from './slices/productMasterSlice';
import './ProductMaster.css';
import AddProduct from './components/AddProduct';

const ProductMaster = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.productMaster.form);
  const productList = useSelector((state) => state.productMaster.productList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [errors, setErrors] = useState({});

  const filteredProducts = productList.filter((product) =>
    [product.productCode, product.productName, product.shortName]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(searchVal.toLowerCase()))
  );

  const handleOpenModal = () => {
    setErrors({});
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setErrors({});
    dispatch(resetProduct());
    setIsModalOpen(false);
  };

  const handleFieldChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    dispatch(setProductField({ field, value }));

    const hasValue = typeof value === 'string' ? value.trim() !== '' : Boolean(value);
    if (!hasValue) {
      return;
    }

    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSave = () => {
    const validationResult = newProductValidation(form);
    const errs = validationResult?.errorMessage;

    if (errs) {
      setErrors(errs);
      return;
    }

    dispatch(saveProduct());
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <div className="product-master-container">
      <div className="page-header">
        <div className="header-info">
          <h1>Product Master</h1>
          <p className="page-subtitle">Manage products and catalog settings</p>
        </div>
      </div>

      <div className="action-bar">
        <div className="action-left">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search Products"
              className="search-input"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary btn-filter">
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="action-right">
          <button className="btn btn-secondary">
            <Download size={18} />
            Export
          </button>
          <button className="btn btn-primary btn-add-product" onClick={handleOpenModal}>
            <Plus size={18} />
            Add Product
          </button>
        </div>
      </div>

      <div className="data-card" style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
        <div className="table-container">
          <table className="product-master-table">
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                <th>Code</th>
                <th>Product Name</th>
                <th>Short Name</th>
                <th>Daily Counter Stock</th>
                <th>Loose PCS Counter</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No products found. Click "Add Product" to create one.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((item) => (
                  <tr key={item.productCode} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ fontWeight: 600 }}>{item.productCode}</td>
                    <td>{item.productName || '—'}</td>
                    <td>{item.shortName || '—'}</td>
                    <td>{item.dailyCounterStockNotManage ? 'No' : 'Yes'}</td>
                    <td>{item.loosePcsDailyCounterStockManager ? 'Yes' : 'No'}</td>
                    <td>
                      <span className={`badge ${item.isActive ? 'badge-active' : 'badge-inactive'}`}>
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && 
        <AddProduct 
          form={form}
          handleCloseModal = {() => setIsModalOpen(false)}
          errors={errors}
          handleChange={handleFieldChange}
          handleSave={handleSave}
        />
      }
    </div>
  );
};

export default ProductMaster;
