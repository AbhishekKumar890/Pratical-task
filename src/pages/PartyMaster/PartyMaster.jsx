import React, { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PartyMaster.css';

const PartyMaster = () => {
  const navigate = useNavigate();
  const partyList = useSelector((state) => state.addParty.partyList);
  const [searchVal, setSearchVal] = useState('');

  const filtered = partyList.filter((p) =>
    (p.accountName || p.shortName || '').toLowerCase().includes(searchVal.toLowerCase())
  );

  const getGroupBadgeClass = (group) => {
    switch ((group || '').toLowerCase()) {
      case 'customer': return 'badge-customer';
      case 'supplier': return 'badge-supplier';
      case 'karigar': return 'badge-karigar';
      default: return '';
    }
  };

  const getStatusBadgeClass = (isActive) =>
    isActive ? 'badge-active' : 'badge-inactive';

  return (
    <div className="party-master-container">
      <div className="page-header">
        <div className="header-info">
          <div>
            <h1>Party Master</h1>
            <p className="page-subtitle">Manage all parties, customers, and suppliers</p>
          </div>
        </div>
      </div>

      <div className="action-bar">
        <div className="action-left">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search Parties"
              className="search-input"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary btn-filter">
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="action-right">
          <button className="btn btn-secondary">
            <Download size={18} />
            Export
          </button>
          <button className="btn btn-primary btn-add-party" onClick={() => navigate('/add-party')}>
            <Plus size={18} />
            Add Party
          </button>
        </div>
      </div>

      <div className="data-card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Party Name</th>
                <th>Group</th>
                <th>City</th>
                <th>Mobile</th>
                <th>GST Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No parties found. Click "Add Party" to create one.
                  </td>
                </tr>
              ) : (
                filtered.map((party, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: 600 }}>{party.partyCode}</td>
                    <td>{party.accountName || party.shortName || '—'}</td>
                    <td>
                      <span className={`badge ${getGroupBadgeClass(party.accountGroup)}`}>
                        {party.accountGroup || '—'}
                      </span>
                    </td>
                    <td>{party.city || '—'}</td>
                    <td>{party.mobile1 || '—'}</td>
                    <td>{party.gstNumber || '—'}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(party.isActive)}`}>
                        {party.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartyMaster;
