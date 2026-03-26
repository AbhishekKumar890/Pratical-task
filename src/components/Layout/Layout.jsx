import React from 'react';
import {
  LogOut,
  ChevronDown,
  LayoutDashboard,
  ClipboardList,
  Percent,
  Users,
  FileText,
  Package,
  Square
} from 'lucide-react';
import './Layout.css';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const sidebarItems = [
  {
    icon: <Users size={20} />,
    label: 'Party Master',
    id: 'party-master',
    subItems: [
      { icon: <Square size={10} />, label: 'All Parties', id: 'all-parties', path: '/' },
      { icon: <Square size={10} />, label: 'Add Customer & Supplier', id: 'add-party', path: '/add-party' },
    ]
  },
  { icon: <FileText size={20} />, label: 'Party Opening', id: 'party-opening', path: '/party-opening' },
  { icon: <ClipboardList size={20} />, label: 'Supplier Wise Labour', id: 'supplier-labour', path: '/supplier-labour' },
  {
    icon: <Package size={20} />,
    label: 'Item Master',
    id: 'item-master-parent',
    subItems: [
      { icon: <Users size={18} />, label: 'Item Group', id: 'item-group', path: '/item-group' },
      { icon: <Users size={18} />, label: 'Product Master', id: 'product-master', path: '/product-master' },
      { icon: <Users size={18} />, label: 'Item Master', id: 'item-master', path: '/item-master' },
      { icon: <Users size={18} />, label: 'Item Touch', id: 'item-touch', path: '/item-touch' },
    ]
  },
  { icon: <Package size={20} />, label: 'Stock & Tags', id: 'stock-tags', subItems: [] },
  { icon: <LayoutDashboard size={20} />, label: 'Other Masters', id: 'other-masters', subItems: [] },
  { icon: <Percent size={20} />, label: 'Tax Masters', id: 'tax-masters', subItems: [] },
  { icon: <Users size={20} />, label: 'Scheme Member', id: 'scheme-member', subItems: [] },
];

const headerTabs = [
  { label: 'Home', id: 'home' },
  { label: 'Company', id: 'company' },
  { label: 'Master', id: 'master', active: true },
  { label: 'Tran 1', id: 'tran1' },
  { label: 'Tran 2', id: 'tran2' },
  { label: 'Other', id: 'other' },
  { label: 'Karigar', id: 'karigar' },
  { label: 'Reports', id: 'reports' },
  { label: 'Scheme', id: 'scheme' },
  { label: 'Dhiran', id: 'dhiran' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = React.useState(['party-master']);

  // Auto-expand parent group based on current path
  React.useEffect(() => {
    let activeGroupId = null;
    sidebarItems.forEach(item => {
      if (item.subItems && item.subItems.some(sub => sub.path === location.pathname)) {
        activeGroupId = item.id;
      }
    });

    // Only set the expanded group if it's found (don't clear it on top-level pages)
    if (activeGroupId) {
      setExpandedGroups([activeGroupId]);
    }
  }, [location.pathname]);

  const toggleGroup = (id) => {
    setExpandedGroups(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {sidebarItems.map((item) => {
          const isExpanded = expandedGroups.includes(item.id);
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isActive = !hasSubItems && location.pathname === item.path;

          return (
            <div key={item.id} className="menu-group">
              <div
                className={`menu-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (hasSubItems) {
                    toggleGroup(item.id);
                  } else if (item.path) {
                    navigate(item.path);
                  }
                }}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.subItems && (
                  <ChevronDown
                    size={14}
                    className="chevron"
                    style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}
                  />
                )}
              </div>

              {hasSubItems && isExpanded && (
                <div className="sub-menu">
                  {item.subItems.map((subItem) => {
                    const isSubActive = location.pathname === subItem.path;
                    return (
                      <div
                        key={subItem.id}
                        className={`menu-item child ${isSubActive ? 'active' : ''}`}
                        onClick={() => navigate(subItem.path)}
                      >
                        {subItem.icon}
                        <span>{subItem.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-tabs">
        {headerTabs.map((tab) => (
          <div key={tab.id} className={`header-tab ${tab.active ? 'active' : ''}`}>
            {tab.label}
          </div>
        ))}
      </div>
      <div className="header-right">
        <button className="exit-btn">
          <LogOut size={18} />
          <span>Exit</span>
        </button>
      </div>
    </header>
  );
};

// const Layout = ({ children }) => {
//   return (
//     <div className="layout-wrapper">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <main className="page-content">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="layout-container">
        <Sidebar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
