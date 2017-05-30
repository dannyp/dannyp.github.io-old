import React from 'react';

import { ActionHistory } from 'material-ui/svg-icons';
import HomepageItem from './HomepageItem.js'

export default (props) => {
    return (
        <HomepageItem 
            icon={<ActionHistory />}
            title='Skills'
            component={ 
                <div className='skills-wrapper'>
         
                </div>
            }
        />
    );
}