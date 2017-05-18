import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { blue500 } from 'material-ui/styles/colors';
import { ActionHome } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';

export default (props) => {
    return (
        <Card>
            
            <CardTitle title='Danny Pallotta'></CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </CardText>
        </Card>
    );
}