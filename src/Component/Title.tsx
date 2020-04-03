import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

type Props = {
  size?: string,
  children: any
};

const Title: React.FC<Props> = (props: Props) => {
  const sizes: any = { small: 'h6', normal: 'h5' };
  const size = props.size || 'normal';

  return (
    <Typography component="h2" variant={sizes[size]} color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default Title;
