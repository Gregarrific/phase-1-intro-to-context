function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(array) {
    let newRecord = [];
    let i=0;
    array.forEach(record => {
        newRecord[i] = createEmployeeRecord(record);
        i++;
    })
    return newRecord;
}
function createTimeInEvent(employeeRecord, time) {
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.slice(-4)),
        date: time.slice(0, 10),
    });
    return employeeRecord;
}
function createTimeOutEvent(employeeRecord, time) {
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time.slice(-4)),
        date: time.slice(0, 10),
    });
    return employeeRecord;
}
function hoursWorkedOnDate(employeeRecord, date) {
    let TimeIn, TimeOut, hoursWorked;
    employeeRecord.timeInEvents.forEach(record => {
        if(record.date === date) {
            TimeIn = record.hour;
        }
    });
    employeeRecord.timeOutEvents.forEach(record => {
        if(record.date === date) {
            TimeOut = record.hour;
        }
    });
    return hoursWorked = (TimeOut - TimeIn) / 100;
}
function wagesEarnedOnDate(employeeRecord, date) {
    let payAmount;
    return payAmount = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour; 
}
function allWagesFor(employeeRecord) {
    let totalPay=0;
    employeeRecord.timeInEvents.forEach(item => {
        totalPay = totalPay + wagesEarnedOnDate(employeeRecord, item.date);
    });
    return totalPay;
}
function calculatePayroll(employeeArray) {
    let totalPayroll = 0;
    employeeArray.forEach(employee => {
        totalPayroll = totalPayroll + allWagesFor(employee);
    });
    return totalPayroll;
}