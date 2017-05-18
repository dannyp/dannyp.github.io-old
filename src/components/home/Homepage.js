import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Bio from './Bio.js';

export default (props) => {
    return (
        <Row>
            <Col xs={12}>
                <Bio />
            </Col>
        </Row>
        
    );
}
