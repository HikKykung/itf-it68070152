const bal_user = document.getElementById("bal_user")
const bal_cash = document.getElementById("bal_cash")
const pro_type = document.getElementById("pro_type")
const pro_amt = document.getElementById("pro_amt")
const wood = document.getElementById("wood")

let curr_id = 1
let curr_user = Number(bal_user.value)
let curr_cash = Number(bal_cash.value)

function changebal() {
    curr_user = Number(bal_user.value)
    curr_cash = Number(bal_cash.value)
    showBal()
}

function proOperation() {
    if (pro_type.value == "deposit") {
        if (curr_cash >= Number(pro_amt.value)) {
            curr_user += Number(pro_amt.value)
            curr_cash -= Number(pro_amt.value)
            showBal()
        } else {
            addWood("Can't deposit entered balance. (Insufficient cash balance)")
        }
    } else if (pro_type.value == "withdraw") {
        if (curr_cash >= Number(pro_amt.value)) {
            curr_user -= Number(pro_amt.value)
            curr_cash += Number(pro_amt.value)
            showBal()
        } else {
            addWood("Can't withdraw entered balance. (Insufficient cash balance)")
        }
    }
}
function showBal() {
    bal_user.value = Number(curr_user)
    bal_cash.value = Number(curr_cash)
    addWood("Current account balance: " + curr_user + ", Current cash balnce: " + curr_cash)
}

function addWood(text) {
    wood.value = (curr_id++ + ", " + text + "\n" + wood.value).trim() 
}

showBal()