import React from 'react';
import { Search, Filter, Download, Plus, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { newItemGroupValidation } from '../../utils/formValidation';
import {
  resetItemGroup,
  saveItemGroup,
  setItemGroupField,
  toggleItemGroupActive,
} from './slices/itemGroupSlice';
import './ItemGroup.css';
import Identification from './components/Identification';
import TouchRate from './components/TouchRate';
import AccountMapping from './components/AccountMapping';

const tabs = ['Identification', 'Touch & Rates', 'Account Mapping'];

const tabFieldsMap = {
  Identification: ['groupName', 'shortName', 'metalType', 'measurementUnitCode'],
  'Touch & Rates': [
    'touchPercent',
    'rateDecimal',
    'roundOffType',
    'stockJobworkType',
    'purchaseRateType',
    'salesRateType',
    'purchaseBaseRatePercent',
    'salesBaseRatePercent',
    'purchaseAddAmount',
    'salesAddAmount',
    'fromRate',
    'toRate',
    'minOrderDeliveryDays',
  ],
  'Account Mapping': [
    'salesAccount',
    'purchaseAccount',
    'openingStockAccount',
    'closingStockBsa',
    'closingStockPlAccount',
  ],
};

const fieldTabMap = Object.entries(tabFieldsMap).reduce((acc, [tab, fields]) => {
  fields.forEach((field) => {
    acc[field] = tab;
  });
  return acc;
}, {});

const ItemGroupMaster = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.itemGroup.form);
  const groupList = useSelector((state) => state.itemGroup.groupList);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Identification');
  const [searchVal, setSearchVal] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const filteredGroups = groupList.filter((group) =>
    [group.groupCode, group.groupName, group.metalType]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(searchVal.toLowerCase()))
  );

  const handleOpenModal = () => {
    setErrors({});
    setActiveTab('Identification');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setErrors({});
    setActiveTab('Identification');
    dispatch(resetItemGroup());
    setIsModalOpen(false);
  };

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;
    dispatch(setItemGroupField({ field, value }));

    const hasValue = value.trim() !== '';
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
    const validationResult = newItemGroupValidation(form);
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

    dispatch(saveItemGroup());
    setErrors({});
    setActiveTab('Identification');
    setIsModalOpen(false);
  };

  const getMetalBadgeClass = (metal) => {
    switch ((metal || '').toLowerCase()) {
      case 'gold': return 'badge-gold';
      case 'silver': return 'badge-silver';
      case 'diamond': return 'badge-diamond';
      case 'platinum': return 'badge-platinum';
      default: return '';
    }
  };

  const hasTabError = (tab) => Object.keys(errors).some((field) => fieldTabMap[field] === tab);

  return (
    <div className="item-group-container">
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
            <input
              type="text"
              placeholder="Search Groups"
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
          <button className="btn btn-primary btn-add-group" onClick={handleOpenModal}>
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
              {filteredGroups.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No item groups found. Click "Add Group" to create one.
                  </td>
                </tr>
              ) : (
                filteredGroups.map((group) => (
                  <tr key={group.groupCode} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>{group.groupCode}</td>
                    <td style={{ padding: '16px' }}>{group.groupName || '—'}</td>
                    <td style={{ padding: '16px' }}>
                      <span className={`badge ${getMetalBadgeClass(group.metalType)}`}>
                        {group.metalType || '—'}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>{group.touchPercent || '—'}</td>
                    <td style={{ padding: '16px' }}>{group.measurementUnitCode || '—'}</td>
                    <td style={{ padding: '16px' }}>
                      <span className={`badge ${group.isActive ? 'badge-active' : 'badge-inactive'}`}>
                        {group.isActive ? 'Active' : 'Inactive'}
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
          <div className="modal-container">
            <div className="modal-header">
              <h2>Add Item Group</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                <X size={20} />
              </button>
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
              {activeTab === 'Identification' && 
                <Identification 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }

              {activeTab === 'Touch & Rates' && 
                <TouchRate 
                  form={form}
                  errors={errors}
                  handleChange={handleFieldChange}
                />
              }

              {activeTab === 'Account Mapping' && 
                <AccountMapping 
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

export default ItemGroupMaster;
