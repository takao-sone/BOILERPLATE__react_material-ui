import React, { FC } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Test1 from './components/samples/Test1';
import Test2 from './components/samples/Test2';
import Test3 from './components/samples/Test3';

const App: FC = () => (
  <div>
    <header>
      <p>Takao Sone&apos;s React Boilerplate</p>
    </header>
    <Routes>
      <Route path="/" element={<Test1 />} />
      <Route
        path="test"
        element={
          <div>
            test
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<Test1 />} />
        <Route path=":testCode" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;
