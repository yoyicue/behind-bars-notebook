# Chapter 19：电声音乐（Electroacoustic Music）

## 19.1 图形记谱（Graphic notation）

### 定义（Definition）

- 图形记谱是使用**非传统音符符号、图形或视觉元素**来表示声音事件；
- 常用于电声音乐、实验音乐、装置艺术与即兴作品；
- 关注**声音的质感、空间、时间形态**，而非精确音高与节拍。

### 应用场景（When to use）

- 表达：
  - 非传统音色（如电子噪音、环境声）；
  - 空间移动、渐变、纹理变化；
  - 非固定节奏、自由演奏时值；
- 启发演奏者**视觉–听觉之间的解释关系**。

### 图形种类（Types of graphic notation）

| 图形类型         | 示例用途                            |
|------------------|-------------------------------------|
| 波形线（waveforms） | 表示声音密度、音高轮廓或电子合成纹理     |
| 块状区域（blocks） | 指代音群、噪音层、模糊音程段落             |
| 箭头与流线         | 表示动态趋势、空间移动、渐强/渐弱路径       |
| 几何形状（circles, triangles） | 显示循环结构、分轨对位、音色对应         |
| 自由图像元素        | 符号化自然音、光、电、随机事件等           |

### 排版原则（Layout principles）

- 所有图形必须基于**时间轴（horizontal）**建立；
- 纵轴可自定义为：
  - 音高（如需）；
  - 音区（高–低）；
  - 层级（声部、通道、轨道）；
- 若为自由结构，应提供**总时长或段落时值比例提示**。

### 图形说明（Legends and interpretation）

- 所有图形谱面**必须配有图例说明（legend）或附页注解**；
- 应解释：
  - 每种图形对应的声音或演奏动作；
  - 所需技术（如电子设备启动、麦克风捕捉点）；
  - 时间如何阅读（秒、拍、自由段落）；
- 建议使用表格或编号方式整理图形语义。

### 演奏者辅助提示（Performer guidance）

- 可加入以下辅助信息提高可读性与执行性：
  - 时间线（带刻度）；
  - “Start/Stop” 标志；
  - 分轨对齐线（类似 DAW 轨道视图）；
  - 色块与音轨对应关系（如 color = timbre）。

> 提示：  
> 图形谱不靠“读音符”，而靠“读结构”与“想象音色”。  
> **它既是绘画，也是地图；既是概念，也是声音预演剧本。**  
> 一张好的图形谱，是**给耳朵看的音乐**。

## 19.2 时间-空间表示（Time-space representation）

### 概念定义（Concept and definition）

- 时间–空间谱法是一种以**空间位置来表达时间流逝**的谱面设计方式；
- 在电声、自由节奏与装置音乐中尤为常见；
- 替代传统拍号与节拍，将谱面变为“横向时间轴”。

### 横轴 = 时间（Horizontal axis as time）

- 谱面**从左至右即为时间推进**；
- 可采用以下方式表示单位时间：
  - 秒数标尺（e.g., 0″, 5″, 10″ …）；
  - 比例时间格（如一厘米 = 1秒）；
  - 时间区块（如区段 A, B, C，每段标示时长）；
- 时间轴下方可加刻度线、网格或节拍提示（如“quarter-note = 1.2 sec”）。

### 纵轴 = 参数（Vertical axis as parameter）

- 纵向可表示：
  - 音高（低→高）；
  - 音区（如“低频层”、“高频纹理”）；
  - 轨道/声部分布（如轨道1：合成器，轨道2：人声处理）；
  - 空间定位（左–右/近–远）；
- 每一轨道/层次视为独立时间流，可上下并列。

### 图形与时间配合（Synchronizing notation with time）

- 所有视觉符号、线条、形状必须与时间轴严格对齐；
- 持续音 → 用水平线段；
- 渐入渐出音 → 用渐细/渐粗图形表示；
- 突发音 → 用短促符号标记于时间刻度点上。

### 示例布局（Suggested layout structure）

```
\|-------------------------- Time (sec) --------------------------|
Track 1: \[---sound---]      \[----]             \[--fade--->]
Track 2:       \[~~grain~~]          \[  noise  ]
Track 3:                       \[drone]       \[pulse-pulse]
```

- 每个轨道等高；
- 左右为起止点；
- 可在底部标注总时长或节奏基准。

### 时间比例提示（Time calibration and scaling）

