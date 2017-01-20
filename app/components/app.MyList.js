/**
 * Created by Administrator on 2016/9/26.
 */
var React=require('react');
var ReactDOM=require('react-dom');
var Item=require('./app.Item');
var underscore=require('underscore');
var MyList=React.createClass({
    formatData:function (data) {
        for(var i=0;i<data.length;i++){
            /*畜类火车类型*/
            var t_type=data[i].train_number.substring(0,1);
            var s_type;
            switch(t_type){
                case "K":s_type="快速列车";
                    break;
                case "Z":s_type="直达特快列车";
                    break;
                case "D":s_type="动车组列车";
                    break;
                default:s_type="其他列车";
            }
            data[i].s_type=s_type;

            /*处理火车的时间*/
            var t_time=parseInt(data[i].use_time);
            var t_hour=Math.floor(t_time/60);
            var t_min=t_time%60;
            data[i].s_time=t_hour+"小时"+t_min+"分钟";

            /*处理火车的最低价和总座位数,以及各类型的座位数*/
            var t_min_price=[];
            var t_sum_ticket=0;
            var s_ticket='';
            var my_seat={};
            for(var j=0;j<data[i].seats.length;j++){
                t_sum_ticket+=data[i].seats[j].seat_yupiao;
                t_min_price.push(parseFloat(data[i].seats[j].seat_price));
                var seatName = data[i].seats[j].seat_name.replace(/上|中|下/g, '');
                data[i].seats[j].seat_name=seatName;
                if (!my_seat[seatName]) {
                    my_seat[seatName] = parseInt(data[i].seats[j].seat_yupiao);
                } else {
                    my_seat[seatName] = my_seat[seatName] + parseInt(data[i].seats[j].seat_yupiao);
                }

            }
            for(var k in my_seat){//用javascript的for/in循环遍历对象的属性
                s_ticket+=""+k+":"+my_seat[k]+" ";
            }
            var min = Math.min.apply(null, t_min_price);
            data[i].s_sum_ticket=t_sum_ticket;
            data[i].s_min_price=min;
            data[i].s_ticket=s_ticket;


        }

        return data

    },
    timeSort: function (data, sort) {
        data = underscore.sortBy(data, function (item) {
            item = item.from_time.split(':');
            item = item[0] + '.' + item[1];
            item = parseFloat(item);
            return item;
         });/*返回一个data*/
        if (sort == 'down') data.reverse();
         return data;
        },
    sumTimeSort: function (data, sort) {
          data = underscore.sortBy(data, function (item) {
              return parseInt(item.use_time);
          });
           if (sort == 'down') data.reverse();
          return data;
        },

    priceSort: function (data, sort) {
          data = underscore.sortBy(data, function (item) {/*item我data里的一项，包含所有data里面的属性*/
              return item.s_min_price;/*根据返回的不同的属性进行排序*/
          });
         if (sort == 'down') data.reverse();
           return data;
      },

    getSortData:function (data) {
        var temp=[];
        var sort_type=this.props.state;/*根据不同的状态，调用不同的方法，显示不同的排序*/
        for (var i in sort_type){
            if (sort_type[i].length>0){
                console.log(sort_type[i]);
                temp=this[i+"Sort"](data,sort_type[i]);
                return temp;
            }
        }
    },
    render:function () {
        var datas=this.formatData(this.props.data);
        console.log(datas)
        datas=this.getSortData(datas);
        var list=datas.map(function (item,index) {
            return(
                <Item key={index} item={item} />
            )
        })
        return(
            
            <div className="items">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
})

module.exports=MyList;