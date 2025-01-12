## UTS介绍

**uts 是什么**

uts，全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。

它可以被编译为不同平台的编程语言，如：
- web平台，编译为JavaScript
- Android平台，编译为Kotlin
- iOS平台，编译Swift

uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。

但为了跨端，uts进行了一些约束和特定平台的增补。

过去在js引擎下运行支持的语法，大部分在uts的处理下也可以平滑的在kotlin和swift中使用。但有一些无法抹平，需要使用条件编译。和uni-app的条件编译类似，uts也支持条件编译。写在条件编译里的，可以调用平台特有的扩展语法。

本文是 uts 的基本语法介绍。如想了解 uni-app 下如何开发 uts插件，另见文档[https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)。


## 基本语法
### 声明

uts 有两种声明方式

1. let

    声明一个可重新赋值的变量。语法 `let [变量名] : [类型] = 值;`。

    > 相当于 TypeScript 中的 let，kotlin 中的 var

```ts
let str = "hello"; // 声明一个字符串变量
str = "hello world"; // 重新赋值
```

2. const

    声明一个只读常量，只能为其赋值一次。语法 `const [变量名] : [类型] = 值;`。

    > 相当于 TypeScript 中的 const, kotlin 中的 val

```ts
const str = "hello"; // 声明一个字符串变量
str = "hello world"; // 报错，不允许重新赋值
```

注意事项：

1. 当前 uts 并未限制使用 var 来声明变量，但当使用 var 来声明变量时需要注意不同平台差异
-  编译至 JavaScript 平台时，等同于 JavaScript 平台的 var （存在变量提升现象）
-  编译至 Kotlin 平台时，等同于 Kotlin 平台的 var（允许重新赋值）

### 变量

在 uts 中，使用变量名需要遵守一定的规则。

-   变量名称可以包含数字和字母。

-   除了下划线 \_ 外，不能包含其他特殊字符，包括空格。

-   变量名不能以数字开头。

> 注意：与 TypeScript 不同的是，uts 不允许以 $ 开头命名变量

### 操作符

#### 赋值运算符(Assignment operators)

| 名字                                              | 简写的操作符 | 含义        |
| ------------------------------------------------- | ------------ | ----------- | ---------- |
| 赋值(Assignment)                                  | x = y        | x = y       |
| 加法赋值(Addition assignment)                     | x += y       | x = x + y   |
| 减法赋值(Subtraction assignment)                  | x -= y       | x = x - y   |
| 乘法赋值(Multiplication assignment)               | x \*= y      | x = x \* y  |
| 除法赋值(Division assignment)                     | x /= y       | x = x / y   |
| 求余赋值(Remainder assignment)                    | x %= y       | x = x % y   |
| 左移位赋值(Left shift assignment)                 | x <<= y      | x = x << y  |
| 右移位赋值(Right shift assignment)                | x >>= y      | x = x >> y  |
| 无符号右移位赋值(Unsigned right shift assignment) | x >>>= y     | x = x >>> y |
| 按位与赋值(Bitwise AND assignment)                | x &= y       | x = x & y   |
| 按位异或赋值(Bitwise XOR assignment)              | x ^= y       | x = x ^ y   |
| 按位或赋值(Bitwise OR assignment)                 | x \|= y      | x \|= y     | x = x \| y |

#### 比较运算符(Comparison operators)

| 运算符                              | 描述                                        | 返回 true 的示例 |
| ----------------------------------- | ------------------------------------------- | ---------------- |
| 等于 Equal (==)                     | 如果两边操作数相等时返回 true。             | var1==var2       |
| 不等于 Not equal (!=)               | 如果两边操作数不相等时返回 true             | var1!=var2       |
| 全等 Strict equal (===)             | 两边操作数相等且类型相同时返回 true。       | var1===var2      |
| 不全等 Strict not equal (!==)       | 两边操作数不相等或类型不同时返回 true。     | var1!==var2      |
| 大于 Greater than (>)               | 左边的操作数大于右边的操作数返回 true       | var1>var2        |
| 大于等于 Greater than or equal (>=) | 左边的操作数大于或等于右边的操作数返回 true | var1>=var2       |
| 小于 Less than (<)                  | 左边的操作数小于右边的操作数返回 true       | var1<var2        |
| 小于等于 Less than or equal (<=)    | 左边的操作数小于或等于右边的操作数返回 true | var1<=var2       |

#### 算数运算符(Arithmetic operators)

| 运算符   | 范例 | 描述                                                                                                                                     |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 求余(%)  |      | 二元运算符. 返回相除之后的余数.                                                                                                          |
| 自增(++) |      | 一元运算符. 将操作数的值加一. 如果放在操作数前面 (++x), 则返回加一后的值; 如果放在操作数后面 (x++), 则返回操作数原值,然后再将操作数加一. |
| 自减(--) |      | 一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符.                                                                      |

#### 位运算符(Bitwise operators)

