import React from 'react';
import { inject, observer } from "mobx-react";
import { autorun, when, reaction } from 'mobx';
import userStore from './stores/userStore';

// @autorun(() => {
//   console.log(userStore.currentUser)
// })

@inject('userStore') 
@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    // 监控自动执行
    const autorun1 = autorun(() => {
      console.log(this.props.userStore.objectKey.name);
    })

    // 条件判断为true之后，执行方法
    when(() => this.props.userStore.boolKey, () => {
      console.log('测试when');
    })

    // 第一个函数的返回值会作为第二个函数的参数
    reaction(() => this.props.userStore.stringKey, (name) => {
      console.log('reaction' + name)
    })
  }

  // 6.0版本已经被删除了
  // componentWillReact() {
  //   console.log("I will re-render, since the todo has changed!");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   debugger
  //   return null
  // }

  onReset = () =>{
    this.props.userStore.updateUser('RODCHEN');
  }

  render() {
      return (
        <div>
          <div>{this.props.userStore.objectKey.name}</div>
          <div>{this.props.userStore.getStringAndNumber}</div>
          <button onClick={this.onReset}>
            更新
          </button>
        </div>
      );
  }
}

export default App;