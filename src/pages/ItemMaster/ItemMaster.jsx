import React from 'react';
import { Search, Filter, Download, Plus, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { newItemValidation } from '../../utils/formValidation';
import { resetItem, saveItem, setItemField, toggleItemActive } from './slices/itemMasterSlice';
import './ItemMaster.css';
import { CostRule, Identification, RateSetting, TagSetting, WeightSetting } from './components';

const tabs = ['Basic info', 'Touch & Weight', 'Tag Settings', 'Tax & Rates', 'MRP & Cost'];

const tabFieldsMap = {
  'Basic info': ['itemName', 'shortName', 'itemType', 'itemGroup', 'product', 'gender'],
  'Touch & Weight': ['touchPercent', 'minTouch', 'maxTouch', 'minWestPercent', 'maxWestPercent', 'weight', 'watermark'],
  'Tag Settings': ['tagLooseGroup', 'tagSplitType', 'tagRateFix', 'allowNegativeStock', 'stockMaintain'],
  'Tax & Rates': ['hsnCode', 'labourRateType', 'addSalesRate', 'accountStockType'],
  'MRP & Cost': ['mrpRofType', 'mrpLessAmount'],
};

const fieldTabMap = Object.entries(tabFieldsMap).reduce((acc, [tab, fields]) => {
  fields.forEach((field) => {
    acc[field] = tab;
  });
  return acc;
}, {});

const ItemMasterPage = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.itemMaster.form);
  const itemList = useSelector((state) => state.itemMaster.itemList);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Basic info');
  const [searchVal, setSearchVal] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const filteredItems = itemList.filter((item) =>
    [item.itemCode, item.itemName, item.itemGroup, item.product]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(searchVal.toLowerCase()))
  );

  const handleOpenModal = () => {
    setErrors({});
    setActiveTab('Basic info');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setErrors({});
    setActiveTab('Basic info');
    dispatch(resetItem());
    setIsModalOpen(false);
  };

  const handleFieldChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    dispatch(setItemField({ field, value }));

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
    const validationResult = newItemValidation(form);
    const errs = validationResult?.errorMessage;

    if (errs) {
      setErrors(errs);
      const firstErrorField = Object.keys(errs)[0];
      const targetTab = fieldTabMap[firstErrorField];
      if (targetTab) {
        setActiveTab(targetTab);
      }
      return;
    }

    dispatch(saveItem());
    setErrors({});
    setActiveTab('Basic info');
    setIsModalOpen(false);
  };

  const hasTabError = (tab) => Object.keys(errors).some((field) => fieldTabMap[field] === tab);

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
            <input
              type="text"
              placeholder="Search Items"
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
          <button className="btn btn-primary" style={{ backgroundColor: '#F3A63B', color: 'white' }} onClick={handleOpenModal}>
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
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Item Name</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Group</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Product</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Touch%</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>HSN</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No items found. Click "Add Item" to create one.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.itemCode} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>{item.itemCode}</td>
                    <td style={{ padding: '16px' }}>{item.itemName || '—'}</td>
                    <td style={{ padding: '16px' }}>{item.itemGroup || '—'}</td>
                    <td style={{ padding: '16px' }}>{item.product || '—'}</td>
                    <td style={{ padding: '16px' }}>{item.touchPercent || '—'}</td>
                    <td style={{ padding: '16px' }}>{item.hsnCode || '—'}</td>
                    <td style={{ padding: '16px' }}>
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

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container" style={{ maxWidth: '1100px', width: '90%' }}>
            <div className="modal-header">
              <h2>Add Item</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="active-toggle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#718096' }}>Active</span>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={form.isActive}
                      onChange={() => dispatch(toggleItemActive())}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <button className="close-btn" onClick={handleCloseModal}>
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="modal-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`modal-tab-btn ${activeTab === tab ? 'active' : ''} ${hasTabError(tab) ? 'tab-error' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {hasTabError(tab) && <span className="tab-error-dot" />}
                </button>
              ))}
            </div>

            <div className="modal-body">
              {activeTab === 'Basic info' && 
                <Identification 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }

              {activeTab === 'Touch & Weight' &&
                <WeightSetting 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }

              {activeTab === 'Tag Settings' && 
                <TagSetting 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }

              {activeTab === 'Tax & Rates' && 
                <RateSetting 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }

              {activeTab === 'MRP & Cost' && 
                <CostRule 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave} style={{ backgroundColor: '#3F3D89', color: 'white' }}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemMasterPage;
