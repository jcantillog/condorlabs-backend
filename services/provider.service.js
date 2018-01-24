var ProviderModel = require('../models/providers.model');
var SpecialtyModel = require('../models/specialties.model');

//CREATE
exports.newProvider = function (request, response) {
  var provider = new ProviderModel(request.body);
  SpecialtyModel.findOne({name: request.body.specialty}, function (error, specialty) {
      if(!specialty) {
          return response.status(404).send({
              message: 'Opps! Specialty name not found.'
          });
      }
      if(error) {
          return response.status(500).send({
              message: 'Oops!, an error has occurred while searching of specialty name: '+error
          });
      }
      provider.specialty = specialty;
      provider.save(function (error, provider) {
          if(error) {
              return response.status(500).send({
                  message: 'Oops!, an error has occurred while saving of provider: '+error
              });
          }
          return response.status(200).send({
              message: "Provider created successfully !",
              provider: provider
          });
      });
  });
};

//READ
exports.getOneProvider = function (request, response) {
    ProviderModel.findOne({_id: request.params.provider_id}, function (error, provider) {
        if(!provider) {
            return response.status(404).send({
                message: 'Opps! Provider not found.'
            });
        }
        if(error) {
            return response.status(500).send({
                message: 'Oops!, an error has occurred while searching of provider: '+error
            });
        }

        response.status(200).send({
            message: "Provider obtained successfully !",
            provider: provider
        });
    });
};
exports.getAllProviders = function (request, response) {
    ProviderModel.find({}, function (error, providers) {
        if(!providers) {
            return response.status(404).send({
                message: 'Opps! There are not providers.'
            });
        }
        if(error) {
            return response.status(500).send({
                message: 'Oops!, an error has occurred while searching of providers list: '+error
            });
        }

        response.status(200).send({
            message: "Providers obtained successfully !",
            provider: providers
        });
    });
};

//UPDATE
exports.updateProvider = function (request, response) {
    ProviderModel.findOneAndUpdate({_id: request.params.provider_id}, request.body, function (error, provider) {
        if(!provider) {
            return response.status(404).send({
                message: 'Opps! Provider not found.'
            });
        }
        if(error) {
            return response.status(500).send({
                message: 'Oops!, an error has occurred while searching of provider: '+error
            });
        }

        response.status(200).send({
            message: "Provider updated successfully !"
        });
    });
};

//DELETE
exports.removeProvider = function (request, response) {
    ProviderModel.findOneAndRemove({_id: request.params.provider_id}, function (error, provider) {
        if(!provider) {
            return response.status(404).send({
                message: 'Opps! Provider not found.'
            });
        }
        if(error) {
            return response.status(500).send({
                message: 'Oops!, an error has occurred while searching of provider: '+error
            });
        }

        response.status(200).send({
            message: "Provider removed successfully !",
            provider: provider
        });
    });
};