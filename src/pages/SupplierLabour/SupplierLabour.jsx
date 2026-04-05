import React from 'react';
import { IndianRupee, Grid, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { newSupplierLabourValidation } from '../../utils/formValidation';
import { saveSupplierLabour, setSupplierLabourField, setSupplierLabourMappingField, toggleSupplierLabourActive } from './slices/supplierLabourSlice';
import './SupplierLabour.css';

const SupplierLabour = () => {
  const dispatch = useDispatch();
  const partyList = useSelector((state) => state.addParty.partyList);
  const form = useSelector((state) => state.supplierLabour.form);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    const selectedParty = partyList.find((party) => party.partyCode === form.partyCode);
    const partyName = selectedParty?.accountName || selectedParty?.shortName || '';

    if (form.partyName !== partyName) {
      dispatch(setSupplierLabourField({ field: 'partyName', value: partyName }));
    }
  }, [dispatch, form.partyCode, form.partyName, partyList]);

  const handlePartyChange = (e) => {
    const partyCode = e.target.value;

    dispatch(setSupplierLabourField({ field: 'partyCode', value: partyCode }));

    if (partyCode.trim()) {
      setErrors((prev) => {
        if (!prev.partyCode) return prev;
        const next = { ...prev };
        delete next.partyCode;
        return next;
      });
    }
  };

  const handleMappingChange = (index, field) => (e) => {
    const value = e.target.value;
    dispatch(setSupplierLabourMappingField({ index, field, value }));

    if (value.trim()) {
      setErrors((prev) => {
        const key = `mappings.${index}.${field}`;
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSave = () => {
    const validationResult = newSupplierLabourValidation(form);
    const errs = validationResult?.errorMessage;

    if (errs) {
      setErrors(errs);
      return;
    }

    dispatch(saveSupplierLabour());
    setErrors({});
  };

  return (
    <div className="supplier-labour-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div className="header-info">
          <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Supplier Wise Labour</h1>
          <p className="page-subtitle">Manage labour rates by party and product</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="search-trigger">
            <Search size={18} />
          </div>
          <div className="active-toggle" onClick={() => dispatch(toggleSupplierLabourActive())}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#718096' }}>Active</span>
            <label className="toggle-switch">
              <input type="checkbox" checked={form.isActive} readOnly />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Section 1: Party Reference */}
      <div className="labour-section">
        <div className="section-title">
          <IndianRupee size={18} />
          <span>Party Reference</span>
        </div>
        <div className="party-ref-grid">
          <div className="form-group">
            <label>Party Code</label>
            <select className={`form-control ${errors.partyCode ? 'input-error' : ''}`} value={form.partyCode} onChange={handlePartyChange}>
              <option value="">Select</option>
              {partyList.map((party) => (
                <option key={party.partyCode} value={party.partyCode}>
                  {party.partyCode}
                </option>
              ))}
            </select>
            {errors.partyCode && <span className="error-msg">{errors.partyCode}</span>}
          </div>
          <div className="form-group">
            <label>Party Name</label>
            <input type="text" value={form.partyName} className="form-control" readOnly style={{ background: '#F8FAFC' }} />
          </div>
        </div>
      </div>

      {/* Section 2: Labour Mapping */}
      <div className="labour-section">
        <div className="section-title">
          <Grid size={18} />
          <span>Labour Mapping</span>
        </div>
        <div className="table-container">
          <table className="labour-mapping-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Touch %</th>
                <th>Labour %</th>
                <th>Labour Type %</th>
                <th>Labour Rate %</th>
                <th>Item Rate %</th>
              </tr>
            </thead>
            <tbody>
              {form.mappings.map((row, i) => (
                <tr key={i}>
                  <td>
                    <select className={errors[`mappings.${i}.product`] ? 'input-error' : ''} value={row.product} onChange={handleMappingChange(i, 'product')}>
                      <option value="">Select</option>
                      <option value="necklace">Necklace</option>
                      <option value="ring">Ring</option>
                    </select>
                    {errors[`mappings.${i}.product`] && <span className="error-msg">{errors[`mappings.${i}.product`]}</span>}
                  </td>
                  <td>
                    <input className={errors[`mappings.${i}.touch`] ? 'input-error' : ''} type="text" value={row.touch} onChange={handleMappingChange(i, 'touch')} />
                    {errors[`mappings.${i}.touch`] && <span className="error-msg">{errors[`mappings.${i}.touch`]}</span>}
                  </td>
                  <td>
                    <input className={errors[`mappings.${i}.labourPct`] ? 'input-error' : ''} type="text" value={row.labourPct} onChange={handleMappingChange(i, 'labourPct')} />
                    {errors[`mappings.${i}.labourPct`] && <span className="error-msg">{errors[`mappings.${i}.labourPct`]}</span>}
                  </td>
                  <td>
                    <select className={errors[`mappings.${i}.type`] ? 'input-error' : ''} value={row.type} onChange={handleMappingChange(i, 'type')}>
                      <option value="">Select</option>
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed</option>
                    </select>
                    {errors[`mappings.${i}.type`] && <span className="error-msg">{errors[`mappings.${i}.type`]}</span>}
                  </td>
                  <td>
                    <input className={errors[`mappings.${i}.rate`] ? 'input-error' : ''} type="text" value={row.rate} onChange={handleMappingChange(i, 'rate')} />
                    {errors[`mappings.${i}.rate`] && <span className="error-msg">{errors[`mappings.${i}.rate`]}</span>}
                  </td>
                  <td>
                    <input className={errors[`mappings.${i}.itemRate`] ? 'input-error' : ''} type="text" value={row.itemRate} onChange={handleMappingChange(i, 'itemRate')} />
                    {errors[`mappings.${i}.itemRate`] && <span className="error-msg">{errors[`mappings.${i}.itemRate`]}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="save-labour-btn" onClick={handleSave}>
          Save Labour Settings
        </button>
      </div>
    </div>
  );
};

export default SupplierLabour;
