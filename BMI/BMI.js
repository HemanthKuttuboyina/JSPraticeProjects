
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result");
    if(height === "" || height < 0 || isNaN(height))
    {
        result.innerHTML = "Enter Valid Height";
    }
    else if(weight === "" || weight < 0 || isNaN(weight))
    {
        result.innerHTML = "Enter Valid Weight";
    }
    else{
        const bmi = ((height*height)/10000).toFixed(2);
        result.innerText = `${bmi}`;

    }
    console.log(height,weight,result)

})
