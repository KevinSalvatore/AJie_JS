let qq_number = "631758924";

/**
 *
 * @param qq type String
 * @return type boolean
 * @function 判断QQ号是否合格
 * @description 只能是数字，长度5位以上，13位以下
 */
const is_valid_qq = qq => {
  if (!qq) return false;
  return /^[0-9]{5,13}$/.test(qq);
};

console.log(is_valid_qq(qq_number));
/**
 *
 * @param {String} enc_qq
 * @param {String} qq
 * @function 解密加密之后的qq帐号
 */
const dec_qq = (enc_qq, qq) => {
  let head = 0;
  let tail = enc_qq.length;
  while (head != tail) {
    qq.push(enc_qq[head++]);
    enc_qq.push(enc_qq[head++]);
    ++tail;
  }
};
let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4],
  qq = [];
dec_qq(enc_qq, qq);
console.log(enc_qq);
console.log(qq);
