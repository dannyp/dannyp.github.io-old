import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { CustomIconAvatar } from '../shared';
import { ActionHome } from 'material-ui/svg-icons';

export default (props) => {
    return (
        <Card>
            <CustomIconAvatar icon={ <ActionHome />} />
            <CardTitle title="Hi, I'm Danny Pallotta"></CardTitle>
            <CardText>
                <p>
                    I am a Software Consultant with 6 years of experience as a consultant in the Information Techonolgy industry. I enjoy problem solving using my strong technical skillset with a personable and flexible nature 
                    and a passion for producing elegant and functional solutions to deliver the best possible outcome.
                </p>
                <p>
                    My key areas of expertise lie in implementing web, mobile and desktop applications, as well as analytics and reporting solutions to clients in a number of different industries and commercial settings. 
                </p>
                </CardText>
        </Card>
    );
}