import { CreditCard, User } from 'lucide-react'

const CreditControl = ({ party, errors, handleChange }) => {
  return (
    <div className="tab-pane">
      <div className="credit-control-section">
        <div className="section-title">
          <CreditCard size={18} />
          <span>Credit & Control</span>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="credit-days">Credit Days</label>
            <input type="text" id="credit-days" className={`form-control ${errors.creditDays ? 'input-error' : ''}`} placeholder="Enter Gst Number" value={party.creditDays} onChange={handleChange('creditDays')} />
            {errors.creditDays && <span className="error-msg">{errors.creditDays}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="credit-limit">Credit Limit</label>
            <select id="credit-limit" className={`form-control ${errors.creditLimit ? 'input-error' : ''}`} value={party.creditLimit} onChange={handleChange('creditLimit')}>
              <option value="">Select</option>
              <option value="2000">2000</option>
              <option value="4000">4000</option>
              <option value="10000">10000</option>
            </select>
            {errors.creditLimit && <span className="error-msg">{errors.creditLimit}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="interest-pct">Interest %</label>
            <input type="text" id="interest-pct" className={`form-control ${errors.interestPercent ? 'input-error' : ''}`} placeholder="Enter PAN" value={party.interestPercent} onChange={handleChange('interestPercent')} />
            {errors.interestPercent && <span className="error-msg">{errors.interestPercent}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="interest-acc">Interest Account</label>
            <select id="interest-acc" className="form-control" value={party.interestAccount} onChange={handleChange('interestAccount')}>
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
            <input type="text" id="dob" className={`form-control ${errors.birthDate ? 'input-error' : ''}`} placeholder="dd-mm-yyyy" value={party.birthDate} onChange={handleChange('birthDate')} />
            {errors.birthDate && <span className="error-msg">{errors.birthDate}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="anniversary">Anniversary Date</label>
            <input type="text" id="anniversary" className={`form-control ${errors.anniversaryDate ? 'input-error' : ''}`} placeholder="dd-mm-yyyy" value={party.anniversaryDate} onChange={handleChange('anniversaryDate')} />
            {errors.anniversaryDate && <span className="error-msg">{errors.anniversaryDate}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="ref-by">Reference BY</label>
            <input type="text" id="ref-by" className={`form-control ${errors.referenceBy ? 'input-error' : ''}`} placeholder="Enter Reference" value={party.referenceBy} onChange={handleChange('referenceBy')} />
            {errors.referenceBy && <span className="error-msg">{errors.referenceBy}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditControl
