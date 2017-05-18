import React from 'react';
import List, {ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import { ActionHome, ActionHistory } from 'material-ui/svg-icons'


export default (props) => (
    <List>
        <ListItem primaryText="Home" leftIcon={ <ActionHome /> } />
        <ListItem primaryText="History" leftIcon={ <ActionHistory /> } />
    </List>
);
