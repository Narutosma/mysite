
import bus from '@/eventBus';
import { debounce } from "@/utils";
import defalutImg from "@/assets/gg.gif";
let imgs = [];

const setImage = (img) => {
    img.dom.src = defalutImg;
    const height = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    if(rect.top >= -rect.height && rect.top <= height){
        // 在显示范围内
        // const image = new Image();
        // image.onload = () => {
           
        // }
        // image.src = img.src;

        img.dom.src = img.src;
        imgs = imgs.filter( i => i !== img);
    }
}

const setImages = () => {   
    for(const img of imgs){
        setImage(img);
    }
}

bus.$on("mainScroll", debounce(setImages, 75));

// 数据懒加载指令
export default {
    // 
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el){
        imgs = imgs.filter(i => i.dom !== el);
    }
}