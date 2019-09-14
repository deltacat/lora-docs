# Building Lora Server & App Server

> Author: deltacat
> Date: 2019.7.9

[官网：www.loraserver.io](https://www.loraserver.io)

因为需要二次开发而不是直接使用，因此没有使用二进制包而是从源码开始逐步编译。

## macOS

### 前置需求

#### GoLang 

（基本安装步骤略）

##### 安装 go-binddata

MacOS

```bash
go get -u github.com/jteeuwen/go-bindata/...
```

#### 安装 postgres

```bash
brew install postgres
brew services start postgresql
```

#### 安装 mqtt 服务

安装 mosquitto

```bash
 brew install mosquitto
```
 
 启动
 
- To have launchd start mosquitto now and restart at login:

```bash
brew services start mosquitto
```

- Or, if you don't want/need a background service you can just run:

```bash
mosquitto -c /usr/local/etc/mosquitto/mosquitto.conf
```

#### 其他

- git
- redis
- nodejs

### Lora Server

#### 下载代码

```bash
git@github.com:brocaar/loraserver.git
```

#### 建立专属数据库

以默认用户 psql启动命令行

```bash
psql -d postgres
```

psql 命令行下建立数据库

```bash
-- create the loraserver_ns user with password 'dbpassword'
create role loraserver_ns with login password 'dbpassword';

-- create the loraserver_ns database
create database loraserver_ns with owner loraserver_ns;

-- exit the prompt
\q
```

测试

```
psql -h localhost -U loraserver_ns -W loraserver_ns
```


#### 编译启动 lora server


```bash
make build
make serve
```

### Lora App Server

#### 代码下载

```bash
git@github.com:brocaar/lora-app-server.git
```

#### Nodejs 环境

（详细步骤略）

注意：目前 lora-server v3 版本无法在 node 12.x.x 编译，需切至 node 10.x.x

#### 创建专属数据库

登入 psql 命令行，为 app server 创建数据库。
注意：App Server 数据库不可与 Lora Server 相同

```
-- create the loraserver_as user
create role loraserver_as with login password 'dbpassword';

-- create the loraserver_as database
create database loraserver_as with owner loraserver_as;

-- enable the trigram extension
\c loraserver_as
create extension pg_trgm;

-- exit the prompt
\q
```

测试

```bash
psql -h localhost -U loraserver_as -W loraserver_as
```

##### 配置

App Server 需要[正确配置](https://www.loraserver.io/lora-app-server/install/config/)才可以使用

按示例创建配置文件后，生成随机 secret key 填入 jwt_secret字段。

#### 编译启动 Lora App Server

***注意：需切换至 tag 版本编译方可正确执行***

然后一切准备就绪，执行：

```bash
git checkout v3.0.0
make serve
```

以上全部按默认配置完成并启动后，打开浏览器访问 http://localhost:8080 即可进入 App Server。默认管理员账号 admin/admin。

Done.

## Ubuntu 环境编译

### 前置需求


#### GoLang 

- 下载安装

```bash
# 安装开发者工具包
sudo apt-get install build-essential
# 下载 golang 最新二进制包
wget https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz
# 解压
sudo tar -C /usr/local -xzf go1.12.7.linux-amd64.tar.gz
```

当然也可以用 `
sudo apt-get install golang` 一步到位安装，但是仍然建议从官方下载最新稳定版本手动安装。

- 设置环境变量

```bash
 # /etc/profile
 export GOROOT=/usr/local/go
 export PATH=$PATH:$GOROOT/bin
 
 # ~/.profile
 export GOPATH=~/go 
 export GOBIN=$GOPATH/bin
 export PATH=$PATH:$GOPATH/bin
 ```
 
- Go 版本升级： 

删除旧版本工具包安装目录;下载并安装新版本

- 安装依赖工具

```bash
go get -u github.com/jteeuwen/go-bindata/...
go get -u github.com/golang/protobuf/protoc-gen-go
```

#### 安装 postgres

```bash
sudo apt-get install postgresql
```

#### 安装 mqtt 服务

安装 mosquitto

```
sudo apt-get install mosquitto
sudo service mosquitto status
```

#### 其他

- git
- redis
- nodejs

### Lora Server 和 App Serve 编译安装

建立数据库和编译启动过程与前述相同。不再重复。

## gRPC 和 Protocol Buffer

服务接口消息传递使用 gRPC 协议，数据使用 protocal buffer。详细资料参考：

- [Google Developers](https://developers.google.com/protocol-buffers/)
- [官方仓库](https://github.com/protocolbuffers/protobuf)
- [在 Go 中使用（官网资料）](https://developers.google.com/protocol-buffers/docs/reference/go-generated)

### 快速安装

#### macOS 快速安装：

```bash
brew install protobuf
```

注意 protocal buffer 并非 Go 语言组件。要在 Go 语言中使用，需要[安装支持](https://github.com/golang/protobuf)：

```
go get -u github.com/golang/protobuf/protoc-gen-go
```

#### Ubuntu 安装

建议通过源码安装。

下载源码，可以下载 release src 包，也可以直接下载源码仓库

```bash
git clone https://github.com/protocolbuffers/protobuf.git
cd protobuf
git submodule update --init --recursive
```
注意要确保子模块正确获取。
进入解压后的目录编译安装

```bash
sudo apt-get install autoconf automake libtool curl make g++ unzip
./autogen.sh
./configure
make
make check
sudo make install
sudo ldconfig # refresh shared library cache.
protoc --version
```

注意 protocal buffer 并非 Go 语言组件。要在 Go 语言中使用，需要[安装支持](https://github.com/golang/protobuf)：

```
go get -u github.com/golang/protobuf/protoc-gen-go
```

#### 一些使用参考

- [golang使用protobuf](https://segmentfault.com/a/1190000009277748)

## 虚拟机磁盘空间管理

如果使用虚拟机安装Ubuntu，建议挂载额外硬盘便于空间管理。将编译源代码的目录放在额外挂载的数据盘。

1. 关机，VMWare 虚拟机设置中增加新硬盘
2. 在新硬盘下载各种源码库、编译
3. 建立虚拟硬盘快照前，卸载数据盘

