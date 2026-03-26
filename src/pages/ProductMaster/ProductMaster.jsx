import React, { useState } from 'react';
import { Search, Filter, Download, Plus, X } from 'lucide-react';
import './ProductMaster.css';

const products = [
  { code: 'PR001', group: 'Necklace', short: 'NEC', stock1: 'Yes', stock2: 'Yes', status: 'Active' },
  { code: 'PR002', group: 'Bangles', short: 'BNG', stock1: 'Yes', stock2: 'Yes', status: 'Active' },
  { code: 'PR003', group: 'Rings', short: 'RNG', stock1: 'Yes', stock2: 'Yes', status: 'Active' },
  { code: 'PR004', group: 'Earrings', short: 'ERG', stock1: 'Yes', stock2: 'Yes', status: 'Inactive' },
  { code: 'PR005', group: 'Pendant', short: 'PND', stock1: 'Yes', stock2: 'Yes', status: 'Active' },
  { code: 'PR006', group: 'Chain', short: 'CHN', stock1: 'No', stock2: 'No', status: 'Active' },
  { code: 'PR007', group: 'Bracelet', short: 'BRC', stock1: 'Yes', stock2: 'Yes', status: 'Active' },
  { code: 'PR008', group: 'Managalsutra', short: 'MGS', stock1: 'No', stock2: 'No', status: 'Active' },
];

const ProductMaster = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProducts, setActiveProducts] = useState(products);
  const [toggles, setToggles] = useState({
    active: true,
    notManage: false,
    loosePcs: false
  });

  const handleSearch = (e) => {
    const searchVal = e.target.value.toLowerCase();
    const result = products.filter(
      (item) => item.group.toLowerCase().includes(searchVal) || item.code.toLowerCase().includes(searchVal)
    );
    setActiveProducts(result);
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
            <input type="text" placeholder="Search Paraties" className="search-input" onChange={handleSearch} />
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
          <button className="btn btn-primary btn-add-product" onClick={() => setIsModalOpen(true)}>
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
                <th>Group Name</th>
                <th>Short Name</th>
                <th>Daily Counter Stock</th>
                <th>Daily Counter Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeProducts.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ fontWeight: 600 }}>{item.code}</td>
                  <td>{item.group}</td>
                  <td>{item.short}</td>
                  <td>{item.stock1}</td>
                  <td>{item.stock2}</td>
                  <td>
                    <span className={`badge ${item.status.toLowerCase() === 'active' ? 'badge-active' : 'badge-inactive'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      <>
        {isModalOpen && (
          <div className="modal-overlay">
            <div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ maxWidth: '500px' }}
            >
              <div className="modal-header">
                <h2>Add Product</h2>
                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body" style={{ paddingTop: '24px' }}>
                <div className="modal-section-title" style={{ color: '#3F3D89', fontWeight: 700, fontSize: '15px', marginBottom: '20px' }}>
                  Product Details
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Product Name</label>
                  <input type="text" className="form-control" placeholder="Enter Product Name" />
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label>Short Name</label>
                  <input type="text" className="form-control" placeholder="Enter Short Name" />
                </div>

                {/* Toggle Cards */}
                <div className="toggle-card-list" style={{ display: 'grid', gap: '12px' }}>
                  {/* Active Toggle */}
                  <div className="toggle-card" style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>Active</div>
                      <div style={{ fontSize: '12px', color: '#718096' }}>Enable this product for use</div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked={toggles.active} onChange={() => setToggles({ ...toggles, active: !toggles.active })} />
                      <span className="slider"></span>
                    </label>
                  </div>

                  {/* Daily Counter Not Manage Toggle */}
                  <div className="toggle-card" style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>Daily Counter Stock Not Manage</div>
                      <div style={{ fontSize: '12px', color: '#718096' }}>Skip daily counter stock tracking</div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked={toggles.notManage} onChange={() => setToggles({ ...toggles, notManage: !toggles.notManage })} />
                      <span className="slider"></span>
                    </label>
                  </div>

                  {/* Loose PCS Toggle */}
                  <div className="toggle-card" style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>Loose PCS Daily Counter Stock Manager</div>
                      <div style={{ fontSize: '12px', color: '#718096' }}>Track loose pieces in daily counter</div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked={toggles.loosePcs} onChange={() => setToggles({ ...toggles, loosePcs: !toggles.loosePcs })} />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="modal-footer" style={{ marginTop: '24px' }}>
                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(false)} style={{ backgroundColor: '#3F3D89', color: 'white' }}>
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ProductMaster;