- 若谱面无法绘制足够长的实际时长，可注明“缩放比例”：
  - 如 “1 cm = 5 sec”
  - 或 “Each system = 30 seconds”
- 建议在每页左上注明单位，并统一比例。

### 与音频或影像同步（Synchronization with media）

- 若谱面与电子音轨、视频、灯光同步：
  - 必须标注准确时间点（如“Enter cue at 42.3 sec”）；
  - 建议使用 SMPTE 时间码或 DAW 时间标签；
  - 可配合“点击音轨”（click track）或可视指令。

> 提示：  
> 时间–空间谱就是**音乐的时间地图**：  
> 演奏者不再问“我弹第几拍”，而是问“我在哪一秒开始做什么”。  
> 这类谱面写得好，**就像电影分镜脚本一样清晰**。

## 19.3 电子设备提示（Cueing with electronics）

### 核心目标（Purpose）

- 确保**演奏者与电子音轨或实时处理系统**能**精准同步**；
- 提供可靠的**提示机制（cue system）**，避免错过进入点或结构变化；
- 建立人–机–谱三者之间的协调逻辑。

### 常见提示系统类型（Cue system types）

#### 1. 音频点击提示（Click tracks）

- 使用耳返发送**节拍/提示声**；
- 可为：
  - 固定节拍点击（如每秒1次）；
  - 节点提示声（如叮/咔作为进入信号）；
  - 自定义录音语音提示（如：“Ready… Now!”）；
- 通常仅对**个别演奏者**播放，指挥或领奏控制。

#### 2. 可视提示系统（Visual cues）

- 使用屏幕、灯光或软件播放进度条/倒计时；
- 可配 DAW（如 Logic Pro, Ableton Live）或 Max/MSP 中的 cue panel；
- 也可使用外接设备（如 LED 灯、MIDI 灯板）提供闪光/色彩提示。

#### 3. 手势式提示（Conductor cues）

- 指挥或操作员以**肢体、口令、脚控**等方式进行人工同步；
- 常用于即兴段、实时调控下的人机互动演出。

### 谱面上的提示写法（Notation of cues）

- **明确标注每个 cue 的触发点与类型**；
- 常用写法示例：

```
Cue 1: “enter at 18.4 sec (click track)”\
Cue 2: “follow light signal on screen”\
Cue 3: “triggered by violin pizz.”
```

- 建议将所有 cue 汇总于**演出说明页或 legend**中统一说明。

### 与时间–空间谱法结合（Integration with time-based layout）

- Cue 信息应在图形谱上标出触发点：
  - 可使用箭头、符号、图标（如闪电、耳朵图示）；
  - 标注 cue 类型与相关设备；
- 可在时间线上加垂直线作为 cue anchor。

### 多人同步策略（Ensemble synchronization）

- 若多位演奏者需对齐 cue，应指定：
  - 统一控制人（如指挥/操作员）；
  - 统一 cue 来源（如主屏幕、主点击）；
  - 所有分谱中同步 cue 内容与编号。

### 技术准备与冗余机制（Technical reliability）

- 演出前应测试所有 cue 系统：
  - 检查延迟、响应性、稳定性；
- 推荐设有备份 cue 系统（如灯光 + 耳返）；
- 如 cue 失败应有 Plan B（如“if cue missed, re-enter at next loop”）。

> 提示：  
> 在电声音乐中，cue 就是演奏的“领航信号”。  
> **谱面不给方向，耳朵会迷路；cue 若不准，电子就“放空”。**  
> 好的 cue 系统，是让人机协作像“呼吸同步”一样自然。

## 19.4 非音高元素（Non-pitched elements）

### 定义（Definition）

- 非音高元素是指音乐中**不依赖明确音高**而表达内容的成分；
- 包括：
  - 噪音（noise）
  - 嗡鸣（drones）
  - 效果（effects）
  - 滑音/杂质/环境声（wind, breath, static, field recordings）
- 特别常见于电声音乐、打击乐、现场处理音轨、装置艺术等领域。

### 常见记谱方法（Notation techniques）

#### 1. 文本提示（Textual description）

- 最直接的方式：使用简短文字说明声音性质；
- 示例：
  - “air noise only”
  - “inhale, breathy sound”
  - “noisy bow pressure”
- 可放在谱表上方、声部轨道中，或使用括号注释。

#### 2. 符号图形（Symbolic notation）

