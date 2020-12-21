// 10.1 分解条件表达式
// 动机：突出条件逻辑
// 本质：提炼函数

// before

let result;

if (new Date().getTime() > 2 && 3 >2) {
    result = 1 + 2
} else {
    result = 2 * 3
}

console.log(result)

// after

const condition = () => new Date().getTime() > 2 && 3 >2;
const add = 1 + 2;
const multiple = 2 * 3;


result = condition() ? add : multiple;
