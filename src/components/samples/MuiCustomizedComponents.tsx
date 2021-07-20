import { VFC } from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledDiv = styled('div')`
  margin: 1rem 0;
`;

const StyledButton = styled(Button)(
  ({ theme }) => `
    // comment
    background-color: ${theme.palette.primary.light};
    color: yellow;
  `,
);

const MuiCustomizedComponents: VFC = () => (
  <StyledDiv>
    <StyledButton variant="contained">sample</StyledButton>
  </StyledDiv>
);

export default MuiCustomizedComponents;