- 自创符号，如：
  - 波形线（代表气流、回响）；
  - 叉形音符头（表示无音高）；
  - 宽块状延音条（代表噪声区段）；
- 所有自定义符号**必须有 legend 图例说明**。

#### 3. 多媒体提示（Graphic or media-linked）

- 通过图形或图像符号引导演奏内容；
- 可结合色彩（如红色条 = 粗噪声，蓝色块 = 微弱质感）；
- 图像应置于明确时间轴对应位置。

### 音色控制参数（Timbre instructions）

- 非音高记谱常依赖“参数化演奏指令”如：
  - 动态范围（pp → ff）；
  - 密度（sparse → dense）；
  - 颗粒感（granular → smooth）；
  - 音色质感（dry → wet / filtered → distorted）；
- 建议用渐变线、箭头、对比区域明确表示这些演变。

### 节奏与结构提示（Rhythm/structure in non-pitched material）

- 即便无音高，也需提示**时间起止与节奏组织**；
- 用条状图形（blocks）、虚线（improvised density）、渐变面块模拟节奏走势；
- 如有内部重复/波动，可加文字标注“pulsing noise 6×”。

### 乐器/装置说明（Instrument or source identification）

- 若声音来源非传统乐器，应说明执行方式：
  - “rub contact mic with foil”  
  - “blow across PVC pipe”  
  - “looped environmental sample, 12s”
- 可在谱页脚附**声音源配置表**或**表演动作说明页**。

> 提示：  
> 非音高记谱不是“没有旋律”，而是**记录那些在五线谱外的声音表达**。  
> 它的谱面不是在“唱旋律”，而是在“绘声音”与“写动作”。

## 19.5 多媒体整合（Multi-media integration） 

### 定义（Definition）

- 多媒体整合谱面指的是**将音频、视频、灯光、电子处理等非传统音乐元素**纳入演奏与排练控制系统的谱面；
- 它扩展了乐谱的表达范围，让谱面成为**跨媒介协作的统一接口**。

### 多媒体元素类型（Types of media to integrate）

- **视频（Video）**：短片、图像序列、视觉反馈；
- **灯光（Lighting）**：舞台变光、信号提示、动态氛围；
- **舞台动作（Stage movement）**：演奏者走位、身体动作；
- **电子音轨与实时处理（Audio tracks / Live FX）**；
- **外部装置或观众互动**（装置控制、传感器等）。

### 谱面结构建议（Score structure approaches）

#### 1. 图层式排版（Layered layout）

- 每种媒介一个独立“轨道”：
  - Track 1：电子音轨  
  - Track 2：灯光指令  
  - Track 3：视频同步  
  - Track 4：演奏者动作  
- 横轴为时间，纵向并列各元素变化；
- 类似 DAW 时间线排布，适合直观控制全局。

#### 2. 符号式注释（Symbolic embedding）

- 在传统谱面中嵌入多媒体事件符号；
- 用图标（如投影机、灯泡、摄像机） + 时间标记提示；
- 所有图标应配 legend 图例说明执行内容。

### 触发与同步机制（Trigger and synchronization）

- 谱面应明确每个媒体元素的：
  - **起始时刻**（以时间或 cue 表达）；
  - **持续时长**（如“fade in over 8 sec”）；
  - **触发方式**（手动/自动/感应）；
- 可配合外部时间码（如 SMPTE）、Ableton Link、Max patch 控制同步。

### 多媒体说明页（Performance instructions）

- 所有多媒体元素应在谱前或附页详列：
  - 媒介格式（如 MP4 / WAV / DMX）；
  - 播放设备与执行人；
  - 冗余机制（如主/备视频路径）；
  - 舞台布置图或屏幕配置图（如有）；
  - 示例：

```
Video A: “Forest Loop”\
Start: Cue 3 or at 2′15″\
Fade in over 5 sec; projected on rear scrim\
Controlled via QLab
```

### 分谱整合策略（Part-specific integration）

- 若个别分谱需显示多媒体提示：
  - 可采用图标 + 时间 + cue 组合；
  - 确保与总谱同步，避免分谱孤立执行；
  - 推荐添加“see conductor”或“follow screen”文字标记。

> 提示：  
> 多媒体谱面是**视觉、听觉与行动的时间协约书**。  
> 它不是在“写音乐”，而是在**编排一个跨媒介的舞台事件**。  
> 好的多媒体谱面让音乐人、影像师、灯光师都能“一页看懂、一秒对位”。