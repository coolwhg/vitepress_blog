# 部署与启动

## 一、Node-RED 运行机制

Node-RED 的架构基于 `Node.js` 的事件驱动模型，核心由​运行时（`Runtime`）​、编辑器（`Editor`）和节点（`Nodes`）三部分组成，三者协同实现可视化流程编程与执行。​

1. 运行时（ `Runtime` ）：流程执行的 “大脑”​

   - ​核心功能​：负责加载节点、解析流程配置、管理节点间消息传递、处理事件触发，是流程运行的核心引擎。​
   - ​技术细节​：​  
     - 基于 Node.js 的EventEmitter模块实现事件监听与触发，确保消息处理的高效性与非阻塞性。​
     - 采用 “流（`Flow`）” 作为流程的基本单位，每个流由多个节点和连接构成，运行时通过解析 JSON 格式的流配置文件，将节点实例化并建立消息路由。​
     - 支持多流并行运行，不同流之间可通过 “链接节点（`Link Node`）” 或全局上下文（`Context`）实现数据交互。​

   - ​消息模型​：​
     - 节点间传递的消息为 `msg` 对象，默认包含 `msg.payload`（消息内容）和 `msg.topic`（消息主题），用户可自定义添加其他属性（如 `msg.timestamp`、`msg.source`）。​
     - 消息传递支持 “一对一”“一对多”“多对一” 模式，例如一个 “注入节点” 可同时向多个 “函数节点” 发送消息。​

2. 编辑器（ `Editor` ）：可视化开发的 “画布”​

   - ​核心功能​：提供基于浏览器的可视化界面，支持节点拖拽、连接配置、流程保存与部署，是用户与 Node-RED 交互的主要入口。​

   - ​技术细节​：​
     - 编辑器与运行时通过 `WebSocket` 协议实时通信，实现 “部署即生效”：用户点击 “部署” 后，编辑器将流程配置 JSON 发送至运行时，运行时即时更新并执行流程，无需重启服务。​
     - 支持 “工作区（ `Workspace` ）” 分区，可通过标签页切换不同流程，方便大型项目的模块化管理。​

3. 节点（ `Nodes` ）：流程功能的 “积木”​

   - ​核心定位​：节点是封装特定功能的代码模块，是流程的基本功能单元，用户通过组合节点实现业务逻辑。​

   - ​结构组成​：每个节点包含`html`（编辑器配置界面）、`js`（运行时逻辑）和`package.json`（元数据）三部分：​
     - `html`文件：定义节点在编辑器中的外观（图标、颜色）、配置项（如 API 密钥、端口号），通过`RED.nodes.registerType`注册节点类型。​
     - `js`文件：实现节点的运行时逻辑，包括`on("input")`（接收输入消息触发）、`send()`（发送输出消息）等核心方法。​
     - `package.json`：声明节点名称、版本、依赖（如`mqtt`库）、兼容的 Node-RED 版本等信息。

## 二、安装Node-Red

### 2.1 安装NVM

这里以Linux系统为例，推荐使用`NVM`安装NodeJS，方便后续管理

```bash
bash -c "$(curl -fsSL https://gitee.com/RubyMetric/nvm-cn/raw/main/install.sh)"
source ~/.nvm/nvm.sh
```

### 2.2 安装NodeJS

```bash
nvm install v22.16.0
```

### 2.3 安装Node-Red

```bash
npm install -g --unsafe-perm node-red
```

### 2.4 Node-Red的自启动

```bash
npm install -g pm2
pm2 start node-red --node-args="--max-old-space-size=1024"  #根据实际内存自行调整
pm2 save
pm2 startup
```

## 三、Node-Red的启动参数

### 3.1 启动命令

```bash
node-red [-v] [-?] [--settings settings.js] [--userDir DIR]
         [--port PORT] [--title TITLE] [--safe] [flows.json|projectName]
         [-D X=Y|@file]
```

### 3.2 参数说明

- `-p, --port PORT`：设置运行时监听的 TCP 端口。默认值： `1880`
- `--safe`：启动 Node-RED 但不启动流程。当部署更改时，流程才会启动
- `-s, --settings FILE`：设置要使用的配置文件。默认： `settings.js`在 `userDir`中
- `--title TITLE`：设置进程窗口标题
- `-u, --userDir DIR`：设置要使用的用户目录。默认： `~/.node-red`
- `-v`：启用详细输出
- `-D X=Y|@file`：覆盖单个设置
- `flows.json|projectName`：如果项目功能未启用，这将设置您要与之工作的流程文件。如果项目功能已启用，这将确定应启动哪个项目。
- `-?, --help`：显示命令行使用帮助并退出

### 3.3 参数示例

#### 3.1 启用详细输出

- ​参数作用​：启动 Node-RED 时输出详细日志（如模块加载、配置读取等过程），用于调试问题。
- ​命令示例​：
  
  ```bash
  node-red -v
  ```

- ​场景说明​：当 Node-RED 启动失败（如插件报错、端口占用）时，通过 `-v`查看详细日志，快速定位问题原因（例如 “某个节点模块缺失”“配置文件语法错误”）。

#### 3.2 显示帮助信息

- ​参数作用​：输出所有命令行参数的用法说明，无需启动 Node-RED，仅用于查询参数。
- ​命令示例​（两种写法均可）：

  ```bash
  # 写法1：短参数 -?
  node-red -?
  # 写法2：长参数 --help
  node-red --help
  ```

- ​场景说明​：忘记某个参数的作用时，直接执行该命令快速查阅，例如 “想不起用户目录参数是 `--userDir`还是 `--user`” 时，通过 `--help`确认。

