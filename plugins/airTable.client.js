const Airtable = require('airtable')

export default function (context, inject) {
  const base = new Airtable({ apiKey: 'keyjXkmALVHr1yPDD' }).base(
    'app24nIoWe3Q49B6u'
  )

  inject('airtable', {
    getRecords,
    getRecordById,
    minifyRecord,
  })

  const table = base('Feature Section')

  async function getRecords() {
    const records = await table
      .select({ maxRecords: 3, view: 'Grid view' })
      .firstPage()
    console.log(records)
  }

  async function getRecordById(id) {
    const record = await table.find(id)
    console.log(record)
  }

  function minifyRecord(record) {
    return {
      id: record.id,
      fields: record.fields,
    }
  }
}
