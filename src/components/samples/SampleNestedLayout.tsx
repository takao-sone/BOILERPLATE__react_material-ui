import { VFC } from 'react';
import { Outlet } from 'react-router-dom';
import SampleStyledDiv from '../../styles/sample-styles';

const SampleNestedLayout: VFC = () => (
  <SampleStyledDiv>
    <p>SampleNestedLayout</p>
    <div>
      {/* Nested route components is rendered here, Outlet. */}
      <Outlet />
    </div>
  </SampleStyledDiv>
);

export default SampleNestedLayout;
