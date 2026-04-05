const AccountMapping = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>Account Mapping</h3>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Sales Account</label>
          <input type="text" className={`form-control ${errors.salesAccount ? 'input-error' : ''}`} placeholder="Enter sales account" value={form.salesAccount} onChange={handleChange('salesAccount')} />
          {errors.salesAccount && <span className="error-msg">{errors.salesAccount}</span>}
        </div>
        <div className="form-group">
          <label>Purchase Account</label>
          <input type="text" className={`form-control ${errors.purchaseAccount ? 'input-error' : ''}`} placeholder="Enter purchase account" value={form.purchaseAccount} onChange={handleChange('purchaseAccount')} />
          {errors.purchaseAccount && <span className="error-msg">{errors.purchaseAccount}</span>}
        </div>
        <div className="form-group">
          <label>Opn Stock Account</label>
          <input type="text" className={`form-control ${errors.openingStockAccount ? 'input-error' : ''}`} placeholder="Enter opening stock account" value={form.openingStockAccount} onChange={handleChange('openingStockAccount')} />
          {errors.openingStockAccount && <span className="error-msg">{errors.openingStockAccount}</span>}
        </div>
        <div className="form-group">
          <label>Closing Stock - B.S.A</label>
          <input type="text" className={`form-control ${errors.closingStockBsa ? 'input-error' : ''}`} placeholder="Enter closing stock B.S.A" value={form.closingStockBsa} onChange={handleChange('closingStockBsa')} />
          {errors.closingStockBsa && <span className="error-msg">{errors.closingStockBsa}</span>}
        </div>
        <div className="form-group">
          <label>Closing Stock - P&L Account</label>
          <input type="text" className={`form-control ${errors.closingStockPlAccount ? 'input-error' : ''}`} placeholder="Enter closing stock P&L account" value={form.closingStockPlAccount} onChange={handleChange('closingStockPlAccount')} />
          {errors.closingStockPlAccount && <span className="error-msg">{errors.closingStockPlAccount}</span>}
        </div>
      </div>
    </div>
  )
}

export default AccountMapping
