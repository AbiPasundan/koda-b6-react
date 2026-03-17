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


// export const getUsers = () => http('/users');
// export const getUser = (id) => http(`/users/${id}`);
// export const createUser = (data) => http('/users', data, { method: 'POST' });
// export const updateUser = (id, data) => http(`/users/${id}`, data, { method: 'PUT' });

const getUsers = () => http('/users');
const getUser = (id) => http(`/users/${id}`);
const createUser = (data) => http('/users', data, { method: 'POST' });
const updateUser = (id, data) => http(`/users/${id}`, data, { method: 'PUT' });
const productCardHome = () => http('/products/home');

export { getUsers, getUser, createUser, updateUser, productCardHome };

export default async function http(url, body, opts = {}) {
  const headers = { "Content-Type": "application/json" };
  
  if (opts.token) {
    headers.Authorization = "Bearer " + opts.token;
  }

  try {
    const response = await fetch(BASE_URL + url, {
      method: opts.method || "GET",
      headers,
      body: body ? JSON.stringify(body) : null
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json(); 
  } catch (err) {
    console.error('API Error:', err);
    throw err; 
  }
}



// export default function http(url, body, opts = {}) {
//   const headers = {
//     "Content-Type": "application/json"
//   }

//   if (opts.token) {
//     headers.Authorization = "Bearer " + opts.token
//   }

//   return fetch(BASE_URL + url, {
//     method: opts.method || "GET",
//     headers,
//     body: body ? JSON.stringify(body) : null
//   })
// }