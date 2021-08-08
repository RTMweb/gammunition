import axios from 'axios'

const KEY = process.env.API_KEY
const HEADERS = {
  headers: { Authorization: `Bearer ${KEY}` },
}

const getList = async (record) => {
  const list = await axios.get(
    `https://api.airtable.com/v0/app24nIoWe3Q49B6u/${record}&view=Grid%20view`,
    HEADERS
  )

  return list.data.records
}

export default getList
