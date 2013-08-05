/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global XT:true, XM:true, XV:true, exports:true, describe:true, it:true, require:true */

(function () {
  "use strict";

  var crud = require('../lib/crud'),
    data = {
      recordType : "XM.TaxType",
      autoTestAttributes : true,
      createHash: {
        name: "taxType" + Math.random()
      },
      updateHash: {
        name: "updatedType" + Math.random()
      }
    };

  describe('TaxType CRUD Test', function () {
    crud.runAllCrud(data);
  });
}());
