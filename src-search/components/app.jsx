import React,{Component} from 'react';
import Search from './serach';
import Main from './main';
// import './index.css';
export default class App extends Component{
    //初始化状态
    state={
        searchName:""

    };
    setSearchName=(searchName)=>{
        // console.log(1111)
        this.setState({
            searchName
        })
        // console.log(this.state)
    }


    render(){
        const {searchName}=this.state;
        return (
            <div className="container">
                <Search search={this.setSearchName}/>
                <Main searchName={searchName}/>
            </div>
        )
    }
}
