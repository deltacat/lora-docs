## 4 MAC 帧格式

所有 LoRa 上下行消息都会携带 PHY 载荷（**Payload**），PHY载荷以单一八位字节 MAC 头（**MHDR**）开始，紧接着 MAC 载荷（**MACPayload**）[^1]，最后是4字节的消息校验码（**MIC**）。

- 射频PHY层：

<table>
   <tr>
      <td>Preamble</td>
      <td>PHDR</td>
      <td>PHDR_CRC</td>
      <td bgcolor="silver">PHYPayload</td>
      <td>CRC</td>
   </tr>
</table>

*图5.射频PHY结构(注意 CRC只有上行链路消息中存在)*

- PHY载荷：

<table>
   <tr>
      <td>MHDR</td>
      <td bgcolor="silver">MACPayload</td>
      <td>MIC</td>
   </tr>
</table>

或

<table>
   <tr>
      <td>MHDR</td>
      <td bgcolor="silver" >Join-Request 或 Rejoin-Request</td>
      <td>MIC</td>
   </tr>
</table>

或[^2]

<table>
   <tr>
      <td>MHDR</td>
      <td bgcolor="#CCCCCC" >Join-Accept</td>
   </tr>
</table>

*图6.PHY载荷结构*

- MAC载荷：

<table>
   <tr>
      <td bgcolor="#CCCCCC" >FHDR</td>
      <td>FPort</td>
      <td>FRMPayload</td>
   </tr>
</table>

*图7.MAC载荷结构*

- FHDR：

<table>
   <tr>
      <td>DevAddr</td>
      <td>FCtrl</td>
      <td>FCnt</td>
      <td>FOpts</td>
   </tr>
</table>

*图8.帧头结构*

---

[^1]: 最大有效载荷的长度详见第6章。
[^2]: 对于Join-Accept帧，MIC字段使用有效载荷加密，而不是单独的字段.


