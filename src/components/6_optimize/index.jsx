import React, { PureComponent } from 'react'
import './index.css'
/* 使用PureComponent 
    PureComponent 重寫了shouldComponentUpdate(),只有props數據,state有變化的時候，才返回true
    注意:
        只是進行state和props數據比較，如果只是數據對象內部數據變了(還是同一個位址)，返回false
        不要直接修改state數據，而是要產生新數據
    項目中一般使用PureComponent來優化(沒有state,props數據變化而調用render的問題)。

*/
export default class Parent extends PureComponent {
    state = {carName:"奔馳360",stus:['小李','小王','小張']}
    changeCar = ()=>{
        this.setState({carName:"藍寶堅尼"})
    }
    addStu = ()=>{
        // const {stus} = this.state
        // stus.unshift('小劉')
        // this.setState({stus})

         const {stus} = this.state
        this.setState({stus:['小劉',...stus]})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state)//目前的props,state
    //     console.log(nextProps,nextState)//接下來要變化成的目標(props,state)
    //     return false
    // }
    render() {
        console.log('parent----render')
        const {carName}= this.state
        return (
            <div className="parent">
                <h3>我是Parent組件</h3>
                {this.state.stus}
                <h4>我的車名字是:{carName}</h4>
                <button onClick={this.changeCar}>點我換車</button>
                <button onClick={this.addStu}>加一個小劉</button>
                <Child carName={carName}/>
            </div>
        )
    }
}

class Child extends PureComponent {
    
    render() {
        console.log('child----render')
        return (
            <div className="child">
                <h3>我是Child組件</h3>
                <h4>我是從父祖件取得的車名:{this.props.carName}</h4>
            </div>
        )
    }
}


