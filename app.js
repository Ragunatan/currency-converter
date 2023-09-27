let select = document.querySelectorAll('.currency')
let btn =  document.getElementById('btn')
let input = document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayObject(res))

function displayObject(res){
    let data = Object.entries(res)
    for(i=0;i<data.length;i++){
        value =data[i][0]
      let opt =   `<option value=${value}>${value}</option>`
      select[0].innerHTML += opt;
      select[1].innerHTML += opt;
    }
}
btn.addEventListener('click' , () => {
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputVal = input.value;
    if(curr1 === curr2){
        alert('Both currencies are same')
    }
    else{
        convert(curr1,curr2,inputVal)
    }
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?${inputVal}=10&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    let output = Object.values(data.rates);
    document.getElementById('result').value = output;
  });
}