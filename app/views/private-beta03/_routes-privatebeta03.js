

// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// ///Private beta03////


module.exports = function (folderForViews, urlPrefix, router) {

  router.post('/private-beta03/your-details/your-name-answer', function (req, res) {
    var hcpnameoption = req.session.data['hcpname']

    // Check whether the variable matches a condition
    if (hcpnameoption == "No") {
      // 
      res.redirect('/private-beta03/your-details/your-name')
    } else {
      req.session.data['HCPfirstname'] = "Nelson"
      req.session.data['HCPlastname'] = "Noah"
      //
      res.redirect('/private-beta03/your-details/role');
    }
  })

  router.post('/private-beta03/save-your-details/your-name-answer', function (req, res) {
    var hcpnameoption = req.session.data['hcpname']

    // Check whether the variable matches a condition
    if (hcpnameoption == "No") {
      // 
      res.redirect('/private-beta03/save-your-details/your-name')
    } else {
      req.session.data['HCPfirstname'] = "Nelson"
      req.session.data['HCPlastname'] = "Noah"
      //
      res.redirect('/private-beta03/save-your-details/role');
    }
  })

  router.post('/private-beta03/diagnosis/have-other-diagnosis-answer', function (req, res) {
    var relevantdiagnosisoption = req.session.data['RelevantDiagnosis']

    // Check whether the variable matches a condition
    if (relevantdiagnosisoption == "Yes") {
      // 
      res.redirect('/private-beta03/diagnosis/other-diagnosis')
    } else {
      res.redirect('/private-beta03/diagnosis/aware-of-diagnosis');
    }
  })

  router.post('/private-beta03/diagnosis/other-diagnosis-saved/answer', function (req, res) {
    var relevantdiagnosisoption = req.session.data['RelevantDiagnosis']

    // Check whether the variable matches a condition
    if (relevantdiagnosisoption == "Yes") {
      // 
      res.redirect('/private-beta03/diagnosis/other-diagnosis-saved')
    } else {
      res.redirect('/private-beta03/diagnosis/aware-of-diagnosis-saved');
    }
  })

  //Creating a list//

  router.post('/private-beta03/patient-details/find-patient-address-answer', function (req, res) {
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

    res.redirect('/private-beta03/patient-details/patient-address-results')
  }
  )


}