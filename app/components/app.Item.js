/**
 * Created by Administrator on 2016/9/26.
 */
var React=require('react');
var Item=React.createClass({
    render:function () {
        var item=this.props.item;
        return(
            <li>
                <div className="item-top">
                    <span className="name">{item.train_number} | {item.s_type}</span>
                    <span className="time">{item.s_time}</span>
                </div>
                <div className="center">
                    <div className="from">
                        <span className="from-time">{item.from_time}</span>
                        <span className="from-address">{item.from_station}</span>
                        <span className="from-money">￥{item.s_min_price}起</span>
                    </div>
                    <div className="to">
                        <span className="to-time">{item.to_time}</span>
                        <span className="to-address">{item.to_station}</span>
                        <span className="to-ticket">{item.s_sum_ticket}张</span>
                    </div>
                </div>
                <div className="item-bottom">
                    {item.s_ticket}
                </div>
            </li>
        )
    }
})

module.exports=Item;