>本文为uniPush2.0的介绍，如果旧项目需要使用老版本的uniPush1.0详情：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)
# 简介
## 概述
`uniPush`是DCloud联合个推公司推出的、全端的、云端一体的统一推送服务。

1. 在客户端平台方面，不但支持App端、小程序端、web端，App端还内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌FCM等手机厂商的系统推送和个推第三方推送。（uniPush 2.0起支持小程序端、web端以及App端的在线推送）
2. 在服务端，uniPush2.0起支持uniCloud云端一体，无需再编写复杂的服务端调用代码发送push。而uniPush1.0支持使用传统服务器开发语言比如php来发送服务端消息，流程比uniPush2.0繁琐。
3. uniPush还自带一个web控制台。不写代码也可以在web页面发推送。uniPush1.0的web控制台在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)。uniPush2.0的web控制台是开源的，内置在uni-admin插件中。

## 什么是uniPush？
push是一种支持服务端主动向客户端发送即时消息，由服务端、手机系统推送服务模块、客户端，三者之间建立长连接的通讯架构。即使应用不联网（用户关闭应用，或者手机厂商为了省电或释放内存，会终止App后台联网）消息也可以通过不会离线的手机厂商通道，下发到手机系统推送服务模块；以系统消息的方式通知用户，用户点击通知栏消息即可重新唤醒APP。实现更高的消息的送达率，以及应用拉活的目的。
	<img width="100%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1b3b17d1-d6fb-4d26-96d4-c0dbc4300aad.png"/></br>
	如图所示：应用联网时，客户端直接收到push在线消息；应用不联网时push消息将以通知栏消息的方式展示，用户点击通知栏消息后，客户端才能收到离线消息。

然而消息下发到手机系统推送服务模块，是通过集成的手机厂商sdk实现。而每个厂商规范不同，比较流行的厂商有：苹果、华为、小米、vivo、oppo、魅族，这6大手机厂家。那程序员得写6种代码，分别去给这6家标准不同的厂家推送消息？这么多平台，工作量会非常巨大，管理维护也很麻烦。显然这样太繁琐了。

uniPush因此而生，它内部封装了繁琐的逻辑。开发者只需要通过`uniPush`，系统会自动在不同手机上选择最可靠的推送通道发送push消息，保障送达率。

uniPush即降低了开发成本、又提高了push送达率，并且免费，是当前推送的最佳解决方案。

# 应用场景
- 系统消息通知 </br>
当 APP 用户相关状态或者系统功能状态变化时（如用户订单通知、交易提醒、物流通知、升级提醒等），可对用户进行及时告知，或者促使用户完成特定操作。
- 内容订阅推送 </br>
帮助内容资讯类、视频类等APP主动推送用户关注的内容或热点资讯，提升用户活跃，提高APP使用率。
- 社交互动提醒 </br>
当点赞、评论、分享等社交行为产生时，即使用户未打开 APP ，也可以对其进行消息提醒，提高用户互动频次，提升用户活跃度。
- 活动营销 </br>
在日常营销推广、促销活动等场景下（如双11、618大促、会员促销、游戏活动、产品推送活动等），APP可对目标用户进行定向通知栏消息+应用内消息推送，吸引用户参与活动，提升转化。

还有聊天功能、棋牌游戏等，需要客户端被动接收消息的需求的功能都可以用uniPush实现。

**局限性说明：**uniPush客户端接收消息的通讯协议属于websocket；服务端调用消息下发用的是http通讯协议。需要超低延迟的应用场景，如：远程画板、像王者荣耀那样的游戏就不适用。

# 常见问题
有了uniPush，开发者不应该再使用其他push方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。

- 常见误解1：“uniPush的专业性，和专业的个推、极光等服务可相比吗？”

	答：uniPush是由个推将其本来收费的（vip套餐） push产品，免费提供给了DCloud的开发者。它与个推vip push的只有2个区别：1、免费；2、账户使用的是DCloud开发者账户，而无需再重新注册个推账户。个推是A股上市公司，专业性在推送领域领先。

- 常见误解2：“uniPush好麻烦，我就喜欢个推、极光这种简单sdk，不想去各个rom厂商去申请一圈”

	答：uniPush不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的push是一样的。但是要特别注意，推送行业的现状就是：不集成rom厂商的推送，就无法在App离线时发送push。。按照普通push模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。

- 常见误解3：“uniPush的送达率高吗？是否可以付费来提升送达率，个推是有付费提升送达率的方法的”

	答：前文已经说了。个推的付费提升送达率的产品就是vip push，而uniPush就是个推的vip Push。DCloud通过谈判免费给DCloud的开发者使用了。

# 开通和配置指南  
## 产品入口
有2个入口：
1. 通过 HBuilderX 进入

	打开 HBuilderX，双击项目中的 “manifest.json” 文件，选择“App 模块配置”，向下找到“Push(消息推送)”，勾选后，点击 “uniPush” 下面的配置链接，即可进入 uniPush 配置页面。如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/3c2ccc6c-2ada-4087-8a62-3f6ddd1c5b66.jpg)
2. 通过开发者中心进入
	
	使用 HBuilder 账号登录 [开发者中心](https://dev.dcloud.net.cn) ，登录后
	会进入“我创建的应用”列表，如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/51d70683-fef6-4990-a9a7-4d5d7cc10316.jpg)
	点击要操作的应用的应用名称可进入应用管理页面，点击左侧导航中的“uniPush 2.0（支持全端推送）”-“应用信息”
	
均可进入uniPush 应用开通界面。如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/637abb41-4702-4b05-928b-8aac6de7149f.jpg)

## 第一步：开通 uniPush
### 实名认证
用户首次使用 uniPush 功能时，需要向个推同步身份信息。
- 已通过实名认证的用户，会直接将实名认证信息同步给个推。如下图所示：
**疑问：个推需要实名认证？不是吧，他只需要手机号，不需要真实姓名更不需要身份证**
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a0e85961-e5e7-4e38-a6d0-aea6ab27766e.jpg)
- 未提交实名认证信息的用户，需要在页面中输入相关信息后提交，如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/33a935da-7392-4f5b-9f90-8f7d7adae061.jpg)

### 填写应用信息
应用开通 uniPush 功能时，需要提交应用相关信息，如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/381bd60a-a38b-412a-8bfb-6cafb9788a6a.jpg)
关联服务空间说明：UniPush2.0为了开发者更方便地，触发消息推送。推出 `uni-cloud-push`（uniCloud扩展库）。通过扩展库在uniCloud云函数中，直接调用相关API，无需额外的服务端配置，即可直接调用“关联到当前服务空间的应用”的uniPush服务。


