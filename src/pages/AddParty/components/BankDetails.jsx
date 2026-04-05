import { Landmark } from 'lucide-react'

const BankDetails = ({ party, errors, handleChange }) => {
  return (
    <div className="tab-pane">
      <div className="bank-section">
        <div className="section-title">
          <Landmark size={18} />
          <span>Bank Account Details</span>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="bank-name">Bank Name</label>
            <input type="text" id="bank-name" className={`form-control ${errors.bankName ? 'input-error' : ''}`} placeholder="Enter Gst Number" value={party.bankName} onChange={handleChange('bankName')} />
            {errors.bankName && <span className="error-msg">{errors.bankName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="acc-num">Account Number</label>
            <select id="acc-num" className={`form-control ${errors.accountNumber ? 'input-error' : ''}`} value={party.accountNumber} onChange={handleChange('accountNumber')}>
              <option value="">Select</option>
              <option value="Self">Self</option>
              <option value="Joint">Joint</option>
            </select>
            {errors.accountNumber && <span className="error-msg">{errors.accountNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="ifsc">IFSC Code</label>
            <input type="text" id="ifsc" className={`form-control ${errors.ifscCode ? 'input-error' : ''}`} placeholder="Enter PAN" value={party.ifscCode} onChange={handleChange('ifscCode')} />
            {errors.ifscCode && <span className="error-msg">{errors.ifscCode}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="swift">Swift Code</label>
            <input type="text" id="swift" className={`form-control ${errors.swiftCode ? 'input-error' : ''}`} placeholder="Enter Aadhar" value={party.swiftCode} onChange={handleChange('swiftCode')} />
            {errors.swiftCode && <span className="error-msg">{errors.swiftCode}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch Name</label>
            <input type="text" id="branch" className={`form-control ${errors.branchName ? 'input-error' : ''}`} placeholder="Enter passport" value={party.branchName} onChange={handleChange('branchName')} />
            {errors.branchName && <span className="error-msg">{errors.branchName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="bank-addr">Bank Address</label>
            <input type="text" id="bank-addr" className={`form-control ${errors.bankAddress ? 'input-error' : ''}`} placeholder="Enter Address" value={party.bankAddress} onChange={handleChange('bankAddress')} />
            {errors.bankAddress && <span className="error-msg">{errors.bankAddress}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankDetails;
