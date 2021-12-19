import { VFC } from 'react';
import { Outlet } from 'react-router-dom';

const SampleNestedLayout: VFC = () => (
  <div>
    <p>SampleNestedLayout</p>
    <div>
      <Outlet />
    </div>
  </div>
);

export default SampleNestedLayout;
