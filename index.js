const employee = {
    name: 'Sam', 
    streetAddress: '11 Broadway'

}
function updateEmployeeWithKeyAndValue(employee, key, value) {
   
    return {...employee,[key]:value};
    
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key){
    return {...employee[key]};
  }
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value;
    return employee;
}