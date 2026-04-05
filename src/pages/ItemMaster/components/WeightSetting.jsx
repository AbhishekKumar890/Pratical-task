import React from 'react'

const WeightSetting = ({ form, errors, handleChange }) => {
  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>Touch & Weight Settings</h3>
      </div>
      <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="form-group">
          <label>Touch %</label>
          <input type="text" className={`form-control ${errors.touchPercent ? 'input-error' : ''}`} value={form.touchPercent} onChange={handleChange('touchPercent')} />
          {errors.touchPercent && <span className="error-msg">{errors.touchPercent}</span>}
        </div>
        <div className="form-group">
          <label>Minimum Touch</label>
          <input type="text" className={`form-control ${errors.minTouch ? 'input-error' : ''}`} value={form.minTouch} onChange={handleChange('minTouch')} />
          {errors.minTouch && <span className="error-msg">{errors.minTouch}</span>}
        </div>
        <div className="form-group">
          <label>Maximum Touch</label>
          <input type="text" className={`form-control ${errors.maxTouch ? 'input-error' : ''}`} value={form.maxTouch} onChange={handleChange('maxTouch')} />
          {errors.maxTouch && <span className="error-msg">{errors.maxTouch}</span>}
        </div>
        <div className="form-group">
          <label>Minimum West %</label>
          <input type="text" className="form-control" value={form.minWestPercent} onChange={handleChange('minWestPercent')} />
        </div>
        <div className="form-group">
          <label>Maximum West %</label>
          <input type="text" className="form-control" value={form.maxWestPercent} onChange={handleChange('maxWestPercent')} />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="text" className={`form-control ${errors.weight ? 'input-error' : ''}`} value={form.weight} onChange={handleChange('weight')} />
          {errors.weight && <span className="error-msg">{errors.weight}</span>}
        </div>
      </div>
      <div className="form-group" style={{ marginTop: '20px', maxWidth: '300px' }}>
        <label>Watermark</label>
        <input type="text" className="form-control" placeholder="Enter Watermark" value={form.watermark} onChange={handleChange('watermark')} />
      </div>
    </div>
  )
}

export default WeightSetting
