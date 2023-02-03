// Write your solution in this file!

const employee = {
    name: 'Bill',
    streetAddress: '318 West 125th Street'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = {...employee};
    employees[`${key}`] = `${value}`;
    return employees;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [`${key}`] = `${value}`;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employees = {...employee};
    delete employees[`${key}`];
    return employees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[`${key}`];
    return employee;
}