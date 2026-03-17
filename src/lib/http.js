// const BASE_URL = "/users"

// export default function http(url, body, opts={}) {
//     const headers = {}
//     if (opts.token) {
//         headers.Authorization = "Bearer" + opts.token
//     }
//     return fetch(BASE_URL, url, {
//         method: opts.method || "GET",
//         body,
//         headers
//     })
// }

const BASE_URL = "https://wildan-backend.camps.fahrul.id"

export default function http(url, body, opts = {}) {
  const headers = {
    "Content-Type": "application/json"
  }

  if (opts.token) {
    headers.Authorization = "Bearer " + opts.token
  }

  return fetch(BASE_URL + url, {
    method: opts.method || "GET",
    headers,
    body: body ? JSON.stringify(body) : null
  })
}