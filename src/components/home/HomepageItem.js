import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { CustomIconAvatar } from '../shared';

export default (props) => {
    return (
        <Card>
            <CustomIconAvatar icon={ props.icon }/>
            <CardTitle title={props.title}></CardTitle>
            <CardText>
                {props.component}
            </CardText>
        </Card>
    );
}