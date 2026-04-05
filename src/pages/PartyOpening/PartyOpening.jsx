import React from 'react';
import { IndianRupee, Grid, Landmark, Plus, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { newPartyOpeningValidation } from '../../utils/formValidation';
import {
  addPartyOpeningRow,
  removePartyOpeningRow,
  savePartyOpening,
  setPartyOpeningField,
  setPartyOpeningTransactionField,
  togglePartyOpeningActive,
} from './slices/partyOpeningSlice';
import './PartyOpening.css';

const PartyOpening = () => {
  const dispatch = useDispatch();
  const partyList = useSelector((state) => state.addParty.partyList);
  const form = useSelector((state) => state.partyOpening.form);
  const [errors, setErrors] = React.useState({});

  const clearError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) {
        return prev;
      }
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handlePartyCodeChange = (e) => {
    const value = e.target.value;
    dispatch(setPartyOpeningField({ field: 'partyCode', value }));

    if (value.trim()) {
      clearError('partyCode');
    }
  };

  const handlePartyNameChange = (e) => {
    const value = e.target.value;
    dispatch(setPartyOpeningField({ field: 'partyName', value }));

    if (value.trim()) {
      clearError('partyName');
    }
  };

  const handleTransactionChange = (index, field) => (e) => {
    const value = e.target.value;
    dispatch(setPartyOpeningTransactionField({ index, field, value }));

    if (value.trim()) {
      clearError(`transactions.${index}.${field}`);
    }
  };

  const handleSummaryChange = (field) => (e) => {
    dispatch(setPartyOpeningField({ field, value: e.target.value }));
  };

  const handleSave = () => {
    const validationResult = newPartyOpeningValidation(form);
    const errs = validationResult?.errorMessage;

    if (errs) {
      setErrors(errs);
      return;
    }

    dispatch(savePartyOpening());
    setErrors({});
  };

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
            <input type="checkbox" checked={form.isActive} onChange={() => dispatch(togglePartyOpeningActive())} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="opening-section">
        <div className="section-title">
          <IndianRupee size={18} />
          <span>Party Reference</span>
        </div>
        <div className="party-ref-grid">
          <div className="form-group">
            <label>Party Code</label>
            <input
              type="text"
              className={`form-control ${errors.partyCode ? 'input-error' : ''}`}
              value={form.partyCode}
              onChange={handlePartyCodeChange}
              placeholder="Enter Gst Number"
            />
            {errors.partyCode && <span className="error-msg">{errors.partyCode}</span>}
          </div>
          <div className="form-group">
            <label>Party Name</label>
            <select className={`form-control ${errors.partyName ? 'input-error' : ''}`} value={form.partyName} onChange={handlePartyNameChange}>
              <option value="">Select</option>
              {partyList.map((party) => {
                const partyName = party.accountName || party.shortName || '';
                return (
                  <option key={party.partyCode} value={partyName}>
                    {partyName}
                  </option>
                );
              })}
            </select>
            {errors.partyName && <span className="error-msg">{errors.partyName}</span>}
          </div>
        </div>
      </div>

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {form.transactions.map((row, index) => (
                <tr key={index}>
                  <td><input type="text" value={row.voucherNo || `OP${String(index + 1).padStart(3, '0')}`} readOnly style={{ border: 'none', background: 'transparent' }} /></td>
                  <td>
                    <input className={errors[`transactions.${index}.date`] ? 'input-error' : ''} type="text" value={row.date} onChange={handleTransactionChange(index, 'date')} />
                    {errors[`transactions.${index}.date`] && <span className="error-msg">{errors[`transactions.${index}.date`]}</span>}
                  </td>
                  <td>
                    <input className={errors[`transactions.${index}.billNo`] ? 'input-error' : ''} type="text" value={row.billNo} onChange={handleTransactionChange(index, 'billNo')} />
                    {errors[`transactions.${index}.billNo`] && <span className="error-msg">{errors[`transactions.${index}.billNo`]}</span>}
                  </td>
                  <td><input type="text" value={row.days} onChange={handleTransactionChange(index, 'days')} /></td>
                  <td>
                    <input className={errors[`transactions.${index}.item`] ? 'input-error' : ''} type="text" value={row.item} onChange={handleTransactionChange(index, 'item')} />
                    {errors[`transactions.${index}.item`] && <span className="error-msg">{errors[`transactions.${index}.item`]}</span>}
                  </td>
                  <td>
                    <input className={errors[`transactions.${index}.type`] ? 'input-error' : ''} type="text" value={row.type} onChange={handleTransactionChange(index, 'type')} />
                    {errors[`transactions.${index}.type`] && <span className="error-msg">{errors[`transactions.${index}.type`]}</span>}
                  </td>
                  <td><input type="text" value={row.grossWt} onChange={handleTransactionChange(index, 'grossWt')} /></td>
                  <td><input type="text" value={row.netWt} onChange={handleTransactionChange(index, 'netWt')} /></td>
                  <td><input type="text" value={row.touchPercent} onChange={handleTransactionChange(index, 'touchPercent')} /></td>
                  <td><input type="text" value={row.goldFine} onChange={handleTransactionChange(index, 'goldFine')} /></td>
                  <td>
                    <input className={errors[`transactions.${index}.amount`] ? 'input-error' : ''} type="text" value={row.amount} onChange={handleTransactionChange(index, 'amount')} />
                    {errors[`transactions.${index}.amount`] && <span className="error-msg">{errors[`transactions.${index}.amount`]}</span>}
                  </td>
                  <td>
                    <select className={`form-control ${errors[`transactions.${index}.drCr`] ? 'input-error' : ''}`} value={row.drCr} onChange={handleTransactionChange(index, 'drCr')}>
                      <option value="dr">Dr</option>
                      <option value="cr">Cr</option>
                    </select>
                    {errors[`transactions.${index}.drCr`] && <span className="error-msg">{errors[`transactions.${index}.drCr`]}</span>}
                  </td>
                  <td>
                    <button
                      className="row-delete-btn"
                      onClick={() => dispatch(removePartyOpeningRow(index))}
                      disabled={form.transactions.length === 1}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="add-row-btn" onClick={() => dispatch(addPartyOpeningRow())}>
          <Plus size={16} />
          Add Row
        </button>
      </div>

      <div className="opening-section">
        <div className="section-title">
          <Landmark size={18} />
          <span>Final Opening Balance</span>
        </div>
        <div className="final-balance-grid">
          <div className="balance-card-small">
            <h4>Opening Amount</h4>
            <div className="balance-inputs-row">
              <div className="balance-input-group">
                <label>Debit</label>
                <input type="text" value={form.openingAmountDebit} onChange={handleSummaryChange('openingAmountDebit')} />
              </div>
              <div className="balance-input-group">
                <label>Credit</label>
                <input type="text" value={form.openingAmountCredit} onChange={handleSummaryChange('openingAmountCredit')} />
              </div>
            </div>
          </div>
          <div className="balance-card-small">
            <h4>Gold Fine (gm)</h4>
            <div className="balance-inputs-row">
              <div className="balance-input-group">
                <label>Debit</label>
                <input type="text" value={form.goldFineDebit} onChange={handleSummaryChange('goldFineDebit')} />
              </div>
              <div className="balance-input-group">
                <label>Credit</label>
                <input type="text" value={form.goldFineCredit} onChange={handleSummaryChange('goldFineCredit')} />
              </div>
            </div>
          </div>
          <div className="balance-card-small">
            <h4>Silver Fine (gm)</h4>
            <div className="balance-inputs-row">
              <div className="balance-input-group">
                <label>Debit</label>
                <input type="text" value={form.silverFineDebit} onChange={handleSummaryChange('silverFineDebit')} />
              </div>
              <div className="balance-input-group">
                <label>Credit</label>
                <input type="text" value={form.silverFineCredit} onChange={handleSummaryChange('silverFineCredit')} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-footer">
        <button className="btn btn-secondary">
          Cancel
        </button>
        <button className="btn btn-primary btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div >
  );
};

export default PartyOpening;
