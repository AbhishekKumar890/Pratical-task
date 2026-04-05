import { CheckCircle2 } from 'lucide-react';

const Statutory = ({ party, errors, handleChange }) => {
  return (
    <div className="tab-pane">
      <div className="statutory-section">
        <div className="section-title">
          <CheckCircle2 size={18} />
          <span>Statutory & Legal Details</span>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="gst-num">GST Number</label>
            <input type="text" id="gst-num" className={`form-control ${errors.gstNumber ? 'input-error' : ''}`} placeholder="Enter Gst Number" value={party.gstNumber} onChange={handleChange('gstNumber')} />
            {errors.gstNumber && <span className="error-msg">{errors.gstNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="gst-type">GST Type</label>
            <select id="gst-type" className={`form-control ${errors.gstType ? 'input-error' : ''}`} value={party.gstType} onChange={handleChange('gstType')}>
              <option value="">Select</option>
              <option value="regular">Regular</option>
              <option value="composition">Composition</option>
              <option value="unregistered">Unregistered</option>
            </select>
            {errors.gstType && <span className="error-msg">{errors.gstType}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="pan-num">PAN Number</label>
            <input type="text" id="pan-num" className={`form-control ${errors.panNumber ? 'input-error' : ''}`} placeholder="Enter PAN" value={party.panNumber} onChange={handleChange('panNumber')} />
            {errors.panNumber && <span className="error-msg">{errors.panNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="aadhaar-num">Aadhaar / UIN Number</label>
            <input type="text" id="aadhaar-num" className={`form-control ${errors.aadhaarNumber ? 'input-error' : ''}`} placeholder="Enter Aadhar" value={party.aadhaarNumber} onChange={handleChange('aadhaarNumber')} />
            {errors.aadhaarNumber && <span className="error-msg">{errors.aadhaarNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="passport-num">Passport Number</label>
            <input type="text" id="passport-num" className={`form-control ${errors.passportNumber ? 'input-error' : ''}`} placeholder="Enter passport" value={party.passportNumber} onChange={handleChange('passportNumber')} />
            {errors.passportNumber && <span className="error-msg">{errors.passportNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="hallmark-num">Hallmark Licence No.</label>
            <input type="text" id="hallmark-num" className={`form-control ${errors.hallmarkLicenceNo ? 'input-error' : ''}`} placeholder="Enter Address" value={party.hallmarkLicenceNo} onChange={handleChange('hallmarkLicenceNo')} />
            {errors.hallmarkLicenceNo && <span className="error-msg">{errors.hallmarkLicenceNo}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="licence-num">Licence Number</label>
            <input type="text" id="licence-num" className={`form-control ${errors.licenceNumber ? 'input-error' : ''}`} placeholder="Enter Licence" value={party.licenceNumber} onChange={handleChange('licenceNumber')} />
            {errors.licenceNumber && <span className="error-msg">{errors.licenceNumber}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statutory;
