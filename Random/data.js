let employees = [
    { id: 101, name: "vamsi", sal: 55000 },
    { id: 102, name: "Skyco vivek", sal: 35000 }
]
let createEmployee = (emp,data) => {
    setTimeout(() => {
        employees.push(emp)
        data()
    },3000)
}
let get_Employees = () => {
    setTimeout(() => {
        let ro = ""
        employees.forEach((employee) => {
            ro = ro+ `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.sal}</td>
                            </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = ro
    },1000)
}

createEmployee({ id: 103, name: "ramki", sal: 65000 },get_Employees)
Privacy

