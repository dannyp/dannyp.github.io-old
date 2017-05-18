import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { ActionHome } from 'material-ui/svg-icons';
import { CustomIconAvatar } from '../shared';

export default (props) => {
    return (
        <Card>
            <CustomIconAvatar icon={ <ActionHome /> }/>
            <CardTitle title='Contact'></CardTitle>
            <CardText>
               
            </CardText>
        </Card>
    );
}