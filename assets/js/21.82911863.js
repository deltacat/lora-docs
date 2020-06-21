(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{375:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"building-lora-server-app-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-lora-server-app-server"}},[s._v("#")]),s._v(" Building Lora Server & App Server")]),s._v(" "),t("blockquote",[t("p",[s._v("Author: deltacat\nDate: 2019.7.9")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.loraserver.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网：www.loraserver.io"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("因为需要二次开发而不是直接使用，因此没有使用二进制包而是从源码开始逐步编译。")]),s._v(" "),t("h2",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" macOS")]),s._v(" "),t("h3",{attrs:{id:"前置需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置需求"}},[s._v("#")]),s._v(" 前置需求")]),s._v(" "),t("h4",{attrs:{id:"golang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang"}},[s._v("#")]),s._v(" GoLang")]),s._v(" "),t("p",[s._v("（基本安装步骤略）")]),s._v(" "),t("h5",{attrs:{id:"安装-go-binddata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-go-binddata"}},[s._v("#")]),s._v(" 安装 go-binddata")]),s._v(" "),t("p",[s._v("MacOS")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("go get -u github.com/jteeuwen/go-bindata/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"安装-postgres"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-postgres"}},[s._v("#")]),s._v(" 安装 postgres")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgres\nbrew services start postgresql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"安装-mqtt-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mqtt-服务"}},[s._v("#")]),s._v(" 安装 mqtt 服务")]),s._v(" "),t("p",[s._v("安装 mosquitto")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mosquitto\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动")]),s._v(" "),t("ul",[t("li",[s._v("To have launchd start mosquitto now and restart at login:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew services start mosquitto\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Or, if you don't want/need a background service you can just run:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mosquitto -c /usr/local/etc/mosquitto/mosquitto.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("ul",[t("li",[s._v("git")]),s._v(" "),t("li",[s._v("redis")]),s._v(" "),t("li",[s._v("nodejs")])]),s._v(" "),t("h3",{attrs:{id:"lora-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lora-server"}},[s._v("#")]),s._v(" Lora Server")]),s._v(" "),t("h4",{attrs:{id:"下载代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载代码"}},[s._v("#")]),s._v(" 下载代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("git@github.com:brocaar/loraserver.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"建立专属数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立专属数据库"}},[s._v("#")]),s._v(" 建立专属数据库")]),s._v(" "),t("p",[s._v("以默认用户 psql启动命令行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("psql -d postgres\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("psql 命令行下建立数据库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-- create the loraserver_ns user with password "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dbpassword'")]),s._v("\ncreate role loraserver_ns with login password "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dbpassword'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n-- create the loraserver_ns database\ncreate database loraserver_ns with owner loraserver_ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n-- "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" the prompt\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("q\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("测试")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("psql -h localhost -U loraserver_ns -W loraserver_ns\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"编译启动-lora-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译启动-lora-server"}},[s._v("#")]),s._v(" 编译启动 lora server")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" build\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" serve\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"lora-app-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lora-app-server"}},[s._v("#")]),s._v(" Lora App Server")]),s._v(" "),t("h4",{attrs:{id:"代码下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码下载"}},[s._v("#")]),s._v(" 代码下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("git@github.com:brocaar/lora-app-server.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"nodejs-环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-环境"}},[s._v("#")]),s._v(" Nodejs 环境")]),s._v(" "),t("p",[s._v("（详细步骤略）")]),s._v(" "),t("p",[s._v("注意：目前 lora-server v3 版本无法在 node 12.x.x 编译，需切至 node 10.x.x")]),s._v(" "),t("h4",{attrs:{id:"创建专属数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建专属数据库"}},[s._v("#")]),s._v(" 创建专属数据库")]),s._v(" "),t("p",[s._v("登入 psql 命令行，为 app server 创建数据库。\n注意：App Server 数据库不可与 Lora Server 相同")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-- create the loraserver_as user\ncreate role loraserver_as with login password 'dbpassword';\n\n-- create the loraserver_as database\ncreate database loraserver_as with owner loraserver_as;\n\n-- enable the trigram extension\n\\c loraserver_as\ncreate extension pg_trgm;\n\n-- exit the prompt\n\\q\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("测试")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("psql -h localhost -U loraserver_as -W loraserver_as\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("App Server 需要"),t("a",{attrs:{href:"https://www.loraserver.io/lora-app-server/install/config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("正确配置"),t("OutboundLink")],1),s._v("才可以使用")]),s._v(" "),t("p",[s._v("按示例创建配置文件后，生成随机 secret key 填入 jwt_secret字段。")]),s._v(" "),t("h4",{attrs:{id:"编译启动-lora-app-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译启动-lora-app-server"}},[s._v("#")]),s._v(" 编译启动 Lora App Server")]),s._v(" "),t("p",[t("em",[t("strong",[s._v("注意：需切换至 tag 版本编译方可正确执行")])])]),s._v(" "),t("p",[s._v("然后一切准备就绪，执行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v3.0.0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" serve\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("以上全部按默认配置完成并启动后，打开浏览器访问 http://localhost:8080 即可进入 App Server。默认管理员账号 admin/admin。")]),s._v(" "),t("p",[s._v("Done.")]),s._v(" "),t("h2",{attrs:{id:"ubuntu-环境编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-环境编译"}},[s._v("#")]),s._v(" Ubuntu 环境编译")]),s._v(" "),t("h3",{attrs:{id:"前置需求-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置需求-2"}},[s._v("#")]),s._v(" 前置需求")]),s._v(" "),t("h4",{attrs:{id:"golang-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang-2"}},[s._v("#")]),s._v(" GoLang")]),s._v(" "),t("ul",[t("li",[s._v("下载安装")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装开发者工具包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载 golang 最新二进制包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -C /usr/local -xzf go1.12.7.linux-amd64.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("当然也可以用 "),t("code",[s._v("sudo apt-get install golang")]),s._v(" 一步到位安装，但是仍然建议从官方下载最新稳定版本手动安装。")]),s._v(" "),t("ul",[t("li",[s._v("设置环境变量")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/profile")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v("/bin\n \n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ~/.profile")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/go \n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOBIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("Go 版本升级：")])]),s._v(" "),t("p",[s._v("删除旧版本工具包安装目录;下载并安装新版本")]),s._v(" "),t("ul",[t("li",[s._v("安装依赖工具")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("go get -u github.com/jteeuwen/go-bindata/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ngo get -u github.com/golang/protobuf/protoc-gen-go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"安装-postgres-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-postgres-2"}},[s._v("#")]),s._v(" 安装 postgres")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"安装-mqtt-服务-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mqtt-服务-2"}},[s._v("#")]),s._v(" 安装 mqtt 服务")]),s._v(" "),t("p",[s._v("安装 mosquitto")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get install mosquitto\nsudo service mosquitto status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"其他-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他-2"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("ul",[t("li",[s._v("git")]),s._v(" "),t("li",[s._v("redis")]),s._v(" "),t("li",[s._v("nodejs")])]),s._v(" "),t("h3",{attrs:{id:"lora-server-和-app-serve-编译安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lora-server-和-app-serve-编译安装"}},[s._v("#")]),s._v(" Lora Server 和 App Serve 编译安装")]),s._v(" "),t("p",[s._v("建立数据库和编译启动过程与前述相同。不再重复。")]),s._v(" "),t("h2",{attrs:{id:"grpc-和-protocol-buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grpc-和-protocol-buffer"}},[s._v("#")]),s._v(" gRPC 和 Protocol Buffer")]),s._v(" "),t("p",[s._v("服务接口消息传递使用 gRPC 协议，数据使用 protocal buffer。详细资料参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Google Developers"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方仓库"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 Go 中使用（官网资料）"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"快速安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速安装"}},[s._v("#")]),s._v(" 快速安装")]),s._v(" "),t("h4",{attrs:{id:"macos-快速安装："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-快速安装："}},[s._v("#")]),s._v(" macOS 快速安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" protobuf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意 protocal buffer 并非 Go 语言组件。要在 Go 语言中使用，需要"),t("a",{attrs:{href:"https://github.com/golang/protobuf",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装支持"),t("OutboundLink")],1),s._v("：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("go get -u github.com/golang/protobuf/protoc-gen-go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"ubuntu-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装"}},[s._v("#")]),s._v(" Ubuntu 安装")]),s._v(" "),t("p",[s._v("建议通过源码安装。")]),s._v(" "),t("p",[s._v("下载源码，可以下载 release src 包，也可以直接下载源码仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/protocolbuffers/protobuf.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" protobuf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --init --recursive\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("注意要确保子模块正确获取。\n进入解压后的目录编译安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autoconf automake libtool "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" g++ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\n./autogen.sh\n./configure\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" check\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ldconfig "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# refresh shared library cache.")]),s._v("\nprotoc --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("注意 protocal buffer 并非 Go 语言组件。要在 Go 语言中使用，需要"),t("a",{attrs:{href:"https://github.com/golang/protobuf",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装支持"),t("OutboundLink")],1),s._v("：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("go get -u github.com/golang/protobuf/protoc-gen-go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"一些使用参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些使用参考"}},[s._v("#")]),s._v(" 一些使用参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009277748",target:"_blank",rel:"noopener noreferrer"}},[s._v("golang使用protobuf"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"虚拟机磁盘空间管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机磁盘空间管理"}},[s._v("#")]),s._v(" 虚拟机磁盘空间管理")]),s._v(" "),t("p",[s._v("如果使用虚拟机安装Ubuntu，建议挂载额外硬盘便于空间管理。将编译源代码的目录放在额外挂载的数据盘。")]),s._v(" "),t("ol",[t("li",[s._v("关机，VMWare 虚拟机设置中增加新硬盘")]),s._v(" "),t("li",[s._v("在新硬盘下载各种源码库、编译")]),s._v(" "),t("li",[s._v("建立虚拟硬盘快照前，卸载数据盘")])])])}),[],!1,null,null,null);a.default=r.exports}}]);