const calendarMatching = (
  calendar1: string[][],
  dailyBounds1: [string, string],
  calendar2: string[][],
  dailyBounds2: [string, string],
  meetingDuration: number
) => {
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1)
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2)
  const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2)
  const flattenedCalendar = flattenCalendar(mergedCalendar)
  return getMatchingAvailabilities(flattenedCalendar, meetingDuration)
}

const updateCalendar = (
  calendar: string[][],
  dailyBounds: [string, string]
) => {
  const updatedCalendar = [
    ['0:00', dailyBounds[0]],
    ...calendar,
    [dailyBounds[1], '23:59']
  ]
  return updatedCalendar.map((meeting) => meeting.map(timeToMinutes))
}

const mergeCalendars = (calendar1: number[][], calendar2: number[][]) => {
  const merged: number[][] = []
  let i = 0
  let j = 0
  while (i < calendar1.length && j < calendar2.length) {
    const meeting1 = calendar1[i]
    const meeting2 = calendar2[j]
    if (meeting1[0] < meeting2[0]) {
      merged.push(meeting1)
      i++
    } else {
      merged.push(meeting2)
      j++
    }
  }
  while (i < calendar1.length) merged.push(calendar1[i++])
  while (j < calendar2.length) merged.push(calendar2[j++])
  return merged
}

const flattenCalendar = (calendar: number[][]) => {
  const flattened: number[][] = [calendar[0].slice()]
  for (let i = 1; i < calendar.length; i++) {
    const currentMeeting = calendar[i]
    const previousMeeting = flattened[flattened.length - 1]
    const [currentStart, currentEnd] = currentMeeting
    const [previousStart, previousEnd] = previousMeeting
    if (previousEnd >= currentStart) {
      const newPreviousMeeting = [
        previousStart,
        Math.max(previousEnd, currentEnd)
      ]
    } else {
      flattened.push(currentMeeting.slice())
    }
  }
  return flattened
}

const getMatchingAvailabilities = (
  calendar: number[][],
  meetingDuration: number
) => {
  const matchingAvailabilities: number[][] = []
  for (let i = 1; i < calendar.length; i++) {
    const start = calendar[i - 1][1]
    const end = calendar[i][0]
    const availabilityDuration = end - start
    if (availabilityDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end])
    }
  }

  return matchingAvailabilities.map((meeting) => meeting.map(minutesToTime))
}

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map((str) => +str)
  return hours * 60 + minutes
}

const minutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const hoursString = hours.toString()
  const minutesString = mins < 10 ? '0' + mins.toString() : mins.toString()
  return hoursString + ':' + minutesString
}

const calendar1 = [
  ['9:00', '10:30'],
  ['12:00', '13:00'],
  ['16:00', '18:00']
]
const dailyBounds1: [string, string] = ['9:00', '20:00']
const calendar2 = [
  ['10:00', '11:30'],
  ['12:30', '14:30'],
  ['14:30', '15:00'],
  ['16:00', '17:00']
]
const dailyBounds2: [string, string] = ['10:00', '18:30']
const meetingDuration = 30

console.log(
  calendarMatching(
    calendar1,
    dailyBounds1,
    calendar2,
    dailyBounds2,
    meetingDuration
  )
)

export {}
