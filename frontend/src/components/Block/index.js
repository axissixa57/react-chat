import React from 'react'
import classNames from 'classnames';

import './Block.scss';

const Block = ({ children, className }) => { // ({ children }) с помощью деструктуризации вытаскиваем из props.children
    return (
        <div className={classNames("block", className)}>{children}</div>
    )
}

export default Block;
