import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Company from './pages/Company';
import ISO27001 from './pages/ISO27001';
import EUAIAct from './pages/EUAIAct';
import Operations from './pages/Operations';
import RelationsMap from './pages/RelationsMap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<Company />} />
          <Route path="iso27001" element={<ISO27001 />} />
          <Route path="iso27001/control/:controlId" element={<ISO27001 />} />
          <Route path="eu-ai-act" element={<EUAIAct />} />
          <Route path="operations" element={<Operations />} />
          <Route path="relations" element={<RelationsMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
