let linkProz = document.getElementById("link-proz");
let btnSubmit =  document.querySelector("button[type=submit]");
console.log(linkProz);
console.log(btnSubmit);

linkProz.addEventListener("click",(e)=>{
    e.preventDefault(e)
    alert("Não foi possível carregar a página")
})

btnSubmit.addEventListener("click", (e)=>{
  
    e.preventDefault(e)
    alert("Não é possivel enviar menssagem!")
    
})