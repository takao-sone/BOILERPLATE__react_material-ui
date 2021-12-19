import { VFC } from 'react';
import { useSearchParams } from 'react-router-dom';
import SampleStyledDiv from '../../styles/sample-styles';

const SampleNestedSearchParam: VFC = () => {
  const [searchParams] = useSearchParams();
  const price = searchParams.get('price');
  const colors = searchParams.getAll('color');
  const name = searchParams.get('name');

  return (
    <SampleStyledDiv>
      <p>SampleNestedLayout / SampleNestedSearchParam</p>
      <p>
        <span>Current Search Parameters: </span>
        <span>
          price={price} color={colors.join(',')} name={name}
        </span>
      </p>
    </SampleStyledDiv>
  );
};

export default SampleNestedSearchParam;
