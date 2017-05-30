import React from 'react';
import Avatar from 'material-ui/Avatar';
import muiThemeable from 'material-ui/styles/muiThemeable';

export default muiThemeable()((props) => (
    <Avatar backgroundColor={ props.muiTheme.palette.primary1Color } style={{ float:'right', margin: '8px' }} {...props} />
));