| Operator                        | Usage   | Description                                                                                                      |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| 按位与 AND                      | a & b   | 在 a,b 的位表示中，每一个对应的位都为 1 则返回 1， 否则返回 0.                                                   |
| 按位或 OR                       | a \| b  | 在 a,b 的位表示中，每一个对应的位，只要有一个为 1 则返回 1， 否则返回 0.                                         |
| 按位异或 XOR                    | a ^ b   | 在 a,b 的位表示中，每一个对应的位，两个不相同则返回 1，相同则返回 0.                                             |
| 按位非 NOT                      | ~ a     | 反转被操作数的位。                                                                                               |
| 左移 shift                      | a << b  | 将 a 的二进制串向左移动 b 位,右边移入 0.                                                                         |
| 算术右移                        | a >> b  | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位.(译注:算术右移左边空出的位是根据最高位是 0 和 1 来进行填充的) |
| 无符号右移(左边空出位用 0 填充) | a >>> b | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位，并把左边空出的位都填充为 0                                   |

#### 逻辑运算符(Logical operators)

| 运算符       | 范例             | 描述     |
| ------------ | ---------------- | -------- |
| 逻辑与(&&)   | expr1 && expr2   | (逻辑与) |
| 逻辑或(\|\|) | expr1 \|\| expr2 | (逻辑或) |
| 逻辑非(!)    | !expr            | (逻辑非) |

#### 字符串运算符(String operators)

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。

```ts
console.log("my " + "string"); // console logs the string "my string".
```

#### 条件（三元）运算符(Conditional operator)

条件运算符是 uts 中唯一需要三个操作数的运算符。运算的结果根据给定条件在两个值中取其一。语法为：

`条件 ? 值1 : 值2`

```ts
const status = age >= 18 ? "adult" : "minor";
```

## 基本类型

### 布尔值（Boolean）

有 2 个值分别是：true 和 false。

### 数字（Number）

整数或浮点数，例如： 42 或者 3.14159。

### 字符串（String）

字符串是一串表示文本值的字符序列，例如："hello" 。

### null

一个表明 null 值的特殊关键字。

## 字面量

字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量

在 uts 中，你可以使用各种字面量。这些字面量是按字面意思给出的固定的值，而不是变量

### 数组字面量

数组字面值是一个封闭在方括号对 ([]) 中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当你使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数。

下面的示例用 3 个元素生成数组coffees，它的长度是 3。

```ts
const coffees = ["French Roast", "Colombian", "Kona"]
const a=[3]
console.log(a.length) // 1
console.log(a[0]) // 3
```

数组字面值同时也是数组对象。

### 布尔字面量

布尔类型有两种字面量：true和false。

### 数字字面量

数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量

#### 整数字面量

整数可以用十进制（基数为 10）、十六进制（基数为 16）、二进制（基数为 2）表示。

- 十进制整数字面量由一串数字序列组成，且没有前缀 0。如：`0, 117, -345`

- 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。如：`0x1123, 0x00111 , -0xF1A7`

- 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。如：`0b11, 0b0011 , -0b11`

#### 浮点数字面量

浮点数字面值可以有以下的组成部分：

- 一个十进制整数，可以带正负号（即前缀“+”或“ - ”），
- 小数点（“.”），
- 小数部分（由一串十进制数表示），
- 指数部分。

指数部分以“e”或“E”开头，后面跟着一个整数，可以有正负号（即前缀“+”或“-”）。浮点数字面量至少有一位数字，而且必须带小数点或者“e”（大写“E”也可）。

简言之，其语法是：

```
[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
```

例如：

```ts
3.14
-.2345789 // -0.23456789
-3.12e+12  // -3.12*10^12
.1e-23    // 0.1*10^(-23)=10^(-24)=1e-24
```

### RegExp字面量

正则表达式是字符被斜线围成的表达式。下面是一个正则表达式文字的一个例子。

```ts
const re = /ab+c/;
```

### 字符串字面量

字符串字面量是由双引号（"）对或单引号（'）括起来的零个或多个字符。字符串被限定在同种引号之间；也即，必须是成对单引号或成对双引号。下面的例子都是字符串字面值：

```ts
"foo"
'bar'
"1234"
"one line \n another line"
"John's cat"
```

你可以在字符串字面值上使用字符串对象的所有方法，你也能用对字符串字面值使用类似 String.length 的属性：

```ts
console.log("John's cat".length)
// 将打印字符串中的字符个数（包括空格）
// 结果为：10
```

#### 模板字符串

模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。也被称为“模板字符串”。

```ts
// Basic literal string creation
`In uts '\n' is a line-feed.`

// Multiline strings
`In uts this is
 not legal.`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```
#### 转义特殊字符

|字符	|意思		|
|--		|--			|
|`\b`	|退格符		|
|`\f`	|换页符		|
|`\n`	|换行符		|
|`\r`	|回车符		|
|`\t`	|制表符		|
|`\'`	|单引号		|
|`\"`	|双引号		|
|`\\`	|反斜杠字符	|

## 控制流程

### 条件

#### If 语句

当一个逻辑条件为真，用 if 语句执行一个语句。当这个条件为假，使用可选择的 else 从句来执行这个语句。if 语句如下所示：

```ts
if (condition_1) {
    statement_1;
} else if (condition_2) {
    statement_2;
} else if (condition_n_1) {
    statement_n;
} else {
    statement_last;
}
```

> 注意：if 和 else if 中的条件表达式必须为布尔值

#### switch 语句

