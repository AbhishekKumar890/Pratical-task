import React, { useState } from 'react';
import { Search, Filter, Download, Plus, X } from 'lucide-react';
import './ItemMaster.css';

const items = [
  { code: 'I0001', name: 'Gold Necklace 22k', group: 'Gold Ornamnets', product: 'Necklace', touch: '91.6%', hsn: '7113', status: 'Active' },
  { code: 'I0002', name: 'Silver Bangles Pure', group: 'Silver Articles', product: 'Bangles', touch: '92.5%', hsn: '7113', status: 'Active' },
  { code: 'I0003', name: 'Diamond Ring Solitarie', group: 'Diamond Jewellery', product: 'Rings', touch: '-', hsn: '7113', status: 'Active' },
  { code: 'I0004', name: 'Platinum Wedding Band', group: 'Platinum Rings', product: 'Rings', touch: '95%', hsn: '7113', status: 'Inactive' },
  { code: 'I0005', name: 'Gold Necklace 22k', group: 'Gold Ornamnets', product: 'Chain', touch: '75%', hsn: '7113', status: 'Active' },
  { code: 'I0006', name: 'Silver Bangles Pure', group: 'Silver Articles', product: 'Necklace', touch: '91.6%', hsn: '7113', status: 'Active' },
  { code: 'I0007', name: 'Diamond Ring Solitarie', group: 'Diamond Jewellery', product: 'Bangles', touch: '92.5%', hsn: '7113', status: 'Active' },
  { code: 'I0008', name: 'Platinum Wedding Band', group: 'Platinum Rings', product: 'Chain', touch: '95%', hsn: '7113', status: 'Active' },
];

const ItemMasterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Basic info');
  const [isItemActive, setIsItemActive] = useState(true);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const searchVal = e.target.value.toLowerCase();
    const result = items.filter(
      (item) => item.name.toLowerCase().includes(searchVal) || item.code.toLowerCase().includes(searchVal)
    );
    setFilteredItems(result);
  };

  return (
    <div className="item-master-page-container">
      <div className="page-header">
        <div className="header-info">
          <h1>Item Master</h1>
          <p className="page-subtitle">Manage item groups and categories</p>
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
          <button className="btn btn-primary" style={{ backgroundColor: '#F3A63B', color: 'white' }} onClick={() => setIsModalOpen(true)}>
            <Plus size={18} />
            Add Item
          </button>
        </div>
      </div>

      <div className="data-card">
        <div className="table-container">
          <table>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Code</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Group Name</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Group</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Product</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Touch%</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>HSN</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>{item.code}</td>
                  <td style={{ padding: '16px' }}>{item.name}</td>
                  <td style={{ padding: '16px' }}>{item.group}</td>
                  <td style={{ padding: '16px' }}>{item.product}</td>
                  <td style={{ padding: '16px' }}>{item.touch}</td>
                  <td style={{ padding: '16px' }}>{item.hsn}</td>
                  <td style={{ padding: '16px' }}>
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

      {/* Add Item Modal */}
      <>
        {isModalOpen && (
          <div className="modal-overlay">
            <div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ maxWidth: '1100px', width: '90%' }}
            >
              <div className="modal-header">
                <h2>Add Item</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div className="active-toggle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#718096' }}>{activeTab === 'Basic info' ? 'Active' : 'Tag Rate Fix'}</span>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={isItemActive}
                        onChange={() => setIsItemActive(!isItemActive)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="modal-tabs">
                {['Basic info', 'Touch & Weight', 'Tag Settings', 'Tax & Rates', 'MRP & Cost'].map(tab => (
                  <button
                    key={tab}
                    className={`modal-tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="modal-body">
                {activeTab === 'Basic info' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>Identification</h3>
                    </div>

                    <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                      <div className="form-group">
                        <label>Item Code</label>
                        <input type="text" className="form-control" placeholder="Auto-generated" disabled />
                      </div>
                      <div className="form-group">
                        <label>Item Name</label>
                        <input type="text" className="form-control" placeholder="Enter item name" />
                      </div>
                      <div className="form-group">
                        <label>Short Name</label>
                        <input type="text" className="form-control" placeholder="Enter short name" />
                      </div>
                      <div className="form-group">
                        <label>Item Type</label>
                        <select className="form-control">
                          <option value="">Select</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Item Group</label>
                        <select className="form-control">
                          <option value="">Select</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Product</label>
                        <select className="form-control">
                          <option value="">Select</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <select className="form-control">
                          <option value="">Selcet.</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Touch & Weight' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>Touch & Weight Settings</h3>
                    </div>
                    <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                      <div className="form-group">
                        <label>Touch %</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Minimum Touch</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Maximum Touch</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Minimum West %</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Maximum West %</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Weight</label>
                        <input type="text" className="form-control" defaultValue="0.000" />
                      </div>
                    </div>
                    <div className="form-group" style={{ marginTop: '20px', maxWidth: '300px' }}>
                      <label>Watermark</label>
                      <input type="text" className="form-control" placeholder="Enter Watermark" />
                    </div>
                  </div>
                )}

                {activeTab === 'Tag Settings' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>Tag Settings</h3>
                    </div>
                    <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <div className="form-group">
                        <label>Tag / Loose / Group</label>
                        <select className="form-control">
                          <option value="">Select....</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Tag Split Type</label>
                        <input type="text" className="form-control" placeholder="Enter Type" />
                      </div>
                    </div>
                    <div className="toggles-row" style={{ display: 'flex', gap: '32px', marginTop: '32px' }}>
                      <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label className="toggle-switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>Tag Rate Fix</span>
                      </div>
                      <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label className="toggle-switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>Allow Negative Stock</span>
                      </div>
                      <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label className="toggle-switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>Stock Maintain</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Tax & Rates' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>Tax & Rate Settings</h3>
                    </div>
                    <div className="form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                      <div className="form-group">
                        <label>HSN Code</label>
                        <input type="text" className="form-control" placeholder="Auto-generated" disabled />
                      </div>
                      <div className="form-group">
                        <label>Labour Rate Type</label>
                        <input type="text" className="form-control" placeholder="Enter group name" />
                      </div>
                      <div className="form-group">
                        <label>Add Sales Rate</label>
                        <input type="text" className="form-control" placeholder="Enter short name" />
                      </div>
                      <div className="form-group">
                        <label>Account Stock Type</label>
                        <input type="text" className="form-control" placeholder="Enter short name" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'MRP & Cost' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>MRP & Cost Rules</h3>
                    </div>
                    <div className="form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                      <div className="form-group">
                        <label>MRP ROF Type</label>
                        <input type="text" className="form-control" placeholder="Auto-generated" disabled />
                      </div>
                      <div className="form-group">
                        <label>MRP Less Amount</label>
                        <input type="text" className="form-control" placeholder="Enter group name" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
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

export default ItemMasterPage;
