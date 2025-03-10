//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here




// VERSION-1 (ARCHIVED)
router.post('/claimant-journey/who-is-applying/answer', function (req, res) {
  var whoIsApplying = req.session.data['who-is-applying']

  // Check whether the variable matches a condition
  if ((whoIsApplying == "I am applying for myself") || (whoIsApplying == "I am applying for someone else")) {
    // Send user to next page
    res.redirect('/claimant-journey/version-1/questions-v1/special-rules')
  } else {
    // Send user to ineligible page
    res.redirect('/claimant-journey/version-1/questions-v2/')
  }
})


// VERSION-2
router.post('/srel-branching-options/doctor-said-12-months/answer', function (req, res) {
  var doctorSaid12Months = req.session.data['doctor-said-12-months']

  // Check whether the variable matches a condition
  if (doctorSaid12Months == "yes") {
    // Send user to next page
    res.redirect('/srel-branching-options/what-is-your-dob')
  } else {
    // Send user to ineligible page
    res.redirect('/srel-branching-options/not-eligible/apply-through-normal-route')
  }
})

router.post('/srel-branching-options/are-you-a-parent-guardian/answer', function (req, res) {
  var srelAreYouAParentOrGuardian = req.session.data['srelAreYouAParentOrGuardian']

  // Check whether the variable matches a condition
  if (srelAreYouAParentOrGuardian == "yes") {
    // Send user to next page
    res.redirect('/srel-branching-options/national-insurance-number')
  } else {
    // Send user to ineligible page
    res.redirect('/srel-branching-options/not-eligible/need-to-be-parent-or-guardian')
  }
})

router.post('/auth-onboard-v01/who-is-applying/answer', function (req, res) {
  var whoIsApplying = req.session.data['who-is-applying']

  // Check whether the variable matches a condition
  if (whoIsApplying == "Myself") {
    // Send user to next page
    res.redirect('/auth-onboard-v01/sign-in')
  } else {
    // Send user to ineligible page
    res.redirect('/auth-onboard-v01/how-do-you-know-the-applicant')
  }
})




router.post('/hcp-e2e-journey-v01/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v01/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v01/account-d-dashboard')
  }
})
router.post('/hcp-e2e-journey-v01/reminders-1-new/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v01/reminders-2-new')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v01/account-new-dashboard')
  }
})
router.post('/hcp-e2e-journey-v02/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v02/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v02/account-d-dashboard')
  }
})
router.post('/hcp-e2e-journey-v03/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v03/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v03/account-d-dashboard')
  }
})
router.post('/hcp-e2e-journey-v04/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v04/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v04/reminder-settings')
  }
})
router.post('/hcp-e2e-journey-v04/reminders-1-new/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v04/reminders-2-new')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v04/account-new-dashboard')
  }
})
router.post('/hcp-e2e-journey-v05/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v05/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v05/account-d-dashboard')
  }
})
router.post('/hcp-e2e-journey-v06/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v06/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v06/account-d-dashboard')
  }
})
router.post('/hcp-e2e-journey-v07/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v07/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v07/reminder-settings')
  }
})
router.post('/hcp-e2e-journey-v07/reminders-1-new/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v07/reminders-2-new')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v07/account-new-dashboard')
  }
})
router.post('/hcp-e2e-journey-v08/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v08/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v08/account-d-dashboard')
  }
})
router.post('/hcp-e2e-journey-v09/reminders-1/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-v09/reminders-2')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-v09/account-d-dashboard')
  }
})


