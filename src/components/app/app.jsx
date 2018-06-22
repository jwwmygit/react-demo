import React,{Component} from 'react';
import Add from '../add/add';
import List from '../list/list';
export default class App extends Component{
    //动态显示初始化数据
    state={
        comments:[
            {username:'damu',content:"不会"},
            {username:'sadamu',content:"真不会"},
        ]
    };
    addComment=(comment)=>{
        const {comments}=this.state;
        comments.unshift(comment);
        this.setState({
            comments
        })
    };
    deleteComment=(index)=>{
        const {comments}=this.state;
        comments.splice(index,1);
        this.setState({
            comments
        })
    }
    render(){
        const {comments}=this.state;

        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComment={this.addComment}/>
                    <List comments={comments}/>
                </div>
            </div>
               )
    };
}