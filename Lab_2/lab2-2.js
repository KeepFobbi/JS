function isIPAddress(ip){
    let regexp = "^([0-9]{1,3}[\.]){3}[0-9]{1,3}$"
    if(ip.match(regexp) != null){
        return true
    }
    else return false
}

function findRGBA(text) {
    let regexp = /rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\) \b/gi;
    if (text.match(regexp) != null)
        return text.match(regexp);
    else return null;
}

function findHexColor(text) {
    let regexp = /#([a-f0-9]{3}){1,2}\b/gi;
    if (text.match(regexp) != null)
        return text.match(regexp);
}

function findTags(text, myName) {
    let reg;
    let r = `<${myName}[^<>]+>`;
    reg = new RegExp(r);
    console.log(text.match(reg));
    let regs;
    let rs = `<${myName}>`;
    regs = new RegExp(rs);
    return text.match(regs);

}

function findPosNum(num) {
    let regexp = /([^-]([0-9][.,][0-9])|((?<![-\d])(?<!\d[.,])\d*[0-9](?![.,]?\d)))\b/gi;
    return num.match(regexp);
}

function findDates(strs) {
    let regexp = /([1-2][0-9]{3}[.]((0[1-9]{1})|(1[0-2]{1}))[.]((1[0-9]{1})|(2[0-9]{1})|(3[0-1])))\b/gi;
    return strs.match(regexp);
}