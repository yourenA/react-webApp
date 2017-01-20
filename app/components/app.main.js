/**
 * Created by Administrator on 2016/9/27.
 */
var  React = require('react');
var MySortBar =require('./app.MySortBar');
var MyList  =require('./app.MyList');
var getListData =require('./app.list.data');
var data=getListData();
var AppMain=React.createClass({
    getInitialState:function () {
        return {
            time:"up",
            sumTime:"",
            price:""
        }
    },
    resetData:function () {
        this.setState({
            time:"",
            sumTime:"",
            price:""
        })
    },
    setTime:function () {
        this.setData('time')
    },
    setSumTime:function () {
        this.setData('sumTime')
    },
    setPrice:function () {
        this.setData('price')
    },
    setData:function (key) {
        var param={};
        if(this.state[key]!=""){
            if(this.state[key]=="up"){
                param[key] = 'down';
                console.log("自己dowm")
            }else{
                param[key] = 'up';
                console.log("自己up")
            }
        }else{
            this.resetData();
            param[key] = 'up';
            console.log("从其他人移过来dowm")
        }
        this.setState(param);
    },
    render:function () {
        return(
            <div>
                <MySortBar  state={this.state} setTime={this.setTime} setSumTime={this.setSumTime} setPrice={this.setPrice}/>
                <MyList  state={this.state} data={data}/>
            </div>
        )
    }
})

module.exports=AppMain;