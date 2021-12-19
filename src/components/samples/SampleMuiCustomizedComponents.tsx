import { VFC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SampleStyledDiv from '../../styles/sample-styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const SampleMuiCustomizedComponents: VFC = () => (
  <SampleStyledDiv>
    <StyledButton variant="contained">Sample</StyledButton>
  </SampleStyledDiv>
);

export default SampleMuiCustomizedComponents;
