## 18 Class C MAC 指令


Class A 规范中描述的所有指令都应（SHALL）在 Class C 设备中实现。Class C 规范增加了以下 MAC 指令。

<table class="lora-table">
   <tr>
      <td rowspan="2" ><b>CID</b></td>
      <td rowspan="2" ><b>Command</b></td>
      <td colspan="2" ><b>由谁<br/>发送</b></td>
      <td rowspan="2" ><b>简短描述</b></td>
   </tr>
   <tr>
      <td>终端</td>
      <td>网关</td>
   </tr>
   <tr>
      <td>0x20</td>
      <td class="td-cmd">DeviceModeInd</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">终端设备用来指示其当前工作模式（Class A 或 C）</td>
   </tr>
   <tr>
      <td>0x20</td>
      <td class="td-cmd">DeviceModeConf</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">网络用语应答 DeviceModeInd 指令</td>
   </tr>
</table>

*表 22 : Class C MAC command table*


