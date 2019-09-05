## 第14章 Class B Mac命令

所有在 Class A 协议中描述的指令都应该在 Class B 中实现。Class B 协议额外增加了如下的 MAC 指令。

<table>
   <tr>
      <td rowspan ="2" ><b>CID</b></td>
      <td rowspan ="2" ><b>Command</b></td>
      <td colspan ="2" ><b>由谁传输</b></td>
      <td rowspan ="2" ><b>描述</b></td>
   </tr>
   <tr>
      <td>终端</td>
      <td>网关</td>
   </tr>
   <tr>
      <td>0x10</td>
      <td><b>PingSlotInfoReq</b></td>
      <td>x</td>
      <td></td>
      <td>终端设备用于将 ping 单播时隙数据速率和周期性传送给网络服务器</td>
   </tr>
   <tr>
      <td>0x10</td>
      <td><b>PingSlotInfoAns</b></td>
      <td></td>
      <td>x</td>
      <td>用于网络应答<b>PingInfoSlotReq</b>命令</td>
   </tr>
   <tr>
      <td>0x11</td>
      <td><b>PingSlotChannelReq</b></td>
      <td></td>
      <td>x</td>
      <td>用于网络服务器设置一个终端的单播 ping 通道</td>
   </tr>
   <tr>
      <td>0x11</td>
      <td><b>PingSlotFreqAns</b></td>
      <td>x</td>
      <td></td>
      <td>终端用于应答<b>PingSlotChannelReq</b>命令</td>
   </tr>
   <tr>
      <td>0x12</td>
      <td><b>BeaconTimingReq</b></td>
      <td>x</td>
      <td></td>
      <td>用于终端向网络请求下一个信标时间和信道</td>
   </tr>
   <tr>
      <td>0x12</td>
      <td><b>BeaconTimingAns</b></td>
      <td></td>
      <td>x</td>
      <td>用于网络应答<b>BeaconTimingReq</b>命令</td>
   </tr>
   <tr>
      <td>0x13</td>
      <td><b>BeaconFreqReq</b></td>
      <td></td>
      <td>x</td>
      <td>用于网络服务器修改终端希望接收信标广播的频率</td>
   </tr>
   <tr>
      <td>0x13</td>
      <td><b>BeaconFreqAns</b></td>
      <td>x</td>
      <td></td>
      <td>用于终端应答<b>BeaconFreqReq</b>命令</td>
   </tr>
</table>

