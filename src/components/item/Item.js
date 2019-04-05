import React, {Component} from 'react';

import PubSub from 'pubsub-js';

class Item extends Component {
    render() {
        let {comment} = this.props;
        return (
            <div>
                <li>
                    <div>
                        <button onClick={() => this.delComment()}>删除</button>
                    </div>
                    <p><span>{comment.user}</span><span>说：</span></p>
                    <p>{comment.content}</p>
                </li>
            </div>
        );
    }

    //定义删除
    delComment = () => {
        if(window.confirm(`你确定${this.props.comment.user}?`)){
            console.log(this.props.index);
            //props
            // this.props.del(this.props.index);
        //    pubsub
            PubSub.publish('message', this.props.index);
        }
    }
}

export default Item;
