import React,{Component} from 'react';
import './item.css'
import PropTypes from 'prop-types'
export default class Item extends Component{
    static propTypes={
        comments:PropTypes.object.isRequired
    };
    render(){
        const {comment}=this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" >删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence"></p>
            </li>
        )
    }
}