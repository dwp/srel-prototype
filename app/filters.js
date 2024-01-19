//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here


  var filters = {}

  filters.isStringVarDefined = function(templateVar) {
    return !!templateVar && templateVar.length && templateVar !== 'null';
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */

// Add the filters using the addFilter function
Object.entries(filters).forEach(([name, fn]) => addFilter(name, fn))
