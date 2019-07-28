# 目录

* [第1章 介绍](contents/ch01/README.md)
    * 1.1 LoRaWAN Classes
    * 1.2 文档约定
* [第2章 LoRaWAN Classes 类型介绍](contents/ch02/README.md)
    * 2.1 LoRaWAN Classes


** [CLASS A - ALL END-DEVICE 所有终端](contents/CLASS-A.md) **

* [第3章 PHY 帧格式](contents/ch03/README.md)
    * 3.1 上行消息
    * 3.2 下行消息
    * 3.3 接收窗口
        * 3.3.1 第一接收窗口的信道，数据速率和启动
        * 3.3.2 第二接收窗口的信道，数据速率和启动
        * 3.3.3 接收窗口的持续时间
        * 3.3.4 接收方在接收窗口期间的处理
        * 3.3.5 网络发送消息给终端
        * 3.3.6 接收窗口的重要事项
* [第4章 MAC帧格式](contents/ch04/README.md)
    * 4.1 MAC层
    * 4.2 MAC头(MHDR字段)
        * 4.2.1 第一接收窗口的信道，数据速率和启动
        * 4.2.2 数据消息的主版本(Major位字段)
    * 4.3 MAC载荷(MACPayload)
        * 4.3.1 帧头(FHDR)
        * 4.3.2 端口字段(FPort)
        * 4.3.3 MAC帧载荷加密(FRMPayload)
    * 4.4 消息校验码(MIC)
* [第5章 MAC命令](contents/ch05/README.md)
    * 5.1 Link Check 命令 (LinkCheckReq, LinkCheckAns)
    * 5.2 Link ADR 命令(LinkADRReq, LinkADRAns)
    * 5.3 终端发射占空比(DutyCycleReq, DutyCycleAns)
    * 5.4 接收窗口参数(RXParamSetupReq,RXParamSetupAns)
    * 5.5 终端状态(DevStatusReq, DevStatusAns)
    * 5.6 信道的创建和修改(NewChannelReq, NewChannelAns, DlChannelReq, DlChannelAns)
    * 5.7 TX 和 RX 之间的延时设置(RXTimingSetupReq, RXTimingSetupAns)
    * 5.8 终端发送参数(TxParamSetupReq, TxParamSetupAns)
* [第6章 终端激活](contents/ch06/README.md)
    * 6.1 终端激活后的数据存储
    * 6.2 空中激活 OTAA
        * 6.2.1 终端 ID (DevEUI)
        * 6.2.2 应用密钥(AppKey)
        * 6.2.3 加网流程
        * 6.2.4 Join-request 消息
        * 6.2.5 Join-accept 消息
    * 6.3 独立激活 ABP
* [第7章 重传退避](contents/ch07/README.md)



**[CLASS B – BEACON 信标](contents/CLASS-B.md)**

* [第8章 Class B 介绍](contents/ch08/README.md)
* [第9章 下行同步网络的原理](contents/ch09/README.md)
* [第10章 Class B 模式的上行帧](contents/ch10/README.md)
* [第11章 Class B 模式的下行帧(Class B选项)](contents/ch11/README.md)
* [第12章 信标的获得和追踪](contents/ch12/README.md)
* [第13章 Class B下行时隙时序](contents/ch13/README.md)
    * 13.1 定义
    * 13.2 时隙随机化
* [第14章 Class B MAC命令](contents/ch14/README.md)
    * 14.1 PingSlotInfoReq MAC命令
    * 14.2 BeaconFreReq MAC命令
    * 14.3 PingSlotChannelReq MAC命令
    * 14.4 BeaconTimingReq MAC命令
    * 14.5 BeaconTimingAns MAC命令
* [第15章 信标(Class B选项)](contents/ch15/README.md)
    * 15.1 信标物理层](contents/15 Beaconing[Class B option
    * 15.2 信标物理帧格式](contents/15 Beaconing[Class B option
    * 15.3 信标 GwSpecific 域格式](contents/15 Beaconing[Class B option
    * 15.4 信标准确的时隙](contents/15 Beaconing[Class B option
    * 15.5 网络下行链路路由更新要求](contents/15 Beaconing[Class B option
* [第16章 Class B单播/多播下行信道频率](contents/ch16/README.md)
    * 16.1 欧盟 863-870MHz ISM 频段
    * 16.2 美国 902-928MHz ISM 频段



**[CLASS C - CONTINUOUSLY LISTENING 持续接收](contents/CLASS-C.md)**

* [第17章 持续接收的终端](contents/ch17/README.md)
    * 17.1 Class C 的第二接收窗口持续时间
    * 17.2 Class C 对多播下行的处理


