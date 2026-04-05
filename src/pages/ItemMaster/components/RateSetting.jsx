import React from 'react'

const RateSetting = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>Tax & Rate Settings</h3>
      </div>
      <div className="form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="form-group">
          <label>HSN Code</label>
          <input type="text" className={`form-control ${errors.hsnCode ? 'input-error' : ''}`} placeholder="Enter HSN Code" value={form.hsnCode} onChange={handleChange('hsnCode')} />
          {errors.hsnCode && <span className="error-msg">{errors.hsnCode}</span>}
        </div>
        <div className="form-group">
          <label>Labour Rate Type</label>
          <input type="text" className={`form-control ${errors.labourRateType ? 'input-error' : ''}`} placeholder="Enter labour rate type" value={form.labourRateType} onChange={handleChange('labourRateType')} />
          {errors.labourRateType && <span className="error-msg">{errors.labourRateType}</span>}
        </div>
        <div className="form-group">
          <label>Add Sales Rate</label>
          <input type="text" className="form-control" placeholder="Enter sales rate" value={form.addSalesRate} onChange={handleChange('addSalesRate')} />
        </div>
        <div className="form-group">
          <label>Account Stock Type</label>
          <input type="text" className={`form-control ${errors.accountStockType ? 'input-error' : ''}`} placeholder="Enter stock type" value={form.accountStockType} onChange={handleChange('accountStockType')} />
          {errors.accountStockType && <span className="error-msg">{errors.accountStockType}</span>}
        </div>
      </div>
    </div>
  )
}

export default RateSetting
