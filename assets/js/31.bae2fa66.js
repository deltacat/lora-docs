(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{391:function(t,a,Q){"use strict";Q.r(a);var _=Q(42),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,Q=t._self._c||a;return Q("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[Q("h1",{attrs:{id:"第15章-信标（class-b选项"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#第15章-信标（class-b选项"}},[t._v("#")]),t._v(" 第15章 信标（Class B选项)")]),t._v(" "),Q("h2",{attrs:{id:"_15-1-信标物理层"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_15-1-信标物理层"}},[t._v("#")]),t._v(" 15.1 信标物理层")]),t._v(" "),Q("p",[t._v("除了在终端设备和网络服务器之间中继消息外，网关还可以通过以固定时间间隔发送信标来参与提供时间同步机制。所有信标都以无线包隐式模式传输，没有 LoRa 物理标头，也没有无线附加 CRC。")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("PHY")])]),t._v(" "),Q("td",[t._v("Preamble")]),t._v(" "),Q("td",[t._v("BCNPayload")])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("图59. beacon physical format")]),t._v(" "),Q("p",[t._v("信标的 "),Q("strong",[t._v("Preamble")]),t._v(" 开始于(长于默认)10个未调制符号。这允许终端实现低功耗占空比信标搜索。信标前导码应以 10 个未调制符号开始（比默认值长）。这使得终端设备能够实现低功耗的已占空比信标搜索。")]),t._v(" "),Q("p",[t._v("信标帧长度与无线电物理层的操作紧密耦合。因此，实际的帧长度和内容可能会从一个区域实现更改到另一个区域实现。每个区域的信标内容、调制参数和使用频率在 [PHY-DOC] 中指定。")]),t._v(" "),Q("h2",{attrs:{id:"_15-2-信标帧内容"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_15-2-信标帧内容"}},[t._v("#")]),t._v(" 15.2 信标帧内容")]),t._v(" "),Q("p",[t._v("信标的载荷 "),Q("strong",[t._v("BCNPayload")]),t._v(" 由一个网络公共部分和一个网关的特定部分组成。")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("Size(bytes)")])]),t._v(" "),Q("td",[t._v("2/3")]),t._v(" "),Q("td",[t._v("4")]),t._v(" "),Q("td",[t._v("2")]),t._v(" "),Q("td",[t._v("7")]),t._v(" "),Q("td",[t._v("0/1")]),t._v(" "),Q("td",[t._v("2")])]),t._v(" "),Q("tr",[Q("td",[Q("b",[t._v("BCNPayload")])]),t._v(" "),Q("td",[t._v("RFU")]),t._v(" "),Q("td",[t._v("Time")]),t._v(" "),Q("td",[t._v("CRC")]),t._v(" "),Q("td",[t._v("GwSpecific")]),t._v(" "),Q("td",[t._v("RFU")]),t._v(" "),Q("td",[t._v("CRC")])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("图60. beacon frame content")]),t._v(" "),Q("p",[t._v("2178 公共部分包含一个等于 0 的 RFU 字段，一个从1980年1月6日星期日00:00:00（GPS纪元的起始时间）开始以秒为单位的时间戳取模 2^32。信标网络公共部分的完整性由16位CRC保护。 16 位 CRC 按照 IEEE 802.15.4-2003 第 7.2.1.8 节的定义的使用 RFU+Time 字段进行计算。这个CRC使用以下多项式 "),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26.496ex",height:"2.452ex",viewBox:"0 -833.9 11711.2 1083.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"50",d:"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(751, 0)"}},[Q("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1140, 0)"}},[Q("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(1712, 0)"}},[Q("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(2378.8, 0)"}},[Q("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(3434.6, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(572, 363) scale(0.707)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",transform:"translate(500, 0)"}})])])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(4985.9, 0)"}},[Q("path",{attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(5986.1, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(572, 363) scale(0.707)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",transform:"translate(500, 0)"}})])])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(7537.4, 0)"}},[Q("path",{attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(8537.7, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(9735.4, 0)"}},[Q("path",{attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(10735.7, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}})])])])])])]),t._v("。CRC是根据字节在空中发送的顺序计算的。")],1),t._v(" "),Q("p",[t._v("例如：这是一个有效的 EU868 信标帧:")]),t._v(" "),Q("p",[Q("code",[t._v("00 00 | 00 00 02 CC | A2 7E | 00 | 01 20 00 | 00 81 03 | DE 55")])]),t._v(" "),Q("p",[t._v("字节是从左向右进行传送。第一个 CRC 对 [00 00 00 00 02 CC] 进行计算。相对应字段的值是：")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("Field")])]),t._v(" "),Q("td",[t._v("RFU")]),t._v(" "),Q("td",[t._v("Time")]),t._v(" "),Q("td",[Q("b",[t._v("CRC")])]),t._v(" "),Q("td",[t._v("InfoDesc")]),t._v(" "),Q("td",[t._v("lat")]),t._v(" "),Q("td",[t._v("long")]),t._v(" "),Q("td",[Q("b",[t._v("CRC")])])]),t._v(" "),Q("tr",[Q("td",[Q("b",[t._v("Value Hex")])]),t._v(" "),Q("td",[t._v("0000")]),t._v(" "),Q("td",[t._v("CC020000")]),t._v(" "),Q("td",[t._v("7EA2")]),t._v(" "),Q("td",[t._v("0")]),t._v(" "),Q("td",[t._v("002001")]),t._v(" "),Q("td",[t._v("038100")]),t._v(" "),Q("td",[t._v("55DE")])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("图61. example of beacon CRC calculation (1)")]),t._v(" "),Q("p",[t._v("网络的特定部分提供网关发送一个信标的额外信息，对于每个网关可能不同。当RFU字段适用时（区域特定）应该等于0。可选部分由 GwSpecific+RFU 字段计算出的 CRC-16 校验码进行保护。CRC-16 的定义与强制部分相同。")]),t._v(" "),Q("p",[t._v("例如：这是一个有效的 美国900 信标")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("Field")])]),t._v(" "),Q("td",[t._v("RFU")]),t._v(" "),Q("td",[t._v("Time")]),t._v(" "),Q("td",[Q("b",[t._v("CRC")])]),t._v(" "),Q("td",[t._v("InfoDesc")]),t._v(" "),Q("td",[t._v("lat")]),t._v(" "),Q("td",[t._v("long")]),t._v(" "),Q("td",[Q("b",[t._v("RFU")])]),t._v(" "),Q("td",[Q("b",[t._v("CRC")])])]),t._v(" "),Q("tr",[Q("td",[Q("b",[t._v("Value Hex")])]),t._v(" "),Q("td",[t._v("000000")]),t._v(" "),Q("td",[t._v("CC020000")]),t._v(" "),Q("td",[Q("b",[t._v("7EA2")])]),t._v(" "),Q("td",[t._v("00")]),t._v(" "),Q("td",[t._v("002001")]),t._v(" "),Q("td",[t._v("038100")]),t._v(" "),Q("td",[Q("b",[t._v("00")])]),t._v(" "),Q("td",[Q("b",[t._v("D450")])])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("图62. example of beacon CRC calculation (2)")]),t._v(" "),Q("p",[t._v("在空中，字节以以下顺序进行发送：")]),t._v(" "),Q("p",[Q("code",[t._v("00 00 00 | 00 00 02 CC | A2 7E | 00 | 01 20 00 | 00 81 03 |00 | 50 D4")])]),t._v(" "),Q("p",[t._v("对网络公共部分的监听和同步足以在 Class B 模式下操作静止终端设备。移动终端设备还可以解调信标的网关特定部分，以便能够在信标从一个单元移动到另一个单元时向网络服务器发出信号。")]),t._v(" "),Q("blockquote",[Q("p",[Q("strong",[t._v("注意：")]),t._v(" 如前所述，所有参与信标过程的网关都同时发送信标，因此对于网络公共部分，即使终端设备同时接收来自多个网关的信标，也不会出现侦听端设备可见的空中冲突。并非所有网关都需要参与信标过程。网关对给定信标的参与可以是随机的。对于网关特定的部分，虽然会发生碰撞，但是在多个网关附近的终端设备仍然有很高的概率能够解码出最强的信标。")])]),t._v(" "),Q("h2",{attrs:{id:"_15-3-信标-gwspecific-字段格式"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_15-3-信标-gwspecific-字段格式"}},[t._v("#")]),t._v(" 15.3 信标 GwSpecific 字段格式")]),t._v(" "),Q("p",[Q("strong",[t._v("GwSpecific")]),t._v("字段的内容如下所述:")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("Size(bytes)")])]),t._v(" "),Q("td",[t._v("1")]),t._v(" "),Q("td",[t._v("6")])]),t._v(" "),Q("tr",[Q("td",[Q("b",[t._v("GwSpecific")])]),t._v(" "),Q("td",[t._v("InfoDesc")]),t._v(" "),Q("td",[t._v("Info")])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("图63. beacon GwSpecific field format")]),t._v(" "),Q("p",[Q("strong",[t._v("InfoDesc")]),t._v("描述符描述了如何解释"),Q("strong",[t._v("Info")]),t._v("字段信息。")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("InfoDesc")])]),t._v(" "),Q("td",[Q("b",[t._v("Meaning")])])]),t._v(" "),Q("tr",[Q("td",[t._v("0")]),t._v(" "),Q("td",[t._v("网关第一天线的GPS坐标")])]),t._v(" "),Q("tr",[Q("td",[t._v("1")]),t._v(" "),Q("td",[t._v("网关第二天线的GPS坐标")])]),t._v(" "),Q("tr",[Q("td",[t._v("2")]),t._v(" "),Q("td",[t._v("网关第三天线的GPS坐标")])]),t._v(" "),Q("tr",[Q("td",[t._v("3:127")]),t._v(" "),Q("td",[t._v("RFU")])]),t._v(" "),Q("tr",[Q("td",[t._v("128:255")]),t._v(" "),Q("td",[t._v("为自定义网络特定广播预留")])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("表21. beacon infoDesc index mapping")]),t._v(" "),Q("p",[t._v("对于一个单一的全向天线网关，当广播GPS坐标时 "),Q("strong",[t._v("InfoDesc")]),t._v(" 的值为0。例如，对于一个具有3扇区电线的站点，第一天线广播信标时 "),Q("strong",[t._v("InfoDesc")]),t._v(" 的值为0，第二天线广播信标时 "),Q("strong",[t._v("InfoDesc")]),t._v(" 的值为1，等等...")]),t._v(" "),Q("h3",{attrs:{id:"_15-3-1-网关gps坐标-infodesc-0，1或者2"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_15-3-1-网关gps坐标-infodesc-0，1或者2"}},[t._v("#")]),t._v(" 15.3.1 网关GPS坐标:InfoDesc = 0，1或者2")]),t._v(" "),Q("p",[t._v("对于 "),Q("strong",[t._v("InfoDesc")]),t._v(" = 0，1 或 2，"),Q("strong",[t._v("Info")]),t._v(" 字段所包含的内容编码了天线广播信标的 GPS 坐标")]),t._v(" "),Q("table",{staticClass:"lora-table"},[Q("tr",[Q("td",[Q("b",[t._v("Size(bytes)")])]),t._v(" "),Q("td",[t._v("3")]),t._v(" "),Q("td",[t._v("3")])]),t._v(" "),Q("tr",[Q("td",[Q("b",[t._v("Info")])]),t._v(" "),Q("td",[t._v("Lat")]),t._v(" "),Q("td",[t._v("Lng")])])]),t._v(" "),Q("i",{staticClass:"lora-table-name"},[t._v("图64. beacon Info field format")]),t._v(" "),Q("p",[t._v("纬度和经度字段（分别对应于"),Q("strong",[t._v("Lat")]),t._v("和"),Q("strong",[t._v("Lng")]),t._v("）编码了网关的地理位置，如下:")]),t._v(" "),Q("ul",[Q("li",[t._v("南北纬度使用二进制补码24位字来进行编码，-2^23 对应于南90°(南极点)，2^23 -1 对应于北90°（北极点）。赤道对应于0。")]),t._v(" "),Q("li",[t._v("东西经度使用二进制补码24位字来进行编码，-2^23 对应于西180°，2^23 -1 对应于东180°。格林尼治子午线对应于0。")])]),t._v(" "),Q("h2",{attrs:{id:"_15-4-信标精确定时"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_15-4-信标精确定时"}},[t._v("#")]),t._v(" 15.4 信标精确定时")]),t._v(" "),Q("p",[t._v("信标从1980年1月5日（星期日）00时00分至1月6日（星期一）00时00分（GPS纪元开始）每128秒发送一次，加上 TBeaconDelay（信标延迟）。因此信标在 GPS 纪元之后的")]),t._v(" "),Q("p",[t._v("BT = k × 128 + TBeaconDelay")]),t._v(" "),Q("p",[t._v("秒后被发送，")]),t._v(" "),Q("p",[t._v("其中 "),Q("em",[t._v("k")]),t._v(" 是满足此条件的最小整数：")]),t._v(" "),Q("p",[t._v("k × 128 ＞ T")]),t._v(" "),Q("p",[t._v("其中：")]),t._v(" "),Q("p",[t._v("T = seconds since 00:00:00, Sunday 5th 2243 of January 1980 (start of the GPS time).")]),t._v(" "),Q("blockquote",[Q("p",[Q("strong",[t._v("注意")]),t._v(": T 是 GPS 时间而不像是 Unix 时间，T 是严格单调递增的并且不受闰秒的影响。")])]),t._v(" "),Q("p",[t._v("其中 TBeaconDelay 为1.5 mSec +/- 1uSec 的延迟。")]),t._v(" "),Q("p",[t._v("TBeaconDelay 是指允许无线系统从接收模式切换到传输模式所需的网关的轻微传输延迟。")]),t._v(" "),Q("p",[t._v("所有的终端设备 ping slots 都使用信标传输开始时间作为定时参考，因此网络服务器在调度 Class B 下行通讯时要将 TBeaconDelay 纳入考量。")]),t._v(" "),Q("h2",{attrs:{id:"_15-5-网络下行路由更新要求"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_15-5-网络下行路由更新要求"}},[t._v("#")]),t._v(" 15.5 网络下行路由更新要求")]),t._v(" "),Q("p",[t._v("当网络试图使用 Class B 下行时隙去与终端进行通信时，当网络接收到最后一个上行数据帧之后，它会从最接近终端的一个网关进行下行数据发送。因此网络服务器需要追踪每个 Class B 终端的粗略位置。")]),t._v(" "),Q("p",[t._v("只要一个 Class B 终端移动并且改变所处单元，它需要告知服务器以更新下行路由。可以通过发送“confirmed”类型或者“unconfirmed”类型的上行数据帧来完成更新，可能没有应用载荷。")]),t._v(" "),Q("p",[t._v("终端可以在2个基础策略之间做出选择:")]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("系统周期上行")]),t._v("：最简单的方式，不需要解调信标的“网关特定”字段。仅适用于缓慢移动或静止的终端设备。对那些周期性上行通讯没有要求。")]),t._v(" "),Q("li",[Q("strong",[t._v("单元更改时的上行")]),t._v("：终端设备解调信标的“网关特定”字段，检测到广播解调信标的网关的 ID 已更改，并发送上行通讯。在这种情况下，设备应（SHALL）遵循信标解调和上行传输之间[0:120]秒范围内的伪随机延迟。这是为了确保多个 Class B 设备在同一信标周期内进入或离开一个单元的上行通讯不会在信标广播后立即系统系统性地同时发生。")])]),t._v(" "),Q("p",[t._v("未能报告单元更改将导致Class B 下行通讯暂时无法进行。网络服务器可能不得不等待下一个终端设备上行通讯来传输下行流量。")])])}),[],!1,null,null,null);a.default=v.exports}}]);