// Write your solution in this file!
let employee = {
    name:"Abdulmajid",
    streetAddress:"Kenya"
}

function updateEmployeeWithKeyAndValue(employee , key , value) {
    return {
        ...employee,
        [key]:value
    }
}

let newEmployee = updateEmployeeWithKeyAndValue({...employee , 
                        "name":"Sam",
                        "streetAddress":"11 Broadway"}
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee , key , value) {
    employee[key] = value
    return employee
}

newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee , "streetAddress" , "12 Broadway")

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee , key) {
    delete employee[key]
    return employee
}

newEmployee =  delete destructivelyUpdateEmployeeWithKeyAndValue(employee , "name")