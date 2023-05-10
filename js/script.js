document.querySelector("#BtnRes1").addEventListener("click",ResUno);
document.querySelector("#BtnSum1").addEventListener("click",SumUno);






let CuentaResta=0;

function SumUno() {
   CuentaResta=CuentaResta+1;
   document.getElementById("MsgCuentaResta").textContent = CuentaResta;
}

function ResUno() {
    if (CuentaResta>0)
    CuentaResta=CuentaResta-1;
    document.getElementById("MsgCuentaResta").textContent = CuentaResta;
}
