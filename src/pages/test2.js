import React from 'react';
import ReactDOM from 'react-dom';
import AppItem from './addItem'
import TodoItem from "./todoItem";
import './css/index.css'
import About from './about'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
let TODO_KEY="todos"
class TodoComponent extends React.Component{
    constructor(){
        super();
        let data=localStorage.getItem(TODO_KEY)
        this.state={
            todos:JSON.parse(data)||[]
        }
    }
    HandleAdd=(val)=>{
        console.log(val);
        const todos=this.state.todos
        todos.push(val)
        this.setState({
            todos:todos,

        })
        localStorage.setItem(TODO_KEY,JSON.stringify(todos))
    };
    HandleDelete=(index)=>{
        console.log(index);
        let todos=this.state.todos;
        todos=todos.filter(function (val,i) {
            return index!==i
        });
        this.setState({
            todos:todos
        })
        localStorage.setItem(TODO_KEY,JSON.stringify(todos))
    }
    render(){
        let list=this.state.todos.map( (val,index)=> {
            return <TodoItem key={index} val={val} index={index} onDelete={this.HandleDelete}/>

        })
        //console.log(list);
        let subTiltle=null
        let length=this.state.todos.length
        if(length%2===0){
            subTiltle=<p>明日复明日，明日何其多</p>
        }else{
            subTiltle=<p>今日事，今日毕</p>
        }
        return (

            <div className='todo-list'>
                <Link to="/about">关于我</Link>
                <h1>记事本</h1>
                {subTiltle}

                    {
                        length===0?<p>恭喜你，任务全部完成</p>:(<ul>{list}</ul>)
                    }

                <AppItem onInputChange={this.HandleAdd}/>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <Route path="/" exact={true} component={TodoComponent}/>
                <Route path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));