switch 语句允许一个程序求一个表达式的值并且尝试去匹配表达式的值到一个 case 标签。如果匹配成功，这个程序执行相关的语句。switch 语句如下所示：

```ts
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   default:
      statements_def
      [break;]
}
```

程序首先查找一个与 expression 匹配的 case 语句，然后将控制权转移到该子句，执行相关的语句。如果没有匹配值， 程序会去找 default 语句，如果找到了，控制权转移到该子句，执行相关的语句。如果没有找到 default，程序会继续执行 switch 语句后面的语句。default 语句通常出现在 switch 语句里的最后面，当然这不是必须的。

可选的 break 语句与每个 case 语句相关联， 保证在匹配的语句被执行后程序可以跳出 switch 并且继续执行 switch 后面的语句。如果 break 被忽略，则程序将继续执行 switch 语句中的下一条语句。

#### 三元表达式

uts 支持使用三元表达式。一个条件后面会跟一个问号（?），如果条件为 true ，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），如果条件为 false ，则冒号后面的表达式 B 将会执行。本运算符经常作为 if 语句的简捷形式来使用。

```ts
function getFee(isMember: boolean): string {
    return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"
```

三元操作符是右结合的，也就是说你可以像这样把它链接起来， 和 if … else if … else if … else 链类似:

```ts
function example(): string {
    return condition1
        ? value1
        : condition2
        ? value2
        : condition3
        ? value3
        : value4;
}

// Equivalent to:

function example(): string {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
}
```

### 循环

#### for

一个 for 循环会一直重复执行，直到指定的循环条件为 false。 一个 for 语句是这个样子的：

```ts
for ([initialExpression]; [condition]; [incrementExpression]) {
    statement;
}
```

当一个 for 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 initialExpression，它将被执行。这个表达式通常会初始化一个或多个循环计数器。
2. 计算 condition 表达式的值。如果 condition 的值是 true，循环中的语句会被执行。如果 condition 的值是 false，for 循环终止。如果 condition 表达式整个都被省略掉了，3. condition 的值会被认为是 true。
3. 循环中的 statement 被执行。如果需要执行多条语句，可以使用块（{ ... }）来包裹这些语句。
4. 如果有更新表达式 incrementExpression，执行更新表达式。
5. 回到步骤 2。

举例：

```ts
for (let i = 0; i < 10; i++) {
    //...
}
```
#### do...while

do...while 语句一直重复直到指定的条件求值得到假值（false）。 一个 do...while 语句看起来像这样：

```ts
do {
    statement;
} while (condition);
```

statement 在检查条件之前会执行一次。要执行多条语句（语句块），要使用块语句（{ ... }）包括起来。 如果 condition 为真（true），statement 将再次执行。 在每个执行的结尾会进行条件的检查。当 condition 为假（false），执行会停止并且把控制权交回给 do...while 后面的语句。

举例：

```ts
let i = 0;
do {
    i += 1;
} while (i < 10);
```

#### while

一个 while 语句只要指定的条件求值为真（true）就会一直执行它的语句块。一个 while 语句看起来像这样：

```ts
while (condition) {
    statement;
}
```

如果这个条件变为假，循环里的 statement 将会停止执行并把控制权交回给 while 语句后面的代码。

条件检测会在每次 statement 执行之前发生。如果条件返回为真， statement 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 while 后面的语句。

要执行多条语句（语句块），要使用语句块 ({ ... }) 包括起来。

举例：

```ts
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}
```

#### break

使用 break 语句来终止循环，switch。

举例：

```ts
for (let i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
}
let x = 0;
while (true) {
    x++;
    if (x > 5) {
        break;
    }
}
```

#### continue

使用 continue 语句来终止当前循环，并在下一次迭代时继续执行循环。

举例：

```ts
for (let i = 0; i < 10; i++) {
    if (i > 5) {
        continue;
    }
}
let x = 0;
while (true) {
    x++;
    if (x > 5) {
        continue;
    }
}
```

### 异常

你可以用 throw 语句抛出一个异常并且用 try...catch 语句捕获处理它。

使用 throw 表达式来抛出异常：

```ts
throw new Error("Hi There!");
```

使用 try……catch 表达式来捕获异常：

```ts

try {
    // 一些代码
} catch (e: Error) {
    // 处理程序
} finally {
    // 可选的 finally 块
}

```

## 函数

函数是 uts 中的基本组件之一。 一个函数是 uts 过程 — 一组执行任务或计算值的语句。要使用一个函数，你必须将其定义在你希望调用它的作用域内。

一个 uts 函数用 function 关键字定义，后面跟着函数名和圆括号。

### 定义函数

#### 函数声明

一个函数定义（也称为函数声明，或函数语句）由一系列的 function 关键字组成，依次为：

-   函数的名称。
-   函数参数列表，包围在括号中并由逗号分隔。
-   函数返回值类型。
-   定义函数的 uts 语句，用大括号{}括起来。

> 注意：函数必须明确标明返回值类型

例如，以下的代码定义了一个简单的 add 函数：

```ts
function add(x: string, y: string): string {
    return x + y;
}
```

#### 函数表达式

虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的；它不必有一个名称。例如，函数 add 也可这样来定义：

```ts
const add = function (x: string, y: string): string {
    return x + y;
};
```

