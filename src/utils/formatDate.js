
/**
 * 
 * @param {Date} date  时间戳
 * @param {String} format  是否显示小时， 默认false
 */
export default function(date, format="YYYY-MM-DD"){
    const curDate = new Date(date);
    const formatObj = {
        "M+": curDate.getMonth() + 1,
        "D+": curDate.getDate(),
        "h+": curDate.getHours(),
        "m+": curDate.getMinutes(),
        "s+": curDate.getSeconds()
    };
    // 因为年份和其他有所区别，所以提出来单独处理
    if(/(Y+)/.test(format)){
        format = format.replace(RegExp.$1, curDate.getFullYear().toString().substr(RegExp.$1.length - 4));
    }

    for (const o in formatObj){
        if(new RegExp(`(${o})`).test(format)){
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? formatObj[o] : formatObj[o].toString().padStart(2, 0));
        }
    }

    return format;
}