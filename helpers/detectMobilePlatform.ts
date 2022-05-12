export function getMobileOperatingSystem() {
	const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US";
  }

  if (/android/i.test(userAgent)) {
    return "https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "https://apps.apple.com/app/id1528449006?mt=8";
  }

  return "https://apps.apple.com/app/id1528449006?mt=8";
}
