import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SampleRoot from './components/samples/SampleRoot';
import SampleNestedPathParam from './components/samples/SampleNestedPathParam';
import SampleNestedNormal from './components/samples/SampleNestedNormal';
import SampleMuiCustomizedComponents from './components/samples/SampleMuiCustomizedComponents';
import SampleNestedIndex from './components/samples/SampleNestedIndex';
import SampleNestedLayout from './components/samples/SampleNestedLayout';
import SampleNestedSearchParam from './components/samples/SampleNestedSearchParam';

const App: FC = () => (
  <div>
    <header>
      <p>Boilerplate</p>
    </header>
    <Routes>
      <Route path="/" element={<SampleRoot />} />
      <Route path="sample-mui" element={<SampleMuiCustomizedComponents />} />
      <Route path="sample-nested" element={<SampleNestedLayout />}>
        <Route index element={<SampleNestedIndex />} />
        <Route path="normal" element={<SampleNestedNormal />} />
        <Route path=":id" element={<SampleNestedPathParam />} />
      </Route>
      <Route path="sample-query-string" element={<SampleNestedSearchParam />} />
      <Route
        path="sample-qs"
        element={
          <Navigate to="/sample-query-string?price=middle&color=red&color=yellow" />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;
