

// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// ///Live Version 01////



module.exports = function (folderForViews, urlPrefix, router) {

  router.post('/liveversion03/your-details/your-name-answer', function (req, res) {
    var hcpnameoption = req.session.data['hcpname']

    // Check whether the variable matches a condition
    if (hcpnameoption == "No") {
      // 
      res.redirect('/liveversion03/your-details/your-name')
    } else {
      req.session.data['HCPfirstname'] = "Nelson"
      req.session.data['HCPlastname'] = "Noah"
      //
      res.redirect('/liveversion02/your-details/role');
    }
  })

  //Delete your details/ 

  router.post('/liveversion03/dashboard/your-account-delete', function (req, res) {
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
      res.redirect('/liveversion03/dashboard/your-account-delete-banner')
    } else {
      res.redirect('/liveversion03/save-your-details/check-your-details');
    }
  })

  //User testing//
  router.get('/liveversion03/usertestingoption', function (req, res) {
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

      res.redirect('/liveversion03/sr1-form-sections-testing');
    } else {
      res.redirect('/liveversion03/sr1-form-sections');
    }
  });

  router.get('/liveversion03/index', function (req, res) {
    const data = req.session.data || {};
    const journeyoptions = data['journeyoptions'];

    // Intercept only if coming from confirmation page
    const referer = req.get('Referer') || '';
    const cameFromConfirmation = referer.includes('/liveversion03/confirmation-page');

    if (
      cameFromConfirmation &&
      ["Journey 1", "Journey 2", "Journey 3"].includes(journeyoptions)
    ) {
      res.redirect('/liveversion03/usertesting');
    } else {
      res.render('index'); // Or whatever your index page logic is
    }
  });



  // Confirm your details//


  router.post('/confirm-your-details-options', function (req, res) {
    const confirmyourdetails = req.session.data['confirmyourdetails'];

    if (confirmyourdetails === "No") {
      res.redirect('liveversion03/your-details/confirm-your-name');
    } else {
      res.redirect('liveversion03/sr1-form-sections-testing');
    }
  });

  // Saving new details ///


  router.post('/confirm-organisation-address-options', function (req, res) {
    const confirmyourdetails = req.session.data['confirmyourdetails'];

    if (confirmyourdetails === "No") {
      res.redirect('liveversion03/your-details//save-your-new-details');
    } else {
      res.redirect('liveversion03/your-details/save-your-details');
    }
  });




  router.post('/liveversion03/save-your-details/your-name-answer', function (req, res) {
    var hcpnameoption = req.session.data['hcpname']

    // Check whether the variable matches a condition
    if (hcpnameoption == "No") {
      // 
      res.redirect('/liveversion03/save-your-details/your-name')
    } else {
      req.session.data['HCPfirstname'] = "Nelson"
      req.session.data['HCPlastname'] = "Noah"
      //
      res.redirect('/liveversion03/save-your-details/role');
    }
  })

  router.post('/liveversion03/diagnosis/have-other-diagnosis-answer', function (req, res) {
    var relevantdiagnosisoption = req.session.data['RelevantDiagnosis']

    // Check whether the variable matches a condition
    if (relevantdiagnosisoption == "Yes") {
      // 
      res.redirect('/liveversion03/diagnosis/other-diagnosis')
    } else {
      res.redirect('/liveversion03/diagnosis/aware-of-diagnosis');
    }
  })

  router.post('/liveversion03/diagnosis/other-diagnosis-saved/answer', function (req, res) {
    var relevantdiagnosisoption = req.session.data['RelevantDiagnosis']

    // Check whether the variable matches a condition
    if (relevantdiagnosisoption == "Yes") {
      // 
      res.redirect('/liveversion03/diagnosis/other-diagnosis-saved')
    } else {
      res.redirect('/liveversion03/diagnosis/aware-of-diagnosis-saved');
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


}