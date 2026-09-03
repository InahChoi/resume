import type { Experience } from '../data/resume.types'

function toDate(yearMonth: string) {
  const [year, month] = yearMonth.split('-').map(Number)
  return new Date(year, month - 1, 1)
}

export function monthsBetween(start: string, end: string | null, now = new Date()) {
  const from = toDate(start)
  const to = end ? toDate(end) : new Date(now.getFullYear(), now.getMonth(), 1)
  return Math.max(
    0,
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()),
  )
}

export function formatTotalCareer(experiences: Experience[], now = new Date()) {
  const totalMonths = experiences.reduce(
    (sum, experience) => sum + monthsBetween(experience.start, experience.end, now),
    0,
  )
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  return `${years}년 ${months}개월`
}
