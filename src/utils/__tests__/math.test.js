import times from 'lodash/times'
import { costIncreaseFromDev } from 'utils/math'

describe('costIncreaseFromDev', () => {
  const rangeComparison = (prevSum, modifier, i) =>
    (prevSum + i * modifier) / 100

  it('returns 0 in ranges of 1-9', () => {
    times(9, i => {
      expect(costIncreaseFromDev(++i)).toEqual(0)
    })
  })

  it('returns multiples of 0.03 in ranges of 10-19', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 10)).toEqual(rangeComparison(0, 3, ++i))
    })
  })

  it('returns correct multiples in ranges of 20-29', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 20)).toEqual(rangeComparison(30, 6, ++i))
    })
  })

  it('returns correct multiples in ranges of 30-39', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 30)).toEqual(rangeComparison(90, 9, ++i))
    })
  })

  it('returns correct multiples in ranges of 40-49', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 40)).toEqual(rangeComparison(180, 12, ++i))
    })
  })

  it('returns correct multiples in ranges of 50-59', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 50)).toEqual(rangeComparison(300, 15, ++i))
    })
  })

  it('returns correct multiples in ranges of 60-69', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 60)).toEqual(rangeComparison(450, 18, ++i))
    })
  })

  it('returns correct multiples in ranges of 70-79', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 70)).toEqual(rangeComparison(630, 21, ++i))
    })
  })

  it('returns correct multiples in ranges of 80-89', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 80)).toEqual(rangeComparison(840, 24, ++i))
    })
  })

  it('returns correct multiples in ranges of 90-99', () => {
    times(9, i => {
      expect(costIncreaseFromDev(i + 90)).toEqual(
        rangeComparison(1080, 27, ++i)
      )
    })
  })
})
