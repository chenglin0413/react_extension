import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" />
                <input type="text" />
            </Fragment>
            //能讓原始碼中的 div 標籤被Fragment標籤替換 ，更乾淨。
        )
    }
}
