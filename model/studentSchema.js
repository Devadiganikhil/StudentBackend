const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    contact: { type: "Number" },
    parentName: { type: "string" },
    parentContact: { type: "Number" },
  },
  {
    collection: "students",
  }
);
module.exports = mongoose.model("Students", studentSchema);
