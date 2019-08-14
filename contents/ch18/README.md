## 18 Class C MAC 指令


All commands described in the Class A specification SHALL be implemented in Class C
2361 devices. The Class C specification adds the following MAC commands.

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
      <td>Used by the end-device to indicate its current operating mode (Class A or C)</td>
   </tr>
   <tr>
      <td>0x20</td>
      <td class="td-cmd">DeviceModeConf</td>
      <td></td>
      <td>x</td>
      <td>Used by the network to acknowledge a DeviceModeInd command</td>
   </tr>
</table>

*表 22 : Class C MAC command table*


