import { VFC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')({
  margin: '1rem 0',
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const SampleMuiCustomizedComponents: VFC = () => (
  <StyledDiv>
    <StyledButton variant="contained">Sample</StyledButton>
  </StyledDiv>
);

export default SampleMuiCustomizedComponents;
