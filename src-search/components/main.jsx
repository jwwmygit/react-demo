import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export default class Main extends Component{
    static propTypes={
        searchName:PropTypes.string.isRequired
    };
    state = {
        firstView: true,
        loading: false,
        users: [],
        errorMsg: ''
    };
    componentWillReceiveProps(newProps){
        const searchName=newProps.searchName;
      //更新状态
      this.setState({
          firstView: false,
          loading: true
      })
        const url = `https://api.github.com/search/users?q=${searchName}`
    //    成功了
        axios.get(url)
            .then((respose)=>{
          const result=respose.data;
          // console.log(result);
          const users=result.items.map(item=>({
              url:item.html_url,
              avatarUrl:item.avatar_url,
              name:item.login
          }));
          // console.log(users);
          this.setState({
              loading:false,
              users
          })

            })
            .catch(error=>{
       this.setState({
         loading:false,
         errorMsg:'请求失败'
       })

            })
    //    失败了
    }
    render(){
        // console.log(this.state.users);
        const {firstView,loading,users,errorMsg}=this.state;
        console.log(users)
        if(firstView){
            // console.log(this.props)
          return <h1>请输入关键字搜索{this.props.searchName}</h1>
        }else if(loading){
            return <h1>loading.....</h1>
        }else if(errorMsg){
            return <h1>{errorMsg}</h1>
        }else if(users){
            return(
                <div className="row">

                    {users.map((user,index)=>(
                        <div className="card" key={index}>1111
                            <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{width: 100}}/>
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>
                        )
                    )}
                </div>
            )
        }

    }
}