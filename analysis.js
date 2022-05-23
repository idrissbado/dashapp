const XLSX = require("xlsx");
const workboo = XLSX.readFile('datah.xlsx');
const sheet_nam_list = workboo.SheetNames;
lData = XLSX.utils.sheet_to_json(workboo.Sheets[sheet_nam_list[0]]);
console.log(lData);

