

export default function(date){
    // 显示发布时间
    const prevDate = new Date(date);
    const curDate = new Date();
    let c = Math.floor((curDate - prevDate) / 1000);
    if(c === 0){
        return "刚刚";
    }
    let str = c + "秒前";
    if(c > 60 * 60 * 24){
        str = c % (60 * 60 * 24) + "天前";
    }else if(c > 60 * 60){
        str = c % 3600 + "小时前";  
    }else{
        str = c % 60 + "分钟前";
    }
    return str;
}