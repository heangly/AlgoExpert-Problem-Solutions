function validIPAddresses(string) {
  // Write your code here.
  const ipFound = [];
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIp = ['', '', '', ''];

    currentIp[0] = string.slice(0, i);
    if (!isValid(currentIp[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIp[1] = string.slice(i, j);
      if (!isValid(currentIp[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIp[2] = string.slice(j, k);
        currentIp[3] = string.slice(k);

        if (isValid(currentIp[2]) && isValid(currentIp[3])) {
          ipFound.push(currentIp.join('.'));
        }
      }
    }
  }
  return ipFound;
}

function isValid(string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  return string.length === stringAsInt.toString().length;
}
