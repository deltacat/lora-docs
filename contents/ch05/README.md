<style>
table {
    text-align: center;
}
</style>

## **第5章 MAC命令**

对网络管理者而言，有一套专门的 MAC 命令用来在网络服务器和终端 MAC 层之间交互。MAC 层指令对应用程序或者应用服务器或者运行在终端设备上的应用程序是不可见的。

单个数据帧中可以包含任意 MAC 指令序列，要么在 **FOpts** 字段中捎带，要么作为独立帧将 **FPort** 设成 0 后放在 **FRMPayload** 里。FOpts 捎带的 MAC 指令总是要经过加密后发送并且长度不能超过 15 字节。通过 **FRMPayload** 发送的 MAC 指令也总是要经过加密，并且不能（MUST NOT）超过 **FRMPayload** 的最大长度。

MAC 命令是由 1 字节命令码 (command identifier，CID) 跟着一段可能为空的特定命令字节序列组成的。

MAC 指令由接收端按与传输命令相同的顺序应答或确认。每个 MAC 指令的回应依次添加到缓冲区中。所有在单个帧中接收到的 MAC 指令也必须在单个帧中回应，这意味着包含回应的缓冲区必须在一帧中发送。如果 MAC 指令回应缓冲区长度大于最大 FOpt 字段，设备必须（MUST）将缓冲区作为FRMPayload 发送到端口 0。

如果设备同时具有应用程序负载和 MAC 应答，且两者不能都放入帧中，则应（SHALL）优先发送MAC 应答。如果缓冲区长度大于可用的最大 FRMPayload 大小，则设备应（SHALL）在组装帧之前将缓冲区裁剪至最大 FRMPayload 的大小。
 
因此，最后一个 MAC 指令的回应可能会被截断。在所有情况下，都会执行 MAC 指令的完整列表，即使必须裁剪包含 MAC 应答的缓冲区。

网络服务器不得（MUST NOT）生成可能无法在单一上行通讯中得到终端设备应答的 MAC 指令序列。

网络服务器应（SHALL）基于下表计算可用于响应 MAC 指令的最大 FRMPayload 大小:

