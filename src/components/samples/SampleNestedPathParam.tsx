import { VFC } from 'react';
import { useParams } from 'react-router-dom';
import SampleStyledDiv from '../../styles/sample-styles';

type PathParams = {
  id: string;
};

const SampleNestedPathParam: VFC = () => {
  const { id } = useParams<PathParams>();

  if (!id) return <div>No Path Parameter</div>;

  return (
    <SampleStyledDiv>
      <p>SampleNestedLayout / NestedTestPathParam</p>
      <p>Current Path Parameter: {id}</p>
    </SampleStyledDiv>
  );
};

export default SampleNestedPathParam;
