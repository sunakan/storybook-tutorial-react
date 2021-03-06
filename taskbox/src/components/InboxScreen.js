import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import TaskList from './TaskList';

export function PureInboxScreen({ error }) {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Nooooooo!</div>
                    <div className="subtitle-message">何かがおかしいhoge</div>
                </div>
            </div>
        );
    }
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">タスクボックス</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    );
}

PureInboxScreen.propTypes = {
    /** The error message */
    error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
    error: null,
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);