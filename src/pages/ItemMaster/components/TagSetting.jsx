import React from 'react'

const TagSetting = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>Tag Settings</h3>
      </div>
      <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className="form-group">
          <label>Tag / Loose / Group</label>
          <input type="text" className={`form-control ${errors.tagLooseGroup ? 'input-error' : ''}`} placeholder="Enter type" value={form.tagLooseGroup} onChange={handleChange('tagLooseGroup')} />
          {errors.tagLooseGroup && <span className="error-msg">{errors.tagLooseGroup}</span>}
        </div>
        <div className="form-group">
          <label>Tag Split Type</label>
          <input type="text" className={`form-control ${errors.tagSplitType ? 'input-error' : ''}`} placeholder="Enter Type" value={form.tagSplitType} onChange={handleChange('tagSplitType')} />
          {errors.tagSplitType && <span className="error-msg">{errors.tagSplitType}</span>}
        </div>
      </div>
      <div className="toggles-row" style={{ display: 'flex', gap: '32px', marginTop: '32px' }}>
        <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label className="toggle-switch">
            <input type="checkbox" checked={form.tagRateFix} onChange={handleChange('tagRateFix')} />
            <span className="slider"></span>
          </label>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>Tag Rate Fix</span>
        </div>
        <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label className="toggle-switch">
            <input type="checkbox" checked={form.allowNegativeStock} onChange={handleChange('allowNegativeStock')} />
            <span className="slider"></span>
          </label>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>Allow Negative Stock</span>
        </div>
        <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label className="toggle-switch">
            <input type="checkbox" checked={form.stockMaintain} onChange={handleChange('stockMaintain')} />
            <span className="slider"></span>
          </label>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>Stock Maintain</span>
        </div>
      </div>
    </div>
  )
}

export default TagSetting
