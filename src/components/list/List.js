import React, {Component} from 'react';

import Item from '../item/Item';

class List extends Component {
    render() {
        let {comments} = this.props;
        return (
            <div>
                <ul>
                    {comments.map((item, index) => {
                        return <Item key={index} comment={item} index={index} del={() => this.props.del()}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default List;
