import React, {Component} from 'react';

import PubSub from 'pubsub-js';

// import logo from './logo.svg';
import './App.css';

import Add from '../add/Add';
import List from '../list/List';


class App extends Component {
    constructor() {
        super();
        //初始化状态
        this.state = {
            comments: [
                {user: '张三', content: '沙发'},
                {user: '赵四', content: '板凳'},
                {user: '王武', content: '凉席'}
            ]
        }
    }
    //组件将要被渲染的时候订阅最好
    componentWillMount(){
        PubSub.subscribe('message', (msg, data) => {
            console.log(msg, data)
            let {comments} = this.state;
            comments.splice(data, 1);
            this.setState({
                comments
            })
        })
    }
    add = (comment) =>{
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState({
            comments
        })
    }
    del = (index) =>{
        let {comments} = this.state;
        comments.splice(index, 1);
        this.setState({
            comments
        })
    }
    render() {
        return (
            <div>
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a>*/}
                {/*</header>*/}

                <Add add={this.add}/>
                <List comments={this.state.comments} del={()=>this.del()}/>
            </div>
        );
    }
}

export default App;
