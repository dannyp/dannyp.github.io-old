import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Bio from './Bio.js';
import Contact from './Contact.js';
import History from './History.js';
import Skills from './Skills.js';

export default (props) => {
    const style = { margin : '7px 0px', textAlign: 'left'};
    return (
        <div>
            <Row>
                <Col style={style} xs={12}>
                    <Bio />
                </Col>
            </Row>
            <Row>
                <Col style={style} xs={6}>
                    <Contact />
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col style={style} xs={12}>
                            <History />                
                        </Col>
                        <Col style={style} xs={12}>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