> 注意：函数表达式不支持使用函数名，比如`const add = function add(){}`是不允许的。

### 调用函数

定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。调用函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 add，你可以如下这样调用它：

```ts
add("hello", "world");
```

上述语句通过提供参数 "hello" 和 "world" 来调用函数。函数执行完它的语句会返回值 "hello world"。

### 函数作用域

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。

```ts
const hello = "hello";
const world = "world";

function add(): string {
    return hello + world; // 可以访问到 hello 和 world
}
```

#### 嵌套函数

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以”继承“容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

可以总结如下：

-   内部函数只可以在外部函数中访问。
-   内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

举例：

```ts
function addSquares(a: number, b: number): number {
    function square(x: number): number {
        return x * x;
    }
    return square(a) + square(b);
}
addSquares(2, 3); // returns 13
addSquares(3, 4); // returns 25
addSquares(4, 5); // returns 41
```

#### 命名冲突

当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。

举例：

```ts
function outside(): (x: number) => number {
    let x = 5;
    const inside = function (x: number): number {
        return x * 2;
    };
    return inside;
}

outside()(10); // 返回值为 20 而不是 10
```

命名冲突发生在 return x 上，inside 的参数 x 和 outside 变量 x 发生了冲突。这里的作用链域是{inside, outside}。因此 inside 的 x 具有最高优先权，返回了 20（inside 的 x）而不是 10（outside 的 x）。

### 闭包

闭包是 uts 中最强大的特性之一。uts 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。

但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

举例：

```ts
const pet = function (name: string): () => string {
    //外部函数定义了一个变量"name"
    const getName = function (): string {
        //内部函数可以访问 外部函数定义的"name"
        return name;
    };
    //返回这个内部函数，从而将其暴露在外部函数作用域
    return getName;
};
const myPet = pet("Vivie");
myPet(); // 返回结果 "Vivie"
```
### 函数参数

#### 默认参数

函数参数可以有默认值，当省略相应的参数时使用默认值。

```ts
function multiply(a:number, b:number = 1):number {
  return a*b;
}
multiply(5); // 5
```
### 箭头函数

箭头函数表达式（也称胖箭头函数）相比函数表达式具有较短的语法。箭头函数总是匿名的。

```ts
const arr = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = arr.map(function (s): number {
    return s.length;
});
console.log(a2); // logs [ 8, 6, 7, 9 ]
const a3 = arr.map((s): number => s.length);
console.log(a3); // logs [ 8, 6, 7, 9 ]
```

## 类

uts 中使用关键字 class 声明类

```ts
class Person {
    /*……*/
}
```

类声明由类名以及由花括号包围的类体构成。

### 构造函数

constructor 是一种用于创建和初始化 class 创建的对象的特殊方法。

-   语法：

```ts
constructor([arguments]) { ... }
```

-   描述：

在一个类中只能有一个名为 “constructor” 的特殊方法。 一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。

在一个构造方法中可以使用 super 关键字来调用一个父类的构造方法。

如果没有显式指定构造方法，则会添加默认的 constructor 方法。

如果不指定一个构造函数(constructor)方法, 则使用一个默认的构造函数(constructor)。

-   示例：

```ts
class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}
```

### 继承

uts 允许使用继承来扩展现有的类。

-   语法：

```ts
class ChildClass extends ParentClass { ... }
```

-   描述：

extends 关键字用来创建一个类的子类。

-   示例：

```ts
class Polygon {}

class Square extends Polygon {}
```

#### 覆盖方法

uts 对于可覆盖的成员以及覆盖后的成员需要显式修饰符：

```ts
class Polygon {
    name(): string {
        return "Polygon";
    }
}

class Square extends Polygon {
    override name(): string {
        return "Square";
    }
}
```

Square.name 函数上必须加上 override 修饰符。如果没写，编译器会报错。

#### 覆盖属性

属性与方法的覆盖机制相同。在超类中声明然后在派生类中重新声明的属性必须以 override 开头，并且它们必须具有兼容的类型。

```ts
 class Shape {
     vertexCount: Int = 0
}

class Rectangle extends Shape {
    override  vertexCount = 4
}
```

#### 调用超类实现

派生类中的代码可以使用 super 关键字调用其超类的函数实现：

```ts
class Rectangle {
    draw() {}
}
class FilledRectangle extends Rectangle {
    override draw() {
        super.draw();
    }
}

```

### 实例属性

uts 中实例属性存在于类的每一个实例中。

#### 声明实例属性

uts 可以在类中声明属性，默认可读，可写。

```ts
class Address {
    city: String = "beijing";
}
```

使用一个实例属性，以类实例引用它即可：

```ts
function copyAddress(address: Address): Address {
    const result = new Address();
    result.city = address.city; // 访问 city 属性
    return result;
}
```

#### Getter 与 Setter

uts 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

```ts
const passcode = "secret passcode";
class Employee {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode === "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
```

#### readonly

uts 可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

### 静态属性

使用关键字 static 来将一个属性声明为静态属性。静态属性不会在实例中被调用，而只会被类本身调用。

```ts
class ClassWithStaticField {
    static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
```

### 实例方法

uts 中实例方法存在于类的每一个实例中。

#### 声明实例方法

uts 可以在类中声明实例方法。

