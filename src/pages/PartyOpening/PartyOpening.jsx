import React, { useState } from 'react';
import { IndianRupee, Grid, Landmark, Plus } from 'lucide-react';
import './PartyOpening.css';


const PartyOpening = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActiveChange = () => {
    setIsActive(prev => !prev);
  }

  return (
    <div className="party-opening-container">
      <div className="page-header">
        <div className="header-info">
          <h1>Party Opening</h1>
          <p className="page-subtitle">Manage party-wise opening balances</p>
        </div>
        <div className="active-toggle">
          <span>Active</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={isActive} onChange={handleActiveChange} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Section 1: Party Reference */}
      <div className="opening-section">
        <div className="section-title">
          <IndianRupee size={18} />
          <span>Party Reference</span>
        </div>
        <div className="party-ref-grid">
          <div className="form-group">
            <label>Party Code</label>
            <input type="text" className="form-control" placeholder="Enter Gst Number" />
          </div>
          <div className="form-group">
            <label>Party Name</label>
            <select className="form-control">
              <option value="">Select</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Opening Transaction Grid */}
      <div className="opening-section">
        <div className="section-title">
          <Grid size={18} />
          <span>Opening Transaction Grid</span>
        </div>
        <div className="transaction-table-wrapper">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Voucher No</th>
                <th>Date</th>
                <th>Bill No</th>
                <th>Days</th>
                <th>Item</th>
                <th>Type</th>
                <th>Gross WT</th>
                <th>Net Wt</th>
                <th>Touch %</th>
                <th>Gold Fine</th>
                <th>Amount</th>
                <th>Dr/Cr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" defaultValue="OP001" readOnly style={{ border: 'none', background: 'transparent' }} /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td><input type="text" placeholder="" /></td>
                <td>
                  <select className="form-control">
                    <option value="dr">Dr</option>
                    <option value="cr">Cr</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="add-row-btn">
          <Plus size={16} />
          Add Row
        </button>
      </div>

      {/* Section 3: Final Opening Balance */}
      <div className="opening-section">
        <div className="section-title">
          <Landmark size={18} />
          <span>Final Opening Balance</span>
        </div>
        <div className="final-balance-grid">
          {/* Card 1 */}
          <div className="balance-card-small">
            <h4>Opening Amount</h4>
            <div className="balance-inputs-row">
              <div className="balance-input-group">
                <label>Debit</label>
                <input type="text" defaultValue="0.00" />
              </div>
              <div className="balance-input-group">
                <label>Credit</label>
                <input type="text" defaultValue="0.00" />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="balance-card-small">
            <h4>Gold Fine (gm)</h4>
            <div className="balance-inputs-row">
              <div className="balance-input-group">
                <label>Debit</label>
                <input type="text" defaultValue="0.00" />
              </div>
              <div className="balance-input-group">
                <label>Credit</label>
                <input type="text" defaultValue="0.00" />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="balance-card-small">
            <h4>Silver Fine (gm)</h4>
            <div className="balance-inputs-row">
              <div className="balance-input-group">
                <label>Debit</label>
                <input type="text" defaultValue="0.00" />
              </div>
              <div className="balance-input-group">
                <label>Credit</label>
                <input type="text" defaultValue="0.00" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Footer */}
      <div className="form-footer">
        <button className="btn btn-secondary">
          Cancel
        </button>
        <button className="btn btn-primary btn-save">
          Save
        </button>
      </div>
    </div >
  );
};

export default PartyOpening;
