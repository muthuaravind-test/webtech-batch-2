function fun() {
    
    var LoanAmount = parseInt(document.getElementById('LA').value);
    var Annual_Interest_Rate = parseInt(document.getElementById('AIR').value);
    var Tenure = parseInt(document.getElementById('T').value);

    var P = LoanAmount;
    var R = (Annual_Interest_Rate/12)/100;
    var N = Tenure*12;

    var EMI = P * R * ((1+R)**N)/(((1+R)**N) - 1)
    var TR = EMI*12*Tenure;
    var TotalInterest = TR - P;

    document.getElementById('o1').innerHTML = "Loan Amount: ₹"+ Math.ceil(LoanAmount);
    document.getElementById('o2').innerHTML = "Total Interest: ₹"+ Math.ceil(TotalInterest);
    document.getElementById('o3').innerHTML = "EMI: ₹" + Math.floor(EMI);
    document.getElementById('o4').innerHTML = "Total Repayment: ₹" + Math.ceil(TR);
}