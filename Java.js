$(document).ready(function(){
    $(".c1").keyup(function(){
        var LoanAmount = parseInt(document.getElementById('LA').value);
        var Annual_Interest_Rate = parseInt(document.getElementById('AIR').value);
        var Tenure = parseInt(document.getElementById('T').value);
        var P = LoanAmount;
        var R = (Annual_Interest_Rate/12)/100;
        var N = Tenure*12;
        var EMI = P * R * ((1+R)**N)/(((1+R)**N) - 1)
        var TR = EMI*12*Tenure;
        var TotalInterest = TR - P;
        
        $("#o1").html("Loan Amount: Rs."+Math.ceil(LoanAmount));
        $("#o2").html("Total Interest: Rs."+Math.ceil(TotalInterest));
        $("#o3").html("EMI: Rs."+Math.ceil(EMI));
        $("#o4").html("Total Repayment: Rs."+Math.ceil(TR));

    })
})