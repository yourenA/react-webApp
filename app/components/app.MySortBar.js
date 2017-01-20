/**
 * Created by Administrator on 2016/9/26.
 */
var React=require('react');
var ReactDOM=require('react-dom');
var MySortBar=React.createClass({
    render:function () {
        var state=this.props.state;
        console.log(state);
        return(
            <div className="top">
                <div className="bannar ">友人A</div>
                <div className="option ">
                    <ul className="flex-h">
                        <li className="flex1"  onClick={this.props.setTime}>出发时间
                            <i className={state.time} ></i>
                        </li>
                        <li className="flex1"  onClick={this.props.setSumTime} >耗时
                            <i className={state.sumTime}></i>
                        </li>
                        <li className="flex1"  onClick={this.props.setPrice} >价格
                            <i className={state.price}></i>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})

module.exports=MySortBar;