# condorlabs-backend
CondorLabs Backend Test

# Running the app

Take into account the following steps

1) Download the code
2) Go inside the project folder through your CLI
3) Run 'npm install' in order to install all project dependencies
4) Execute 'npm start' to run the app on localhost (by default: http://localhost:3000)
5) Finally, the APIRest could be consumed using an APIClient or any toolchain like Postman

  # GET Endpoints

  ## /providers/getallproviders
  
  Return the entire list of providers.

  ## /provider/getoneprovider/{provider_id}
  
  Return the provider with the given id.
  
  # POST Endpoints

  ## /providers/newprovider
  
  This endpoint receive a JSON with the following structure: <br>

```json
  {
            "createdAt": "Date",
            "createdBy": "Number",
            "status": "String",
            "assignedTo": "Number",
            "staffStatus": "String",
            "providerType": "String",
            "employerId": "Number",
            "projectedStartDate": "Date",
            "email": "String",
            "middleName": "String",
            "lastName": "String",
            "firstName": "String",
            "updatedBy": "Number",
            "updatedAt": "Date",
            "specialty": "String"
      }
```
  
  Specialty makes reference to a Specialty Name in the SPECIALTIES collection.
    
  # PUT Endpoints
  
  ## /providers/updateprovider/{provider_id}
  
  This endpoint receive a JSON with the following structure: <br>
  
```json
    {
          "createdAt": "Date",
          "createdBy": "Number",
          "status": "String",
          "assignedTo": "Number",
          "staffStatus": "String",
          "providerType": "String",
          "employerId": "Number",
          "projectedStartDate": "Date",
          "email": "String",
          "middleName": "String",
          "lastName": "String",
          "firstName": "String",
          "updatedBy": "Number",
          "updatedAt": "Date",
          "specialty": {
              "name": "String",
              "createdBy": "Number",
              "createdAt": "Date",
              "updatedBy": "Number",
              "updatedAt": "Date"
          }
    }
```DELETE Endpoints

  ## /providers/removeprovider/{provider_id}
  
  Delete a provider identified whit the given id.
