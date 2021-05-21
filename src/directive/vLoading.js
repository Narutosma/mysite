
import style from "./loading.module.css";
function createDom(){
    const dom = document.createElement("div");
    dom.className = style['loading'];
    dom.dataset.flag = "loading";
    return dom;
}


export default (el, binding) => {
    const dom = document.querySelector("div[data-flag=loading]");
    if(binding.value){
        // 只有在页面上没有加载的这个元素才添加该元素
        if(!dom){
            const load = createDom();
            el.appendChild(load);
        }
    }else{
        if (dom){
            dom.remove();
        }
    }
}