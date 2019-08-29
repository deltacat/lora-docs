## 8 Introduction to Class B

1866 This section describes the LoRaWAN Class B layer which is optimized for battery-powered end-devices that may be either mobile or mounted at a fixed location.

1868 End-devices should implement Class B operation when there is a requirement to open receive windows at fixed time intervals for the purpose of enabling server initiated downlink messages.

1871 LoRaWAN Class B option adds a synchronized reception window on the end-device.

1872 One of the limitations of LoRaWAN Class A is the Aloha method of sending data from the end-device; it does not allow for a known reaction time when the customer application or the server wants to address the end-device. The purpose of Class B is to have an end-device available for reception at a predictable time, in addition to the reception windows that follows the random uplink transmission from the end-device of Class A. Class B is achieved by having the gateway sending a beacon on a regular basis to synchronize all end-devices in the network so that the end-device can open a short additional reception window (called “ping slot”) at a predictable time during a periodic time slot.

1880 
>**Note**: The decision to switch from Class A to Class B comes from the application layer of the end-device. If this class A to Class B switch needs to be controlled from the network side, the customer application must use one of the end-device’s Class A uplinks to send back a downlink to the application layer, and it needs the application layer on the end-device to recognize this request – this process is not managed at the LoRaWAN level.

## 9 Principle of synchronous network initiated downlink (Class-B option)

1889 For a network to support end-devices of Class B, all gateways must synchronously broadcast a beacon providing a timing reference to the end-devices. Based on this timing reference the end-devices can periodically open receive windows, hereafter called “ping slots”, which can be used by the network infrastructure to initiate a downlink communication. 

1893 A network initiated downlink using one of these ping slots is called a “ping”. The gateway chosen to initiate this downlink communication is selected by the Network Server based on the signal quality indicators of the last uplink of the end-device. For this reason, if an end-device moves and detects a change in the identity advertised in the received beacon, it must send an uplink to the Network Server so that the server can update the downlink routing path database.

1899 Before a device can operate in Class B mode, the following informations must be made available to the Network Server out-of-band.

- The device’s default ping-slot periodicity
- Default Ping-slot data rate
- Default Ping-slot channel

1906 All end-devices start and join the network as end-devices of Class A. The end-device application can then decide to switch to Class B. This is done through the following process:

- The end-device application requests the LoRaWAN layer to switch to Class B mode. The LoRaWAN layer in the end-device searches for a beacon and returns either a BEACON_LOCKED service primitive to the application if a network beacon was found and locked or a BEACON_NOT_FOUND service primitive. To accelerate the beacon discovery the LoRaWAN layer may use the “DeviceTimeReq” MAC command.

- Once in Class B mode, the MAC layer sets to 1 the Class B bit of the FCTRL field of every uplink frame transmitted. This bit signals to the server that the device has switched to Class B. The MAC layer will autonomously schedule a reception slot for each beacon and each ping slot. When the beacon reception is successful the end-device LoRaWAN layer forwards the beacon content to the application together with the measured radio signal strength. The end-device LoRaWAN layer takes into account the maximum possible clock drift in the scheduling of the beacon reception slot and ping slots. When a downlink is successfully demodulated during a ping slot, it is processed similarly to a downlink as described in the LoRaWAN Class A specification. 

