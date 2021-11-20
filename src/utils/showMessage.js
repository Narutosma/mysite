
import style from "./showMessage.module.less";

/**
 *  弹框
 *  能传入参数:Object 「 图标  信息状态  文字  回调 」
 */
export default function (options){
    // 弹框内容
    const content = options.content || "";
    // 类型
    const type = options.type || "info";
    // 持续时间
    const durations = options.durations || 1000;
    // 显示的父级
    const container = options.container || document.body;

    // 创建dom
    const dom = document.createElement("div");
    dom.innerHTML = content;
    dom.className = `${style.msg} ${style["msg-" + type]}`;

    // 给父级一个定位
    if(options.container){
        if(getComputedStyle(container).position === "static"){
            container.style.position = "relative";
        }
    }
    // 
    container.appendChild(dom);

    dom.clientLeft;

    dom.style.opacity = 1;
    dom.style.transform = 'translate(-50%, -50%)';

    // 相应时间后消失
    setTimeout( () => {
        dom.style.opacity = 0;
        dom.style.transform = 'translate(-50%, -50%) translateY(40px)';
        // 过度结束后执行回调
        addEventListener("transitionend", () => {
            dom.remove();
            options.callback && options.callback();
        }, {once: true}); // 执行一次后移除， 不然会在全局注册此方法， 一有过度就会执行
    }, durations);
}

