import React from 'react';
import { User, Mail, MapPin, Landmark, CreditCard, Clock, CheckCircle2, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActive, saveParty, resetParty, setField } from './slices/addPartySlice';
import './AddParty.css';
import { Identification, ContactAddress, Statutory, BankDetails, CreditControl, OpeningBalance } from './components';
import { newPartyValidation } from '../../utils/formValidation';

const tabs = [
  { label: 'Identification', icon: <User size={18} /> },
  { label: 'Contact & Address', icon: <Mail size={18} /> },
  { label: 'Statutory', icon: <CheckCircle2 size={18} /> },
  { label: 'Bank Details', icon: <Landmark size={18} /> },
  { label: 'Credit & Control', icon: <CreditCard size={18} /> },
  { label: 'Opening Balance', icon: <Clock size={18} /> },
];

const tabFieldsMap = {
  Identification: [
    'accountCode',
    'accountName',
    'shortName',
    'accountGroup',
    'accountCategory',
    'customerCategory',
  ],
  'Contact & Address': [
    'mobile1',
    'mobile2',
    'contactPerson',
    'email',
    'website',
    'address1',
    'address2',
    'city',
    'region',
    'district',
    'state',
    'country',
    'pincode',
  ],
  Statutory: [
    'gstNumber',
    'gstType',
    'panNumber',
    'aadhaarNumber',
    'passportNumber',
    'hallmarkLicenceNo',
    'licenceNumber',
  ],
  'Bank Details': [
    'bankName',
    'accountNumber',
    'ifscCode',
    'swiftCode',
    'branchName',
    'bankAddress',
  ],
  'Credit & Control': [
    'creditDays',
    'creditLimit',
    'interestPercent',
    'interestAccount',
    'birthDate',
    'anniversaryDate',
    'referenceBy',
  ],
  'Opening Balance': [
    'openingAmountDebit',
    'openingAmountCredit',
    'goldFineDebit',
    'goldFineCredit',
    'silverFineDebit',
    'silverFineCredit',
    'remarks',
  ],
};

const fieldTabMap = Object.entries(tabFieldsMap).reduce((acc, [tabLabel, fields]) => {
  fields.forEach((field) => {
    acc[field] = tabLabel;
  });
  return acc;
}, {});

const AddParty = () => {
  const [activeTab, setActiveTab] = React.useState('Identification');
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const party = useSelector((state) => state.addParty.form);

  const handleActiveChange = () => dispatch(toggleActive());

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;
    dispatch(setField({ field, value }));

    const hasValue = typeof value === 'string' ? value.trim() !== '' : Boolean(value);
    if (!hasValue) {
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      if (!next[field]) {
        return prev;
      }

      delete next[field];
      return next;
    });
  };

  const handleSave = () => {
    const validationResult = newPartyValidation(party);
    const errs = validationResult?.errorMessage;

    if (errs) {
      setErrors(errs);
      const firstErrorField = Object.keys(errs)[0];
      const targetTab = fieldTabMap[firstErrorField];
      if (targetTab) setActiveTab(targetTab);
      return;
    }
    dispatch(saveParty());
    navigate('/');
  };

  return (
    <div className="add-party-container"
    >
      <div className="page-header">
        <div className="header-info">
          <div>
            <h1>Add New Party</h1>
            <p className="page-subtitle">Create a new party account</p>
          </div>
        </div>
        <div className="active-toggle">
          <span>Active</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={party.isActive} onChange={handleActiveChange} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="form-card">


        <div className="form-tabs">
          {tabs.map((tab) => {
            const hasError = Object.keys(errors).some((f) => fieldTabMap[f] === tab.label);
            return (
              <button
                key={tab.label}
                className={`tab-btn ${activeTab === tab.label ? 'active' : ''} ${hasError ? 'tab-error' : ''}`}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.label}
                {hasError && <span className="tab-error-dot" />}
              </button>
            );
          })}
        </div>

        <div className="form-inner-container">
          <div className="form-content">
            {activeTab === 'Identification' && 
              <Identification 
                party={party}
                errors={errors}
                handleChange={handleFieldChange}
              />
            }
            {activeTab === 'Contact & Address' &&
              <ContactAddress 
                party={party} 
                errors={errors}
                handleChange={handleFieldChange}
              />
            }
            {activeTab === 'Statutory' &&
              <Statutory 
                party={party} 
                errors={errors}
                handleChange={handleFieldChange}
              />
            }
            {activeTab === 'Bank Details' && 
              <BankDetails 
                party={party}
                errors={errors}
                handleChange={handleFieldChange}
              />
            }
            {activeTab === 'Credit & Control' && 
              <CreditControl 
                party={party}
                errors={errors}
                handleChange={handleFieldChange}
              />
            }
            {activeTab === 'Opening Balance' && 
              <OpeningBalance 
                party={party}
                errors={errors}
                handleChange={handleFieldChange}
              />
            }
          </div>
        </div>

        <div className="form-footer">
          <button className="btn btn-secondary" onClick={() => { dispatch(resetParty()); navigate('/'); }}>
            Cancel
          </button>
          <button className="btn btn-primary btn-save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParty;
