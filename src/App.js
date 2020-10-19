import React from 'react';
import { inject, observer } from "mobx-react";

@inject('userStore') 
@observer
class App extends React.Component {

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   debugger
  //   return null
  // }

  onReset = () =>{
    this.props.userStore.updateUser('RODCHEN');
  }

  render() {
    debugger
      return (
        <div>
          <div>{this.props.userStore.currentUser}</div>
          <button onClick={this.onReset}>
            更新
          </button>
        </div>
      );
  }
}

export default App;