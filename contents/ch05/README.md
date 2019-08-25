## 5 MAC 指令

对网络管理者而言，有一套专门的 MAC 指令用来在网络服务器和终端 MAC 层之间交互。MAC 层指令对应用程序或者应用服务器或者运行在终端设备上的应用程序是不可见的。

单个数据帧中可以包含任意 MAC 指令序列，要么在 **FOpts** 字段中捎带，要么作为独立帧将 **FPort** 设成 0 后放在 **FRMPayload** 里。FOpts 捎带的 MAC 指令总是要经过加密后发送并且长度不能超过 15 字节。通过 **FRMPayload** 发送的 MAC 指令也总是要经过加密，并且不能（MUST NOT）超过 **FRMPayload** 的最大长度。

MAC 命令是由 1 字节命令码（command identifier，CID）跟着一段可能为空的特定命令字节序列组成的。

MAC 指令由接收端按与传输命令相同的顺序应答或确认。每个 MAC 指令的回应依次添加到缓冲区中。所有在单个帧中接收到的 MAC 指令也必须在单个帧中回应，这意味着包含回应的缓冲区必须在一帧中发送。如果 MAC 指令回应缓冲区长度大于最大 FOpt 字段，设备必须（MUST）将缓冲区作为FRMPayload 发送到端口 0。

如果设备同时具有应用程序负载和 MAC 应答，且两者不能都放入帧中，则应（SHALL）优先发送MAC 应答。如果缓冲区长度大于可用的最大 FRMPayload 大小，则设备应（SHALL）在组装帧之前将缓冲区裁剪至最大 FRMPayload 的大小。
 
因此，最后一个 MAC 指令的回应可能会被截断。在所有情况下，都会执行 MAC 指令的完整列表，即使必须裁剪包含 MAC 应答的缓冲区。

网络服务器不得（MUST NOT）生成可能无法在单一上行通讯中得到终端设备应答的 MAC 指令序列。

