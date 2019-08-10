## 20 Recommendation on contract to be provided to the Network Server by the end-device provider at the time of provisioning

Configuration data related to the end-device and its characteristics must be known by the Network Server at the time of provisioning. –This provisioned data is called the “contract”. This contract cannot be provided by the end-device and must be supplied by the end-device provider using another channel (out-of-band communication).

This end-device contract is stored in the Network Server. It can be used by the Application Server and the network controller to adapt the algorithms.

This data will include:

- End-device specific radio parameters (device frequency range, device maximal output power, device communication settings - RECEIVE_DELAY1, RECEIVE_DELAY2)
- Application type (Alarm, Metering, Asset Tracking, Supervision, Network Control)

