### uni.getAppBaseInfo()

获取微信 APP 基础信息

|App|H5|微信小程序|支付宝小程序|字节跳动小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|

**返回参数说明**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|appId|string|`manifest.json` 中应用appid，即DCloud appid。	||
|appName|string|`manifest.json` 中应用名称	||
|appVersion|string|`manifest.json` 中应用版本名称。||
|appVersionCode|string|`manifest.json` 中应用版本名号。||
|appLanguage|string|应用设置的语言`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`App`、`H5`|
|hostLanguage|string|浏览器语言、小程序宿主语言|`App 仅 UNIMPSDK 支持`|
|hostVersion|string|App、小程序宿主版本。如：微信版本号。Web 端为浏览器版本|`App 仅 UNIMPSDK 支持`|
|hostName|string|浏览器名称、小程序宿主名称|`App 仅 UNIMPSDK 支持`|
|hostPackageName|string|小程序宿主包名|`仅 UNIMPSDK 支持`|
|hostFontSizeSetting|string|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|`仅 UNIMPSDK 支持`|

小程序特殊的返回参数

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|hostSDKVersion|string|客户端基础库版本|`仅微信小程序`|
|hostTheme|string|系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）|`仅微信小程序`|
|SDKVersion|string|客户端基础库版本|`仅微信小程序`|
|enableDebug|boolean|是否已打开调试。可通过右上角菜单或 wx.setEnableDebug 打开调试|`仅微信小程序`|
|host|Object|当前小程序运行的宿主环境|`仅微信小程序`|
|theme|string|系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）|`仅微信小程序`|

不推荐使用的返回参数，仅为向下兼容保留

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|language|string|宿主、浏览器设置的语言、微信设置的语言|`App 仅 UNIMPSDK 支持`|
|version|string|引擎版本号、微信版本号||