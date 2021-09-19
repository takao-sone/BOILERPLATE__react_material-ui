import { VFC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')({
  margin: '1rem 0',
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: 'yellow',
}));

const MuiCustomizedComponents: VFC = () => (
  <StyledDiv>
    <StyledButton variant="contained">sample</StyledButton>
  </StyledDiv>
);

export default MuiCustomizedComponents;