### 3.3 指定配置文件

- ​参数作用​：不使用默认的 `settings.js`（默认在用户目录下），而是指定自定义的配置文件（如自定义节点路径、认证规则）。
- ​命令示例​：

  ```bash
  # 假设自定义配置文件存放在 /home/user/custom-node-red/settings-prod.js
  node-red --settings /home/user/custom-node-red/settings-prod.js
  ```

- ​场景说明​：多环境部署时使用（如开发环境、生产环境），生产环境的 `settings-prod.js`可能关闭调试日志、启用 HTTPS，通过该参数快速切换配置。

#### 3.4 指定用户目录

- ​参数作用​：自定义 Node-RED 的用户目录（默认是 `~/.node-red`，存放流程文件、插件、配置），实现多用户 / 多实例隔离。
- ​命令示例​：
  
  ```bash
  # 为“设备监控”场景创建独立用户目录 /opt/node-red/device-monitor
  node-red --userDir /opt/node-red/device-monitor
  ```

- ​场景说明​：同一台服务器需要运行多个 Node-RED 实例（如 “设备监控” 和 “数据采集”），通过 `--userDir`隔离各自的流程和插件，避免冲突。

#### 3.5 指定监听端口

- ​参数作用​：设置 Node-RED 后台服务的 TCP 监听端口（默认是 `1880），解决端口占用问题或实现多实例端口区分。`
- ​命令示例​（两种写法均可）：
  
  ```bash
  # 写法1：短参数 -p，指定端口为 1881
  node-red -p 1881
  # 写法2：长参数 --port，指定端口为 1882（用于生产环境实例）
  node-red --port 1882
  ```

- ​场景说明​：默认端口 1880 已被其他服务占用，或需要运行两个 Node-RED 实例（分别用 1881 和 1882 端口）时，用该参数指定端口。

#### 3.6 设置进程窗口标题

- ​参数作用​：自定义 Node-RED 运行时的进程窗口标题（仅在终端 / 命令行窗口中显示），便于识别多实例进程。
- ​命令示例​：

  ```bash
  # 为“车间温湿度监控”实例设置窗口标题
  node-red --title "Node-RED - 车间温湿度监控" --port 1883
  ```

- ​场景说明​：在终端中同时运行多个 Node-RED 实例时，默认窗口标题都是 “node-red”，通过 `--title`自定义标题（如 “车间温湿度监控”“设备故障报警”），可快速区分不同实例。

#### 3.7 安全模式启动

- ​参数作用​：启动 Node-RED 但不自动运行已部署的流程，仅加载编辑器；需手动在编辑器中点击 “部署”，流程才会启动。
- ​命令示例​：

  ```bash
  # 安全模式启动，避免流程启动时因错误导致崩溃
  node-red --safe --port 1880
  ```

- ​场景说明​：流程中存在错误（如 “MQTT 服务器地址写错”“函数节点语法错误”），直接启动可能导致 Node-RED 崩溃；用 `--safe`启动后，先在编辑器中修复错误，再部署运行流程，避免启动失败。

#### 3.8 指定流程文件或项目名

该参数分两种场景（取决于是否启用 “项目功能”），示例分别如下：

##### 场景 1：未启用项目功能（指定流程文件）

- ​参数作用​：不使用默认的 flows_&lt;主机名&gt;.json（用户目录下），而是指定自定义的流程文件（如备份的旧流程、特定场景的流程）。
- ​命令示例​：

  ```bash
  # 加载备份的流程文件 /home/user/backups/node-red/flows-20240501.json
  node-red /home/user/backups/node-red/flows-20240501.json
  ```

- ​场景说明​：需要恢复历史备份的流程，或切换到另一个场景的流程（如 “工作日流程” 和 “节假日流程”），直接指定流程文件路径即可加载。

##### 场景 2：已启用项目功能（指定项目名）

- ​参数作用​：Node-RED 启用 “项目功能” 后（需在编辑器中配置），通过项目名指定启动哪个项目（每个项目包含独立的流程、配置）。
- ​命令示例​：

  ```bash
  # 启动名为“智慧家居控制”的项目
  node-red 智慧家居控制
  ```

- ​场景说明​：启用项目功能后，多个项目的文件被统一管理（如 `Git` 版本控制），通过项目名快速启动目标项目，无需手动指定流程文件路径。

#### 3.9 覆盖单个配置

- ​参数作用​：临时覆盖 settings.js中的某个配置（无需修改配置文件），支持 “单键值覆盖” 或 “通过文件批量覆盖”。
- ​命令示例​（两种用法）：
  1. ​单键值覆盖​（如临时关闭编辑器访问限制）：

  ```bash
  # 覆盖 "editorTheme.disableEdit" 配置，允许编辑（默认可能为 false）
  node-red -D editorTheme.disableEdit=true --port 1880
  ```

  2. ​文件批量覆盖​（如通过 override.conf批量修改配置）：

  ```bash
  # 先创建 override.conf 文件，内容为：
  # editorTheme.title=临时测试环境
  # httpNode.auth.user=test
  # 再通过 -D @file 加载该文件
  node-red -D @/home/user/node-red-override.conf
  ```
  
- ​场景说明​：临时测试配置（如 “临时允许匿名访问编辑器”“临时修改 HTTP 节点的认证用户”），无需修改 `settings.js`，测试完成后直接删除参数即可恢复默认配置。

### 四、版本升级

```bash
sudo npm install -g --unsafe-perm node-red
```
