import React from 'react';
import { lightBlue500 } from 'material-ui/styles/colors';
import HomepageItem from './HomepageItem.js'
import { ActionHistory } from 'material-ui/svg-icons';

export default (props) => {
    return (
        <HomepageItem 
            icon={<ActionHistory />}
            title='History'
            component={ 
                <div className="historyWrapper">
                    <h2 style={{color:lightBlue500}}>Innodev <small>2017 - present</small></h2>
                    <p>
                        Test goes here
                    </p>
                    <h2 style={{color:lightBlue500}}>DWS <small>2011 - 2017</small></h2>
                    <p>
                        Test goes here
                    </p>
                </div>
            }
        />
    );
}