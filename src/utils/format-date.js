const basicDateTimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

const basicDateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

function intlDateTimeFormater(timestamp, options) {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(timestamp));
}

export function formatDate(timestamp) {
  return intlDateTimeFormater(timestamp, basicDateOptions)
}

export function formatDateTime(timestamp) {
  return intlDateTimeFormater(timestamp, {
    ...basicDateTimeOptions,
    timeZoneName: "short",
  })
}

export function formatLocalDateTime(timestamp) {
  const localTimestamp = timestamp.toString().slice(0, 19)
  const localTimestampTimezone = timestamp.toString().slice(19, 25)

  const localDate = intlDateTimeFormater(localTimestamp, basicDateTimeOptions)
  
  return `${localDate} (${localTimestampTimezone})`
}
