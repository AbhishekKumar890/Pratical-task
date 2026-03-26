import React, { useState } from 'react';
import { User, Mail, MapPin, Landmark, CreditCard, Clock, CheckCircle2, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddParty.css';

const tabs = [
  { label: 'Identification', icon: <User size={18} /> },
  { label: 'Contact & Address', icon: <Mail size={18} /> },
  { label: 'Statutory', icon: <CheckCircle2 size={18} /> },
  { label: 'Bank Details', icon: <Landmark size={18} /> },
  { label: 'Credit & Control', icon: <CreditCard size={18} /> },
  { label: 'Opening Balance', icon: <Clock size={18} /> },
];

const AddParty = () => {
  const [activeTab, setActiveTab] = useState('Identification');
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  const handleActiveChange = () => {
    setIsActive(prev => !prev);
  }

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
            <input type="checkbox" checked={isActive} onChange={handleActiveChange} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="form-card">


        <div className="form-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`tab-btn ${activeTab === tab.label ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="form-inner-container">
          <div className="form-content">
            {activeTab === 'Identification' && (
              <div className="tab-pane">
                <div className="identification-section">
                  <div className="section-title">
                    <User size={18} />
                    <span>Identification Information</span>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="party-code">Party Code</label>
                      <input type="text" id="party-code" className="form-control" placeholder="Auto-generated" disabled />
                    </div>
                    <div className="form-group">
                      <label htmlFor="account-code">Account Code</label>
                      <input type="text" id="account-code" className="form-control" placeholder="Enter account code" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="account-name">Account Name</label>
                      <select id="account-name" className="form-control">
                        <option value="">Select.....</option>
                        <option value="rajesh-jewellers">Rajesh Jewellers</option>
                        <option value="test-party">Test Party</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="short-name">Short Name</label>
                      <input type="text" id="short-name" className="form-control" placeholder="Enter short name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="account-group">Account Group</label>
                      <input type="text" id="account-group" className="form-control" placeholder="Enter category" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="account-category">Account Category</label>
                      <input type="text" id="account-category" className="form-control" placeholder="Enter category" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customer-category">Customer Category</label>
                      <input type="text" id="customer-category" className="form-control" placeholder="Enter Customer Category" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Contact & Address' && (
              <div className="tab-pane">
                <div className="contact-details-section">
                  <div className="section-title">
                    <Phone size={18} />
                    <span>Contact Details</span>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="mobile-1">Mobile Number 1</label>
                      <input type="text" id="mobile-1" className="form-control" placeholder="Enter Mobile" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile-2">Mobile Number 1</label>
                      <input type="text" id="mobile-2" className="form-control" placeholder="Enter Mobile" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-person">Contact Person</label>
                      <select id="contact-person" className="form-control">
                        <option value="">Enter contact name</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="text" id="website" className="form-control" placeholder="Enter Website" />
                    </div>
                  </div>
                </div>

                <div className="address-details-section">
                  <div className="section-title">
                    <MapPin size={18} />
                    <span>Address Details</span>
                  </div>
                  <div className="form-grid address-grid">
                    <div className="form-group span-half">
                      <label htmlFor="addr-1">Address line 1</label>
                      <textarea id="addr-1" className="form-control" placeholder="Enter address" rows="3"></textarea>
                    </div>
                    <div className="form-group span-half">
                      <label htmlFor="addr-2">Address line 2</label>
                      <textarea id="addr-2" className="form-control" placeholder="Enter address" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <select id="city" className="form-control">
                        <option value="">Select ....</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="region">City Area / Region</label>
                      <input type="text" id="region" className="form-control" placeholder="Enter area" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="district">District</label>
                      <input type="text" id="district" className="form-control" placeholder="Enter District" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <select id="state" className="form-control">
                        <option value="">Select ....</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <input type="text" id="country" className="form-control" defaultValue="India" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pincode">Pin code</label>
                      <input type="text" id="pincode" className="form-control" placeholder="Enter Pincode" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Statutory' && (
              <div className="tab-pane">
                <div className="statutory-section">
                  <div className="section-title">
                    <CheckCircle2 size={18} />
                    <span>Statutory & Legal Details</span>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="gst-num">GST Number</label>
                      <input type="text" id="gst-num" className="form-control" placeholder="Enter Gst Number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gst-type">GST Type</label>
                      <select id="gst-type" className="form-control">
                        <option value="">Select</option>
                        <option value="regular">Regular</option>
                        <option value="composition">Composition</option>
                        <option value="unregistered">Unregistered</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pan-num">PAN Number</label>
                      <input type="text" id="pan-num" className="form-control" placeholder="Enter PAN" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="aadhaar-num">Aadhaar / UIN Number</label>
                      <input type="text" id="aadhaar-num" className="form-control" placeholder="Enter Aadhar" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passport-num">Passport Number</label>
                      <input type="text" id="passport-num" className="form-control" placeholder="Enter passport" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="hallmark-num">Hallmark Licence No.</label>
                      <input type="text" id="hallmark-num" className="form-control" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="licence-num">Licence Number</label>
                      <input type="text" id="licence-num" className="form-control" placeholder="Enter Licence" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Bank Details' && (
              <div className="tab-pane">
                <div className="bank-section">
                  <div className="section-title">
                    <Landmark size={18} />
                    <span>Bank Account Details</span>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="bank-name">Bank Name</label>
                      <input type="text" id="bank-name" className="form-control" placeholder="Enter Gst Number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="acc-num">Account Number</label>
                      <select id="acc-num" className="form-control">
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="ifsc">IFSC Code</label>
                      <input type="text" id="ifsc" className="form-control" placeholder="Enter PAN" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="swift">Swift Code</label>
                      <input type="text" id="swift" className="form-control" placeholder="Enter Aadhar" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="branch">Branch Name</label>
                      <input type="text" id="branch" className="form-control" placeholder="Enter passport" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bank-addr">Bank Address</label>
                      <input type="text" id="bank-addr" className="form-control" placeholder="Enter Address" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Credit & Control' && (
              <div className="tab-pane">
                <div className="credit-control-section">
                  <div className="section-title">
                    <CreditCard size={18} />
                    <span>Credit & Control</span>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="credit-days">Credit Days</label>
                      <input type="text" id="credit-days" className="form-control" placeholder="Enter Gst Number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="credit-limit">Credit Limit</label>
                      <select id="credit-limit" className="form-control">
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="interest-pct">Interest %</label>
                      <input type="text" id="interest-pct" className="form-control" placeholder="Enter PAN" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="interest-acc">Interest Account</label>
                      <select id="interest-acc" className="form-control">
                        <option value="">Select account</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="personal-details-section">
                  <div className="section-title">
                    <User size={18} />
                    <span>Personal Details</span>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="dob">Birth Date</label>
                      <input type="text" id="dob" className="form-control" placeholder="dd-mm-yyyy" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="anniversary">Anniversary Date</label>
                      <input type="text" id="anniversary" className="form-control" placeholder="dd-mm-yyyy" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ref-by">Reference BY</label>
                      <input type="text" id="ref-by" className="form-control" placeholder="Enter Reference" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Opening Balance' && (
              <div className="tab-pane">
                <div className="opening-balance-section">
                  <div className="section-title">
                    <Clock size={18} />
                    <span>Opening Balances</span>
                  </div>

                  <div className="balance-grid">
                    {/* Opening Amount */}
                    <div className="balance-card">
                      <h4>Opening Amount</h4>
                      <div className="balance-inputs">
                        <div className="balance-group">
                          <label>Debit</label>
                          <input type="text" defaultValue="0.00" />
                        </div>
                        <div className="balance-group">
                          <label>Credit</label>
                          <input type="text" defaultValue="0.00" />
                        </div>
                      </div>
                    </div>

                    {/* Gold Fine */}
                    <div className="balance-card">
                      <h4>Gold Fine(gm)</h4>
                      <div className="balance-inputs">
                        <div className="balance-group">
                          <label>Debit</label>
                          <input type="text" defaultValue="0.000" />
                        </div>
                        <div className="balance-group">
                          <label>Credit</label>
                          <input type="text" defaultValue="0.000" />
                        </div>
                      </div>
                    </div>

                    {/* Silver Fine */}
                    <div className="balance-card">
                      <h4>Silver Fine (gm)</h4>
                      <div className="balance-inputs">
                        <div className="balance-group">
                          <label>Debit</label>
                          <input type="text" defaultValue="0.000" />
                        </div>
                        <div className="balance-group">
                          <label>Credit</label>
                          <input type="text" defaultValue="0.000" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="remarks-group">
                    <label htmlFor="remarks">Remarks</label>
                    <textarea id="remarks" rows="3" placeholder="Enter any additional notes....."></textarea>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="form-footer">
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancel
          </button>
          <button className="btn btn-primary btn-save" onClick={() => navigate('/')}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParty;
