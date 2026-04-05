import { MapPin, Phone } from 'lucide-react';

const ContactAddress = ({ party, errors, handleChange }) => {
  return (
  <div className="tab-pane">
    <div className="contact-details-section">
      <div className="section-title">
        <Phone size={18} />
        <span>Contact Details</span>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="mobile-1">Mobile Number 1</label>
          <input type="text" id="mobile-1" className={`form-control ${errors.mobile1 ? 'input-error' : ''}`} placeholder="Enter Mobile" value={party.mobile1} onChange={handleChange('mobile1')} />
          {errors.mobile1 && <span className="error-msg">{errors.mobile1}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile-2">Mobile Number 1</label>
          <input type="text" id="mobile-2" className={`form-control ${errors.mobile2 ? 'input-error' : ''}`} placeholder="Enter Mobile" value={party.mobile2} onChange={handleChange('mobile2')} />
          {errors.mobile2 && <span className="error-msg">{errors.mobile2}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="contact-person">Contact Person</label>
          <select id="contact-person" className={`form-control ${errors.contactPerson ? 'input-error' : ''}`} value={party.contactPerson} onChange={handleChange('contactPerson')}>
            <option value="">Enter contact name</option>
            <option value="Jhon Doe">Jhon Doe</option>
            <option value="Michael">Michael</option>
          </select>
          {errors.contactPerson && <span className="error-msg">{errors.contactPerson}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={`form-control ${errors.email ? 'input-error' : ''}`} placeholder="Enter Email" value={party.email} onChange={handleChange('email')} />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" className={`form-control ${errors.website ? 'input-error' : ''}`} placeholder="Enter Website" value={party.website} onChange={handleChange('website')} />
          {errors.website && <span className="error-msg">{errors.website}</span>}
        </div>
      </div>
    </div>

    <div className="address-details-section">
      <div className="section-title">
        <MapPin size={18} />
        <span>Address Details</span>
      </div>
      <div className="form-grid address-grid">
        <div className="form-group span-half">
          <label htmlFor="addr-1">Address line 1</label>
          <textarea id="addr-1" className={`form-control ${errors.address1 ? 'input-error' : ''}`} placeholder="Enter address" rows="3" value={party.address1} onChange={handleChange('address1')}></textarea>
          {errors.address1 && <span className="error-msg">{errors.address1}</span>}
        </div>
        <div className="form-group span-half">
          <label htmlFor="addr-2">Address line 2</label>
          <textarea id="addr-2" className={`form-control ${errors.address2 ? 'input-error' : ''}`} placeholder="Enter address" rows="3" value={party.address2} onChange={handleChange('address2')}></textarea>
          {errors.address2 && <span className="error-msg">{errors.address2}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select id="city" className={`form-control ${errors.city ? 'input-error' : ''}`} value={party.city} onChange={handleChange('city')}>
            <option value="">Select ....</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          {errors.city && <span className="error-msg">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="region">City Area / Region</label>
          <input type="text" id="region" className={`form-control ${errors.region ? 'input-error' : ''}`} placeholder="Enter area" value={party.region} onChange={handleChange('region')} />
          {errors.region && <span className="error-msg">{errors.region}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="district">District</label>
          <input type="text" id="district" className={`form-control ${errors.district ? 'input-error' : ''}`} placeholder="Enter District" value={party.district} onChange={handleChange('district')} />
          {errors.district && <span className="error-msg">{errors.district}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state" className={`form-control ${errors.state ? 'input-error' : ''}`} value={party.state} onChange={handleChange('state')}>
            <option value="">Select ....</option>
            <option value="Gujarat">Gujarat</option>
          </select>
          {errors.state && <span className="error-msg">{errors.state}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" className={`form-control ${errors.country ? 'input-error' : ''}`} placeholder="Enter country" value={party.country} onChange={handleChange('country')} />
          {errors.country && <span className="error-msg">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin code</label>
          <input type="text" id="pincode" className={`form-control ${errors.pincode ? 'input-error' : ''}`} placeholder="Enter Pincode" value={party.pincode} onChange={handleChange('pincode')} />
          {(errors.pincode) && <span className="error-msg">{errors.pincode}</span>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactAddress;
