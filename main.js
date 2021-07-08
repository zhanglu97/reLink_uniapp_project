import Vue from 'vue'
import App from './App'
import http from './common/axios.js'
import {Api_url} from './common/config'
import './static/font-icon/iconfont.css';    // 引用 iconfont.css
import myIcon from "@/components/uni/my-icon/my-icon.vue"
import uniIcons from "@/components/uni/uni-icons/uni-icons.vue"
import uniNoticeBar from "@/components/uni/uni-notice-bar/uni-notice-bar.vue"
import uniSegmentedControl from "@/components/uni/uni-segmented-control/uni-segmented-control.vue"
import uniEasyinput from "@/components/uni/uni-easyinput/uni-easyinput.vue"
import uniForms from "@/components/uni/uni-forms/uni-forms.vue"
import uniFormsItem from "@/components/uni/uni-forms-item/uni-forms-item.vue"


Vue.component('myIcon', myIcon);
Vue.component('uniIcons', uniIcons);
Vue.component('uniNoticeBar', uniNoticeBar);
Vue.component('uniSegmentedControl', uniSegmentedControl);
Vue.component('uniEasyinput', uniEasyinput);
Vue.component('uniForms', uniForms);
Vue.component('uniFormsItem', uniFormsItem);
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

App.mpType = 'app'
Vue.prototype.$api = {msg,http,prePage};
Vue.config.productionTip = false

const app = new Vue({
    ...App
})
app.$mount()
