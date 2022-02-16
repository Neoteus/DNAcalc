function calALL() {
    let seq = getSequence();
    setResult(calLength(seq), "length-result");
    setResult(calMW(seq), "molecular-weight-result");
    setResult(calComplementarySequence(seq), "complementary-sequence-result");
}

/**
 * 获取输入的序列
 * @returns {String} 用户输入的DNA序列
 */
function getSequence() {
    return document.getElementById("sequence-input").value;
}

/**
 * 显示输出的结果
 * @param {*} value 值
 * @param {String} elID 显示值的元素ID
 */
function setResult(value, elID) {
    document.getElementById(elID).value = value
}

/**
 * 长度
 */
function calLength(seq) {
    return seq.length
}

function calMW(seq) {
    let counter = { "A": 0, "T": 0, "G": 0, "C": 0 }
    for (let i = 0; i < seq.length; i++) {
        const base = seq[i];
        counter[base]++;
    }
    mw = (counter['A'] * 313.2) + (counter['T'] * 304.2) + (counter['C'] * 289.2) + (counter['G'] * 329.2) + 79.0
    return mw
}

function calComplementarySequence(seq) {
    const pairing = {
        "A": "T", "T": "A", "G": "C", "C": "G",
        "a": "t", "t": "a", "g": "c", "c": "g"
    };
    let legal_input = true;
    let result = seq.split("");
    for (let i = 0; i < result.length; i++) {
        result[i] = pairing[result[i]];
        if (!result[i]) {
            legal_input = false;
            break;
        }
    }
    if (legal_input) {
        result = result.reverse().join("");
    } else {
        result = "只允许输入ATGC（大小写皆可）";
    }
    return result;
}
