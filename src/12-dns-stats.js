/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  const domainsArrs = domains.map((domain) => domain.split('.').reverse());

  // const maxLength = domainsArrs.reduce((acc, item) => {
  //   let result2;
  //   if (acc.length <= item.length) {
  //     result2 = item.length;
  //   }
  //   return result2;
  // });

  domainsArrs.forEach((domain) => {
    const items = [];
    for (let i = 0; i < domain.length; i++) {
      if (items.length === 0) {
        items.push(`.${domain[i]}`);
      } else if (domain[i]) {
        items.push(`${items[items.length - 1]}.${domain[i]}`);
      }
    }
    items.forEach((item) => {
      if (!result[item]) {
        result[item] = 1;
      } else {
        result[item]++;
      }
    });
  });
  return result;
}

module.exports = getDNSStats;
