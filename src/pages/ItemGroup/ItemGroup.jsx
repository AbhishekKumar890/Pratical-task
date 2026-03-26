import React, { useState } from 'react';
import { Search, Filter, Download, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ItemGroup.css';

const itemGroups = [
  { code: 'IG001', name: 'Gold Ornaments', metal: 'Gold', touch: '91.6%', unit: 'Gram', status: 'Active' },
  { code: 'IG002', name: 'Silver Articles', metal: 'Silver', touch: '92.5%', unit: 'Gram', status: 'Active' },
  { code: 'IG003', name: 'Diamond Jewellery', metal: 'Diamond', touch: '95%', unit: 'Gram', status: 'Active' },
  { code: 'IG004', name: 'Platinum Rings', metal: 'Platinum', touch: '91.6%', unit: 'Gram', status: 'Inactive' },
  { code: 'IG005', name: 'Kundan Work', metal: 'Gold', touch: '91.6%', unit: 'Gram', status: 'Active' },
  { code: 'IG006', name: 'Gold Ornaments', metal: 'Silver', touch: '92.5%', unit: 'Gram', status: 'Active' },
  { code: 'IG007', name: 'Silver Articles', metal: 'Diamond', touch: '95%', unit: 'Gram', status: 'Active' },
  { code: 'IG008', name: 'Diamond Jewellery', metal: 'Platinum', touch: '91.6%', unit: 'Gram', status: 'Active' },
];

const ItemGroupMaster = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Identification');
  const [isGroupActive, setIsGroupActive] = useState(true);
  const [groups, setGroups] = useState(itemGroups);

  const handleSearch = (e) => {
    const searchVal = e.target.value.toLowerCase();
    const result = itemGroups.filter(
      (group) => group.name.toLowerCase().includes(searchVal) || group.code.toLowerCase().includes(searchVal)
    );
    setGroups(result);
  };

  const getMetalBadgeClass = (metal) => {
    switch (metal.toLowerCase()) {
      case 'gold': return 'badge-gold';
      case 'silver': return 'badge-silver';
      case 'diamond': return 'badge-diamond';
      case 'platinum': return 'badge-platinum';
      default: return '';
    }
  };

  const getStatusBadgeClass = (status) => {
    return status.toLowerCase() === 'active' ? 'badge-active' : 'badge-inactive';
  };

  return (
    <div className="item-group-container"
    >
      <div className="page-header">
        <div className="header-info">
          <h1>Item Group Master</h1>
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
          <button className="btn btn-primary btn-add-group" onClick={() => setIsModalOpen(true)}>
            <Plus size={18} />
            Add Group
          </button>
        </div>
      </div>

      <div className="data-card" style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
        <div className="table-container">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Code</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Group Name</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Metal Type</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Touch %</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Unit</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>{group.code}</td>
                  <td style={{ padding: '16px' }}>{group.name}</td>
                  <td style={{ padding: '16px' }}>
                    <span className={`badge ${getMetalBadgeClass(group.metal)}`}>
                      {group.metal}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>{group.touch}</td>
                  <td style={{ padding: '16px' }}>{group.unit}</td>
                  <td style={{ padding: '16px' }}>
                    <span className={`badge ${getStatusBadgeClass(group.status)}`}>
                      {group.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Item Group Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay">
            <motion.div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="modal-header">
                <h2>Add Item Group</h2>
                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-tabs">
                {['Identification', 'Touch & Rates', 'Account Mapping'].map(tab => (
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
                {activeTab === 'Identification' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>Basic Details</h3>
                      <div className="active-toggle" onClick={() => setIsGroupActive(!isGroupActive)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#718096' }}>Active</span>
                        <label className="toggle-switch">
                          <input type="checkbox" checked={isGroupActive} readOnly />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>

                    <div className="form-grid">
                      <div className="form-group">
                        <label>Group Code</label>
                        <input type="text" className="form-control" placeholder="Auto-generated" disabled />
                      </div>
                      <div className="form-group">
                        <label>Group Name</label>
                        <input type="text" className="form-control" placeholder="Enter group name" />
                      </div>
                      <div className="form-group">
                        <label>Short Name</label>
                        <input type="text" className="form-control" placeholder="Enter short name" />
                      </div>
                      <div className="form-group">
                        <label>Metal Type</label>
                        <select className="form-control">
                          <option value="">Select....</option>
                          <option value="gold">Gold</option>
                          <option value="silver">Silver</option>
                          <option value="diamond">Diamond</option>
                          <option value="platinum">Platinum</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Measurement Unit Code</label>
                        <input type="text" className="form-control" placeholder="Enter Unit" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Touch & Rates' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>% Touch & Rate Rules</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Touch %</label>
                        <input type="text" className="form-control" placeholder="Auto-generated" disabled />
                      </div>
                      <div className="form-group">
                        <label>Rate Decimal</label>
                        <input type="text" className="form-control" placeholder="Enter group name" />
                      </div>
                      <div className="form-group">
                        <label>Round Off Type</label>
                        <select className="form-control">
                          <option value="">Select....</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Stock / Job work Type</label>
                        <select className="form-control">
                          <option value="">Select....</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Purchase Rate Type</label>
                        <select className="form-control">
                          <option value="">Select....</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Sales Rate Type</label>
                        <select className="form-control">
                          <option value="">Select....</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Purchase Base Rate %</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Sales Base Rate %</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                    </div>

                    <div className="modal-section-header" style={{ marginTop: '24px' }}>
                      <h3>Rate Adjustment</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Purchase Add Amount</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>Sales Add Amount</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>From Rate</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                      <div className="form-group">
                        <label>To Rate</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                    </div>

                    <div className="modal-section-header" style={{ marginTop: '24px' }}>
                      <h3>Order & Stock Rules</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Min Order Delivery Days</label>
                        <input type="text" className="form-control" defaultValue="0.00" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Account Mapping' && (
                  <div className="modal-pane">
                    <div className="modal-section-header">
                      <h3>Account Mapping</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Sales Account</label>
                        <select className="form-control">
                          <option value="">select account</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Purchase Account</label>
                        <select className="form-control">
                          <option value="">select account</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Opn Stock Account</label>
                        <select className="form-control">
                          <option value="">Select account</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Closing Stock - B.S.A</label>
                        <select className="form-control">
                          <option value="">Select account</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Closing Stock - P&L Account</label>
                        <select className="form-control">
                          <option value="">Select account</option>
                        </select>
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItemGroupMaster;
