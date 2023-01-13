function getRelativeTime(timestampTime) {
  const nowTime = Date.now();
  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;
  const millisecondsPerMonth = millisecondsPerDay * 30;
  const millisecondsPerYear = millisecondsPerDay * 365;

  const diffTime = nowTime - timestampTime;

  if (diffTime < millisecondsPerMinute) {
    return Math.round(diffTime / 1000) + " seconds ago";
  } else if (diffTime < millisecondsPerHour) {
    return Math.round(diffTime / millisecondsPerMinute) + " minutes ago";
  } else if (diffTime < millisecondsPerDay) {
    return Math.round(diffTime / millisecondsPerHour) + " hours ago";
  } else if (diffTime < millisecondsPerMonth) {
    return Math.round(diffTime / millisecondsPerDay) + " days ago";
  } else if (diffTime < millisecondsPerYear) {
    return Math.round(diffTime / millisecondsPerMonth) + " months ago";
  } else {
    return Math.round(diffTime / millisecondsPerYear) + " years ago";
  }
}

export default getRelativeTime;
