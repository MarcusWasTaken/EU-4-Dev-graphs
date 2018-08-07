// @flow
import times from 'lodash/times'

export function costIncreaseFromDev(currentDev: number): number {
  const costJumps: Array<number> = times(9, i => {
    ++i
    const jump = 10 * i - 1
    const mod = i * 3
    return Math.min(currentDev > jump ? mod * (currentDev - jump) : 0, mod * 10)
  })
  return costJumps.reduce((a, b) => a + b, 0) / 100
}

export function manaCostToEmbrace(
  currentDev: number,
  devModifier: number
): number {
  let manaCost = 0
  let institutePercent = 0

  while (institutePercent <= 100) {
    const devCost = Math.floor(
      50 * (1 + devModifier + costIncreaseFromDev(currentDev) + Number.EPSILON)
    )
    manaCost += devCost
    currentDev++
    institutePercent =
      Math.floor((institutePercent + (currentDev + Number.EPSILON) / 6) * 100) /
      100
  }

  return manaCost
}

export function manaCostFromRange(
  fromDev: number,
  toDev: number,
  devModifier: number
): Array<{ x: number, y: number }> {
  let data = []

  while (fromDev <= toDev) {
    data.push({
      x: fromDev,
      y: manaCostToEmbrace(fromDev, devModifier)
    })
    fromDev++
  }

  return data
}

export function labelsFromRange(
  fromDev: number,
  toDev: number
): Array<?number> {
  let labels = []

  while (fromDev <= toDev) {
    labels.push(fromDev++)
  }

  return labels
}