```ts
class Rectangle {
    private height:number;
    private width:number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
    calcArea(): number {
        return this.height * this.width;
    }
}
```

使用一个实例方法，以类实例调用它即可：

```ts
const square = new Rectangle(10, 10);
square.calcArea();
```

### 静态方法

使用关键字 static 来将一个方法声明为静态方法。静态方法不会在实例中被调用，而只会被类本身调用。它们经常是工具函数，比如用来创建或者复制对象。

```ts
class ClassWithStaticMethod {
    static staticMethod(): string {
        return "static method has been called.";
    }
}
ClassWithStaticMethod.staticMethod();
```

### 可见性修饰符

类的方法与属性都可以有可见性修饰符。

在 uts 中有三个可见性修饰符：private、 protected、 和 public。 默认可见性是 public。

#### public

在 uts 中可以自由的访问程序里定义的 public 成员，这也是 uts 的默认行为。

#### private

当成员被标记成 private 时，它就不能在声明它的类的外部访问。比如：

```ts
class Cat {
    private name: string = "Cat";
}

new Cat().name; // 错误: 'name' 是私有的.
```

#### protected

protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected 成员在派生类中仍然可以访问。比如：

```ts
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch(): string {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

注意，我们不能在 Person 类外使用 name，但是我们仍然可以通过 Employee 类的实例方法访问，因为 Employee 是由 Person 派生而来的。

## 模块

uts 支持将程序拆分为可按需导入的单独模块，模块中可以导入和导出各种类型的变量，如函数，字符串，数字，布尔值，类等。

### 导出

export 语句可以将一个文件中的函数，类等导出。比如：

```ts
export const name: string = "square";
export function draw() {}
export default class Canvas {} // default 关键词支持默认导出
```

- 导出的函数声明与类声明必须要有名称。
- export 命令可以出现在模块的任何位置，但必需处于模块顶层。
- 在一个文件中，export、import 可以有多个，export default 仅有一个。
- 通过 export 方式导出，在导入时要加{ }，export default 则不需要。

### 导入

import 语句可以将另一个文件中的函数，类等导入到当前文件。比如：

```ts
import { name as name1, draw } from "./canvas.uts" // 支持 as 语法做别名导入
import * as Utils from "./utils.uts" // Test 包含所有 export 的导出
import Canvas from "./canvas.uts" // 对应 export default 的导出
```

示例

```ts
/*-----export [test.js]-----*/
export const name = 'test'
export function test(){
    console.log('test')
}
export default class Test{
    test(){
        console.log('Test.test')
    }
}
```

```ts
import { name } from './test.uts'
import * as testModule from './test.uts'
import Test from './test.uts'
console.log(name)
testModule.test()
const test = new Test()
test.test()
```

## 内置对象

### console

#### debug
在控制台打印 debug 日志
```ts
console.debug(msg1, msg2, msg3)
```
#### error
在控制台打印 error 日志
```ts
console.error(msg1, msg2, msg3)
```
#### info
在控制台打印 info 日志
```ts
console.info(msg1, msg2, msg3)
```
#### log
在控制台打印 log 日志
```ts
console.log(msg1, msg2, msg3)
```
#### warn
在控制台打印 warn 日志
```ts
console.warn(msg1, msg2, msg3)
```

### Array

Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

#### 实例属性

#### length

数组中的元素个数

```ts
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
// expected output: 4
```

#### 实例方法

#### concat

concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```ts
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

#### copyWithin

copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

```ts
const array1 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

#### every

every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

```ts
const isBelowThreshold = (currentValue:number):boolean => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true
```

#### fill

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```ts
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

```
#### filter

filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。

```ts
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word:string):boolean => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```
#### find

find() 方法返回数组中满足提供的测试函数的第一个元素的值。

```ts
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element:number):boolean => element > 10);

console.log(found);
// expected output: 12

```

#### findIndex

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

```ts
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element:number):boolean => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```

#### flat

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```ts
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

#### forEach

forEach() 方法对数组的每个元素执行一次给定的函数。

```ts
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"
```

#### includes

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

```ts
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

```

#### indexOf

indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```ts
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```

#### join

join() 方法将一个数组的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```ts
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

```

#### lastIndexOf

lastIndexOf() 方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

```ts
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

```
#### map

map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

```ts
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x:number):number => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

#### pop

pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

```ts
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```

#### push

push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```ts
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```

#### reduce

reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。

```ts
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue:number, currentValue:number):number => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

```

#### shift

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

#### slice

slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

#### some

some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。

#### splice

splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

#### unshift

unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度（该方法修改原有数组）。

#### 常见操作

- 创建数组
```ts
const fruits = ['Apple', 'Banana']
console.log(fruits.length)
```
- 通过索引访问数组元素
```ts
const first = fruits[0]
// Apple
const last = fruits[fruits.length - 1]
// Banana
```
- 遍历数组
```ts
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```
- 添加元素到数组的末尾
```ts
const newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```
- 删除数组末尾的元素
```ts
const last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```
- 删除数组头部元素
```ts
const first = fruits.shift() // remove Apple from the front
// ["Banana"]
```
- 添加元素到数组的头部
```ts
const newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```
- 找出某个元素在数组中的索引
```ts
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]
const pos = fruits.indexOf('Banana')
// 1
```
- 通过索引删除某个元素
```ts
const removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]
```
- 从一个索引位置删除多个元素
```ts
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]
const pos = 1
const n = 2
const removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems)
// ["Turnip", "Radish"]
```
- 复制一个数组
```ts
const shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```
#### 访问数组元素

数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。

如果指定的索引是一个无效值，将会抛出 IndexOutOfBoundsException 异常

下面的写法是错误的，运行时会抛出 SyntaxError 异常，而原因则是使用了非法的属性名：

```ts
console.log(arr.0) // a syntax error
```


### Date

创建一个 Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

#### 语法

```ts
new Date();
new Date(value);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- uts 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- 
#### 静态方法
#### now

