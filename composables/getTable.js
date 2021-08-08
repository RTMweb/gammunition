import axios from 'axios'

const KEY = process.env.API_KEY
const HEADERS = {
  headers: { Authorization: `Bearer ${KEY}` },
}

const getTable = async (record, id) => {
  const table = await axios.get(
    `https://api.airtable.com/v0/app24nIoWe3Q49B6u/${record}/${id}`,
    HEADERS
  )
  // .then((res) => {
  //   table = { ...res.data.fields }
  //   // const info = res.data.fields
  //   // fields.subtitle = info.SubTitle
  //   // fields.title = info.Title
  //   // fields.text = info.Text
  // })

  return table.data.fields
}

export default getTable
