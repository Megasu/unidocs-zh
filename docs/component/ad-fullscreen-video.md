### 全屏视频广告

全屏视频广告是一个原生组件，层级比普通组件高。全屏视频广告每次创建都会返回一个全新的实例，默认是隐藏的，需要调用 FullScreenVideoAd.show() 将其显示。

如何开通参考激励视频广告 [https://uniapp.dcloud.net.cn/api/a-d/rewarded-video](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video)


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|x|x|x|x|x|x|x|x|x|

- app端的广告源由腾讯优量汇、头条穿山甲、快手等广告联盟提供，DCloud负责聚合
- 小程序端的广告由小程序平台提供

**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)


### 语法

`<ad-fullscreen-video adpid=""></ad-fullscreen-video>`


**属性说明**

|属性名														|类型													|默认值		|说明																																									|平台差异	|
|:-																|:-														|:-				|:-																																										|:-				|
|adpid														|String&#124;Number&#124;Array|					|广告位id，如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑|					|
|preload                          |Boolean                      |true     |页面就绪后加载广告数据                                                                  |          |
|loadnext													|Boolean											|false		|自动加载下一条广告数据																																	|					|
|v-slot:default="{loading, error}"|															|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息																	|					|
|@load														|EventHandle									|加载事件	|																																											|					|
|@close														|EventHandle									|关闭事件	|																																											|					|
|@error														|EventHandle									|错误事件	|																																											|					|

**方法说明**

|方法名|说明|
|:-|:-|
|load|加载广告数据|
|show|显示广告|



简单示例

```html
<template>
  <view>
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
  </view>
</template>
```


完整示例

```html
<template>
  <view class="content">
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功');
    },
    onadclose(e) {
		 console.log("onadclose",e);
    },
    onaderror(e) {
      // 广告加载失败
      console.log("onerror: ", e.detail);
    }
  }
}
</script>
```

**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