表示自 UNIX 纪元开始（1970 年 1 月 1 日 00:00:00 (UTC)）到当前时间的毫秒数。

```ts
// this example takes 2 seconds to run
const start = Date.now()
console.log('starting timer...')
// expected output: starting timer...
setTimeout(() => {
  const millis = Date.now() - start
  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`)
  // expected output: seconds elapsed = 2
}, 2000)
```

#### 实例方法

#### getDate

根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。

#### getDay

根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天

#### getFullYear

根据本地时间返回指定日期的年份。

#### getHours

根据本地时间，返回一个指定的日期对象的小时。

#### getMilliseconds

根据本地时间，返回一个指定的日期对象的毫秒数。

#### getMinutes

根据本地时间，返回一个指定的日期对象的分钟数。

#### getMonth

指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。

#### getSeconds

根据本地时间，返回一个指定的日期对象的秒数。

#### getTime

返回一个时间的格林威治时间数值。

#### setDate

根据本地时间来指定一个日期对象的天数。

#### setFullYear

根据本地时间为一个日期对象设置年份。

#### setHours

根据本地时间为一个日期对象设置小时数，返回从 1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。

#### setMilliseconds

根据本地时间设置一个日期对象的豪秒数。

#### setMinutes

根据本地时间为一个日期对象设置分钟数。

#### setMonth

根据本地时间为一个日期对象设置月份。

#### setSeconds

根据本地时间设置一个日期对象的秒数。

#### setTime

以一个表示从 1970-1-1 00:00:00 UTC 计时的毫秒数为来为 Date 对象设置时间。


### Error

当运行时错误产生时，Error 对象会被抛出。Error 对象也可用于用户自定义的异常的基础对象。

#### 实例属性

#### message
错误消息。对于用户创建的 Error 对象，这是构造函数的第一个参数提供的字符串。

#### 示例

```ts
try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
```

### JSON

#### 静态方法

#### parse

JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 UTSJSONObject。

```ts
const json = `{"result":true, "count":42}`;
const obj = JSON.parse(json);

console.log(obj["count"]);
// expected output: 42

