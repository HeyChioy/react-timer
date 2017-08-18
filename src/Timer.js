import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
    static start(onCall, interval = 100) {
        this.timer ? clearInterval(this.timer) : null;
        const _onCall = this.onCall || onCall;
        const _interval = this.interval || interval;
        this.timer = _onCall ? setInterval(() => {
            _onCall();
        }, _interval) : 0;
        this.interval = _interval;
        this.onCall = _onCall;
    }
    static stop() {
        clearInterval(this.timer);
    }
    static delay(callback, timeout = 1000) {
        setTimeout(() => {
            callback()
        }, timeout);
    };
    constructor(props) {
        super(props);
        const { onCall, interval = 100 } = props;
        this.state = {
            timer: 0,
            onCall,
            interval,
        };
    }
    componentWillMount() {
        this.setState({
            timer: setInterval(() => {
                this.state.onCall();
            }, this.state.interval),
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render() {
        return (
            <div />
        );
    }
}

Timer.PropTypes = {
    interval: PropTypes.number.isRequired,
    onCall: PropTypes.func.isRequired,
};

export default Timer;