注意：`Android包名、签名（SHA1指纹）`或`iOS Bundle ID`，必须确保与客户端manifest.json配置的证书相关信息一致，否则可能会导致无法正常打包或收到推送消息。

参考资料：[关于Android证书](https://ask.dcloud.net.cn/article/35985#server)、[iOS证书申请](https://ask.dcloud.net.cn/article/152)

开通完成后你也可以在这里修改以上信息

## 第二步：配置
- iOS 平台还需要上传专用的推送证书
	+ 证书申请：如何获取推送证书请参考个推官方文档教程 [iOS证书配置指南](https://docs.getui.com/getui/mobile/ios/apns/)
	+ 证书上传入口：消息推送-“配置管理”-“应用配置”
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a75716f3-3541-48e0-a1cb-43de8308d2b5.jpg)
- APP厂商推送参数设置（可选，应用进程离线时推送通道）
	![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/26656924-e58e-42dc-a5b2-6d72546aa5d2.jpg)
	uniPush集成并统一了各个手机厂商的系统级推送，目前支持魅族、OPPO、华为、小米、VIVO。如果需要使用厂商推送，需要先在各厂商开发者平台申请。详情[厂商推送应用创建配置流程](https://www.dcloud.io/docs/a/unipush/manufacturer.pdf)

## 第三步：服务端推送消息
消息推送属于敏感操作，只能直接或间接由服务端触发。
传统的三方push服务，需要开发者在服务端配置密钥或证书，根据服务器端文档签名获取token，再向相关URL接口发起网络请求......
而UniPush2.0，开发者无需关心证书、签名、服务器端文档，使用简单，极简的代码，云函数通过 `uni-cloud-push`（uniCloud 扩展库）的API即可直接执行uniPush所有操作，详情[文档](#uni-cloud-push)。
（uniCloud扩展库，uniCloud自带API中不常用且包体积较大的部分，被独立为扩展库，可以由开发者自行选择是否使用改扩展库）

## 第四步：客户端监听推送消息
### 名词解释
#### 离线推送@offline
<img width="30%" style="margin-left:20px;margin-top:0;float:right;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/3bb2b4c4-1b73-426d-b713-f076aff80868.jpg"/>
仅APP端支持，当应用被用户关闭，或者运行到后台时，手机厂商为了省电或释放内存，会终止App后台联网。
消息将通过不会离线的手机厂商通道，下发到手机系统推送服务模块；
此时客户端会自动创建通知栏消息，展示在系统消息中心（如图所示）但客户端监听不到消息内容；当用户点击通知栏消息后，会将APP唤醒此时APP才能监听到消息内容。

#### 在线推送@online
当应用在线时，不会创建“通知栏消息”，此时客户端会立即监听到消息内容。
如果业务逻辑上需要创建“通知栏消息”来提醒用户；可以在监听到消息内容后，
使用创建本地消息API [plus.push.createMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.createMessage)手动创建通知栏消息。

### 操作步骤
1. 启用客户端uniPush，打开`manifest.json`-`App模块配置`-中勾选`uniPush 2.0`
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/aadde559-d7f8-4bea-bf1c-8845854940c8.jpg)
	**真机运行注意:**如果启用了离线推送，必须：经过发行原生app云打包后，客户端才能监听到推送消息。
2. 启动监听推送消息事件代码示例：
```js 
uni.onPushMessage((res)=>{
	console.log(res)//监听推送消息
})
```
更多客户端API详情[文档](#客户端API文档)

# 开发文档
## 服务端开发 - uniPush扩展库@uni-cloud-push
为云函数启用uniPush扩展库，在云函数右键-管理公共模块或扩展库依赖。如图所示：勾选uni-cloud-push 统一推送服务，点击确定即可。
</br>
<img style="width:80%;max-width:600px;margin:0 10%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cb2bc39d-0dbd-4321-ba6f-cc4c782c820c.jpg"/>
</br>
<img style="width:80%;max-width:600px;margin:0 10%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/66f41377-5492-4345-b85c-e6978dd5ef63.jpg"/>
</br>
下面是一个开启了uniPush扩展库的云函数的package.json示例，**注意不可有注释，以下文件内容中的注释仅为说明，如果拷贝此文件，切记去除注释**

```js
{
	"name": "test",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"extensions": {
		"uni-cloud-push": {} // 配置为此云函数开启uniPush扩展库，值为空对象留作后续追加参数，暂无内容
	},
	"author": ""
}
```

```js
// 简单的使用示例
'use strict';
const uniPush = uniCloud.push({appid:"__UNI__XXXXXX"}) //注意这里需要传入你的应用appid
exports.main = async (event, context) => {
	return await uniPush.sendMessage({
		"user_id": "cbddf0af60d46da61252b29f4e4e6339",
		"title": "离线时显示的标题",
		"subtitle": "离线时显示的副标题",
		"payload": {
			"type": "im",
			"data": {
				"type": "single",
				"body": "您好！",
				"from_uid": "79550af260d9db5f22ae00ff6f397763",
				"to_uid": "cbddf0af60d46da61252b29f4e4e6339",
				"time": Date.now()
			}
		}
	})
};
```

### 消息推送
向设定的（单个、群组、全体）用户，即时或定时推送消息。支持设置：通知栏消息内容、控制响铃，震动，浮动，闪灯；手机桌面应用右上角的角标等。
#### 接口形式
```js 
await uniPush.sendMessage(OBJECT)
```
#### 入参说明    
|名称|类型|必填|默认值|描述|平台特性|
|--|--|--|--|--|--|
|user_id|String、Array|否|无|基于uni-id的_id，指定消息接收者。支持多个以数组的形式列举，长度不超过100。| |
|check_token|Boolean|否|true|校验客户端登陆状态是否有效（含token过期）</br>仅用user_id指定消息接收者时有效| |
|platform|String、Array|否|"ALL"|指定接收消息的平台，"ALL"表示所有平台。支持用数组枚举支持的平台，如：["app"、"h5"、"mp_weixin"]</br>仅用user_id指定消息接收者时有效|
|custom_tag|String|否|无|基于个推custom_tag，指定消息接收者;</br>注：该功能需要申请相关套餐，请点击右侧“技术咨询”了解详情 。| |
|tag|Json Array|否|无|对指定应用的符合筛选条件的用户群发推送消息。支持定时、定速功能。，详细解释见下方tag说明| |
|alias|String、Array|否|无|基于用户别名，指定消息接收者。</br>支持多个以数组的形式指定多个设备，如["alias-1","alias-2"]，数组长度不大于1000| |
|cid|String、Array|否|无|基于uni.getPushCid获取的客户端推送标识，指定消息接收者。</br>支持多个以数组的形式指定多个设备，如["cid-1","cid-2"]，数组长度不大于1000| |
|title|String|是|无|通知栏标题，长度小于20|APP-PLUS|
|subtitle|String|是|无|通知栏内容，长度小于50|APP-PLUS|
|payload|String、Objcet|是|无|透传内容,长度小于800| |
|badge|Number、String|否|无|设置应用右上角数字，用于提醒用户未阅读消息数量，支持在原有数字上的+、-操作;</br>例如：badge=+1，表示当前角标+1；</br>badge=-1，(仅iOS支持)表示当前角标-1(角标>=0)；</br>badge=1，(仅iOS和华为EMUI版本10.0.0+支持)表示当前角标置成1。| ios、android-华为|
|channel|Json|否|无|消息渠道设置，避免被限量推送，需要在各家发邮件申请，详情下方[channel说明](#channel 说明)| android|
|request_id|String|是|无|请求唯一标识号，10-32位之间；如果request_id重复，会导致消息丢失||
|group_name|String|否|无|任务组名。多个消息任务可以用同一个任务组名，后续可根据任务组名查询推送情况（长度限制100字符，且不能含有特殊符号）；</br>仅基于user_id、cid、tag指定消息接收者，或对应用的所有用户群发推送消息时有效。||
|sound|String|否|无|消息提醒铃声设置。android需要设置channel生效，详见下方[铃声设置注意](#铃声设置注意)</br>如果铃声文件未找到，响铃为系统默认铃声。</br>铃声文件需要使用uni原生插件[点此打开](https://ext.dcloud.net.cn/plugin?id=690)打包后生效。</br>建议iOS和Android铃声使用一致的文件名称。直接填写文件名，不含扩展名；如：pushsound.caf或pushsound.mp3，直接填写pushsound即可。|
|content_available|Number|否|0|0表示普通通知消息(默认为0)；</br>1表示静默推送(无通知栏消息)，静默推送时不需要填写其他参数。</br>苹果官方建议1小时最多推送3条静默消息|ios |
|open_url|string|否|无|填写该值将:强制push类型为“通知栏消息”，点击后系统浏览器将打开此链接。以http(s)://开头的有效可访问链接,华为通道必须使用https。长度小于300|android|
|settings|Json|否|无|推送条件设置，详细解释见下方settings说明||
|option|Json|否|无|其他配置，[更多关于option的说明](/unpackage/个推push文档/多厂商参数.md)||


**注意**：指定消息接收者：user_id、cid、alias、custom_tag、tag不可多选，全为空表示群推（向所有用户推送消息）。

**频次限制说明：**
- 多客户端接收消息推送API，频次限制200万次/天，申请修改请点击右侧“技术咨询”了解详情。
- 通过tag（根据条件筛选用户推送）指定消息接收者推送API，频次限制100次/天，每分钟不能超过5次(推送限制和接口执行群推共享限制)，定时推送功能需要申请开通才可以使用，申请修改请点击右侧“技术咨询”了解详情。
- 对指定应用的所有用户群发推送消息API，频次限制100次/天，每分钟不能超过5次(推送限制和接口根据条件筛选用户推送共享限制)

##### tag 说明
|名称|类型|是否必需|默认值|描述|
|--|--|--|--|--|
|key|String|是|无|查询条件(phone_type 手机类型; region 省市; custom_tag 用户标签; portrait，个推用户画像使用编码，[点击下载文件portrait.data](https://docs.getui.com/files/portrait.data)。|
|values|String Array| 是| 无|查询条件值列表，其中<br>**手机型号**使用如下参数`android`和`ios`；<br>**省市**使用编号，[点击下载文件region_code.data](https://docs.getui.com/files/region_code.data)；|
| opt_type|String|是|无|or(或),and(与),not(非)，`values`间的交并补操作|

- 不同key之间是交集，同一个key之间是根据`opt_type`操作
- eg. 需要发送给城市在A,B,C里面，没有设置tagtest标签，手机型号为android的用户，用条件交并补功能可以实现，city(A|B|C) && !tag(tagtest) && phonetype(android)

##### settings 说明
|名称|类型|必填|默认值|描述|
|--|--|--|--|--|
|ttl|Number|否|1小时|消息离线时间设置，单位毫秒，-1表示不设离线，-1 ～ 3 * 24 * 3600 * 1000(3天)之间|
|strategy|Json|否|{"strategy":{"default":1}}|厂商通道策略，详细内容见strategy|
|speed|Number|否|0|定速推送，例如100，个推控制下发速度在100条/秒左右，0表示不限速|
|schedule_time|Number|否|无|定时推送时间，格式：毫秒时间戳|

##### strategy 厂商下发策略选择
|名称|类型|必填|默认值|描述|
|--|--|--|--|--|
|default|Number|否|1|默认所有通道的策略选择1-4 <br/>1: 表示该消息在用户在线时推送个推通道，用户离线时推送厂商通道;<br/>2: 表示该消息只通过厂商通道策略下发，不考虑用户是否在线;<br/>3: 表示该消息只通过个推通道下发，不考虑用户是否在线；<br/>4: 表示该消息优先从厂商通道下发，若消息内容在厂商通道代发失败后会从个推通道下发。 其中名称可填写: ios、st、hw、xm、vv、mz、op，如有疑问请点击右侧“技术咨询”了解详情。|
|ios|Number|否|无|ios通道策略1-4，表示含义同上，要推送ios通道，需要在个推开发者中心上传ios证书，建议填写2或4，否则可能会有消息不展示的问题|
|st|Number|否|无|通道策略1-4，表示含义同上，需要开通st厂商使用该通道推送消息|
|...|Number|否|无|通道策略1-4，表示含义同上|

##### channel 说明
|名称|类型|必填|默认值|描述|
|--|--|--|--|--|
|HW|string|否|无|需要先向华为侧发邮件申请权限参见[华为消息分类申请](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835)。|
|XM|string|否|无|小米推送的消息通道分为“普通消息”（默认）和“重要消息”两类，默认下发普通消息。普通消息单日可推送数量有限制，重要消息不限。重要消息申请具体请参考： [小米推送消息分类新规](https://dev.mi.com/console/doc/detail?pId=2422)|
|OP|string|否|无|需要联系客服开通;OPush平台上所有通道分为“公信”(默认)、“私信”两类，默认下发公信消息。公信消息单日可推送数量有限制，私信消息不限(仅限单个用户)。私信消息申请请参见（OPPO官方文档）[通道升级公测邀请](https://open.oppomobile.com/wiki/doc#id=11096)。|
|VO|string|否|无| 0代表运营消息，1代表系统消息;vivo消息分类功能将推送消息类型分为运营消息和系统消息，默认下发运营消息。运营消息单用户单应用单日接收条数上限为5条，系统消息不限。系统消息功能不用申请，可以直接使用，如特殊情况需额外提升系统消息量级，请参见（vivo官方文档）[推送消息分类功能说明](https://dev.vivo.com.cn/documentCenter/doc/359)。|

##### 铃声设置注意
1. 华为通道须 [申请自分类权益](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section3699155822013)
2. 小米通道需：申请重要级别消息Channel —— 申请其他个性化重要级别消息Channel，并设置自定义铃声前端路径格式：`android.resource://你的APP应用包名/raw/铃声文件名`，例如：`android.resource://io.dcloud.UniPush2/raw/pushsound`（路径不需要带音频后缀名）如图
![](https://docs.getui.com/img/img_getui_server_rest_v2_third_party_1.png)

#### 响应体说明
多个别名推送返回值示例：
```js
{
    "errMsg":"success",
    "errCode":0,
    "data":{
        "$taskid":{
            "$alias1":{
                "$cid1":"$status",
                "$cid2":"$status"
            },
            "$alias2":{
                "$cid3":"$status",
                "$cid4":"$status"
            }
        }
    }
}
```
>返回结构说明请参考[公共返回结构](#公共返回结构)
* 返回参数`data`说明
| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $taskid | Json | 任务编号 |
| $alias | String |设备别名|
| $cid | String |App的用户唯一标识|
| $status | Json |推送结果 <br>successed_offline: 离线下发(包含厂商通道下发)，<br>successed_online: 在线下发，<br>successed_ignore: 最近90天内不活跃用户不下发|

群发返回值示例：
```js
{
	"errCode": 0,
	"errMsg": "",
	"data": {
		"$taskid": "RASA_123_12469008ac33dd02815014631c00000f"
	}
}
```


其他推送返回值示例：
```js
{
	"errCode": 0,
	"errMsg": "",
	"data": {
		"$taskid": {
			"$cid":"$status"
		}
	}
}
```

>返回结构说明请参考[公共返回结构](#公共返回结构)
* 返回参数`data`说明
| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $taskid | Json | 任务编号 |
| $cid | String |App的用户唯一标识|
| $status | Json |推送结果 <br>successed_offline: 离线下发(包含厂商通道下发)，<br>successed_online: 在线下发，<br>successed_ignore: 最近90天内不活跃用户不下发|

### 消息任务
#### 停止任务
对正处于推送状态，或者未接收的消息停止下发（只支持批量推和群推任务）
##### 接口形式
```js 
await push.stopTaskByTaskid(taskId)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskId | String | 是 | 无 | 任务id (格式RASL-MMdd_XXXXXX或RASA-MMdd_XXXXXX)|

##### 响应体说明
```js
 {
    "errCode":0, 
    "errMsg":"success"
}
```
> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 查询定时任务
该接口支持在推送完定时任务之后，查看定时任务状态，定时任务是否发送成功。
##### 接口形式
```js 
await push.getTaskScheduleByTaskid(taskId)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskId | String | 是 | 无 | 任务id|

##### 响应体说明
* 返回值示例

```js
 {
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$taskid": {
            "create_time":"",
            "status":"success",
            "transmission_content":"",
            "push_time":""
        }
    }
}
```
* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$taskid|Json|key: 任务编号，value: 任务数据|
|create_time|String|定时任务创建时间，毫秒时间戳|
|status|String|定时任务状态：success/failed|
|transmission_content|String|透传内容|
|push_time|String|定时任务推送时间，毫秒时间戳|


#### 删除定时任务
用来删除还未下发的任务，删除后定时任务不再触发(距离下发还有一分钟的任务，将无法删除，后续可以调用停止任务接口。)
##### 接口形式
```js 
await push.deleteTaskScheduleByTaskid(taskId)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskId | String | 是 | 无 | 任务id|

##### 响应体说明
* 返回值示例

```js
 {
    "errCode":0,
    "errMsg":"success"
}
```
> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 查询消息明细
调用此接口可以查询某任务下某cid的具体实时推送路径情况
>使用该接口需要申请权限，若有需要，请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await push.getTaskDetail(OBJECT)
```
##### 入参说明
| 名称         |  类型   |是否必须      |    默认值|说明      |  
| ------------ | ----------- |-----------|---|--------|
|taskId         |string | true      |      无|任务id  |         
|cid         |string |   true      |      无|cid   |

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data":{
        "deatil":[
            {
                "time":"yyyy-MM-dd HH:mm:ss",
                "event":"消息请求成功"
            },
            {
                "time":"yyyy-MM-dd HH:mm:ss",
                "event":"到达客户端"
            }
        ]
    }
}
```

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|detail|array|请求返回详细数据|
|time|String|时间，格式：yyyy-MM-dd HH:mm:ss|
|event|String|事件|


### 用户别名
开发者可对用户设定别名与标签，推送时可直接根据别名、标签进行推送，方便对用户的管理。
别名是开发者根据自身需求为每个用户设定的标识，建议对不同用户设定不同别名，保证可通过别名来唯一确认某特定用户。

例子：可将用户的邮箱、昵称、手机号等设为别名，即可通过邮箱、昵称、手机号指定目标用户下发推送。
>一个cid只能绑定一个别名，若已绑定过别名的cid再次绑定新别名，则前一个别名会自动解绑，并绑定新别名。
#### 绑定别名
一个cid只能绑定一个别名，若已绑定过别名的cid再次绑定新别名，则前一个别名会自动解绑，并绑定新别名。
##### 接口形式
```js 
await push.cidBindAlias(OBJECT)
```
##### 入参说明
* 参数示例

```js
[
	{
		"cid":"",
		"alias":""
	},
	{
		"cid":"",
		"alias":""
	}
]
```

* 请求参数说明
数据列表，数组长度不大于1000
| 名称        | 类型          | 是否必须   | 默认值  | 描述  |
| ---------  | ------------- | ---- | ---- | -------- |
| cid |String|是|无| cid，用户标识|
| alias |String|是|无|别名，有效的别名组成：<br>字母（区分大小写）、数字、下划线、汉字;<br>长度<40;<br>一个别名最多允许绑定10个cid。|

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```
> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 根据cid查询别名
通过传入的cid查询对应的别名信息
##### 接口形式
```js 
await push.getAliasByCid(cid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 用户唯一标识 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "alias": "xxx"
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| alias | String | 别名 |


#### 根据别名查询cid
通过传入的别名查询对应的cid信息
##### 接口形式
```js 
await push.getCidByAlias(alias)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| alias | String | 是 | 无 | 别名 |

##### 响应体说明
```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "cid": ["xxx","xxx"]
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| cid | String | 客户端标识 |


#### 批量解绑别名
批量解除别名与cid的关系
##### 接口形式
```js 
await push.unboundAlias(Array)
```
##### 入参说明
* 参数示例

```js
	[
        {
            "cid":"",
            "alias":""
        },
        {
            "cid":"",
            "alias":""
        }
    ]
```

* 请求参数说明
| 名称        | 类型          | 是否必须   | 默认值  | 描述  |
| ---------  | ------------- | ---- | ---- | -------- |
| cid |String|是|无| 客户端标识|
| alias |String|是|无|别名|

##### 响应体说明
* 返回值示例

```json
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 解绑所有别名
解绑所有与该别名绑定的cid
##### 接口形式
```js 
await push.unboundAllAlias(alias)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| alias | String | 是 | 无 | 用户别名 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


### 用户标签
开发者可对用户设定别名与标签，推送时可直接根据别名、标签进行推送，方便对用户的管理。
标签是用户的一种属性，每个用户（通过CID来标识 ）可以打上100个标签。
例子：“喜爱足球”，“喜爱动漫”
#### 一个用户绑定一批标签
一个用户绑定一批标签，此操作为覆盖操作，会删除历史绑定的标签；
> 此接口对单个cid有频控限制，每天只能修改一次，最多设置100个标签；单个标签长度最大为32字符，标签总长度最大为512个字符，申请修改请点击右侧“技术咨询”了解详情 。
##### 接口形式
```js 
await push.cidBindCustomTags(OBJECT)
```
##### 入参说明
* 参数示例

```json
{
	"cid":"xxx",
    "custom_tag": [
        "tag1",
        "tag2"
    ]
}
```

* 请求参数说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 用户标识 |
| custom_tag |String Array|是|无|标签列表，标签中不能包含空格|

##### 响应体说明
* 返回值示例

```json
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)



#### 一批用户绑定一个标签
一批用户绑定一个标签，此接口为增量
> 此接口有频次控制(每分钟最多100次，每天最多10000次)，申请修改请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await push.cidsBindCustomTag(OBJECT)
```

##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String Array | 是      | 无    | 要修改标签属性的cid列表，数组长度不大于1000 |
| custom_tag | String | 是 | 无 | 用户标签，标签中不能包含空格，单个标签最大长度为32字符，如果含有中文字符需要编码(UrlEncode) |

* 参数示例

```js
{
	"cid": [
	    "xxx"
	],
    "custom_tag": "xxx"
}
```

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

#### 一批用户解绑一个标签
解绑用户的某个标签属性，不影响其它标签
>此接口有频次控制(每分钟最多100次，每天最多10000次)，申请修改请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await push.cidsUnboundCustomTag(OBJECT)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String Array | 是      | 无    | 要修改标签属性的cid列表，数组长度不大于1000 |
| custom_tag | String | 是 | 无 | 用户标签，标签中不能包含空格，单个标签最大长度为32字符，如果含有中文字符需要编码(UrlEncode) |

* 参数示例
```js
{
    "cid": [
        "xxx"
    ],
	"custom_tag":"xxx"
}
```

##### 响应体说明
```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "$cid": "true"
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

#### 查询用户标签
根据cid查询用户标签列表
>此接口有频次控制(每分钟最多100次，每天最多10000次)，申请修改请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await push.searchCustomTagByCid(cid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | Array | 是 | 无 | 用户标识 |

##### 响应体说明
* 返回值示例

```js
{
    "errMsg": "success",
    "errCode": 0,
    "data": {
        "$cid": [
            "custom_tag1","custom_tag2"
        ]
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$cid|Json|key: cid，value: 标签列表，列表中只会有一个元素，多个以空格隔开|


### 黑名单用户
黑名单用户无法收到推送消息
#### 添加黑名单用户
将单个或多个用户加入黑名单，对于黑名单用户在推送过程中会被过滤掉。
##### 接口形式
```js 
await push.addCidToBlacklist(cid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 用户标识，多个以英文逗号隔开，一次最多传200个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 移除黑名单用户
将单个cid或多个cid用户移出黑名单，对于黑名单用户在推送过程中会被过滤掉的，不会给黑名单用户推送消息
##### 接口形式
```js 
await push.removeCidInBlacklist(cid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 用户标识，多个以英文逗号隔开，一次最多传200个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


### 设备信息
#### 设备在线状态
查询你的应用应用在线状态

注意：该状态为：`offline`离线时，消息可通过:同设备下其他集成个推SDK的在线应用通道完成推送

##### 接口形式
```js 
await push.getClientStatusByCid(cid)
```
##### 入参说明
| 名称 | 类型    | 是否必须 | 默认值 | 说明                                    |
|:----|:-------|:--------|:------|:---------------------------------------|
| cid | String | 是      | 无    | 用户标识，多个以英文逗号隔开，一次最多传1000个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "$cid": {
            "last_login_time":"1484018265935",
            "status":"offline"
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)
* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $cid | Json | key: cid，value: 用户状态信息 |
| last_login_time | String | 毫秒时间戳 |
| status | String | 状态，online在线 offline离线 |

#### 推送通道状态
查询与你的应用同设备（手机）下的所有集成了个推SDK的应用在线状态

注意：
1. 该接口返回设备在线时，仅表示存在集成了个推SDK的应用在线
2. 该接口返回设备不在线时，仅表示不存在集成了个推SDK的应用在线
3. 该接口需要开通权限，如需开通，请联系右侧技术咨询
##### 接口形式
```js 
await push.getDeviceStatusByCid(cid)
```
##### 入参说明
| 名称 | 类型    | 是否必须 | 默认值 | 说明                                    |
|:----|:-------|:--------|:------|:---------------------------------------|
| cid | String | 是      | 无    | 用户标识，多个以英文逗号隔开，一次最多传100个  |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "$cid": {
            "errMsg":"success",
            "errCode": 0,
            "data": {
                "cid_status":"offline",
                "device_status":"online"
            }  
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $cid | Json | key: cid，value: 用户状态信息 |
| cid_status | String | cid在线状态，online在线 offline离线 |
| device_status | String | 设备在线状态，online在线 offline离线 |


#### 设备详细信息
查询用户的信息
##### 接口形式
```js 
await push.getClientDetailByCid(String|Array)
```
##### 入参说明
| 名称 | 类型    | 是否必须 | 默认值 | 说明                                    |
|:----|:-------|:--------|:------|:---------------------------------------|
| cid | String | 是      | 无    | 用户标识，多个以英文逗号隔开，一次最多传1000个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data":{
        "invalidCids":[
            "invalidCid1",
            "invalidCid2",
            "invalidCid3"
        ],
        "validCids":{
            "${cid1}":{
                "client_app_id":"client_app_id",
                "package_name":"com.getui.demo",
                "device_token":"device_token",
                "phone_type":1,
                "phoneModel":"vv",
                "notificationSwitch":true,
                "createTime":"2021-06-30 00:00:00",
                "loginFreq":10
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| validCids | Json Array | 用户信息列表 |
| invalidCids | String Array | 无效cid列表 |

**validCids中的${cid}**

| 名称        | 类型           | 描述  |
| ---------  | ------------- |  -------- |
| client_app_id |String| 应用id|
| package_name |String| 包名|
| device_token |String| 厂商token|
| phone_type |Number| 手机系统 1-安卓 2-ios|
| phoneModel |String| 机型|
| notificationSwitch |Boolean| 系统通知栏开关|
| createTime |String| 首次登录时间|
| loginFreq |Number| 登录频次|


#### 查询设备总量
通过指定查询条件来查询满足条件的用户数量
##### 接口形式
```js 
await push.getClientCount(OBJECT)
```
##### 入参说明
* 参数示例

```js
{
    "tag": [
         {
            "key":"phone_type",
            "values": [
                "android"
            ],
            "opt_type":"and"
        },
        {
            "key":"region",
            "values": [
                "11000000"
            ],
            "opt_type":"not"
        },
         {
            "key":"custom_tag",
            "values": [
                "tag1",
                "tag2"
            ],
            "opt_type":"or"
        }
    ]
}
```

* 请求参数说明

| 名称       | 类型           | 是否必须   | 默认值  | 描述  |
|---- |----|---| ----|
| key | String 			| 是 | 无      |查询条件(phone_type 手机类型,region 省市,custom_tag 用户标签，设置标签请见[接口](#用户标签))|
| values | String Array | 是 | 无      |查询条件值列表，其中<br>**手机型号**使用如下参数`android`和`ios`；<br>**省市**使用编号，[点击下载文件region_code.data](https://docs.getui.com/files/region_code.data)； |
| opt_type|String|是|无|or(或),and(与),not(非)，`values`间的交并补操作|

- 不同key之间是交集，同一个key之间是根据`opt_type`操作
- 需要发送给城市在A,B,C里面，没有设置tagtest标签，手机型号为android的用户，用条件交并补功能可以实现，city(A|B|C) && !tag(tagtest) && phonetype(android)

##### 响应体说明
 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data":{
        "user_count": 0
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| user_count | Number | 符合条件的用户数量 |


#### 设置应用角标(仅支持IOS)
通过cid通知个推服务器当前iOS设备的角标情况。
##### 接口形式
```js 
await push.setBadgeByCid(OBJECT)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 用户标识，多个以英文逗号隔开，一次最多传200个 |
| badge |String|是|无|用户应用icon上显示的数字<br>`+N`: 在原有badge上+N<br>`-N`: 在原有badge上-N<br>`N`: 直接设置badge(数字，会覆盖原有的badge值) |
* 参数示例

```js
{
	"cid":"xxx",
    "badge": "-8"
}
```

##### 响应体说明

### 统计API
#### 获取推送结果
查询推送数据，可查询消息可下发数、下发数，接收数、展示数、点击数等结果。支持单个taskId查询和多个taskId查询。
>此接口调用，仅可以查询toList或toApp的推送结果数据；不能查询toSingle的推送结果数据。
##### 接口形式
```js 
await push.getReport(OBJECT)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskid | String | 是 | 无 | 任务id，推送时返回，多个taskId以英文逗号隔开，一次最多传200个|
| actionIdList | String | 否 | 无 |  

##### 响应体说明
* content-type:`application/json;charset=utf-8`

* 返回值示例

```js
 {
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$taskid": {
            "total": {
                "msg_num":4,
                "target_num":4,
                "receive_num":4,
                "display_num":2,
                "click_num":2
            },
            "gt": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            },
            "actionCntMap": {
                "$actionId":2
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |                 
| ------ | ---- | -------- |
|$taskid|Json|key: 任务编号，value: 统计数据|
|total|Json|总的统计数据|
|gt|Json|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; ios: APN;st: 坚果; key还可以是hw、xm、vv、mz、op。|
|msg_num|Number|消息可下发数|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|
|actionCntMap|Json|自定义事件统计数据|
|$actionId|Number|$actionId为自定义事件id，对应的值表示对应的统计数据(由开发者打点统计)|


#### 任务组名查报表
根据任务组名查询推送结果，返回结果包括消息可下发数、下发数，接收数、展示数、点击数。
>此接口调用，仅可以查询toList或toApp的推送结果数据；不能查询toSingle的推送结果数据。
##### 接口形式
```js 
await push.getReportByGroupName(group_name)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| group_name | String | 是 | 无 | 任务组名|

##### 响应体说明
* 返回值示例

```js
 {
    "errCode":"0",
    "errMsg":"success",
    "data": {
        "$group_name": {
            "total": {
                "msg_num":4,
                "target_num":4,
                "receive_num":4,
                "display_num":2,
                "click_num":2
            },
            "gt": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            },
            "ios": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$group_name|Json|key任务编号，value: 统计数据|
|total|Json|总的统计数据|
|gt|Json|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; ios: APN;st: 坚果; key还可以是hw、xm、vv、mz、op。|
|msg_num|Number|消息可下发数|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|


#### 获取推送实时结果
获取推送实时结果，可查询消息下发数，接收数、展示数、点击数和消息折损详情等结果。支持单个taskId查询和多个taskId查询。
>注意：该接口需要开通权限，如需开通，请联系对应的商务同学开通
##### 接口形式
```js 
await push.getReportDetailByTaskid(taskid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskid | String | 是 | 无 | 任务id，推送时返回，多个taskId以英文逗号隔开，一次最多传200个|

##### 响应体说明
* 返回值示例

```js
{
    "errMsg":"success",
    "errCode":0,
    "data":{
        "$taskid":{
            "total":{
                "msg_num":320,
                "target_num":14,
                "receive_num":3,
                "display_num":3,
                "click_num":0
            },
            "gt":{
                "target_num":3,
                "receive_num":2,
                "display_num":2,
                "click_num":0
            },
            "apn":{
                "target_num":11,
                "receive_num":1,
                "display_num":1,
                "click_num":0
            },
            "failed_detail":{
                "rs":{
                    "gt":{
                        "12":{
                            "total":231
                        }
                    },
                    "apn":{
                        "11":{
                            "11999":1,
                            "total":1
                        }
                    }
                },
                "ts":{
                    "gt":{
                        "13":{
                            "13001":608,
                            "total":608
                        },
                        "14":{
                            "14001":3,
                            "total":3
                        }
                    }
                }
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |                 
| ------ | ---- | -------- |
|$taskid|Json|key: 任务编号，value: 统计数据|
|total|Json|总的统计数据|
|gt|Json|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; apn: APNs通道; key还可以是hw、xm、vv、mz、op。|
|msg_num|Number|消息可下发数|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|
|failed_detail|Json|消息折损详情|
|ts|Json|请求-可下发阶段折损数据|
|rs|Json|可下发-下发成功阶段折损数据|
|sf|Json|下发成功-到达阶段折损数据|
|fd|Json|到达-展示阶段折损数据|


* `ts/rs/sf/fd` 里面的各个通道下面的数据含义

**折损详情分类如下，`2-14`是折损大类说明，大类说明下面的`7001-8999`是细分的折损原因，total代表各细分原因总和**

| 名称 |  描述 |                 
| ------ | -------- |
|2|参数无效|
|3|app鉴权信息错误|
|4|敏感词过滤|
|5|设备/应用无效（卸载）|
|6|推送数量超限|
|7|参数超限|
|8|无相关权限|
|10|关闭通知|
|11|其他厂商原因|
|12|消息有效期内离线|
|13|无效用户|
|14|其它|
|7001|title通知标题过长|
|7002|content通知内容过长|
|7003|url网页地址过长|
|7005|extraData透传内容过长|
|7006|payload附加消息过长|
|2001|参数错误|
|2002|title/content为空,或url非https协议|
|2003|无标题|
|2004|点击跳转目标页无效(intent)|
|2005|该厂商不支持纯透传模板|
|2999|其他原因|
|8001|无API推送权限/未获取到authToken|
|8002|系统消息开关未打开|
|8003|不在厂商规定时间|
|8999|其他原因|

#### 获取单日推送数据
调用此接口可以获取某个应用单日的推送数据(推送数据包括：下发数，接收数、展示数、点击数)(目前只支持查询非当天的数据)
##### 接口形式
```js 
await push.getReportByDate(date)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| date | String | 是 | 无 | 日期，格式: yyyy-MM-dd|

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$date": {
            "total": {
                "target_num":4,
                "receive_num":4,
                "display_num":2,
                "click_num":2
            },
            "gt": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            },
             "hw": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$date|Json|key: 日期，格式: yyyy-MM-dd，value: 统计数据|
|total|Json|总的统计数据|
|gt|Json|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; ios: APN;st: 坚果; key还可以是hw、xm、vv、mz、op。|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|


#### 查询推送量
查询应用当日可推送量和推送余量

注意：
1. 部分厂商消息不限制推送量，所以此接口不做返回，例如 hw/xmg厂商，op的私信消息，xm的重要级别消息等等
2.vv返回的是请求量push_num，总限额total_num返回的总的到达量，所以会有请求量push_num超过总限额total_num的情况
3.该接口做了频控限制，请不要频繁调用
##### 接口形式
```js 
await push.getTodayReport()
```
##### 入参说明
无

##### 响应体说明
* 返回值示例

```js
{
    "errMsg":"success",
    "errCode":0,
    "data":{
        "vv":{
            "special":{
                "push_num":0,
                "total_num":"10000",
                "limit":false
            },
            "general":{
                "push_num":0,
                "total_num":"10000",
                "limit":false
            },
            "grouppush":{
                "push_num":0,
                "total_num":"1000",
                "limit":false
            }
        },
        "op":{
            "general":{
                "total_num":"100000",
                "limit":false,
                "remain_num":"100000"
            }
        },
        "xm":{
            "general":{
                "total_num":20000,
                "limit":false,
                "remain_num":20000
            }
        },
        "gt":{
            "app":{
                "total_num":3000,
                "limit":false,
                "remain_num":3000
            },
            "app_with_tag":{
                "total_num":1000,
                "limit":false,
                "remain_num":1000
            },
            "list":{
                "total_num":2000000,
                "limit":false,
                "remain_num":2000000
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

为了接口返回统一，所以用special和general返回表示特殊消息和普通消息

| 名称         | 类型 |描述                          |
| ------------ | -------------------|-------|
|**gt**     |         Object   |  个推通道 |
|gt/app     |Object   | 个推群推接口推送限制|     
|gt/list    |Object   | 个推创建消息接口限制  |   
|gt/app\_with\_tag   | Object     |个推 根据条件筛选用户推送接口推送限制 |  
|**xm**    |Object   | xm通道    |  
|xm/general    |Object   | xm通道 普通消息限制，channel是普通级别消息时推送量限制    |    
|**op**    |Object   | op通道    |  
|op/general    |Object   | op通道 公信消息限制，不带channel或公信channel时推送量限制   |    
|**vv**    |Object   | vv通道    |   
|vv/special    |Object   | vv通道系统类消息限制，即classification=1时推送量限制    |  
|vv/general    |Object   | vv通道运营类消息限制，即classification=0时推送量限制   |   
|vv/grouppush   |Object   | vv群推消息体配置量   |  
| total_num     |  long   | 单日可推送总量    |        
| remain_num     |  long| 单日可推送剩余量   |   
| push_num     |  long| 单日可推送请求量，**仅vv返回该字段**   |  
| limit     |boolean|  是否被限量,当日可推送总量使用完时，该字段更新true|  


#### 获取单日用户数据接口
调用此接口可以获取某个应用单日的用户数据(用户数据包括：新增用户数，累计注册用户总数，在线峰值，日联网用户数)(目前只支持查询非当天的数据)
##### 接口形式
```js 
await push.getClientReportByDate(date)
```
##### 入参说明

| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| date | String | 是 | 无 | 日期，格式: yyyy-MM-dd|

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$date": {
            "accumulative_num":9,
            "register_num":2,
            "active_num":5,
            "online_num":2
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$date|Json|key: 日期，格式: yyyy-MM-dd，value: 统计数据|
|accumulative_num|Number|累计注册用户数|
|register_num|Number|注册用户数|
|active_num|Number|活跃用户数|
|online_num|Number|在线用户数|

#### 获取24个小时在线用户数
查询当前时间一天内的在线用户数(10分钟一个点，1个小时六个点)
##### 接口形式
```js
await push.getTodayOnlineClientReport()
```
##### 入参说明
无

##### 响应体说明
##### 成功响应数据格式:

* content-type:`application/json;charset=utf-8`

* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data": {
        "online_statics":{
            "$date":4,
            "$date":5
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|online_statics|Json|在线用户统计数据|
|$date|Number|key: 毫秒时间戳，value: 在线用户数|


### 公共返回结构

以下参数格式为每个接口返回的数据的通用格式。

| 名称 | 类型 |  描述 |
| ------ | ------ | ---- |
| errCode | Number | 成功或失败errCode码，详细含义见[返回码说明](#返回码说明)|
| errMsg | String | 失败时返回此说明|
| data | Json | 详见接口说明|

### 返回码说明

本文档主要介绍个推开放平台返回码

> HTTP errCode码说明 *********待修改

| errCode | 错误描述 |  解决措施 |
| ------ | ------ | ---- |
| 200 | 成功 | 查看基础返回码 |
| 400 | 参数错误 | 具体异常信息请参考业务返回码 |
| 401 | 权限相关 | 具体异常信息请参考业务返回码 |
| 403 | 套餐相关 | 具体异常信息请参考业务返回码 |
| 404 | url错误 | 请检查Http路径是否正确 |
| 405 | 方法不支持 | 该接口不支持该方法请求，请查看文档确认请求方式 |


> 业务返回码说明 *********待修改

#### 基础返回码

| errCode | 错误描述 |  解决措施 | 对应http errCode |
| ------ | ------ | ---- | ---- |
| 0 | 成功 | 不涉及 | 200 |
| 1 | 失败 | 接口入参要求是 json 格式，非 json 格式会无法识别导致报错，建议检查一下代码 | 200 |
| 2 | 服务正在启动 | 请等待 | 200 |
| 301 | 域名错误 | 请检查域名是否与appid机房匹配 | 200 |
| 404 | url错误 | 请检查Http路径是否正确 | 404 |
| 405 | 方法不支持 | 该接口不支持该方法请求，请查看文档确认请求方式 | 405 |

#### 10000 - 权限相关

| errCode | 错误描述 |  解决措施 | 对应http errCode |
| ------ | ------ | ---- | ---- |
| 10001 | token错误/失效 | 调用接口重新获取token | 401 |
| 10002 | appId或ip在黑名单中 |  | 401 |
| 10003 | 每分钟鉴权频率超限 | 接口调用过于频繁 | 401 |
| 10004 | 没有查询消息明细的权限|可以申请权限，若有需要，请点击右侧“技术咨询”了解详情 | 401|
| 10005 | 每分钟调用频率超限| |401|

#### 20000 - 参数相关

| errCode | 错误描述 |  解决措施 | 对应http errCode |
| ------ | ------ | ---- | ---- |
| 20001 | 参数不合法 | 请检查参数 | 400 |
| 22001 | 定时任务已经执行，无法删除 |  | 400 |
| 22002 | 任务无效或定时任务时间不合法 |  | 400 |
| 23001 | 操作tag失败 |  | 400 |

#### 30000 - 套餐相关，关于套餐相关的返回码，可以针对应用特殊配置，若有需要，请点击右侧“技术咨询”了解详情。

| errCode | 错误描述 |  对应http errCode |
| ------ | ------ | ---- |
| 30000 | 没有推送fast_custom_tag的权限  | 403 |
| 30001 | 没有修改和删除custom_tag的权限  | 403 |
| 30002 | 没有推送定时任务的权限 |  403 |
| 30003 | app/tag 接口无权限，或tag无效 | 403 |
| 30004 | tag每日推送总数超限(VIP用户可根据应用特殊配置)  | 403 |
| 30005 | tag长度超限(tag长度<32) |  403 |
| 30006 | fast_custom_tag次数超过每日推送总数限制(VIP用户可根据应用特殊配置) |  403 |
| 30007 | `app/all`推送，推送次数超过每日推送总数限制，每日最多推送100次 |  403 |
| 30008 | list推送次数超过每日推送总数限制，每日最多推送2000000次 |  403 |
| 30009 | 推送次数超过每日推送总数限制 |  403 |
| 30010 | `app/tag` 推送次数超过每日推送总数限制，每日最多推送100次，和接口`app/all`共享限制|  403 |
| 30011 | 设置tag次数超过每日次数限制 |  403 |
| 30012 | 修改和删除tag 超过每分钟频率限制，每分钟最多操作5次 |  403 |
| 30013 | 推送fast_custom_tag频率超过每分钟频率限制(VIP用户可根据应用特殊配置) |  403 |
| 30014 | app 推送 频率超过每分钟频率限制，每分钟最多操作5次 |  403 |
| 30015 | list推送 频率超过每分钟频率限制 |  403 |
| 30016 | push/tag tag个数超过限制 |  403 |
| 30017 | 没有查询单推实时报表的权限  | 403 |
| 30018 | 查询单推实时报表 频率超过每分钟频率限制 |  403 |
| 30019 | 系统繁忙，请稍后重试 |  403 |

查询用户标签
根据cid查询用户标签列表


## 客户端API文档

### getPushCid()
获取客户端唯一的推送标识，注意这是一个异步的方法
示例代码：
```js 
	let cid = await uni.getPushCid();
	console.log(cid);
```

### onPushMessage([callback,eventName])
启动监听推送消息事件
代码示例：
```js 
uni.onPushMessage((res)=>{
	console.log(res)
})
```
#### 回调参数说明
|名称	|类型	|描述	|
|--		|--		|--		|
|type	|String	| 事件类型，"click"-从系统推送服务点击消息启动应用事件；"receive"-应用从推送服务器接收到推送消息事件。|
|data	|String、Object|消息内容|

### offPushMessage([eventName])
关闭推送消息监听事件
示例代码：
```
let eventName = (res)=>{
	console.log(res)
}
//启动推送事件监听
uni.onPushMessage(eventName);
//关闭推送事件监听
uni.offPushMessage(eventName);
```
#### Tips
- 如果uni.offPushMessage没有传入参数，则移除App级别的所有事件监听器；
- 如果只提供了事件名（eventName），则移除该事件名对应的所有监听器；

## 2.0相比1.0优势
1. APP、微信小程序、H5全端支持消息推送
2. 统一行为：默认应用离线消息走“通知栏消息”，应用在线走“透传消息”。
	* 如果需要应用在线时，消息展示在通知栏用`plus.push.createMessage`，创建本地消息实现
3. 新增uniPush服务端sdk（uniCloud扩展库）
	消息推送属于敏感操作，只能直接或间接由服务端触发。
	传统的三方push服务，需要开发者在服务端配置密钥或证书，根据服务器端文档签名获取token，再向相关URL接口发起网络请求...... 
	而UniPush2.0，开发者无需关心证书、签名、服务器端文档，使用简单，极简的代码，云函数通过 `uni-cloud-push`（uniCloud 扩展库）的API即可直接执行uniPush所有操作，详情[文档](#uni-cloud-push)。
	关于扩展库可以理解成是一个不可见的，框架集成的公共模块。
4. 新增uniPush客户端api
	* uni.onPushMessage 绑定方法监听消息
	* uni.offPushMessage 解绑方法监听消息
	* uni.getPushCid 获取用户设备推送标识
5. uni-admin端新增push管理面板


## 问题记录：
注意：3个月未登陆的cid会被清空，所以uni-id的token过期事件不能超过3个月否则有故障。