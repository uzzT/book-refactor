// 卫语句代替嵌套条件
// 动机：保持代码清晰

// 卫语句
// 如果某一条件特别罕见，就需要单独检查，并在该条件为 true 时直接返回，这样的单独检查为卫语句（guard clauses）

const employee = {
    isSeparated: true,
    isRetired: false
}

let r1, r2, r3;

// before

function payment() {
    let result;
    if (employee.isSeparated) {
        result = r1
    } else {
        if (employee.isRetired) {
            result = r2
        } else {
            // other code
            // ....
            result = r3
        }
    }
    return result;
}

function payment_refactor() {
    if (employee.isSeparated) return r1;
    if (employee.isRetired) return r2;
    return r3;
}

// 扩展通过反转条件来实现以卫语句取代嵌套条件表达式