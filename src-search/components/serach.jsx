import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class Search extends Component{
    //
    static propTypes={
        search: PropTypes.func.isRequired
    };
    setSearch=()=>{

         const searchName=this.refs.text.value;

    if(searchName){
       this.props.search(searchName) ;
        // console.log(searchName)
    }
     };
    render(){
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="text"/>
                    <button onClick={this.setSearch}>Search</button>
                </div>
            </section>
        )
    }
}