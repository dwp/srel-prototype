

// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// ///Live Version 03////



module.exports = function (folderForViews, urlPrefix, router) {

  router.post('/live-version03/your-details/your-name-answer', function (req, res) {
    var hcpnameoption = req.session.data['hcpname']

    // Check whether the variable matches a condition
    if (hcpnameoption == "No") {
      // 
      res.redirect('/live-version03/your-details/your-name')
    } else {
      req.session.data['HCPfirstname'] = "Nelson"
      req.session.data['HCPlastname'] = "Noah"
      //
      res.redirect('/live-version03/your-details/role');
    }
  })

  //Delete your details/ 

  router.post('/live-version03/dashboard/your-account-delete', function (req, res) {
    var deletedetailsoption = req.session.data['deletedetails']

    // Check whether the variable matches a condition
    if (deletedetailsoption == "Yes") {
      // 
      req.session.data['HCPfirstname'] = ""
      req.session.data['HCPlastname'] = ""
      req.session.data['HCPRegistrationnumbersaved'] = ""
      req.session.data['HCPRegistrationNumber'] = ""
      req.session.data['HCPmobileNumber'] = ""
      req.session.data['saveyourdetails'] = ""
      req.session.data['yourRolename'] = ""
      req.session.data['yourRole'] = ""
      res.redirect('/live-version03/dashboard/your-account-delete-banner')
    } else {
      res.redirect('/live-version03/save-your-details/check-your-details');
    }
  })

  //User testing//
  router.get('/live-version03/usertestingoption', function (req, res) {
    const data = req.session.data;
    const journeyoptions = data['journeyoptions'];

    if (journeyoptions === "Journey 2" || journeyoptions === "Journey 3") {
      // List of fields to be emptied
      const fieldsToEmpty = [
      //   'PatientFirstName', 'PatientLastName',
      //   'patientdateofbirthday', 'patientdateofbirthmonth', 'patientdateofbirthyear',
      //   'the-diagnosis',
      //   'SpecialRulesDateday', 'SpecialRulesDatemonth', 'SpecialRulesDateyear',
      //   'diagnosis-day', 'diagnosis-month', 'diagnosis-year',
      //   'ClinicalFeaturesdetails', 'treatmentdetails',
      //   'RelevantDiagnosis', 'RelevantDiagnosisinput',
      //   'Diagnosisawareness', 'Prognosisawareness', 
      'confirmyourdetails'
      ];

      // Empty all specified fields
      fieldsToEmpty.forEach(field => {
        data[field] = '';
      });

      res.redirect('/live-version03/sr1-form-sections-testing');
    } else {
      res.redirect('/live-version03/sr1-form-sections');
    }
  });

  router.get('/live-version03/index', function (req, res) {
    const data = req.session.data || {};
    const journeyoptions = data['journeyoptions'];

    // Intercept only if coming from confirmation page
    const referer = req.get('Referer') || '';
    const cameFromConfirmation = referer.includes('/live-version03/confirmation-page');

    if (
      cameFromConfirmation &&
      ["Journey 1", "Journey 2", "Journey 3"].includes(journeyoptions)
    ) {
      res.redirect('/live-version03/usertesting');
    } else {
      res.render('index'); // Or whatever your index page logic is
    }
  });



  // Confirm your details//


  router.post('/confirm-your-details-options', function (req, res) {
    const confirmyourdetails = req.session.data['confirmyourdetails'];

    if (confirmyourdetails === "No") {
      res.redirect('live-version03/your-details/confirm-your-name');
    } else {
      res.redirect('live-version03/sr1-form-sections-testing');
    }
  });

  // Saving new details ///


  router.post('/confirm-organisation-address-options', function (req, res) {
    const confirmyourdetails = req.session.data['confirmyourdetails'];

    if (confirmyourdetails === "No") {
      res.redirect('live-version03/your-details//save-your-new-details');
    } else {
      res.redirect('live-version03/your-details/save-your-details');
    }
  });




  router.post('/live-version03/save-your-details/your-name-answer', function (req, res) {
    var hcpnameoption = req.session.data['hcpname']

    // Check whether the variable matches a condition
    if (hcpnameoption == "No") {
      // 
      res.redirect('/live-version03/save-your-details/your-name')
    } else {
      req.session.data['HCPfirstname'] = "Nelson"
      req.session.data['HCPlastname'] = "Noah"
      //
      res.redirect('/live-version03/save-your-details/role');
    }
  })

  router.post('/live-version03/diagnosis/have-other-diagnosis-answer', function (req, res) {
    var relevantdiagnosisoption = req.session.data['RelevantDiagnosis']

    // Check whether the variable matches a condition
    if (relevantdiagnosisoption == "Yes") {
      // 
      res.redirect('/live-version03/diagnosis/other-diagnosis')
    } else {
      res.redirect('/live-version03/diagnosis/aware-of-diagnosis');
    }
  })

  router.post('/live-version03/diagnosis/other-diagnosis-saved/answer', function (req, res) {
    var relevantdiagnosisoption = req.session.data['RelevantDiagnosis']

    // Check whether the variable matches a condition
    if (relevantdiagnosisoption == "Yes") {
      // 
      res.redirect('/live-version03/diagnosis/other-diagnosis-saved')
    } else {
      res.redirect('/live-version03/diagnosis/aware-of-diagnosis-saved');
    }
  })

  //Creating a list//

  router.post('/live-version03/patient-details/find-patient-address-answer', function (req, res) {
    var nationsoption = req.session.data['organisationSignin']

    // Check whether the variable matches a condition
    if (nationsoption == "NHS Scotland") {
      var NHSScotland = [
        "17 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "170 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "171 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "172 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "173 Whitehall Farm Road, Musselburgh, EH21 6UU"
      ]
      req.session.data['addresslist'] = NHSScotland
    }

    else if (nationsoption == "NHS Wales") {
      var NHSWales = [
        "17 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "170 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "171 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "172 Whitehall Farm Road, Musselburgh, EH21 6UU",
        "173 Whitehall Farm Road, Musselburgh, EH21 6UU"
      ]
      req.session.data['addresslist'] = NHSWales
    }
    else {
      var defaultnation = [
        "17 Richmond Road, Staines-upon-Thames, SU1 5AS",
        "170 Richmond Road, Staines-upon-Thames, SU1 5AS",
        "171 Richmond Road, Staines-upon-Thames, SU1 5AS",
        "172 Richmond Road, Staines-upon-Thames, SU1 5AS",
        "173 Richmond Road, Staines-upon-Thames, SU1 5AS"
      ]
      req.session.data['addresslist'] = defaultnation
    }

    res.redirect('/live-version03/patient-details/patient-address-results')
  }
  )



const YOUR_DETAILS_WHITELIST = new Set([  
  'HCPfirstname', 
   'HCPlastname',  
   'HCPRegistrationnumbersaved', 
    'HCPRegistrationNumber', 
     'HCPmobileNumber',  
     'saveyourdetails', 
      'yourRolename',  
      'yourRole']);function clearSr1FormDataPreservingYourDetails(sessionData) 
      {  Object.keys(sessionData || {}).forEach((key) => {    
        if (!YOUR_DETAILS_WHITELIST.has(key)) 
          {      delete sessionData[key];    }  });}router.get('/live-version04/new-sr1', function (req, res) 
        {  clearSr1FormDataPreservingYourDetails(req.session.data || {});  res.redirect('/live-version04/sr1-form-sections-testing');});``



}