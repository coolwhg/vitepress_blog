---
title: Function节点
date: '2025-03-29 15:58:01'
head: []
outline: deep
sidebar: false
prev: false
next: false
---



# Function节点

- [1. 变量定义](https://blog.csdn.net/weixin_43195420/article/details/129205844#1__5 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1__5")
- [2. 返回值](https://blog.csdn.net/weixin_43195420/article/details/129205844#2__71 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2__71")
- - [1）返回单条数据](https://blog.csdn.net/weixin_43195420/article/details/129205844#1_73 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1_73")

    - [进阶1](https://blog.csdn.net/weixin_43195420/article/details/129205844#1_108 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1_108")
    - [进阶2](https://blog.csdn.net/weixin_43195420/article/details/129205844#2_135 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2_135")
    - [2）返回多条数据](https://blog.csdn.net/weixin_43195420/article/details/129205844#2_168 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2_168")
- [3.其他变量定义](https://blog.csdn.net/weixin_43195420/article/details/129205844#3_190 "https://blog.csdn.net/weixin_43195420/article/details/129205844#3_190")
- - [1）数组定义buffer](https://blog.csdn.net/weixin_43195420/article/details/129205844#1buffer_192 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1buffer_192")

    - [2.Array](https://blog.csdn.net/weixin_43195420/article/details/129205844#2Array_262 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2Array_262")
- [4.运算符](https://blog.csdn.net/weixin_43195420/article/details/129205844#4_321 "https://blog.csdn.net/weixin_43195420/article/details/129205844#4_321")
- - [1）算数运算符](https://blog.csdn.net/weixin_43195420/article/details/129205844#1_323 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1_323")

    - [2）赋值运算符](https://blog.csdn.net/weixin_43195420/article/details/129205844#2_339 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2_339")
    - [3）字符与运算符](https://blog.csdn.net/weixin_43195420/article/details/129205844#3_352 "https://blog.csdn.net/weixin_43195420/article/details/129205844#3_352")
    - [4）比较运算符](https://blog.csdn.net/weixin_43195420/article/details/129205844#4_363 "https://blog.csdn.net/weixin_43195420/article/details/129205844#4_363")
    - [5）逻辑运算符](https://blog.csdn.net/weixin_43195420/article/details/129205844#5_371 "https://blog.csdn.net/weixin_43195420/article/details/129205844#5_371")
    - [6）优先级](https://blog.csdn.net/weixin_43195420/article/details/129205844#6_383 "https://blog.csdn.net/weixin_43195420/article/details/129205844#6_383")
- [5.常用函数](https://blog.csdn.net/weixin_43195420/article/details/129205844#5_409 "https://blog.csdn.net/weixin_43195420/article/details/129205844#5_409")
- - [1）if…else语句](https://blog.csdn.net/weixin_43195420/article/details/129205844#1ifelse_411 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1ifelse_411")

    - [2）switch](https://blog.csdn.net/weixin_43195420/article/details/129205844#2switch_491 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2switch_491")
- [3）for](https://blog.csdn.net/weixin_43195420/article/details/129205844#3for_571 "https://blog.csdn.net/weixin_43195420/article/details/129205844#3for_571")
- [4）返回值](https://blog.csdn.net/weixin_43195420/article/details/129205844#4_609 "https://blog.csdn.net/weixin_43195420/article/details/129205844#4_609")
- [4.数据存储](https://blog.csdn.net/weixin_43195420/article/details/129205844#4_656 "https://blog.csdn.net/weixin_43195420/article/details/129205844#4_656")
- - [context](https://blog.csdn.net/weixin_43195420/article/details/129205844#context_681 "https://blog.csdn.net/weixin_43195420/article/details/129205844#context_681")

    - [flow](https://blog.csdn.net/weixin_43195420/article/details/129205844#flow_697 "https://blog.csdn.net/weixin_43195420/article/details/129205844#flow_697")
    - [global](https://blog.csdn.net/weixin_43195420/article/details/129205844#global_715 "https://blog.csdn.net/weixin_43195420/article/details/129205844#global_715")
- [5.部分函数整理](https://blog.csdn.net/weixin_43195420/article/details/129205844#5_733 "https://blog.csdn.net/weixin_43195420/article/details/129205844#5_733")
- - [1.获取时间](https://blog.csdn.net/weixin_43195420/article/details/129205844#1_735 "https://blog.csdn.net/weixin_43195420/article/details/129205844#1_735")

    - [2.保留小数后两位](https://blog.csdn.net/weixin_43195420/article/details/129205844#2_748 "https://blog.csdn.net/weixin_43195420/article/details/129205844#2_748")
    - [3.字符串处理](https://blog.csdn.net/weixin_43195420/article/details/129205844#3_756 "https://blog.csdn.net/weixin_43195420/article/details/129205844#3_756")

## 1. 变量定义

在function中可使用的变量包含：Boolean布尔类型、number数字类型、string字符类型、null空类型、undefined未定义类型

而我们在function中定义新变量时有var

**1.var定义变量**

在我们使用的node-red中，var定义的变量较为常见。

```js
var a = 1;//定义数字类型
var b = true;//定义布尔类型
var c = "hello";//定义字符类型
```

var定义的变量可以先使用再定义，但不定义的话会报错。如下所示的代码中，变量a先进行赋值再定义，数据是可以正常返回的。

```js
a = 4;
var a;
msg.payload = a;
return msg;
```

var声明的变量在同一个函数中可以进行多次声明，且后一次的内容会覆盖前一次的声明，如下所示的变量声明中，返回值为1；

```js
var a = 0;
var a = 1;
msg.payload = a;
return msg;
```

var定义的变量在整个函数内都是有效的，按照以下实例，a实际可以输出10；

```js
if( 1 > 2 )
    var a = 3;
else 
    var  a=10;
msg.payload = a;
return msg;
```

**2.let声明变量**

变量必须在使用前进行声明，如果不进行声明先使用则会立马报错。

let变量不能定义已经定义过的变量

let变量为块级作用域，例如if、for函数内部定义后，对函数外无影响。

**3.const定义变量**

const变量也是必须在使用前提前进行声明。

const定义的变量不允许修改，当需要对变量再次赋值时则会立马报错

```js
const a = 1;
a = 2;	//报错
msg.payload = a;
return msg;
```

## 2. 返回值

### 1）返回单条数据

输入到函数节点中的代码表示函数的主体。 最简单的函数只是完全按原样返回消息：

```js
return msg;
```

如果函数返回 null，则不传递任何消息，流结束。

该函数必须始终返回 **对象** 类型 。返回数字或字符串将导致错误。

返回的消息对象不需要与传入的对象相同; 该函数可以在返回之前构造一个全新的对象。为例：

```hljs
var newMsg = { payload: 1 };
return newMsg;
```

若自定义变量返回对象包含多条数据时，使用逗号隔开即可。

```hljs
var newMsg = { 
            payload: 1 ,
            topic:"topic"
};
return newMsg;
```

错误实例如下

​`var newMsg = 1;`

​`return newMsg;`

### 进阶1

在前面我们已经了解到function节点的返回值为**object**类型，默认返回值为msg。

其实object类型的传递参数并不仅限于我们已知的payload、[topic](https://so.csdn.net/so/search?q=topic&spm=1001.2101.3001.7020 "https://so.csdn.net/so/search?q=topic&spm=1001.2101.3001.7020")，变量名称可以自定义，我们也可以称之为**JSON字符串。**

例如，在function中我们传递参数是定义学生姓名，年龄，班级的信息，可以使用以下的方式进行定义。表示为  **{“变量名称”:变量}**

```hljs
msg = {
    "name":"小明",		
    "age":10,
    "classes":"5-1班"
}
return msg;
```

我们可以从这种形式看出和前面描述的自定义变量返回对象包含多条数据是一样的，只不过是将payload和topic的变量名字修改了。

而变量的获取也类似msg.payload，可以新增一个function，并自定义变量获取信息。

```hljs
var name = msg.name;
var age = msg.age;
var classes = msg.classes;
```

### 进阶2

当我们知道了传递参数的规则为  **{“变量名称”:变量}**  ，那就可以举一反三，在传递的变量里能不能再设置为  **{“变量名称”:{“变量名称”:变量}}**  呢？

答案当然是能的！下面我们就以传递两个学生信息为例。stu1包含小明的信息，stu2包含小华的信息。

```hljs
msg = {
    "stu1":{
        "name":"小明",
        "age":10,
        "classes":"5-1班"},
    "stu2": {
        "name": "小华",
        "age": 12,
        "classes": "6-3班"
    }
}
return msg;
```

而这种情况下要获取小明的学生信息时需要使用以下方式

```hljs
var name = msg.stu1.name;
var age = msg.stu1.age;
var classes = msg.stu1.classes; 
```

我们已知的msg的object类型表现形式为{“变量名称”:变量}，那{“变量名称”:{“变量名称”:变量}}就可以表述为object内嵌套object。

从获取变量的方式总结来看，当遇到object类型的变量后使用“  **.**  ”来获取下一级的object变量内容。

### 2）返回多条数据

首先返回多条数据在function节点中需要先设定以下输出口的数量。return的内容也需要为Object类型。

在设置返回多条输出时，仅需要在return中设置为数组类型返回即可在返回多条时使用 " **，** "隔开。

```hljs
var msg1 = {payload:"first out of output 1" };  
var msg4 = {payload:"only message from output 2" }; 
return [msg1, msg4];
```

当然函数可以通过返回一个数组来返回输出上的多条消息 返回数组中的消息，例如在function节点中编程如下所示，后续节点将按顺序一次接收一条消息的进行显示：msg1、msg2、msg3从上边的端口依次输出显示到debug 1中，而msg4会输出显示到debug 2中。

```hljs
var msg1 = {payload:"first out of output 1" }; 
var msg2 = {payload:"second out of output 1" }; 
var msg3 = {payload:"third out of output 1" }; 
var msg4 = {payload:"only message from output 2" }; 
return [ [ msg1, msg2, msg3], msg4 ];
```

## 3.其他变量定义

### 1）数组定义buffer

数组的定义也是经常使用的。JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

- *在nodejsv6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。*

下面来将一些Buffer常用函数，需要注意的是在写入时可以使用string类型，但buffer中只能以十进制或十六进制进行输出，所以输入string类型的数据会被转化。

- **Buffer.from(buffer)：**  复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例  
  注：大家在buffer定义时可以直接使用十六进制进行表示，十六进制显示时需要使用 **0x** 或 **0X** 为前缀进行表示

```hljs
var buf = Buffer.from([2, 3, 0, 0, 0, 2, 0XC4, 0X38]);	//实例为模块ID为2的modbus通信协议	
```

- **Buffer.alloc(size[, fill[, encoding]])：**  返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0。string：需要写入的字符，fill：填充内容，encoding：数据格式例如“utf8”等。

  ```hljs
  var buf1 = Buffer.alloc(10);			//实例为设置一个内容全为0，长度为10的数组
  var buf2 = Buffer.alloc(10,0x0EE);		//实例为设置一个内容全为0xEE,长度为10的数组
  ```
- **buf.write(string[, offset[, length]][, encoding])** ：写入 Node 缓冲区，返回值为写入的大小。string：需要写入的字符，offset：开始写入的地址，length：写入的长度，encoding：数据格式例如“utf8”等。

  ```hljs
  var buf = Buffer.alloc(10);
  var len = buf.write("1");
  msg.buf = buf;  					//输出内容为[0x31,0,0,0,0,0,0,0,0,0] 默认从第一个字节开始写
  msg.len = len;  					//输出内容1   表示写入了1个数据
  ```

  ```hljs
  var buf = Buffer.alloc(10);
  var len = buf.write("123",1,2);		
  msg.buf = buf;  					//输出内容为[0，0x31,0x32,0,0,0,0,0,0,0] 默认从第一个字节开始写,写入了2个字节，所以传入的string里第三个数据被省略了
  msg.len = len;  					//输出内容2   表示写入了2个数据
  ```
- **buf.toString([encoding[, start[, end]]])：**  从缓冲区读取数据，返回值为制定格式的字符串。encoding：数据格式例如“utf8”等，start：开始读取位置，end：结束位置。

  ```hljs
  var buf = Buffer.alloc(26);
  for (var i = 0; i < 26; i++) {
      buf[i] = i + 97;
  }
  msg.ascii1 = buf.toString('ascii');				// 输出: abcdefghijklmnopqrstuvwxyz
  msg.ascii2 = buf.toString('ascii', 0, 5);		//使用 'ascii' 编码, 并输出: abcde
  msg.tuf8 = buf.toString('utf8', 0, 5);			// 使用 'utf8' 编码, 并输出: abcde
  msg.un = buf.toString(undefined, 0, 5);			// 使用默认的 'utf8' 编码, 并输出: abcde
  return msg;
  ```
- **buf.length**：Node 缓冲区长度计算

  ```hljs
  var buffer = Buffer.from('www.runoob.com');
  msg.payload = buffer.length;					//  缓冲区长度 输出为14
  return msg;
  ```

大家作为扩展可以自行搜索[nodejs](https://so.csdn.net/so/search?q=nodejs&spm=1001.2101.3001.7020 "https://so.csdn.net/so/search?q=nodejs&spm=1001.2101.3001.7020")的buffer的使用，例如 [nodejs菜鸟教程中的Buffer](https://blog.csdn.net/weixin_43195420/article/details/129205844 "https://blog.csdn.net/weixin_43195420/article/details/129205844")。

- **数据的获取**  
  其实数组某个数据的获取使用下角标的形式，而下角标的序号从0开始。

  ```hljs
  var buf = Buffer.from([0,1,2,3,4,5]);
  msg.buf0 = buf[0];									//msg.buf0 = 0;
  msg.buf1 = buf[1];									//msg.buf1 = 1;
  msg.buf2 = buf[2];									//msg.buf2 = 2;
  msg.buf3 = buf[3];									//msg.buf3 = 3;
  msg.buf4 = buf[4];									//msg.buf4 = 4;
  msg.buf5 = buf[5];									//msg.buf5 = 5;
  return msg;
  ```

### 2.Array

Array也是一种数据，和Buffer不同的是，在Array数组中可以传递字符。Array数组是属于JavaScript的知识点。

- Array数组的创建，Array数组的建立和Buffer还是比较类似的，但我们需要通过以下三种来对建立的数组进行区分：其中array和array1建立的数组是一致的，而array2虽然只是比array1多了方括号，但数据却变了

  ```hljs
  var array = Array.from(["a","b"]);			
  var array1 = new Array("c","d");
  var array2 = new Array(["e", "f"]);
  var array3 = {"g","h","i"};
  var array4 = ["j","k"];
  msg.array = array;										//输出类型为array[2]		其中0："a",1:"b";
  msg.array1 = array1;									//输出类型为array[2]		其中0："c",1:"d";
  msg.array2 = array2;									//输出类型为array[1]		其中0为array[2]，在array[2]中保存的数据才是0："e",1:"f";
  return msg;
  ```
- **array.length**：Node 缓冲区长度计算，我们来延续上面的案例来查数组的大小

  ```hljs
  msg.len = array.length;										//结果为2
  msg.len1 = array1.length;									//结果为2
  msg.len2 = array2.length;									//结果为1
  ```
- **array内容获取**

  ```hljs
  msg.b = array[1];											//输出array中的字符b
  msg.d = array1[1];											//输出array1中的字符d
  msg.f = array2[0][1];										//输出array2中的字符f
  ```

> - [X] 请根据前三节内容获取姓zhang名san，年龄为10，班级为5-1；

```js
var name =[
        {  
                "xing":"zhang",
                "ming":"san"
        },
        {
                "xing":"li",
                "ming":"si"
        },
        {
                "xing":"wang",
                "ming":"wu"
        }
]
var age = [10,11,12];
var classes = ["5-1","5-5","6-3"];
msg.payload = {name,age,classes};
return msg;
```

## 4.运算符

### 1）算数运算符

算数运算符主要是包含：+、-、\*、/、%、++、–；下表格中以y \= 10进行计算

|运算符|描述|实例|x的结果|y的结果|
| --------| ------------| ------------------| ----------| ----------|
|+|加法|x \= y+3；|x\=13|y\=10|
|-|减法|x \= y-3;|x\=7|y\=10|
|\*|乘法|x \= y\*3;|x\=30|y\=10|
|/|除法|x \= y/3；|x\=3|y\=10|
|%|取余（数）|x \= y%3;|x\=1|y\=10|
|++|自增|x \= y++;|x\=10|y\=11|
|++|自增|x \= ++y;|x\=11|y\=11|
|–|自减|x \= y–;|x\=10|y\=9|
|–|自减|x \= --y|x\=9|y\=9|

### 2）赋值运算符

给定 **x=10 和** y\=5，下面的表格解释了赋值运算符：把等号右侧的值赋值给左侧。

|运算符|实例|用法|运算结果|
| ------------| --------------| -----------------| ----------|
|\=|x\=y|把y赋值给x|x\=5|
|+\=|x+\=y|x \= x+y|x\=15|
|-\=|x-\=y|x \= x-y|x\=5|
|\*\=|x\*\=y|x \= x\*y|x\=50|
|/\=|x/\=y|x \= x/y|x\=2|
|%\=|x%\=y|x \= x%y|x\=0|

### 3）字符与运算符

- 运算符用于把文本值或字符串变量加起来（连接起来）

```hljs
x=5+5;			//数字相加 x=10
y="5"+5;		//字符与数字相加 y="55"
z="Hello"+"node-red";	//字符与字符相加 z="Hellonode-red"
text="Hello"+" node-red";//要想在两个字符串之间增加空格，需要把空格插入一个字符串之中,text="Hello node-red"
```

### 4）比较运算符

比较运算符在逻辑语句中使用，以测定变量或值是否相等。用于测试 *true* 或者 *false。*

x\=5，下面的表格解释了比较运算符  
​![在这里插入图片描述](https://img-blog.csdnimg.cn/9dde01aa25d746eb89a6ee1e0e49fdea.png)

### 5）逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑。

给定 x\=6 以及 y\=3，下表解释了逻辑运算符。

|运算符|描述|说明|例子|结果|
| --------| ------| ----------------------------------------------------| ---------------------------| -------|
|&&|and|当左右两侧的条件均为true时返回true，否则返回false|(x \< 10 && y \> 1)|true|
|\||or|当左右两侧的条件均为false时返回false，否则返回true|(x5 \| y5)|false|
|!|not|当条件为true时返回false，当条件为false时返回true|!(x\=\=y)|true|

### 6）优先级

优先级从上到下依次递减，最上面具有最高的优先级，逗号操作符具有最低的优先级。

|优先级|运算符|说明|结合性|
| --------| ----------------------------------------------------------------------------------------------------------------------| ------------------------------------------------------------------------------------------------| ----------|
|1|() [] . -\>|（表达式）、[数组下表]、对象成员、指针成员|从左到右|
|2|! + - \~ ++ – \* & ! \~ sizeof \~|取反、正、负、自增、自减、指针变量、取地址符、逻辑非、按位取反、长度获取|从右到左|
|3|\* / %|算数运算符：乘、除、取余|从左到右|
|4|+(加) -(减)|算数运算符：加、减|从左到右|
|5|\<\< \>\>|左移位、右移位、|从左到右|
|6|\< \<\= \> \>\=|小于、小于等于、大于、大于等于|从左到右|
|7|\=\= !\=|等于、不等于|从左到右|
|8|&|按位与|从左到右|
|9|\^|按位异或|从左到右|
|10|\||按位或|从左到右|
|11|&&|与|从左到右|
|12|\||或|从左到右|
|13|?:|三目运算|从右到左|
|14|\= +\= -\= \*\= /\= %\= &\= \|\= \^\= \~\= \<\<\= \>\>\=|赋值、加后、减后、乘后、除后、取余后、按位与后、按位或后、按位异或后、取反后、左移后、右移后、|从右到左|
|15|,|逗号操作符||

注：以上是编程时较为常用的运算符，大家也需要注意同一符号在不同环境当中用法不同。

当然，咱们以上列举的运算符在使用过程中可能并没有意识到有优先级的顺序，最简单的方法就是将所有需要优先运行的语句写到()里来执行。

## 5.常用函数

### 1）if…else语句

条件语句用于基于不同的条件来执行不同的动作，在各种编程语言中可能写法差异，但逻辑通用。

首先是if语句的基础写法为

```hljs
if(判断条件1)
{
    //条件1成立时需要运行的代码;
}
else if(判断条件2)
{
    //条件2成立时需要运行的代码；
}
......
else
{
    //条件都不成立时需要运行的代码；
}
```

if判断时为顺序执行，但当其中某一个条件成立时，if判断则运行结束。

- **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码

  ```hljs
  if(1>2)
  {
          msg.payload = "1>2";
  }
  return msg;									 
  ```

  因为1\>2不成立，所以会直接运行到return msg；而msg的内容为function前置节点传来的内容。
- **if…else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码

  ```hljs
  if(1>2)
          msg.payload = "1>2";
  else
          msg.payload = "1<2";
  return msg;														
  ```

  因为1\>2不成立，而直接进入到else中将msg.payload赋值为“1\<2"并输出
- **if…else if…else 语句**- 使用该语句来选择多个代码块之一来执行

  ```hljs
  if(1>2)
          msg.payload = "1>2";
  else if(2 === 2)
          msg.payload = "2=2";
  else if(1 < 2)
          msg.payload = "1<2";
  return msg;									
  ```

因为1\>2不成立，而继续向下运行判断2等于2，条件为真则将msg.payload赋值为“2\=2“并输出，虽然else if(1\<2)条件也正确，但并不会执行。

- [X] 思考：请实现利用dashboard节点中的text节点输入三个整数，求出最大的值。

### 2）switch

**switch 语句** - 使用该语句来选择多个代码块之一来执行

switch 语句根据表达式的值，依次与 case 子句中的值进行比较：

- 如果两者相等，则执行其后的语句段，当遇到 break 关键字时则跳出整个 switch 语句。
- 如果不相等，则继续匹配下一个 case。
- switch 语句包含一个可选的 default 关键字，如果在前面的 case 中没有找到相等的条件，则执行 default 后面的语句段。

注意：switch 语句中，表达式是使用全等（\=\=\=）来与各个 cese 子句中的值进行匹配的。由于使用的是全等运算符，因此不会自动转换每个值的类型。

```hljs
switch(判断条件)
{
    case x1:		//条件===x1
        语句1;
        break;
 	case x2:		//条件===x2
        语句2:
        break;
    ......
    defult:			//条件都不满足
        语句x;		
        break;
}
```

**break 关键字**

switch 语句是逐行执行的，当 switch 语句找到一个与之匹配的 case 子句时，不仅会执行该子句对应的代码，还会继续向后执行，直至 switch 语句结束。为了防止这种情况产生，需要在每个 case 子句的末尾使用 break 来跳出 switch 语句。

在 switch 语句中，case 子句只是指明了执行起点，但是没有指明执行的终点，如果在 case 子句中没有 break 语句，就会发生连续执行的情况，从而忽略后面 case 子句的条件限制，这样就容易破 switch 结构的逻辑

例如输入msg.payload \= 2，在不执行break时的运行如下。

```hljs
switch(msg.payload)
{
    case 1:				//不符合，不运行
        msg.x1 = 1;
    case 2:				//符合条件，执行
        msg.x2 = 2;		
    case 3:				//没有返回，继续执行
        msg.x3 = 3;
    case 4:			//没有返回，继续执行
        msg.x4 = 4;
}
return msg;				//输出为：x2: 2       x3: 3       x4：4
```

break 除了可以用来跳出 switch 语句外，还可以用来跳出循环语句（for、for in、while、do while 等）

**default语句**

default 是 switch 子句，可以位于 switch 内任意位置，不会影响其它 case 子句的正常执行。

default 语句与 case 语句简单比较如下：

- 语义不同：default 为默认项，case 为判例。
- 功能扩展：default 选项是唯一的，不可以扩展。而 case 选项是可扩展的，没有限制。
- 异常处理：default 与 case 扮演的角色不同，case 用于枚举，default 用于异常处理。  
  例如输入msg.payload \= 5，在不执行break时的运行如下。

  ```hljs
  switch(msg.payload)
  {
      case 1:				 
          msg.x1 = 1;
      case 2:				 
          msg.x2 = 2;		
      case 3:				 
          msg.x3 = 3;
      default:			 
          msg.x4 = "null";
  }
  return msg;				//输出为：x4："null" 
  ```

## 3）for

for循环是编程语言中一种循环语句，而循环语句由循环体及循环的判定条件两部分组成，其表达式为：for（单次表达式;条件表达式;末尾循环体）{中间循环体；}

```hljs
for( 变量 ; 判断条件;控制条件)	//判断条件成立<——<——控制条件
{								//	    ↓              ↑
    循环体语句;					//	  循环体——>——>——>——- 	
}								//判断条件不成立，跳出循环体{}
```

表达式1、表达式2和表达式3之间是用分号`;`隔开的，千万不要写成逗号。

下面我们以计算1到100间的数字之和为例来学习以下for循环。

```hljs
var sum = 0;
for (var i = 1; i <= 100; i++) {	//++是自加的意思, ++i相当于i = i + 1
    sum = sum + i;
} 
msg.payload = sum;					//结果为5050
return msg;
```

for循环还可以对数组内容进行编译。

```hljs
var buf = Buffer.alloc(10);			//新建数组
for (var i = 1; i <= 10; i++) {		
    buf[i] = i;						//在数组中设定第0到第9个字节分别对应 数字0到9
}
msg.payload = buf;	
return msg;
```

- [X] 使用for 和 if 的嵌套使用。求 1 到 100 之间所有能被 3 整除的数之和。
- [X] 使用for 和 if 的嵌套使用。将 1 到 1000 之间所有的质数保存到数组。

## 4）返回值

**return**用来结束本程序。

当我们在for循环中之间将sum赋值给msg.payload，并return时，可以看到输出为1，即刚进入循环就结束了，并没有执行msg.payload\=100。

```hljs
var sum = 0; 
for (let i = 1; i <= 100; ++i) { 
    sum = sum + i;
    msg.payload = sum;
    return msg;
}  
msg.payload = 1000;
return msg;
```

**break** 语句可以用来跳出循环，让程序继续执行循环之后的代码（如果有的话）

下面还是以计算1到100间的数字之和为例，我们在for循环中加入判断，如果1等于50则break。输出结果为1225，为1到50之间数字之和。

```hljs
var sum = 0;
for (var i = 1; i <= 100; ++i) {
    if(i === 50)
        break;
    sum = sum + i;
} 
msg.payload = sum;						
return msg;
```

**continue** 语句用来跳过本次循环，执行下次循环。当遇到 continue 语句时，程序会立即重新检测条件表达式，如果表达式结果为真则开始下次循环，如果表达式结果为假则退出循环。

下面还是以计算1到100间的数字之和为例，我们在for循环中加入判断，如果1等于50则continue。这个结果输出为5000，很明显看到计算时少了50.

```hljs
var sum = 0;
for (var i = 1; i <= 100; ++i) {
    if(i === 50)
        continue;
    sum = sum + i;
} 
msg.payload = sum;
return msg;							
```

## 4.数据存储

- context- 节点的本地上下文
- flow- 流范围上下文
- global- 全局范围上下文

从上下文中获取值：

```hljs
var connum = context.get("cnum");	//context获取上下文中变量cnum的值，并赋值给connum
var flownum = flow.get("fnum");		//flow获取上下文中的变量fnum的值，并赋值给flownum
var glonum = global.get("gnum");	//global获取上下文中变量gnum的值 ，并赋值给glonum
var chuzhi = context.get("num")||0;	//设定初值为0
```

设置值：

```hljs
context.set("cnum",connum);		//将变量connum保存到上下文变量cnum中
flow.set("fnum",flownum);		//将变量flownum保存到上下文变量fnum中
global.set("gnum",glonum);		//将变量glonum保存到上下文变量gnum中
```

### context

下面我们来实现每次程序运行时num递增。

```hljs
var num = context.get("num")||0;
num++;
context.set("num",num);
msg.payload = num;
return msg; 
```

当我们运行程序时，每触发一次num会加1。

而当我们将context.set();语句注释掉后，程序每次运行时输出为1；

### flow

使用flow节点可以在不同的function节点中获取数据。

```hljs
//function1节点
flow.set("flownum","flowtext");		//将flowtext字符串保存到上下文变量flownum中
```

```hljs
//function2节点
var num = flow.get("flownum")||0;
msg.payload = num;
return msg;
```

咱们使用了两个function节点，分别按照上述的代码进行编程，在function2中可以直接进行获取时为0；而在运行function1后再运行function2时则可以获得function1中定义的值并输出flowtext。

### global

global的使用和flow的使用方法一致，但是global的作用域更大，在不同的流程中都可以使用。

```hljs
//在流程1中的function1节点
global.set("globalnum","globaltext");		//将globaltext字符串保存到上下文变量globalnum中
```

```hljs
//在流程2中的function2节点
var num = global.get("globalnum")||0;
msg.payload = num;
return msg;
```

咱们在不同的流程中分别放置了一个function节点，分别按照上述的代码进行编程，流程2中的function2直接进行获取时为0；而在运行流程1中的function1后再运行流程2中的function2时则可以获得流程1中function1中定义的值并输出globaltext。

## 5.部分函数整理

### 1.获取时间

|new Date().toLocaleString()|获取日期与时间|
| ---------------------------------| ----------------|
|new Date().toLocaleDateString()|获取当前日期|
|new Date().toLocaleTimeString()|获取当前时间|
|new Date().getDullYear();|获取年|
|new Date().getMonth+1|获取月|
|new Date().getDate()|获取日|
|new Date().getHours()|获取小时|
|new Date().getMinutes()|获取分|
|new Date().getSeconds()|获取秒|

### 2.保留小数后两位

```hljs
var num = 20;
msg.payload = num.toFixed(2);
return msg;
```

### 3.字符串处理

|//保留小数后2位，a是字符串类型|a\=a.toFixed(2)|
| --------------------------------| ------------------------|
|//字符串转浮点|a\=parseFloat(a,10)|
|//字符串转数字|parseInt(a)|
|//字符串转10进制数字|parseInt(a,10)|
|//字符串转数字|Number(a)|
|//将a转为16进制|a\=a.toString(16)|
|//四舍五入|a\=Math.round(a)|
|//获得0-1之间随机数|a\=Math.random()|
