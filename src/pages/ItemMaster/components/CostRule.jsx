import React from 'react'

const CostRule = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>MRP & Cost Rules</h3>
      </div>
      <div className="form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="form-group">
          <label>MRP ROF Type</label>
          <input type="text" className={`form-control ${errors.mrpRofType ? 'input-error' : ''}`} placeholder="Enter MRP ROF Type" value={form.mrpRofType} onChange={handleChange('mrpRofType')} />
          {errors.mrpRofType && <span className="error-msg">{errors.mrpRofType}</span>}
        </div>
        <div className="form-group">
          <label>MRP Less Amount</label>
          <input type="text" className={`form-control ${errors.mrpLessAmount ? 'input-error' : ''}`} placeholder="Enter less amount" value={form.mrpLessAmount} onChange={handleChange('mrpLessAmount')} />
          {errors.mrpLessAmount && <span className="error-msg">{errors.mrpLessAmount}</span>}
        </div>
      </div>
    </div>
  )
}

export default CostRule
