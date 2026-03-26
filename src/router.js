import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import PartyMaster from './pages/PartyMaster/PartyMaster';
import AddParty from './pages/AddParty/AddParty';
import PartyOpening from './pages/PartyOpening/PartyOpening';
import SupplierLabour from './pages/SupplierLabour/SupplierLabour';
import ItemGroupMaster from './pages/ItemGroup/ItemGroup';
import ProductMaster from './pages/ProductMaster/ProductMaster';
import ItemMasterPage from './pages/ItemMaster/ItemMaster';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PartyMaster />
      },
      {
        path: '/add-party',
        element: <AddParty />
      },
      {
        path: '/party-opening',
        element: <PartyOpening />
      },
      {
        path: '/supplier-labour',
        element: <SupplierLabour />
      },
      {
        path: '/item-group',
        element: <ItemGroupMaster />
      },
      {
        path: '/product-master',
        element: <ProductMaster />
      },
      {
        path: '/item-master',
        element: <ItemMasterPage />
      }
    ]
  }
])

export default router;
