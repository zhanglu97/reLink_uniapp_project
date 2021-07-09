import Vue from 'vue'
import App from './App'
import http from './common/axios.js'
import {Api_url} from './common/config'
import './static/font-icon/iconfont.css';    // 引用 iconfont.css
import uniIcons from "@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"
import uniNoticeBar from "@/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"
import uniSegmentedControl from "@/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"
import uniEasyinput from "@/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"
import uniForms from "@/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"
import uniFormsItem from "@/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"
import uniFilePicker from "@/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"
import uniCollapse from "@/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"
import uniCollapseItem from "@/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"
import uniSteps from "@/uni_modules/uni-steps/components/uni-steps/uni-steps.vue"
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'


Vue.component('uniIcons', uniIcons);
Vue.component('uniNoticeBar', uniNoticeBar);
Vue.component('uniSegmentedControl', uniSegmentedControl);
Vue.component('uniEasyinput', uniEasyinput);
Vue.component('uniForms', uniForms);
Vue.component('uniFormsItem', uniFormsItem);
Vue.component('uniFilePicker', uniFilePicker);
Vue.component('uniCollapse', uniCollapse);
Vue.component('uniCollapseItem', uniCollapseItem);
Vue.component('uniSteps', uniSteps);
Vue.component('uniNavBar', uniNavBar);
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
