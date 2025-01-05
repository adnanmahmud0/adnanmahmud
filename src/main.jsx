import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Component/Home';
import DoraGadget from './Component/Section/DoraGadget';
import DonationPlatform from './Component/Section/DonationPlatform';
import Crowdcube from './Component/Section/Crowdcube';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Dora-Gadget",
        element: <DoraGadget></DoraGadget>,
      },
      {
        path: "/Donation-Platform",
        element: <DonationPlatform></DonationPlatform>,
      },
      {
        path: "/Crowd-Cube",
        element: <Crowdcube></Crowdcube>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
