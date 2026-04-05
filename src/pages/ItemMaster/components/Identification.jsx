import React from 'react'

const Identification = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>Identification</h3>
      </div>

      <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="form-group">
          <label>Item Code</label>
          <input type="text" className="form-control" placeholder="Auto-generated" disabled value={form.itemCode} />
        </div>
        <div className="form-group">
          <label>Item Name</label>
          <input type="text" className={`form-control ${errors.itemName ? 'input-error' : ''}`} placeholder="Enter item name" value={form.itemName} onChange={handleChange('itemName')} />
          {errors.itemName && <span className="error-msg">{errors.itemName}</span>}
        </div>
        <div className="form-group">
          <label>Short Name</label>
          <input type="text" className={`form-control ${errors.shortName ? 'input-error' : ''}`} placeholder="Enter short name" value={form.shortName} onChange={handleChange('shortName')} />
          {errors.shortName && <span className="error-msg">{errors.shortName}</span>}
        </div>
        <div className="form-group">
          <label>Item Type</label>
          <input type="text" className={`form-control ${errors.itemType ? 'input-error' : ''}`} placeholder="Enter item type" value={form.itemType} onChange={handleChange('itemType')} />
          {errors.itemType && <span className="error-msg">{errors.itemType}</span>}
        </div>
        <div className="form-group">
          <label>Item Group</label>
          <input type="text" className={`form-control ${errors.itemGroup ? 'input-error' : ''}`} placeholder="Enter item group" value={form.itemGroup} onChange={handleChange('itemGroup')} />
          {errors.itemGroup && <span className="error-msg">{errors.itemGroup}</span>}
        </div>
        <div className="form-group">
          <label>Product</label>
          <input type="text" className={`form-control ${errors.product ? 'input-error' : ''}`} placeholder="Enter product" value={form.product} onChange={handleChange('product')} />
          {errors.product && <span className="error-msg">{errors.product}</span>}
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input type="text" className={`form-control ${errors.gender ? 'input-error' : ''}`} placeholder="Enter gender" value={form.gender} onChange={handleChange('gender')} />
          {errors.gender && <span className="error-msg">{errors.gender}</span>}
        </div>
      </div>
    </div>
  )
}

export default Identification
