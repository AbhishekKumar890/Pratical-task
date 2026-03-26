import React, { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PartyMaster.css';

const partiesData = [
  { code: 'P001', name: 'Rajesha Jewellers', group: 'Customer', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6903R1ZM', status: 'Active' },
  { code: 'P002', name: 'Rajesh Jewellers', group: 'Supplier', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6403R1ZM', status: 'Active' },
  { code: 'P003', name: 'Rajesh Jewellers', group: 'Customer', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6903R1ZM', status: 'Active' },
  { code: 'P004', name: 'Rajesh Jewellers', group: 'Supplier', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU7003R1ZM', status: 'Inactive' },
  { code: 'P005', name: 'Rajesh Jewellers', group: 'Customer', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6903R1ZM', status: 'Active' },
  { code: 'P006', name: 'Rajesh Jewellers', group: 'Karigar', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6903R1ZM', status: 'Active' },
  { code: 'P007', name: 'Rajesh Jewellers', group: 'Karigar', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6903R1ZM', status: 'Active' },
  { code: 'P008', name: 'Rajesh Jewellers', group: 'Customer', city: 'Mumbai', mobile: '+91 7845125230', gst: '27AABCU6903R1ZM', status: 'Active' },
];

const PartyMaster = () => {
  const [parties, setParties] = useState(partiesData);
  const navigate = useNavigate();

  const getGroupBadgeClass = (group) => {
    switch (group.toLowerCase()) {
      case 'customer': return 'badge-customer';
      case 'supplier': return 'badge-supplier';
      case 'karigar': return 'badge-karigar';
      default: return '';
    }
  };

  const getStatusBadgeClass = (status) => {
    return status.toLowerCase() === 'active' ? 'badge-active' : 'badge-inactive';
  };

  const handleSearch = (e) => {
    const serchVal = e.target.value;
    const result = partiesData.filter((party) => party.name.toLowerCase().includes(serchVal.toLowerCase()));
    setParties(result);
  }

  return (
    <div className="party-master-container"
    >
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
            <input type="text" placeholder="Search Paraties" className="search-input" onChange={handleSearch} />
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
                <th>Gst Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {parties.map((party, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: 600 }}>{party.code}</td>
                  <td>{party.name}</td>
                  <td>
                    <span className={`badge ${getGroupBadgeClass(party.group)}`}>
                      {party.group}
                    </span>
                  </td>
                  <td>{party.city}</td>
                  <td>{party.mobile}</td>
                  <td>{party.gst}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(party.status)}`}>
                      {party.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartyMaster;
