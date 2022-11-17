import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
  color?: string;
}> = ({label, children, color}) => {
  return (
    <DetailsLineContainer>
      <Typography
        color="#545454"
        fontSize={14}
        style={{marginRight: 16}}
        weight="medium">
        {label}
      </Typography>

      <DetailsLineContent color={color}>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)((props: {color?: string}) => ({
  flex: 1,
  textAlign: 'right',
  color: props.color ?? '#545454',
}));

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