// Run this code when user wants to delete a form
router.post('/hcp-e2e-journey-v04/delete-form-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deleteForms = req.session.data['want-to-delete']

  // Check whether the variable matches a condition
  if (deleteForms == "Yes") {
    // Send user to next page
    res.redirect('/hcp-e2e-journey-v04/incompleted-sr1-forms-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/hcp-e2e-journey-v04/edit-incomplete-form')
  }

})
router.post('/hcp-e2e-journey-v05/delete-form-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deleteForms = req.session.data['want-to-delete']

  // Check whether the variable matches a condition
  if (deleteForms == "Yes") {
    // Send user to next page
    res.redirect('/hcp-e2e-journey-v05/incompleted-sr1-forms-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/hcp-e2e-journey-v05/edit-incomplete-form')
  }

})
router.post('/hcp-e2e-journey-v06/delete-form-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deleteForms = req.session.data['want-to-delete']

  // Check whether the variable matches a condition
  if (deleteForms == "Yes") {
    // Send user to next page
    res.redirect('/hcp-e2e-journey-v06/incompleted-sr1-forms-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/hcp-e2e-journey-v06/edit-incomplete-form')
  }

})
router.post('/hcp-e2e-journey-v07/delete-form-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deleteForms = req.session.data['want-to-delete']

  // Check whether the variable matches a condition
  if (deleteForms == "Yes") {
    // Send user to next page
    res.redirect('/hcp-e2e-journey-v07/incompleted-sr1-forms-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/hcp-e2e-journey-v07/edit-incomplete-form')
  }

})
router.post('/hcp-e2e-journey-v08/delete-form-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deleteForms = req.session.data['want-to-delete']

  // Check whether the variable matches a condition
  if (deleteForms == "Yes") {
    // Send user to next page
    res.redirect('/hcp-e2e-journey-v08/incompleted-sr1-forms-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/hcp-e2e-journey-v08/edit-incomplete-form')
  }

})

router.post('/hcp-e2e-journey-v09/delete-form-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deleteForms = req.session.data['want-to-delete']

  // Check whether the variable matches a condition
  if (deleteForms == "Yes") {
    // Send user to next page
    res.redirect('/hcp-e2e-journey-v09/incompleted-sr1-forms-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/hcp-e2e-journey-v09/edit-incomplete-form')
  }

})

router.post('/hcp-e2e-journey-mvp01/organisation-registered/answer', function (req, res) {
  var receiveReminder = req.session.data['receiveReminder']

  // Check whether the variable matches a condition
  if (receiveReminder == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp01/organisation-signin-page')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp01/no-permission')
  }
})

router.post('/hcp-e2e-journey-mvp01/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp01/organisation-signin-page')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp01/no-permission')
  }
})

router.post('/hcp-e2e-journey-mvp02/sr1-form-09-radio/answer', function (req, res) {
  var haveOtherDiagnoses = req.session.data['haveOtherDiagnoses']

  // Check whether the variable matches a condition
  if (haveOtherDiagnoses == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp02/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp02/sr1-form-10')
  }
})

router.post('/hcp-e2e-journey-mvp02/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp02/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp02/sr1-form-07');
  }
})

router.post('/hcp-e2e-journey-mvp02/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp02/organisation-signin-page')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp02/no-permission')
  }
})

router.post('/hcp-e2e-journey-mvp03/sr1-form-09-radio/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp03/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp03/sr1-form-10')
  }
})

router.post('/hcp-e2e-journey-mvp03/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp03/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp03/sr1-form-sections');
  }
})

router.post('/hcp-e2e-journey-mvp03/profile-02/answer', function (req, res) {
  var yourRole = req.session.data['yourRole']

  // Check whether the variable matches a condition
  if (yourRole == "Other") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp03/profile-02-other')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp03/profile-03');
  }
})

router.post('/hcp-e2e-journey-mvp03/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp03/organisation-signin-page')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp03/no-permission-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/hcp-e2e-journey-mvp03/no-permission-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/hcp-e2e-journey-mvp03/no-permission-northern-ireland')
  }
})

router.post('/hcp-e2e-journey-mvp03/cookies/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/hcp-e2e-journey-mvp03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/hcp-e2e-journey-mvp03/cookies-reject')
  }
})

router.post('/hcp-e2e-journey-mvp03/cookies-reject/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/hcp-e2e-journey-mvp03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/hcp-e2e-journey-mvp03/cookies-reject')
  }
})

router.post('/hcp-e2e-journey-mvp03/cookies-accept/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/hcp-e2e-journey-mvp03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/hcp-e2e-journey-mvp03/cookies-reject')
  }
})

