export const b64u = {
  encode(str) {
    return btoa(unescape(encodeURIComponent(str)))
      .replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'')
  },
  decode(str) {
    const pad = '='.repeat((4 - (str.length % 4)) % 4)
    const s = str.replaceAll('-','+').replaceAll('_','/') + pad
    return decodeURIComponent(escape(atob(s)))
  }
}
