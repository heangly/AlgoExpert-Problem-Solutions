function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return helper(topManager, reportOne, reportTwo).lowestCommonManager
}

const helper = (manager, r1, r2) => {
  let num = 0
  for (const direct of manager.directReports) {
    const info = helper(direct, r1, r2)
    if (!!info.lowestCommonManager) return info
    num += info.num
  }

  if (manager === r1 || manager === r2) num++

  const lowestCommonManager = num === 2 ? manager : null

  return { lowestCommonManager, num }
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name
    this.directReports = []
  }
}
