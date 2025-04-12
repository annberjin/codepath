import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Layout from '../routes/Layout';
import DetailView from '../routes/DetailView.jsx';
import CoinDetail from './components/CoinDetail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link style={{ color: "black" }} to="/">
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

// Here we make the Layout element the root path and nest the other routes below that path. They will be rendered where that Outlet element was in our Layout.jsx file. Index=true make the app componenet the default child