import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SampleRoot from '../samples/SampleRoot';
import SampleNestedPathParam from '../samples/SampleNestedPathParam';
import SampleNestedNormal from '../samples/SampleNestedNormal';
import SampleMuiCustomizedComponents from '../samples/SampleMuiCustomizedComponents';
import SampleNestedIndex from '../samples/SampleNestedIndex';
import SampleNestedLayout from '../samples/SampleNestedLayout';
import SampleNestedSearchParam from '../samples/SampleNestedSearchParam';
import AppLayout from './AppLayout';

const App: FC = () => {
  const appName = 'Boilerplate';

  return (
    <AppLayout appName={appName}>
      <header>
        <p>{appName}</p>
      </header>
      {/* If you do NOT need samples, delete them. */}
      <Routes>
        <Route path="/" element={<SampleRoot />} />
        <Route path="sample-mui" element={<SampleMuiCustomizedComponents />} />
        <Route path="sample-nested" element={<SampleNestedLayout />}>
          <Route index element={<SampleNestedIndex />} />
          <Route path="normal" element={<SampleNestedNormal />} />
          <Route path=":id" element={<SampleNestedPathParam />} />
        </Route>
        <Route
          path="sample-query-string"
          element={<SampleNestedSearchParam />}
        />
        <Route
          path="sample-qs"
          element={
            <Navigate to="/sample-query-string?price=middle&color=red&color=yellow" />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
