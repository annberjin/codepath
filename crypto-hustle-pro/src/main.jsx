import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Layout from '../routes/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

// Here we make the Layout element the root path and nest the other routes below that path. They will be rendered where that Outlet element was in our Layout.jsx file. Index=true make the app componenet the default child