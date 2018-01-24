var express = require('express');
var router = express.Router();

var ProviderService = require('../services/provider.service');

/* POST new provider */
router.post('/newprovider', function(request, response) {
  ProviderService.newProvider(request, response)
});

/* GET a provider*/
router.get('/getoneprovider/:provider_id', function(request, response) {
    ProviderService.getOneProvider(request, response)
});

/* GET providers listing */
router.get('/getallproviders', function(request, response) {
    ProviderService.getAllProviders(request, response)
});

/* UPDATE a provider*/
router.put('/updateprovider/:provider_id', function(request, response) {
    ProviderService.updateProvider(request, response)
});

/* DELETE a provider*/
router.delete('/removeprovider/:provider_id', function(request, response) {
    ProviderService.removeProvider(request, response)
});

module.exports = router;
