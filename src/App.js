import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

var appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000);

@observer
class TimerView extends React.Component {
    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};


function App() {
  return (
    <TimerView appState={appState} />
  )
}

export default App;