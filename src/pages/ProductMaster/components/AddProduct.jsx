import { X } from 'lucide-react'

const AddProduct = ({ form, handleCloseModal, errors, handleChange, handleSave }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container" style={{ maxWidth: '500px' }}>
        <div className="modal-header">
          <h2>Add Product</h2>
          <button className="close-btn" onClick={handleCloseModal}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ paddingTop: '24px' }}>
          <div className="modal-section-title" style={{ color: '#3F3D89', fontWeight: 700, fontSize: '15px', marginBottom: '20px' }}>
            Product Details
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>Product Name</label>
            <input type="text" className={`form-control ${errors.productName ? 'input-error' : ''}`} placeholder="Enter Product Name" value={form.productName} onChange={handleChange('productName')} />
            {errors.productName && <span className="error-msg">{errors.productName}</span>}
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label>Short Name</label>
            <input type="text" className={`form-control ${errors.shortName ? 'input-error' : ''}`} placeholder="Enter Short Name" value={form.shortName} onChange={handleChange('shortName')} />
            {errors.shortName && <span className="error-msg">{errors.shortName}</span>}
          </div>

          <div className="toggle-card-list" style={{ display: 'grid', gap: '12px' }}>
            <div className="toggle-card" style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Active</div>
                <div style={{ fontSize: '12px', color: '#718096' }}>Enable this product for use</div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked={form.isActive} onChange={handleChange('isActive')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-card" style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Daily Counter Stock Not Manage</div>
                <div style={{ fontSize: '12px', color: '#718096' }}>Skip daily counter stock tracking</div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked={form.dailyCounterStockNotManage} onChange={handleChange('dailyCounterStockNotManage')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-card" style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Loose PCS Daily Counter Stock Manager</div>
                <div style={{ fontSize: '12px', color: '#718096' }}>Track loose pieces in daily counter</div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked={form.loosePcsDailyCounterStockManager} onChange={handleChange('loosePcsDailyCounterStockManager')} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ marginTop: '24px' }}>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave} style={{ backgroundColor: '#3F3D89', color: 'white' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
