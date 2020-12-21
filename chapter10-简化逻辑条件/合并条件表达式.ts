// 10.2 合并条件表达式
// 动机：1. 明确条件 2. 便于提炼函数
// 本质：函数提炼

let c1, c2, c3, result1;

// before

function t() {
    if (c1) return {}
    if (c2) return {}
    return { result1 }
}

// after

function r_t() {
    if (c1 && c2) return {}
    return { result1 }
}
