import { useEffect, useState } from "react"

export function useData() {
  const [users, setUsers] = useState([])
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json"
        )

        const result = await res.json()

        setUsers(result.data)
        setMenu(result.menu)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { users, menu, loading, error }
}