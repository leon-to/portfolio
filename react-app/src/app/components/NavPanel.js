import React from 'react';
import SwipeableViews from 'react-swipeable-views';

export default function NavPanel(props) {
    return (
        <div>
            <SwipeableViews
                index={props.index}
                onChangeIndex={props.setIndex}>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </SwipeableViews>
        </div>
    );
}