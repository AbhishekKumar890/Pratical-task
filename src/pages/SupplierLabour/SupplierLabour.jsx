import React, { useState } from 'react';
import { IndianRupee, Grid, Search } from 'lucide-react';
import './SupplierLabour.css';

const SupplierLabour = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="supplier-labour-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div className="header-info">
          <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Supplier Wise Labour</h1>
          <p className="page-subtitle">Manage labour rates by party and product</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="search-trigger">
            <Search size={18} />
          </div>
          <div className="active-toggle" onClick={() => setIsActive(!isActive)}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#718096' }}>Active</span>
            <label className="toggle-switch">
              <input type="checkbox" checked={isActive} readOnly />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Section 1: Party Reference */}
      <div className="labour-section">
        <div className="section-title">
          <IndianRupee size={18} />
          <span>Party Reference</span>
        </div>
        <div className="party-ref-grid">
          <div className="form-group">
            <label>Party Code</label>
            <select className="form-control">
              <option value="">Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Party Name</label>
            <input type="text" className="form-control" readOnly style={{ background: '#F8FAFC' }} />
          </div>
        </div>
      </div>

      {/* Section 2: Labour Mapping */}
      <div className="labour-section">
        <div className="section-title">
          <Grid size={18} />
          <span>Labour Mapping</span>
        </div>
        <div className="table-container">
          <table className="labour-mapping-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Touch %</th>
                <th>Labour %</th>
                <th>Labour Type %</th>
                <th>Labour Rate %</th>
                <th>Item Rate %</th>
              </tr>
            </thead>
            <tbody>
              {[
                { product: 'Necklace', touch: '91.6', labourPct: '0.2', type: 'Percentage', rate: '500', itemRate: '6520' },
                { product: 'Necklace', touch: '91.6', labourPct: '0.3', type: 'Percentage', rate: '400', itemRate: '6520' },
                { product: 'Necklace', touch: '75.0', labourPct: '0.1', type: 'Fixed', rate: '800', itemRate: '5400' },
              ].map((row, i) => (
                <tr key={i}>
                  <td>
                    <select defaultValue={row.product.toLowerCase()}>
                      <option value="necklace">Necklace</option>
                      <option value="ring">Ring</option>
                    </select>
                  </td>
                  <td><input type="text" defaultValue={row.touch} /></td>
                  <td><input type="text" defaultValue={row.labourPct} /></td>
                  <td>
                    <select defaultValue={row.type.toLowerCase()}>
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed</option>
                    </select>
                  </td>
                  <td><input type="text" defaultValue={row.rate} /></td>
                  <td><input type="text" defaultValue={row.itemRate} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="save-labour-btn">
          Save Labour Settings
        </button>
      </div>
    </div>
  );
};

export default SupplierLabour;
