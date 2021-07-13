<template>
    <view class="tabBar">
        <view v-for="(item,index) in tabBar" :key="item.url" class="tabbar_item" :class="{'active':item.url == currentPage}"
         @click="navTo(item,index)">
            <image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>
            <image v-else :src="item.imgNormal" mode=""></image>
            <view class="text">{{item.text}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            currentPage: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                tabBar: [
					{
						"url": "/pages/ChatRoom/Home/home",
						"text": "消息",
						"imgNormal": "../../../static/img/chat-tab-out.png",
						"imgClick": "../../../static/img/chat-tab.png"
					}, {
						"url": "/pages/ChatRoom/AddressBook/index",
						"text": "通讯录",
						"imgNormal": "../../../static/img/chat-tab2-out.png",
						"imgClick": "../../../static/img/chat-tab2.png"
					}
                ],
                level:''
                 
            };
        },
        created() {
            uni.hideTabBar({})
        },
        computed: {
 
        },
        methods: {
            navTo(item,index) {
                let _this = this;
                if (item.url !== _this.currentPage) {
                    const that = this
                    uni.navigateTo({
                        url: item.url,
						animationType: 'none',
                    })
                } else {
                    /* this.$parent.toTop() */
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    //导航栏设置
    $isRadius:20upx; //左上右上圆角
    $isWidth:100vw; //导航栏宽度
    $isBorder:1px solid #eeeeee; //边框 不需要则设为0px
    $isBg:white; //背景
     
    // 选中设置
    $chooseBgColor:white; //选中时背景颜色 transparent为透明
 
    //未选中设置
    $normalTextColor:#999; //未选中颜色
 
    .tabBar {
        width: $isWidth;
        height: 120upx;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 998;
        background-color: $isBg;
        color: $normalTextColor;
        border-left: $isBorder;
        border-top: $isBorder;
        border-right: $isBorder;
        display: flex;
        justify-content: space-around;
        border-top-right-radius: $isRadius;
        border-top-left-radius: $isRadius;
        box-sizing: border-box;
        overflow: hidden;
 
        .tabbar_item {
            width: 20%;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
 
            &.active {
                /* border-left: $isBorder;
                border-top: $isBorder; */
                background: $chooseBgColor;
                color: #1296db;
            }
        }
 
        image {
            width: 36upx;
            height: 36upx;
            margin-left: 5upx;
			margin-top: 10upx;
        }
    }
</style>
