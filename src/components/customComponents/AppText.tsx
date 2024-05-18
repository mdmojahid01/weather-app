import {styled} from 'nativewind';
import React from 'react';
import {Text} from 'react-native';

const StyledText = styled(Text);

const AppText = ({children}: any) => {
  return <StyledText>{children}</StyledText>;
};

export default AppText;
