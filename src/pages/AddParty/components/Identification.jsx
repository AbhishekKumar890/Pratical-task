import { User } from 'lucide-react'

const Identification = ({ party, errors, handleChange }) => {
  return (
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
            <input type="text" id="account-code" className={`form-control ${errors.accountCode ? 'input-error' : ''}`} placeholder="Enter account code" value={party.accountCode} onChange={handleChange('accountCode')} />
            {errors.accountCode && <span className="error-msg">{errors.accountCode}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="account-name">Account Name</label>
            <select id="account-name" className={`form-control ${errors.accountName ? 'input-error' : ''}`} value={party.accountName} onChange={handleChange('accountName')}>
              <option value="">Select.....</option>
              <option value="Rajesh-jewellers">Rajesh Jewellers</option>
              <option value="Test-party">Test Party</option>
            </select>
            {errors.accountName && <span className="error-msg">{errors.accountName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="short-name">Short Name</label>
            <input type="text" id="short-name" className={`form-control ${errors.shortName ? 'input-error' : ''}`} placeholder="Enter short name" value={party.shortName} onChange={handleChange('shortName')} />
            {errors.shortName && <span className="error-msg">{errors.shortName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="account-group">Account Group</label>
            <input type="text" id="account-group" className={`form-control ${errors.accountGroup ? 'input-error' : ''}`} placeholder="Enter category" value={party.accountGroup} onChange={handleChange('accountGroup')} />
            {errors.accountGroup && <span className="error-msg">{errors.accountGroup}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="account-category">Account Category</label>
            <input type="text" id="account-category" className={`form-control ${errors.accountCategory ? 'input-error' : ''}`} placeholder="Enter category" value={party.accountCategory} onChange={handleChange('accountCategory')} />
            {errors.accountCategory && <span className="error-msg">{errors.accountCategory}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="customer-category">Customer Category</label>
            <input type="text" id="customer-category" className={`form-control ${errors.customerCategory ? 'input-error' : ''}`} placeholder="Enter category" value={party.customerCategory} onChange={handleChange('customerCategory')} />
            {errors.customerCategory && <span className="error-msg">{errors.customerCategory}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identification
