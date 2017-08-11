import React from 'react';
import ReactDom from 'react-dom';
import Timer from '../../';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            nowDateTime: Date.now(),
            now: new Date().toString(),
        }
    }
    updateNowDateTime() {
        this.setState({
            nowDateTime: Date.now(),
        });
    }
    updateNow() {
        this.setState({
           now: new Date().toString(),
        });
    }
    handleStart() {
        Timer.start(this.updateNowDateTime.bind(this), 0);
    }
    handleStop() {
        Timer.stop();
    }
    render() {
        return (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: (document.documentElement.clientHeight - 100) / 2,
                }}
            >
                <Timer onCall={this.updateNow.bind(this)} interval={1000} />
                <Timer onCall={ () => console.log(`Hello now is ${new Date().toISOString()}`)} />
                <div
                    style={{
                        fontSize: '3em',
                    }}
                >
                    { this.state.now }
                </div>
                <div>{ this.state.nowDateTime }</div>
                <div>
                    <button onClick={this.handleStart.bind(this)}>start</button>
                    <button onClick={this.handleStop.bind(this)}>stop</button>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));