<table>
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
      <td>ResetInd</td>
      <td>x</td>
      <td></td>
      <td>Used by an ABP device to indicate a reset to the network and negotiate protocol version</td>
   </tr>
   <tr>
      <td>0x01</td>
      <td>ResetConf</td>
      <td></td>
      <td>x</td>
      <td>Acknowledges ResetInd command</td>
   </tr>
   <tr>
      <td>0x02</td>
      <td>LinkCheckReq</td>
      <td>x</td>
      <td></td>
      <td>终端利用这个命令来判断网络连接质量</td>
   </tr>
   <tr>
      <td>0x02</td>
      <td>LinkCheckAns</td>
      <td></td>
      <td>x</td>
      <td>LinkCheckReq的回复。包含接收信号强度，告知终端接收质量</td>
   </tr>
   <tr>
      <td>0x03</td>
      <td>LinkADRReq</td>
      <td></td>
      <td>x</td>
      <td>向终端请求改变数据速率，发射功率，重传率以及信道</td>
   </tr>
   <tr>
      <td>0x03</td>
      <td>LinkADRAns</td>
      <td>x</td>
      <td></td>
      <td>LinkADRReq的回复。</td>
   </tr>
   <tr>
      <td>0x04</td>
      <td>DutyCycleReq</td>
      <td></td>
      <td>x</td>
      <td>向终端设置发送的最大占空比。</td>
   </tr>
   <tr>
      <td>0x04</td>
      <td>DutyCycleAns</td>
      <td>x</td>
      <td></td>
      <td>DutyCycleReq的回复。</td>
   </tr>
   <tr>
      <td>0x05</td>
      <td>RXParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td>向终端设置接收时隙参数。</td>
   </tr>
   <tr>
      <td>0x05</td>
      <td>RXParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td>RXParamSetupReq的回复。</td>
   </tr>
   <tr>
      <td>0x06</td>
      <td>DevStatusReq</td>
      <td></td>
      <td>x</td>
      <td>向终端查询其状态。</td>
   </tr>
   <tr>
      <td>0x06</td>
      <td>DevStatusAns</td>
      <td>x</td>
      <td></td>
      <td>返回终端设备的状态，即电池余量和链路解调预算。</td>
   </tr>
   <tr>
      <td>0x07</td>
      <td>NewChannelReq</td>
      <td></td>
      <td>x</td>
      <td>创建或修改 1个射频信道 定义。</td>
   </tr>
   <tr>
      <td>0x07</td>
      <td>NewChannelAns</td>
      <td>x</td>
      <td></td>
      <td>NewChannelReq的回复。</td>
   </tr>
   <tr>
      <td>0x08</td>
      <td>RXTimingSetupReq</td>
      <td></td>
      <td>x</td>
      <td>设置接收时隙的时间。</td>
   </tr>
   <tr>
      <td>0x08</td>
      <td>RXTimingSetupAns</td>
      <td>x</td>
      <td></td>
      <td>RXTimingSetupReq的回复。</td>
   </tr>
   <tr>
      <td>0x09</td>
      <td>TxParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td>网络服务器用于设置基于当地规定的终端的最大允许驻留时间和最大EIRP</td>
   </tr>
   <tr>
      <td>0x09</td>
      <td>TxParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td>TxParamSetupReq的回复。</td>
   </tr>
   <tr>
      <td>0x0A</td>
      <td>DlChannelReq</td>
      <td></td>
      <td>x</td>
      <td>通过从上行链路频率移位下行链路频率（即创建非对称信道）来修改下行链路RX1无线电信道的定义</td>
   </tr>
   <tr>
      <td>0x0A</td>
      <td>DlChannelAns</td>
      <td>x</td>
      <td></td>
      <td>DlChannelReq的回复。</td>
   </tr>
    <tr>
      <td>0x0B</td>
      <td>RekeyInd</td>
      <td>x</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>0x0B</td>
      <td>RekeyConf</td>
      <td></td>
      <td>x</td>
      <td></td>
   </tr>
   <tr>
      <td>0x0C</td>
      <td>ADRParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td></td>
   </tr>
   <tr>
      <td>0x0C</td>
      <td>ADRParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>0x0D</td>
      <td>DeviceTimeReq</td>
      <td>x</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>0x0D</td>
      <td>DeviceTimeReq</td>
      <td></td>
      <td>x</td>
      <td></td>
   </tr>
   <tr>
      <td>0x0E</td>
      <td>ForceRejoinReq</td>
      <td></td>
      <td>x</td>
      <td></td>
   </tr>
   <tr>
      <td>0x0F</td>
      <td>RejoinParamSetupReq</td>
      <td></td>
      <td>x</td>
      <td></td>
   </tr>
   <tr>
      <td>0x0F</td>
      <td>RejoinParamSetupAns</td>
      <td>x</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>0x80~0xFF</td>
      <td>私有</td>
      <td>x</td>
      <td>x</td>
      <td>给私有网络命令拓展做预留。</td>
   </tr>
</table>

*表4：MAC命令表*

> 注意：MAC命令的长度虽然没有明确给出，但是MAC执行层必须要知道。因此未知的MAC命令无法被忽略，且前面未知的MAC命令会终止MAC命令的处理队列。所以建议按照LoRaWAN协议介绍的MAC命令来处理MAC命令。这样所有基于LoRaWAN协议的MAC命令都可以被处理，即使是更高版本的命令。

> 注意：由网络服务器调整的任何值（例如，RX2、新的或已调整的信道定义）仅在终端设备的下一次加网之前有效。因此，在每个成功加网之后，终端设备将再次使用默认参数，并由网络服务器根据需要重新调整值。


> note1
> note2
> note3


