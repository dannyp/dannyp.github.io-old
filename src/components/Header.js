import React from 'react';
import Paper from 'material-ui/Paper';
import photo from '../profile-photo.jpg';
import Avatar from 'material-ui/Avatar';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Header = (props) => {
    const size = 175;
    const bgColor = props.muiTheme.palette.primary1Color;
    const styles = {
        wrapper : {
            background:'linear-gradient(180deg, ' + bgColor + ' 50%, #fff 50%)', 
            margin:'-10px -10px 50px -10px',
            paddingTop: '40px'
        },
        photo : { 
            height:size, 
            width:size, 
            margin: '0 auto'
        }
    }
    return (
        <div style={styles.wrapper}>
            <Paper zDepth={3} circle={true} style={styles.photo}>
                <Avatar src={photo} size={size} />
            </Paper>
        </div>
    );
};

export default muiThemeable()(Header);