网络服务器应（SHALL）基于下表计算可用于响应 MAC 指令的最大 FRMPayload 大小:

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
      <td>0x01</td>
      <td class="td-cmd">ResetInd</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">ABP设备用于指示对网络的重置并协商协议版本</td>
   </tr>
   <tr>
      <td>0x01</td>
      <td class="td-cmd">ResetConf</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">确认 ResetInd 指令</td>
   </tr>
   <tr>
      <td>0x02</td>
      <td class="td-cmd">LinkCheckReq</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">终端利用这个命令来判断网络连接质量</td>
   </tr>
   <tr>
      <td>0x02</td>
      <td class="td-cmd">LinkCheckAns</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">LinkCheckReq 的回应。包含向终端设备指示接收质量（链路裕度）的接收信号功率估计</td>
   </tr>
   <tr>
      <td>0x03</td>
      <td class="td-cmd">LinkADRReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">向终端请求改变数据速率，发射功率，重传率以及信道</td>
   </tr>
   <tr>
      <td>0x03</td>
      <td class="td-cmd">LinkADRAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">LinkADRReq 的回应</td>
   </tr>
   <tr>
      <td>0x04</td>
      <td class="td-cmd">DutyCycleReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">向终端设置发送的最大占空比</td>
   </tr>
   <tr>
      <td>0x04</td>
      <td class="td-cmd">DutyCycleAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">DutyCycleReq 的回应</td>
   </tr>
   <tr>
      <td>0x05</td>
      <td class="td-cmd">RXParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">向终端设置接收时隙参数</td>
   </tr>
   <tr>
      <td>0x05</td>
      <td class="td-cmd">RXParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">RXParamSetupReq的回复</td>
   </tr>
   <tr>
      <td>0x06</td>
      <td class="td-cmd">DevStatusReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">向终端查询其状态</td>
   </tr>
   <tr>
      <td>0x06</td>
      <td class="td-cmd">DevStatusAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">返回终端设备的状态，即电池余量和链路解调裕度。</td>
   </tr>
   <tr>
      <td>0x07</td>
      <td class="td-cmd">NewChannelReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">创建或修改 1个射频信道定义</td>
   </tr>
   <tr>
      <td>0x07</td>
      <td class="td-cmd">NewChannelAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">NewChannelReq 的回复</td>
   </tr>
   <tr>
      <td>0x08</td>
      <td class="td-cmd">RXTimingSetupReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">设置接收时隙的时间</td>
   </tr>
   <tr>
      <td>0x08</td>
      <td class="td-cmd">RXTimingSetupAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">RXTimingSetupReq 的回复</td>
   </tr>
   <tr>
      <td>0x09</td>
      <td class="td-cmd">TxParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">网络服务器用于设置基于当地规定的终端的最大允许驻留时间和最大EIRP</td>
   </tr>
   <tr>
      <td>0x09</td>
      <td class="td-cmd">TxParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">TxParamSetupReq的回复。</td>
   </tr>
   <tr>
      <td>0x0A</td>
      <td class="td-cmd">DlChannelReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">通过从上行链路频率移位下行链路频率（如创建非对称信道）来修改下行链路RX1无线电信道的定义</td>
   </tr>
   <tr>
      <td>0x0A</td>
      <td class="td-cmd">DlChannelAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">DlChannelReq 的回复</td>
   </tr>
    <tr>
      <td>0x0B</td>
      <td class="td-cmd">RekeyInd</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">OTA 设备用于发出安全上下文更新信号（Rekeying)</td>
   </tr>
   <tr>
      <td>0x0B</td>
      <td class="td-cmd">RekeyConf</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">RekeyInd 的确认</td>
   </tr>
   <tr>
      <td>0x0C</td>
      <td class="td-cmd">ADRParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">网络服务器用来设置终端设备的 ADR_ACK_LIMT 和 ADR_ACK_DELAY 参数</td>
   </tr>
   <tr>
      <td>0x0C</td>
      <td class="td-cmd">ADRParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">应答 ADRParamSetupReq</td>
   </tr>
   <tr>
      <td>0x0D</td>
      <td class="td-cmd">DeviceTimeReq</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">终端设备用于请求当前日期和时间</td>
   </tr>
   <tr>
      <td>0x0D</td>
      <td class="td-cmd">DeviceTimeReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">回应 DeviceTimeReq 命令</td>
   </tr>
   <tr>
      <td>0x0E</td>
      <td class="td-cmd">ForceRejoinReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">网络发送，要求终端立即通过可选的周期性重试重新入网</td>
   </tr>
   <tr>
      <td>0x0F</td>
      <td class="td-cmd">RejoinParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td class="td-cmd-desc">网络用于设置设备周期性重新入网连接消息</td>
   </tr>
   <tr>
      <td>0x0F</td>
      <td class="td-cmd">RejoinParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td class="td-cmd-desc">对 RejoinParamSetupReq 命令的应答</td>
   </tr>
   <tr>
      <td>0x80~0xFF</td>
      <td>私有</td>
      <td>x</td>
      <td>x</td>
      <td class="td-cmd-desc">给专有网络命令拓展做预留</td>
   </tr>
</table>

*表4：MAC命令表*


> **注意：**一般情况下，终端设备对接收到的 Mac 命令只响应一次。如果答案丢失，则网络必须重新发送该命令。当接收到不包含答案的新上行链路时，网络决定必须重新发送该命令。只有**RxParamSetupReq**、**RxTimingSetupReq** 和 **DlChannelReq** 在它们的相关部分中描述了不同的确认机制，因为它们影响下行参数。

> **注意：**当终端设备启动 MAC 命令时，网络会尽最大努力在请求之后立即在 RX1/RX2 窗口中发送确认或应答。如果在那个插槽中没有接收到答案，则终端设备可以自由地实现它需要的任何重试机制。

> **注意：**MAC 命令的长度不是显式给定的，必须由 MAC 的实现隐性得知。因此，未知的 MAC 无法跳过，第一个未知的 MAC 命令终止对 MAC 命令序列的处理。因此，建议根据首次引入 MAC 命令的 LoRaWAN 规范的版本来处理 MAC 命令。这样，即使存在只在比实现的规范更新的版本中指定的 MAC 命令，也可以处理到实现的规范版本之前的所有MAC命令。


