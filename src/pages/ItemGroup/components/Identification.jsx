import { toggleItemGroupActive } from '../slices/itemGroupSlice'
import { useDispatch } from 'react-redux'

const Identification = ({ form, errors, handleChange }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-pane">
      <div className="modal-section-header">
        <h3>Basic Details</h3>
        <div className="active-toggle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#718096' }}>Active</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={form.isActive} onChange={() => dispatch(toggleItemGroupActive())} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Group Code</label>
          <input type="text" className="form-control" placeholder="Auto-generated" disabled value={form.groupCode} />
        </div>
        <div className="form-group">
          <label>Group Name</label>
          <input type="text" className={`form-control ${errors.groupName ? 'input-error' : ''}`} placeholder="Enter group name" value={form.groupName} onChange={handleChange('groupName')} />
          {errors.groupName && <span className="error-msg">{errors.groupName}</span>}
        </div>
        <div className="form-group">
          <label>Short Name</label>
          <input type="text" className={`form-control ${errors.shortName ? 'input-error' : ''}`} placeholder="Enter short name" value={form.shortName} onChange={handleChange('shortName')} />
          {errors.shortName && <span className="error-msg">{errors.shortName}</span>}
        </div>
        <div className="form-group">
          <label>Metal Type</label>
          <input type="text" className={`form-control ${errors.metalType ? 'input-error' : ''}`} placeholder="Enter metal type" value={form.metalType} onChange={handleChange('metalType')} />
          {errors.metalType && <span className="error-msg">{errors.metalType}</span>}
        </div>
        <div className="form-group">
          <label>Measurement Unit Code</label>
          <input type="text" className={`form-control ${errors.measurementUnitCode ? 'input-error' : ''}`} placeholder="Enter Unit" value={form.measurementUnitCode} onChange={handleChange('measurementUnitCode')} />
          {errors.measurementUnitCode && <span className="error-msg">{errors.measurementUnitCode}</span>}
        </div>
      </div>
    </div>
  )
}

export default Identification