console.log(obj["result"]);
// expected output: true
```

**注意**

- JSON.parse 解析出来的对象，目前仅支持使用方括号[]访问

#### stringify

JSON.stringify() 方法将一个 uts 对象或值转换为 JSON 字符串

```ts
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([3, 'false', boolean]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

```
### Map

Map 对象保存键值对。任何值（对象或者基本类型）都可以作为一个键或一个值。

#### 实例属性

#### size

返回 Map 对象的成员数量。

```ts
const map1 = new Map<string,string>();
map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');
console.log(map1.size);
// expected output: 3

```

#### 实例方法

#### clear

移除 Map 对象中的所有元素。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'baz');
map1.set(1, 'foo');
console.log(map1.size);
// expected output: 2
map1.clear();
console.log(map1.size);
// expected output: 0
```

##### delete

用于移除 Map 对象中指定的元素。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```

#### get

返回某个 Map 对象中的一个指定元素。

#### has

返回一个布尔值，用来表明 Map 中是否存在指定元素。

#### set

添加或更新一个指定了键（key）和值（value）的（新）键值对。

### Number

Number 对象是经过封装的能让你处理数字值的对象。

#### 实例方法

#### toFixed

toFixed() 方法使用定点表示法来格式化一个数值。

```ts
function financial(x: Number): String {
  return x.toFixed(2);
}
console.log(financial(123.456));
// expected output: "123.46"
console.log(financial(0.004));
// expected output: "0.00"
```

### Set

Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。


#### 实例属性

#### size

返回 Set 对象中元素的个数。

```ts
const set1 = new Set<Any>();

set1.add(42);
set1.add('forty two');
set1.add('forty two');

console.log(set1.size);
// expected output: 2
```

#### 实例方法

#### add

add() 方法用来向一个 Set 对象的末尾添加一个指定的值。

```ts
const set1 = new Set<number>();
set1.add(42);
set1.add(42);
set1.add(13);
set1.forEach((item)=>{
  console.log(item);
  // expected output: 42
  // expected output: 13  
})
```
#### clear

clear() 方法用来清空一个 Set 对象中的所有元素。

```ts
const set1 = new Set<any>();
set1.add(1);
set1.add('foo');
console.log(set1.size);
// expected output: 2
set1.clear();
console.log(set1.size);
// expected output: 0
```

##### delete

delete() 方法可以从一个 Set 对象中删除指定的元素。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```

#### forEach

forEach 方法会根据集合中元素的插入顺序，依次执行提供的回调函数。

#### has

has() 方法返回一个布尔值来指示对应的值 value 是否存在 Set 对象中。

### String

String 全局对象是一个用于字符串或一个字符序列的构造函数。

字符串字面量采取以下形式：

```ts
'string text'
"string text"
"中文/汉语"
"español"
"English "
"हिन्दी"
"العربية"
"português"
"বাংলা"
"русский"
"日本語"
"ਪੰਜਾਬੀ"
"한국어"
```

#### 实例属性

#### length
length 属性表示一个字符串的长度。
```ts
const x = "Mozilla";
const empty = "";

console.log("Mozilla is " + x.length + " code units long");
/* "Mozilla is 7 code units long" */

console.log("The empty string is has a length of " + empty.length);
/* "The empty string is has a length of 0" */
```

#### 实例方法

#### at

at() 方法接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of 5 the character returned is u"
index = -4;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of -4 the character returned is d"
```

#### charAt

charAt() 方法从一个字符串中返回指定的字符。

```ts
const anyString = "Brave new world";

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
// The character at index 0 is 'B'
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
// The character at index 1 is 'r'
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
// The character at index 2 is 'a'
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
// The character at index 3 is 'v'
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
// The character at index 4 is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
// The character at index 999 is ''
```

#### charCodeAt

charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```

#### concat

concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

```ts
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.
```

#### endsWith

endsWith() 方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

```ts
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
// expected output: true
console.log(str1.endsWith('best', 17));
// expected output: true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// expected output: false
```

#### includes

includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

```ts
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```
#### indexOf

indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。

```ts
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

```
#### padEnd

padEnd() 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

```ts
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
const str2 = '200';
console.log(str2.padEnd(5));
// expected output: "200  "
```
#### padStart

padStart() 方法用另一个字符串填充当前字符串 (如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

```ts
const str1 = '5';
console.log(str1.padStart(2, '0'));
// expected output: "05"
```
#### repeat

repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。

```ts
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数 count 将会被自动转换成整数。
```

#### replace

replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。原字符串不会改变。

```ts
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

```
#### search

search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。

```ts
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
```
#### slice

slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

```ts
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
```

#### split

split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

```ts
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
```
#### toLowerCase

toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。

```ts
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans
​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```
#### toUpperCase

toUpperCase() 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

### 定时器

#### setTimeout
设定一个定时器。在定时到期以后执行注册的回调函数
```ts
setTimeout(() => {
  console.log("Delayed for 1 second.")
}, 1000)
```
#### clearTimeout
取消由 setTimeout 设置的定时器。
```ts
const timer = setTimeout(() => {
  console.log("Delayed for 1 second.")
}, 1000)
clearTimeout(timer)
```
#### setInterval
设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
```ts
setInterval(() => {
  console.log(Date.now())
}, 1000)
```
#### clearInterval
取消由 setInterval 设置的定时器。
```ts
const timer = setInterval(() => {
  console.log(Date.now())
}, 1000)
clearInterval(timer)
```

## 关键词

- `as` 
    * 用于类型转换。
    * 为导入指定一个别名
- `break` 
    * 中止当前循环，switch语句，并把程序控制流转到紧接着被中止语句后面的语句。
- `case` 
    * 与 `switch` 搭配使用。
- `catch` 
    * 与 `try` 搭配使用，捕获程序异常。
- `class` 
    * 声明创建一个新类。
- `const` 
    * 声明一个常量，不能重新赋值。
- `continue` 
    * 声明终止当前循环或标记循环的当前迭代中的语句执行，并在下一次迭代时继续执行循环。
- `debugger` 
    * 调用任何可用的调试功能，例如设置断点。 如果没有调试功能可用，则此语句不起作用。
- `default` 
    * 与 `switch` 搭配，匹配不存在时做的事情，也可以用于 `export` 语句。
- `delete` 
    * 在 `Javascript` 平台，用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。
- `do` 
    * 创建一个执行指定语句的循环，直到condition值为 false。在执行statement 后检测condition，所以指定的statement至少执行一次。
- `else` 
    * 与 `if` 搭配使用。
- `export` 
    * 用于模块导出。
- `extends` 
    * 用于 `class` 继承。
- `finally` 
    * 与 `try-catch` 搭配使用。
- `for` 
    * 创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句（通常是一个块语句）。
- `function` 
    * 声明定义一个具有指定参数的函数。
- `if` 
    * 当指定条件为真，if 语句会执行一段语句。如果条件为假，则执行另一段语句。
- `import` 
    * 用于导入由另一个模块导出的绑定。
- `in` 
    * 可在 for 循环中迭代对象。
- `instanceof` 
    * 检测一个值具有指定类型。
- `new` 
    * 创建一个 `class` 实例。
- `return` 
    * 终止函数的执行，并返回一个指定的值给函数调用者。
- `super` 
    * 用于访问和调用一个对象的父对象上的函数。
- `switch` 
    * 评估一个表达式，将表达式的值与case子句匹配，并执行与该情况相关联的语句。
- `this` 
    * 引用当前接收者。
- `throw` 
    * 抛出一个异常。
- `try` ]
    * 捕获一个异常。
- `typeof` 
    * 在 `Javascript` 平台，返回一个字符串，表示未经计算的操作数的类型。
- `var` 
    * 声明一个变量，不建议使用。
- `void` 
    * 表示函数没有返回结果。
- `while` 
    * 在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。
- `with` 
    * 在 `Javascript` 平台，扩展一个语句的作用域链。
- `yield` 
    * 在 `Javascript` 平台，用来暂停和恢复一个生成器函数。
- `enum`
- `implements`
- `interface`
- `let`
- `package`
- `private`
- `protected`
- `public`
- `static`
- `await`
- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `transient`
- `volatile`

## 操作符

- `+`
    * 相加运算符 (+) 用于对两个操作数进行相加运算。
- `+=`
    * 加法赋值操作符 (+=) 将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型确定加法赋值运算符的行为。
- `=`
    * 简单赋值操作符 (=) 用于为变量赋值。赋值表达式本身的值为要赋值的值。
- `&`
    * 按位与运算符 (&) 在两个操作数对应的二进位都为 1 时，该位的结果值才为 1，否则为 0。
- `&=`
    * 按位与赋值运算符（＆=）表示两个操作数的二进制，对它们进行按位 AND 运算并将结果分配给变量。
- `~`
    * 按位非运算符（~），反转操作数的位。
- `|`
    * 按位或运算符（|），如果两位之一为 1 则设置每位为 1。
- `|=`
    * 按位或赋值操作符 (|=) 使用二进制表示操作数，进行一次按位或操作并赋值。
- `^`
    * 按位异或运算符（^），如果两位只有一位为 1 则设置每位为 1。
- `^=`
    * 按位异或赋值操作符 (^=) 使用二进制表示操作数，进行一次按位异或操作并赋值。
- `?`
- `--`
    * 自减运算符 (--) 将它的操作数减一，然后返回操作数。
- `/`
    * 除法运算符 (/) 计算了两个操作数的商，左边的数是被除数，右边的是除数。
- `/=`
- `==`
- `>`
    * 当左边操作数大于右边的时候，大于 (>) 运算符返回true，否则返回false。
- `>=`
    * 当左边操作数大于等于右边的时候，大于等于 (>=) 运算符返回true，否则返回false。
- `++`
    * 自增运算符 (++) 将其操作数递增（加 1）并返回一个值。
- `!=`
- `<<`
    * 左移操作符 (<<) 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。
- `<<=`
    * 左移赋值运算符 (<<=) 将变量向左移动指定数量的位，并将结果赋值给变量。
- `<`
    * 当左边操作数小于右边的时候，小于 (<) 运算符返回true，否则返回false。
- `<=`
    * 当左边操作数小于等于右边的时候，小于等于 (>=) 运算符返回true，否则返回false。
- `&&`
    * 逻辑与
- `&&=`
- `!`
- `??=`
- `||`
    * 逻辑或。
- `||=`
    * 逻辑或赋值（x ||= y）运算仅在 x 为虚值时赋值。
- `*`
    * 乘法运算符 (*) 计算操作数的乘积。
- `*=`
- `??`
- `?.`
    * 可选链运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 运算符的功能类似于 . 链式运算符，不同之处在于，在引用为空 (nullish ) (null) 的情况下不会引起错误。
- `%`
    * 当一个操作数除以第二个操作数时，取余运算符（％）返回剩余的余数。它与被除数的符号保持一致。
- `%=`
- `>>`
    * 右移操作符 (>>) 是将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）。
- `>>=`
    * 右移赋值运算符 (>>=) 将变量向右移动指定数量的位，并将结果赋值给变量。
- `===`
- `!==`
- `-`
- `-=`
- `>>>`
    * 无符号右移运算符（>>>）（零填充右移）将第一个操作数向右移动指定（二进制）位数。
- `>>>=`


## 开发指南

- [使用 uts 开发 uni-app 原生插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
- [Android平台uts开发指南](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html)


## 学习资料

### JavaScript 开发者快速上手 uts

JavaScript 是一门非常灵活的编程语言：

- 没有类型约束，一个变量可能初始化时是字符串，然后又被赋值为数字。
- 因为隐式类型转换的存在，使得变量的类型很难在运行前就确定。
- 基于原型的面向对象编程，原型上的属性或方法可以在运行时被修改。

这种灵活性，一方面使得 JavaScript 蓬勃发展，另一方面也让它的代码质量参差不齐，维护成本高。

而 uts 的类型系统，可以在很大程度上弥补 JavaScript 的缺点。

**uts 是静态类型**

类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。

动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：

```js
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
```

静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。uts 在编译阶段就会进行类型检查，所以 uts 是静态类型，这段 uts 代码在编译阶段就会报错了：

```ts
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```

大部分 JavaScript 代码只需要经过少量的修改，增加类型批注，就可以变成 uts 代码，这跟 ts 非常接近。

举例：

```js
// js 求和两个数字
function add(left, right) {
    return left + right;
}
```

补充类型批注后，即可变成 uts 代码

```ts
// uts 求和
function add(left: number, right: number): number {
    return left + right;
}
```

**hello uts**

目前我们可以通过[开发uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#_3-%E5%BC%80%E5%8F%91uts%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6)来学习 uts。


