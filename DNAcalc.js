function calComplementarySequence() {
    const pairing = {
        "A": "T", "T": "A", "G": "C", "C": "G",
        "a": "t", "t": "a", "g": "c", "c": "g"
    };
    let legal_input = true;
    let seq = document.getElementById("sequence-input").value;
    let res = seq.split("").reverse();
    for (let i = 0; i < res.length; i++) {
        res[i] = pairing[res[i]];
        if (!res[i]) {
            legal_input = false;
            break;
        }
    }
    if (legal_input) {
        res = res.join("");
    } else {
        res = "只允许输入ATGC（大小写皆可）"
    }
    document.getElementById("complementary-sequence-output").value = res;
}

function calLength() {
    let seq = document.getElementById("sequence-input").value;
    document.getElementById("length-output").value = seq.length;
}