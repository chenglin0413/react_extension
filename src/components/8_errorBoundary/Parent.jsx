import React, { Component } from 'react'
import Child from './Child'
/* 
特點 :此種方案只能捕獲子組件（後代組件）生命週期產生的錯誤，不能捕獲自己組件產生的錯誤，和其他組件在合成組件、定時器中
產生的錯誤。
*/
export default class Parent extends Component {
    state = {
        hasError:''//用於標示子組件是否產生錯誤。
    }

    //當parent的子組件出現Error時，會觸發getDerivedStateFromError調用，並攜帶錯誤信息。
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }
    componentDidCatch(){
        console.log('統計錯誤此處，反饋給服務器，用於通知編碼人員進行bug的解決')
    }
    render() {
        return (
            <div>
                <h2>我是Parent組件</h2>
                {this.state.hasError? <h2>當前網路不穩定，請稍後再試</h2>:<Child/>}
            </div>
        )
    }
}
