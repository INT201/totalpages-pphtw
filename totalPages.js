const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems === null || arrayItems === undefined) {
    return undefined
  }
  else if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0) {
    return 1
  }
  let page = arrayItems.length / rowsPerPage
  page = Math.ceil(page)
  return page
}
module.exports = totalPages
