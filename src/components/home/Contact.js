import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { CustomIconAvatar } from '../shared';

import { ActionPermContactCalendar, CommunicationPhone, CommunicationEmail } from 'material-ui/svg-icons';

export default (props) => {
    return (
        <Card>
            <CustomIconAvatar icon={ <ActionPermContactCalendar /> }/>
            <CardTitle title='Contact'></CardTitle>
            <CardText>
                <List>
                    <ListItem leftIcon={ <CommunicationPhone /> } primaryText="(+61) 449 654" secondaryText="Mobile" />
                    <ListItem leftIcon={ <CommunicationEmail /> } primaryText="danny.pallotta@gmail.com" secondaryText="Email" />
                </List>               
            </CardText>
        </Card>
    );
}