- A mobile end-device must periodically inform the Network Server of its location to update the downlink route. This is done by transmitting a normal (possibly empty) “unconfirmed” or “confirmed” uplink. The end-device LoRaWAN layer will appropriately set the Class B bit to 1 in the frame’s FCtrl field. Optimally this can be done more efficiently if the application detects that the node is moving by analyzing the beacon content. In that case the end-device must apply a random delay (as defined in Section 15.5 between the beacon reception and the uplink transmission to avoid systematic uplink collisions.

- At any time the Network Server may change the device’s ping-slot downlink frequency or data rate by sending a PingSlotChannelReq MAC command.

- The device may change the periodicity of its ping-slots at any time. To do so, it MUST temporarily stop class B operation (unset classB bit in its uplink frames) and send a PingSlotInfoReq to the Network Server. Once this command is acknowledged the device may restart classB operation with the new ping-slot periodicity

- If no beacon has been received for a given period (as defined in Section 12.2), the synchronization with the network is lost. The MAC layer must inform the application layer that it has switched back to Class A. As a consequence the end-device LoRaWAN layer stops setting the Class B bit in all uplinks and this informs the Network Server that the end-device is no longer in Class B mode. The end-device application can try to switch back to Class B periodically. This will restart this process starting with a beacon search.

1945 The following diagram illustrates the concept of beacon reception slots and ping slots.

1947 Figure 50: Beacon reception slot and ping slots

1948 In this example, given the beacon period is 128 s, the end-device also opens a ping reception slot every 32 s. Most of the time this ping slot is not used by the server and therefore the end-device reception window is closed as soon as the radio transceiver has assessed that no preamble is present on the radio channel. If a preamble is detected the radio transceiver will stay on until the downlink frame is demodulated. The MAC layer will then process the frame, check that its address field matches the end-device address and that the Message Integrity Check is valid before forwarding it to the application layer.

## 10 Uplink frame in Class B mode
1956 The uplink frames in Class B mode are same as the Class A uplinks with the exception of the RFU bit in the FCtrl field in the Frame header. In the Class A uplink this bit is unused (RFU). This bit is used for Class B uplinks. 

1959
Bit# 7 6 5 4 3..0
FCtrl ADR ADRACKReq ACK Class B FOptsLen

1960 Figure 51 : classB FCtrl fields

1961 The Class B bit set to 1 in an uplink signals the Network Server that the device as switched to Class B mode and is now ready to receive scheduled downlink pings.

The signification of the FPending bit for downlink is unaltered and still signals that one or more downlink frames are queued for this device in the server and that the device should keep is receiver on as described in the Class A specification.

## 11 Downlink Ping frame format (Class B option)

### 11.1 Physical frame format

1970 A downlink Ping uses the same format as a Class A downlink frame but might follow a different channel frequency plan.

### 11.2 Unicast & Multicast MAC messages

1973 Messages can be “unicast” or “multicast”. Unicast messages are sent to a single end-device and multicast messages are sent to multiple end-devices. All devices of a multicast group must share the same multicast address and associated encryption keys. The LoRaWAN Class B specification does not specify means to remotely setup such a multicast group or securely distribute the required multicast key material. This must either be performed during the node personalization or through the application layer.

#### 11.2.1 Unicast MAC message format

1980 The MAC payload of a unicast downlink Ping uses the format defined in the Class A specification. It is processed by the end-device in exactly the same way. The same frame counter is used and incremented whether the downlink uses a Class B ping slot or a Class A “piggy-back” slot.

#### 11.2.2 Multicast MAC message format

1985 The Multicast frames share most of the unicast frame format with a few exceptions:

- They are not allowed to carry MAC commands, neither in the FOpt field, nor in the payload on port 0 because a multicast downlink does not have the same authentication robustness as a unicast frame.

- The ACK and ADRACKReq bits must be zero. The MType field must carry the value for Unconfirmed Data Down.

- The FPending bit indicates there is more multicast data to be sent. If it is set the next multicast receive slot will carry a data frame. If it is not set the next slot may or may not carry data. This bit can be used by end-devices to evaluate priorities for conflicting reception slots.

## 12 Beacon acquisition and tracking

1997 Before switching from Class A to Class B, the end-device must first receive one of the network beacons to align his internal timing reference with the network.

1999 Once in Class B, the end-device must periodically search and receive a network beacon to cancel any drift of its internal clock time base, relative to the network timing.

2001 A Class B device may be temporarily unable to receive beacons (out of range from the network gateways, presence of interference, ..). In this event, the end-device has to gradually widen its beacon and ping slots reception windows to take into account a possible drift of its internal clock.

>**Note:** For example, a device which internal clock is defined with a +/-10ppm precision may drift by +/-1.3mSec every beacon period. 

### 12.1 Minimal beacon-less operation time

2008 In the event of beacon loss, a device shall be capable of maintaining Class B operation for 2 hours (120 minutes) after it received the last beacon. This temporary Class B operation without beacon is called “beacon-less” operation. It relies on the end-device’s own clock to keep timing.

2012 During beacon-less operation, unicast, multicast and beacon reception slots must all be progressively expanded to accommodate the end-device’s possible clock drift.
2014
2015
2016 Figure 52 : beacon-less temporary operation

### 12.2 Extension of beacon-less operation upon reception

2018 During this 120 minutes time interval the reception of any beacon directed to the end-device, should extend the Class B beacon-less operation further by another 120 minutes as it allows to correct any timing drift and reset the receive slots duration.

### 12.3 Minimizing timing drift

2022 The end-devices may use the beacon’s (when available) precise periodicity to calibrate their internal clock and therefore reduce the initial clock frequency imprecision. As the timing oscillator’s exhibit a predictable temperature frequency shift, the use of a temperature sensor could enable further minimization of the timing drift.

## 13 Class B Downlink slot timing

### 13.1 Definitions

2028 To operate successfully in Class B the end-device must open reception slots at precise instants relative to the infrastructure beacon. This section defines the required timing.

2030 The interval between the start of two successive beacons is called the beacon period. The beacon frame transmission is aligned with the beginning of the BEACON_RESERVED interval. Each beacon is preceded by a guard time interval where no ping slot can be placed. The length of the guard interval corresponds to the time on air of the longest allowed frame. This is to insure that a downlink initiated during a ping slot just before the guard time will always have time to complete without colliding with the beacon transmission. The usable time interval for ping slot therefore spans from the end of the beacon reserved time interval to the beginning of the next beacon guard interval.


2039 Figure 53: Beacon timing

Beacon_period 128 s
Beacon_reserved 2.120 s
Beacon_guard 3.000 s
Beacon-window 122.880 s
2040 Table 18: Beacon timing

2041 The beacon frame time on air is actually much shorter than the beacon reserved time interval to allow appending network management broadcast frames in the future.

The beacon window interval is divided into 212 2043 = 4096 ping slots of 30 ms each numbered from 0 to 4095.

2045 An end-device using the slot number N must turn on its receiver exactly Ton seconds after the start of the beacon where:

2047 Ton = beacon_reserved + N * 30 ms

2048 N is called the slot index.

2049 The latest ping slot starts at beacon_reserved + 4095 * 30 ms = 124 970 ms after the beacon start or 3030 ms before the beginning of the next beacon.

### 13.2 Slot randomization

2052 To avoid systematic collisions or over-hearing problems the slot index is randomized and changed at every beacon period.

2054 The following parameters are used:

DevAddr Device 32 bit network unicast or multicast address
pingNb Number of ping slots per beacon period. This must be a power of 2 integer:
pingNb = 2k where 0 <= k <=7
pingPeriod Period of the device receiver wake-up expressed in number of slots:
pingPeriod = 212 / pingNb
pingOffset Randomized offset computed at each beacon period start. Values can range 
from 0 to (pingPeriod-1)
beaconTime The time carried in the field BCNPayload.Time of the immediately preceding 
beacon frame
slotLen Length of a unit ping slot = 30 ms

2056 Table 19 : classB slot randomization algorithm parameters

2057 At each beacon period the end-device and the server compute a new pseudo-random offset to align the reception slots. An AES encryption with a fixed key of all zeros is used to randomize:

2060 Key = 16 x 0x00
2061 Rand = aes128_encrypt(Key, beaconTime | DevAddr | pad16)
2062 pingOffset = (Rand[0] + Rand[1]x 256) modulo pingPeriod

2063 The slots used for this beacon period will be:

2064 pingOffset + N x pingPeriod with N=[0:pingNb-1]

2065 The node therefore opens receive slots starting at :

First slot Beacon_reserved + pingOffset x slotLen
Slot 2 Beacon_reserved + (pingOffset + pingPeriod) x slotLen
Slot 3 Beacon_reserved + (pingOffset + 2 x pingPeriod) x slotLen
… …

2066 If the end-device serves simultaneously a unicast and one or more multicast slots this computation is performed multiple times at the beginning of a new beacon period. Once for the unicast address (the node network address) and once for each multicast group address.

2069 In the case where a multicast ping slot and a unicast ping slot collide and cannot be served by the end-device receiver then the end-device should preferentially listen to the multicast slot. If there is a collision between multicast reception slots the FPending bit of the previous multicast frame can be used to set a preference. 

2073 The randomization scheme prevents a systematic collision between unicast and multicast slots. If collisions happen during a beacon period then it is unlikely to occur again during the next beacon period.

## 14 Class B MAC commands
2077 All commands described in the Class A specification shall be implemented in Class B devices. The Class B specification adds the following MAC commands.

CID Command Transmitted by Short Description
End-device
Gateway
0x10 PingSlotInfoReq x Used by the end-device to communicate 
the ping unicast slot periodicity to the 
Network Server
0x10 PingSlotInfoAns x Used by the network to acknowledge a 
PingInfoSlotReq command
0x11 PingSlotChannelReq x Used by the Network Server to set the 
unicast ping channel of an end-device
0x11 PingSlotChannelAns x Used by the end-device to acknowledge a 
PingSlotChannelReqcommand
0x12 BeaconTimingReq x deprecated
0x12 BeaconTimingAns x deprecated
0x13 BeaconFreqReq x Command used by the Network Server to 
modify the frequency at which the enddevice expects to receive beacon 
broadcast
0x13 BeaconFreqAns x Used by the end-device to acknowledge a 
BeaconFreqReq command


Table 20 : classB MAC command table

### 14.1 PingSlotInfoReq

2082 With the PingSlotInfoReq command an end-device informs the server of its unicast ping slot periodicity. This command must only be used to inform the server of the periodicity of a UNICAST ping slot. A multicast slot is entirely defined by the application and should not use this command.
2086
Size (bytes) 1
PingSlotInfoReq Payload PingSlotParam

*Figure 54 : PingSlotInfoReq payload format*

Bit# 7:3 [2:0]
PingSlotParam RFU Periodicity

2088 The Periodicity subfield is an unsigned 3 bits integer encoding the ping slot period currently used by the end-device using the following equation. 

$$𝑝𝑖𝑛𝑔𝑁𝑏 = 2^(7−𝑃𝑒𝑟𝑖𝑜𝑑𝑖𝑐𝑖𝑡𝑦) 𝑎𝑛𝑑 𝑝𝑖𝑛𝑔𝑃𝑒𝑟𝑖𝑜𝑑 = 2^(5+𝑃𝑒𝑟𝑖𝑜𝑑𝑖𝑐𝑖𝑡𝑦)$$

The actual ping slot periodicity will be equal to 0.96 × 2^𝑃𝑒𝑟𝑖𝑜𝑑𝑖𝑐𝑖𝑡𝑦 in seconds

- Periodicity = 0 means that the end-device opens a ping slot approximately every second during the beacon_window interval
- Periodicity = 7 , every 128 seconds which is the maximum ping period supported by the LoRaWAN Class B specification.

2096 To change its ping slot periodicity a device SHALL first revert to Class A , send the new periodicity through a PingSlotInfoReq command and get an acknowledge from the server through a PingSlotInfoAns . It MAY then switch back to Class B with the new periodicity.

2099 This command MAY be concatenated with any other MAC command in the FHDRFOpt field as described in the Class A specification frame format.


### 14.2 BeaconFreqReq

2102 This command is sent by the server to the end-device to modify the frequency on which this end-device expects the beacon.

2104
Octets 3
BeaconFreqReq payload Frequency

*Figure 55 : BeaconFreqReq payload format*

2106 The Frequency coding is identical to the NewChannelReq MAC command defined in the Class A.

2108 Frequency is a 24bits unsigned integer. The actual beacon channel frequency in Hz is 100 x frequ. This allows defining the beacon channel anywhere between 100 MHz to 1.67 GHz by 100 Hz step. The end-device has to check that the frequency is actually allowed by its radio hardware and return an error otherwise.

2112 A valid non-zero Frequency will force the device to listen to the beacon on a fixed frequency channel even if the default behavior specifies a frequency hopping beacon (i.e US ISM band).

2115 A value of 0 instructs the end-device to use the default beacon frequency plan as defined in the “Beacon physical layer” section. Where applicable the device resumes frequency hopping beacon search.

2118 Upon reception of this command the end-device answers with a BeaconFreqAns message. 

2119 The MAC payload of this message contains the following information:

Size (bytes) 1
BeaconFreqAns payload Status

*Figure 56 : BeaconFreqAns payload format*

2121 The Status bits have the following meaning:

Bits 7:1 0
Status RFU Beacon frequency ok

2122
Bit = 0 Bit = 1
Beacon
frequency ok
The device cannot use this frequency, the 
previous beacon frequency is kept
The beacon frequency 
has been changed


### 14.3 PingSlotChannelReq

2125 This command is sent by the server to the end-device to modify the frequency and/or the data rate on which the end-device expects the downlink pings.

2127 This command can only be sent in a class A receive window (following an uplink). The command SHALL NOT be sent in a class B ping-slot. If the device receives it inside a class B ping-slot, the MAC command SHALL NOT be processed.

2130
Octets 3 1
PingSlotChannelReq Payload Frequency DR

*Figure 57 : PingSlotChannelReq payload format*

2132 The Frequency coding is identical to the NewChannelReq MAC command defined in the Class A.

2134 Frequency is a 24bits unsigned integer. The actual ping channel frequency in Hz is 100 x frequ. This allows defining the ping channel anywhere between 100MHz to 1.67GHz by 100Hz step. The end-device has to check that the frequency is actually allowed by its radiohardware and return an error otherwise.

2138 A value of 0 instructs the end-device to use the default frequency plan.

2139 The DR byte contains the following fields:

2140
Bits 7:4 3:0
DR RFU data rate
2141

2142 The “data rate” subfield is the index of the Data Rate used for the ping-slot downlinks. The relationship between the index and the physical data rate is defined in [PHY] for each region.

2144 Upon reception of this command the end-device answers with a PingSlotFreqAns message. The MAC payload of this message contains the following information:

2146
Size (bytes) 1
pingSlotFreqAns Payload Status

*Figure 58 : PingSlotFreqAns payload format*

2148 The Status bits have the following meaning:

Bits 7:2 1 0
Status RFU Data rate ok Channel frequency ok
2149
Bit = 0 Bit = 1
Data rate ok The designated data rate is 
not defined for this end 
device, the previous data 
rate is kept
The data rate is compatible 
with the possibilities of the 
end device
Channel frequency ok The device cannot receive 
on this frequency 
This frequency can be used 
by the end-device
2150

2152 If either of those 2 bits equals 0, the command did not succeed and the ping-slot parametershave not been modified.


### 14.4 BeaconTimingReq & BeaconTimingAns

2156 These MAC commands are deprecated in the LoRaWAN1.1 version. The device may use DeviceTimeReq&Ans commands as a substitute.


## 15 Beaconing (Class B option)

### 15.1 Beacon physical layer

2161 Besides relaying messages between end-devices and Network Servers, gateways may participate in providing a time-synchronization mechanisms by sending beacons at regular fixed intervals. All beacons are transmitted in radio packet implicit mode, that is, without a LoRa physical header and with no CRC being appended by the radio. 

PHY Preamble BCNPayload

*Figure 59 : beacon physical format*

2167 The beacon Preamble shall begin with (a longer than default) 10 unmodulated symbols. This allows end-devices to implement a low power duty-cycled beacon search.

2169 The beacon frame length is tightly coupled to the operation of the radio Physical layer. Therefore the actual frame length and content might change from one region implementation to another. The beacon content, modulation parameters and frequencies to use are specified in [PHY] for each region.

### 15.2 Beacon frame content

2174 The beacon payload BCNPayload consists of a network common part and a gateway-specific part.

2176
Size (bytes) 2/3 4 2 7 0/1 2
BCNPayload RFU Time CRC GwSpecific RFU CRC

*Figure 60 : beacon frame content*

2178 The common part contains an RFU field equal to 0, a timestamp Time in seconds since 00:00:00, Sunday 6th of January 1980 (start of the GPS epoch) modulo 2^32. The integrityof the beacon’s network common part is protected by a 16 bits CRC . The CRC-16 is computed on the RFU+Time fields as defined in the IEEE 802.15.4-2003 section 7.2.1.8. This CRC uses the following polynomial P(x) = x16+ x12+ x5+ x0 . The CRC is calculated on the bytes in the order they are sent over-the-air

2184 For example: This is a valid EU868 beacon frame:

00 00 | 00 00 02 CC | A2 7E | 00 | 01 20 00 | 00 81 03 | DE 55

2186 Bytes are transmitted left to right. The first CRC is calculated on [00 00 00 00 02 CC]. The corresponding field values are:

Field RFU Time CRC InfoDesc lat long CRC
Value Hex 0000 CC020000 7EA2 0 002001 038100 55DE

*Figure 61 : example of beacon CRC calculation (1)*

2191 The gateway specific part provides additional information regarding the gateway sending a beacon and therefore may differ for each gateway. The RFU field when applicable (region specific) should be equal to 0. The optional part is protected by a CRC-16 computed on the GwSpecific+RFU fields. The CRC-16 definition is the same as for the mandatory part.

2195 For example: This is a valid US900 beacon:

Field RFU Time CRC InfoDesc lat long RFU CRC
Value Hex 000000 CC020000 7E A2 00 002001 038100 00 D450

*Figure 62 : example of beacon CRC calculation (2)*

2197 Over the air the bytes are sent in the following order:

00 00 00 | 00 00 02 CC | A2 7E | 00 | 01 20 00 | 00 81 03 |00 | 50 D4

2199 Listening and synchronizing to the network common part is sufficient to operate a stationary end-device in Class B mode. A mobile end-device may also demodulate the gateway specific part of the beacon to be able to signal to the Network Server whenever he is moving from one cell to another.

>**Note:** As mentioned before, all gateways participating in the beaconing process send their beacon simultaneously so that for network common part there are no visible on-air collisions for a listening end-device even if the end-device simultaneously receives beacons from several gateways. Not all gateways are required to participate in the beaconing process. The participation of a gateway to a given beacon may be randomized. With respect to the gateway specific part, collision occurs but an end-device within the proximity of more than one gateway will still be able to decode the strongest beacon with high probability.

### 15.3 Beacon GwSpecific field format

2213 The content of the GwSpecific field is as follow:

Size (bytes) 1 6
GwSpecific InfoDesc Info

*Figure 63 : beacon GwSpecific field format*

2215 The information descriptor InfoDesc describes how the information field Info shall be interpreted. 

InfoDesc Meaning
0 GPS coordinate of the gateway first 
antenna
1 GPS coordinate of the gateway second 
antenna
2 GPS coordinate of the gateway third 
antenna
3:127 RFU
128:255 Reserved for custom network specific 
broadcasts

*Table 21 : beacon infoDesc index mapping*

2219 For a single omnidirectional antenna gateway the InfoDesc value is 0 when broadcasting GPS coordinates. For a site featuring 3 sectored antennas for example, the first antenna broadcasts the beacon with InfoDesc equals 0, the second antenna with InfoDesc field equals 1, etc.

#### 15.3.1 Gateway GPS coordinate:InfoDesc = 0, 1 or 2

2224 For InfoDesc = 0 ,1 or 2, the content of the Info field encodes the GPS coordinates of the antenna broadcasting the beacon

Size (bytes) 3 3
Info Lat Lng

*Figure 64 : beacon Info field format*

2227 The latitude and longitude fields (Lat and Lng, respectively) encode the geographical location of the gateway as follows:

- The north-south latitude is encoded using a two’s complement 24 bit word where -2^23 corresponds to 90° south (the South Pole) and 223 2230 -1 corresponds to ~90° north (the North Pole). The Equator corresponds to 0.
- The east-west longitude is encoded using a two’s complement 24 bit word where - 2^23 corresponds to 180° West and 223 2233 -1 corresponds to ~180° East. The Greenwich meridian corresponds to 0.

### 15.4 Beaconing precise timing

2236 The beacon is sent every 128 seconds starting at 00:00:00, Sunday 5th – Monday 6th of January 1980 (start of the GPS epoch) plus TBeaconDelay. Therefore the beacon is sent at

BT = k * 128 + TBeaconDelay

2239 seconds after the GPS epoch.

2240 wherebyk is the smallest integer for which

k * 128 >T

2242 whereby

T = seconds since 00:00:00, Sunday 5th 2243 of January 1980 (start of the GPS time).

>**Note:** T is GPS time and unlike Unix time, T is strictly monotonically increasing and is not influenced by leap seconds.


2247 Whereby TBeaconDelay is 1.5 mSec +/- 1uSec delay.

2248 TBeaconDelay is meant to allow a slight transmission delay of the gateways required by the radio system to switch from receive to transmit mode.

2250 All end-devices ping slots use the beacon transmission start time as a timing reference, therefore the Network Server as to take TBeaconDelay into account when scheduling the class B downlinks.

### 15.5 Network downlink route update requirements

2255 When the network attempts to communicate with an end-device using a Class B downlink slot, it transmits the downlink from the gateway which was closest to the end-device when the last uplink was received. Therefore the Network Server needs to keep track of the rough position of every Class B device.

2259 Whenever a Class B device moves and changes cell, it needs to communicate with the Network Server in order to update its downlink route. This update can be performed simply by sending a “confirmed” or “unconfirmed” uplink, possibly without applicative payload. 

2262 The end-device has the choice between 2 basic strategies:

- Systematic periodic uplink: simplest method that doesn’t require demodulation of the “gateway specific” field of the beacon. Only applicable to slowly moving or stationery end-devices. There are no requirements on those periodic uplinks.
- Uplink on cell change: The end-device demodulates the “gateway specific” field of the beacon, detects that the ID of the gateway broadcasting the beacon it demodulates has changed, and sends an uplink. In that case the device SHALL respect a pseudo random delay in the [0:120] seconds range between the beacon demodulation and the uplink transmission. This is required to insure that the uplinks of multiple Class B devices entering or leaving a cell during the same beacon period will not systematically occur at the same time immediately after the beacon broadcast.

2274 Failure to report cell change will result in Class B downlink being temporary not operational. The Network Server may have to wait for the next end-device uplink to transmit downlink traffic.

## 16 Class B unicast & multicast downlink channel frequencies

2280 The class B downlink channel selection mechanism depends on the way the class B beacon is being broadcasted.

### 16.1 Single channel beacon transmission

2283 In certain regions (ex EU868) the beacon is transmitted on a single channel. In that case,all unicast&multicastClass B downlinks use a single frequency channel defined by the “PingSlotChannelReq” MAC command. The default frequency is defined in [PHY].

### 16.2 Frequency-hopping beacon transmission

2287 In certain regions (ex US902-928 or CN470-510) the class B beacon is transmitted following a frequency hopping pattern.

2289 In that case, by default Class B downlinks use a channel which is a function of the Time field of the last beacon (see Beacon Frame content) and the DevAddr.

Class B downlink channel = [DevAddr + floor (
Beacon_Time
Beacon_period 2291 )] modulo NbChannel

- Whereby Beacon_Time is the 32 bit Time field of the current beacon period
- Beacon_period is the length of the beacon period (defined as 128sec in the specification)
- Floor designates rounding to the immediately lower integer value
- DevAddr is the 32 bits network address of the device
- NbChannel is the number of channel over which the beacon is frequency hopping

2298 Class B downlinks therefore hop across NbChannel channels (identical to the beacon transmission channels) in the ISM band and all Class B end-devices are equally spread amongst the NbChannel downlink channels. 

2301 If the “PingSlotChannelReq” command with a valid non-zero argument is used to set the Class B downlink frequency then all subsequent ping slots should be opened on this single frequency independently of the last beacon frequency.

2304 If the “PingSlotChannelReq” command with a zero argument is sent, the end-device should resume the default frequency plan, id Class B ping slots hoping across 8 channels.

2306 The underlying idea is to allow network operators to configure end-devices to use a single proprietary dedicated frequency band for the Class B downlinks if available, and to keep as much frequency diversity as possible when the ISM band is used.

