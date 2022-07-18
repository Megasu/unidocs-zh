### uni.getSystemSetting()
获取设备设置

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.5.2+|x|基础库 2.20.1+|x|x|x|x|x|x|x|


**返回参数说明**

|属性|类型|说明|
|:-|:-|:-|
|bluetoothEnabled|boolean|蓝牙的系统开关。在没有 `bluetoothError` 时该值准确|
|bluetoothError|String/undefined|App平台模块错误时返回，配置正确时不返回此属性。详情见下|
|locationEnabled|boolean|地理位置的系统开关|
|locationError|String/undefined|App平台模块错误时返回，配置正确时不返回此属性。详情见下|
|wifiEnabled|boolean|Wi-Fi 的系统开关|
|deviceOrientation|string|设备方向。`竖屏：portrait`，`横屏：landscape`|

**Tips**
- `bluetoothError`：`Android平台` 没有蓝牙权限是返回值为 `"Missing permissions required by BluetoothAdapter.isEnabled: android.permission.BLUETOOTH"`，`iOS平台` 没有配置蓝牙模块返回值为 `"Missing bluetooth module in manifest.json"`
- `locationError`：`iOS平台` 没有定位权限 `"Missing geolocation module in manifest.json"`

**示例**

```javascript
const systemSetting = uni.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)
```