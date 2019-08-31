

## 第10章 Class B 模式的上行帧

Class B 模式的上行帧和 Class A 的基本一样，除了帧头 FCtrl 字段的 RFU 位有所不同。在 Class A 上行通讯中这个位没有使用（RFU）。这个位被 Class B 上行通讯使用。

<table class="lora-table">
   <tr>
      <td><b>Bit#</b></td>   
      <td>7</td>
      <td>6</td>
      <td>5</td>
      <td>4</td>
      <td>[3..0]</td>
   </tr>
   <tr>
      <td><b>FCtrl</b></td>   
      <td>ADR</td>
      <td>ADRACKReq</td>
      <td>ACK</td>
      <td>Class B</td>
      <td>FOptsLen</td>
   </tr>
</table>

*Figure 51 : classB FCtrl fields*

上行帧中的 Class B 位置为 1，用于通知网络服务器设备已切换到 Class B 模式，准备好接收预定的下行 ping 包。

下行 FPending 位意义没有变化，仍表示 server 有多个下行帧排队下发，设备应当继续接收，如 Class A 中的定义一样。