router.post('/private-beta01/sr1-form-09-radio/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta01/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta01/sr1-form-10')
  }
})

router.post('/private-beta01/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta01/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta01/sr1-form-sections');
  }
})

router.post('/private-beta01/profile-02/answer', function (req, res) {
  var yourRole = req.session.data['yourRole']

  // Check whether the variable matches a condition
  if (yourRole == "Other") {
    // Send user to next reminder page
    res.redirect('/private-beta01/profile-02-other')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta01/profile-03');
  }
})

router.post('/private-beta01/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta01/organisation-signin-page')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta01/no-permission-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta01/no-permission-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta01/no-permission-northern-ireland')
  }
})

router.post('/private-beta01/cookies/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta01/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta01/cookies-reject')
  }
})

router.post('/private-beta01/cookies-reject/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta01/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta01/cookies-reject')
  }
})

router.post('/private-beta01/cookies-accept/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta01/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta01/cookies-reject')
  }
})

router.post('/private-beta01/sr1-form-use-same-profile-details/answer', function (req, res) {
  var useSameProfileDetails = req.session.data['useSameProfileDetails']

  // Check whether the variable matches a condition
  if (useSameProfileDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta01/add-details-to-new-form')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta01/profile-01');
  }
})

router.post('/private-beta01/add-details-to-new-form/answer', function (req, res) {
  var addDetails = req.session.data['addDetails']

  // Check whether the variable matches a condition
  if (addDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta01/sr1-form-sections')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta01/profile-01');
  }
})



///Private beta03////

router.post('/private-beta03/sr1-form-09-radio/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10')
  }
})

router.post('/private-beta03/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-sections');
  }
})

router.post('/private-beta03/profile-02/answer', function (req, res) {
  var yourRole = req.session.data['yourRole']

  // Check whether the variable matches a condition
  if (yourRole == "Other") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-02-other')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-03');
  }
})

router.post('/private-beta03/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/account-home')
  }
})

router.post('/private-beta03/cookies/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-reject/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-accept/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/sr1-form-use-same-profile-details/answer', function (req, res) {
  var useSameProfileDetails = req.session.data['useSameProfileDetails']

  // Check whether the variable matches a condition
  if (useSameProfileDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/add-details-to-new-form')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/add-details-to-new-form/answer', function (req, res) {
  var addDetails = req.session.data['addDetails']

  // Check whether the variable matches a condition
  if (addDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-sections')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/sr1-form-09-radio-saved/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input-saved')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10-saved')
  }
})

////////


router.post('/private-beta03/sr1-form-09-radio/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10')
  }
})

router.post('/private-beta03/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-sections');
  }
})

router.post('/private-beta03/profile-02/answer', function (req, res) {
  var yourRole = req.session.data['yourRole']

  // Check whether the variable matches a condition
  if (yourRole == "Other") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-02-other')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-03');
  }
})

router.post('/private-beta03/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/account-home')
  }
})

router.post('/private-beta03/cookies/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-reject/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-accept/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/sr1-form-use-same-profile-details/answer', function (req, res) {
  var useSameProfileDetails = req.session.data['useSameProfileDetails']

  // Check whether the variable matches a condition
  if (useSameProfileDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/add-details-to-new-form')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/add-details-to-new-form/answer', function (req, res) {
  var addDetails = req.session.data['addDetails']

  // Check whether the variable matches a condition
  if (addDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-sections')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/sr1-form-09-radio-saved/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input-saved')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10-saved')
  }
})

///Private Beta 03///


router.post('/private-beta03/sr1-form-09-radio/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10')
  }
})

router.post('/private-beta03/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-sections');
  }
})

router.post('/private-beta03/profile-02/answer', function (req, res) {
  var yourRole = req.session.data['yourRole']

  // Check whether the variable matches a condition
  if (yourRole == "Other") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-02-other')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-03');
  }
})

router.post('/private-beta03/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/account-home')
  }
})

