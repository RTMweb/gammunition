import axios from 'axios'

const KEY = process.env.API_KEY
const HEADERS = {
  headers: { Authorization: `Bearer ${KEY}` },
}

const getList = (record) => {
  const list = []

  axios
    .get(
      `https://api.airtable.com/v0/app24nIoWe3Q49B6u/${record}&view=Grid%20view`,
      HEADERS
    )
    .then((res) => {
      list.value = res.data.records.map((record) => {
        return { ...record.fields, id: record.id }
      })
    })

  return { list }
}

export default getList
