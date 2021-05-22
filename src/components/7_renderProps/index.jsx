import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'
/* 
React 如何向組件內部動態傳入帶內容的結構?
    使用1. children props:通過組件<標籤體>傳入結構
        2. render props: 通過組件<標籤屬性>傳入結構，而且可以攜帶數據，
        一般使用render屬性(其他word也行，但是別人看不懂)

*/
export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是parent組件</h3>
                <A render={(name)=><C name={name}/>}/>
            </div>
        )
    }
}
class A extends Component {
    state  = {name:'tom'}
    render() {
        console.log(this.props)
        const {name}=this.state
        return (
            <div className="a">
                <h3>我是A組件</h3>
                {/* {this.props.children} */}
                {this.props.render(name)}
            </div>
        )
    }
}


class B extends Component {
    render() {
        console.log('B')
        return (
            <div className="b">
                <h3>我是B組件,{this.props.name}</h3>
                
            </div>
        )
    }
}