router.post('/private-beta03/cookies/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-reject/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-accept/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/sr1-form-use-same-profile-details/answer', function (req, res) {
  var useSameProfileDetails = req.session.data['useSameProfileDetails']

  // Check whether the variable matches a condition
  if (useSameProfileDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/add-details-to-new-form')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/add-details-to-new-form/answer', function (req, res) {
  var addDetails = req.session.data['addDetails']

  // Check whether the variable matches a condition
  if (addDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-sections')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/sr1-form-09-radio-saved/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input-saved')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10-saved')
  }
})

////////

router.post('/private-beta03/sr1-form-09-radio/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10')
  }
})

router.post('/private-beta03/sr1-form-05-radio/answer', function (req, res) {
  var niNo = req.session.data['niNo']

  // Check whether the variable matches a condition
  if (niNo == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-05-input')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-sections');
  }
})

router.post('/private-beta03/profile-02/answer', function (req, res) {
  var yourRole = req.session.data['yourRole']

  // Check whether the variable matches a condition
  if (yourRole == "Other") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-02-other')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-03');
  }
})

router.post('/private-beta03/signin-page/answer', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/account-home')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/account-home')
  }
})

router.post('/private-beta03/cookies/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-reject/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/cookies-accept/answer', function (req, res) {
  var cookiesselection = req.session.data['google_analytics']

  // Check whether the variable matches a condition
  if (cookiesselection == "yes") {
    // Send user to cookie accepted page
    res.redirect('/private-beta03/cookies-accept')
  } else {
    // Send user to cookies rejected page
    res.redirect('/private-beta03/cookies-reject')
  }
})

router.post('/private-beta03/sr1-form-use-same-profile-details/answer', function (req, res) {
  var useSameProfileDetails = req.session.data['useSameProfileDetails']

  // Check whether the variable matches a condition
  if (useSameProfileDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/add-details-to-new-form')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/add-details-to-new-form/answer', function (req, res) {
  var addDetails = req.session.data['addDetails']

  // Check whether the variable matches a condition
  if (addDetails == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-sections')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-01');
  }
})

router.post('/private-beta03/sr1-form-09-radio-saved/answer', function (req, res) {
  var otherRelevantDiagnosis = req.session.data['otherRelevantDiagnosis']

  // Check whether the variable matches a condition
  if (otherRelevantDiagnosis == "Yes") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-09-input-saved')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-10-saved')
  }
})

//Devolved Nation///


////////Devolved nations//////

router.post('/private-beta03/sr1-form-04', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-04')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-04-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-04-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-04')
  }
})

router.post('/private-beta03/profile-06', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']

  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-06')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-06-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-06-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-06')
  }
})


router.post('/private-beta03/check-sr1-form', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/check-sr1-form')
  }
})

router.post('/private-beta03/personal-details', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/personal-details')
  }
})


router.post('/private-beta03/sr1-form-04-b', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-04-b')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-04-b-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/sr1-form-04-b-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/sr1-form-04-b')
  }
})

router.post('/private-beta03/profile-06-adding-details', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-06-adding-details')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-06-adding-details-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/profile-06-adding-details-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/profile-06-adding-details')
  }
})

router.post('/private-beta03/personal-details-save', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-save')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-save-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-save-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/personal-details-save')
  }
})

router.post('/private-beta03/check-sr1-form-your-details', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-your-details')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-your-details-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-your-details-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/check-sr1-form-your-details')
  }
})

router.post('/private-beta03/check-sr1-form', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/check-sr1-form-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/check-sr1-form')
  }
})

router.post('/private-beta03/personal-details', function (req, res) {
  var receiveReminder = req.session.data['organisationSignin']
  // Check whether the variable matches a condition
  if (receiveReminder == "NHS England") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details')
  } else if (receiveReminder == "NHS Scotland") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-scotland')
  } else if (receiveReminder == "NHS Wales") {
    // Send user to next reminder page
    res.redirect('/private-beta03/personal-details-wales')
  } else {
    // Send user to the account dashboard page
    res.redirect('/private-beta03/personal-details')
  }
})