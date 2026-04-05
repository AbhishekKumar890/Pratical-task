const TouchRate = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>% Touch & Rate Rules</h3>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Touch %</label>
          <input type="text" className={`form-control ${errors.touchPercent ? 'input-error' : ''}`} value={form.touchPercent} onChange={handleChange('touchPercent')} />
          {errors.touchPercent && <span className="error-msg">{errors.touchPercent}</span>}
        </div>
        <div className="form-group">
          <label>Rate Decimal</label>
          <input type="text" className={`form-control ${errors.rateDecimal ? 'input-error' : ''}`} placeholder="Enter rate decimal" value={form.rateDecimal} onChange={handleChange('rateDecimal')} />
          {errors.rateDecimal && <span className="error-msg">{errors.rateDecimal}</span>}
        </div>
        <div className="form-group">
          <label>Round Off Type</label>
          <input type="text" className={`form-control ${errors.roundOffType ? 'input-error' : ''}`} placeholder="Enter round off type" value={form.roundOffType} onChange={handleChange('roundOffType')} />
          {errors.roundOffType && <span className="error-msg">{errors.roundOffType}</span>}
        </div>
        <div className="form-group">
          <label>Stock / Job work Type</label>
          <input type="text" className={`form-control ${errors.stockJobworkType ? 'input-error' : ''}`} placeholder="Enter stock / job work type" value={form.stockJobworkType} onChange={handleChange('stockJobworkType')} />
          {errors.stockJobworkType && <span className="error-msg">{errors.stockJobworkType}</span>}
        </div>
        <div className="form-group">
          <label>Purchase Rate Type</label>
          <input type="text" className={`form-control ${errors.purchaseRateType ? 'input-error' : ''}`} placeholder="Enter purchase rate type" value={form.purchaseRateType} onChange={handleChange('purchaseRateType')} />
          {errors.purchaseRateType && <span className="error-msg">{errors.purchaseRateType}</span>}
        </div>
        <div className="form-group">
          <label>Sales Rate Type</label>
          <input type="text" className={`form-control ${errors.salesRateType ? 'input-error' : ''}`} placeholder="Enter sales rate type" value={form.salesRateType} onChange={handleChange('salesRateType')} />
          {errors.salesRateType && <span className="error-msg">{errors.salesRateType}</span>}
        </div>
        <div className="form-group">
          <label>Purchase Base Rate %</label>
          <input type="text" className="form-control" value={form.purchaseBaseRatePercent} onChange={handleChange('purchaseBaseRatePercent')} />
        </div>
        <div className="form-group">
          <label>Sales Base Rate %</label>
          <input type="text" className="form-control" value={form.salesBaseRatePercent} onChange={handleChange('salesBaseRatePercent')} />
        </div>
      </div>

      <div className="modal-section-header" style={{ marginTop: '24px' }}>
        <h3>Rate Adjustment</h3>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Purchase Add Amount</label>
          <input type="text" className="form-control" value={form.purchaseAddAmount} onChange={handleChange('purchaseAddAmount')} />
        </div>
        <div className="form-group">
          <label>Sales Add Amount</label>
          <input type="text" className="form-control" value={form.salesAddAmount} onChange={handleChange('salesAddAmount')} />
        </div>
        <div className="form-group">
          <label>From Rate</label>
          <input type="text" className="form-control" value={form.fromRate} onChange={handleChange('fromRate')} />
        </div>
        <div className="form-group">
          <label>To Rate</label>
          <input type="text" className="form-control" value={form.toRate} onChange={handleChange('toRate')} />
        </div>
      </div>

      <div className="modal-section-header" style={{ marginTop: '24px' }}>
        <h3>Order & Stock Rules</h3>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Min Order Delivery Days</label>
          <input type="text" className="form-control" value={form.minOrderDeliveryDays} onChange={handleChange('minOrderDeliveryDays')} />
        </div>
      </div>
    </div>
  )
}

export default TouchRate
