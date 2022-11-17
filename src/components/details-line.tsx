import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
}> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography
        color="#545454"
        fontSize={14}
        style={{marginRight: 16}}
        weight="medium">
        {label}
      </Typography>

      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
  color: '#545454',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
