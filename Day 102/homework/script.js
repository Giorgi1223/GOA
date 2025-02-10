let advice = document.getElementById('advice')
let id = document.getElementById('num' )
let button = document.getElementById('button')

async function func(){ 
    try{
        let data = await fetch('https://api.adviceslip.com/advice');
        let dataFixed = await data. json();
        return dataFixed;
    }
    catch (er){
        console.error ('There was an error while fetching your data.')
    }
}

(async() => {
    const text = await func();
    advice.textContent - text.slip.advice
    id.textContent = 'ADVICE ${text,slip.id)'
})();


button.addEventListener('click', async () =>{
    const text = await func();
    advice, textcontent = text.slip.advice
    id.textContent = 'ADVICE $(text.slip.id)'
})