import React from 'react';
import './Intro.scss';
import { Button, ButtonGroup } from 'reactstrap';

const Intro = () => (
    <React.Fragment>
        <div className="buttons">
            <ButtonGroup>
                <Button target="_blank" href="https://www.facebook.com/events/197719935560769?ref=newsfeed">P2C</Button>
                <Button target="_blank" href="https://github.com/ethanwarnar/code-with-p2c-demo">Source Code</Button>
            </ButtonGroup>
        </div>
        <div className="main"/>
    </React.Fragment>
);

export default Intro;