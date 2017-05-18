import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';

export default (props) => (
    <Avatar backgroundColor={ blue500 } style={{ float:'right', margin: '10px' }} {...props} />
)