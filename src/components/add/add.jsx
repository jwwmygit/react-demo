import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class Add extends Component{
    static propTypes={
        addComment:PropTypes.func.isRequired
    };
    addComment=()=>{
        const username=this.refs.username.value.trim();
        console.log(username);
        const content=this.refs.username.content.trim();
        console.log(content);
        if(!username || !content) {
            return
        }
        const comment={
            username,
            content
        }
        this.props.addComment(comment)
    }
    render(){

        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}