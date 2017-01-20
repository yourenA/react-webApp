/**
 * Created by Administrator on 2017/1/20.
 */
var  React = require('react');
var  ReactDOM = require('react-dom');
var AppMain=require('./components/app.main');
require('./css/mobile.css');
require('./css/app.css');
ReactDOM.render(
    <AppMain />
    ,
    document.getElementById('content')
);