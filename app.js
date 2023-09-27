let select = document.querySelectorAll('.currency')

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