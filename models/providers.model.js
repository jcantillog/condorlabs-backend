var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProviderSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName: {type: String, required: true},
    email: {type: String, required: true},
    projectedStartDate: {type: Date, required: true},
    employerId: {type: Number, required: true},
    providerType: {type: String, required: true},
    staffStatus: {type: String, required: true},
    assignedTo: {type: Number, required: true},
    status: {type: String, required: true},
    createdBy: {type: Number, required: true},
    createdAt: {type: Date, required: true},
    updatedBy: {type: Number, required: true},
    updatedAt: {type: Date, required: true},
    specialty: {}
});

module.exports = mongoose.model("provider", ProviderSchema);