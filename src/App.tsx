import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SampleRoot from './components/samples/SampleRoot';
import SampleNestedPathParam from './components/samples/SampleNestedPathParam';
import SampleNestedNormal from './components/samples/SampleNestedNormal';
import SampleMuiCustomizedComponents from './components/samples/SampleMuiCustomizedComponents';
import SampleNestedIndex from './components/samples/SampleNestedIndex';
import SampleNestedLayout from './components/samples/SampleNestedLayout';

const App: FC = () => (
  <div>
    <header>
      <p>Boilerplate</p>
    </header>
    <SampleMuiCustomizedComponents />
    <Routes>
      <Route path="/" element={<SampleRoot />} />
      <Route path="sample-nested" element={<SampleNestedLayout />}>
        <Route index element={<SampleNestedIndex />} />
        <Route path="normal" element={<SampleNestedNormal />} />
        <Route path=":pathParam" element={<SampleNestedPathParam />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;
