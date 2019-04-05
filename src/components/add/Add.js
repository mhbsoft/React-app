import React, {Component} from 'react';

class Add extends Component {
    render() {
        return (
            <div>
                <input ref='user' type='text'/>
                <textarea ref='content' rows='6'></textarea>
                <button onClick={() => this.addComment()}> 提交</button>
            </div>
        );
    }

    addComment = () => {
        let user = this.refs.user.value;
        let content = this.refs.content.value;
        let obj = {
            user,
            content
        }
        this.props.add(obj);
    }
}

export default Add;
