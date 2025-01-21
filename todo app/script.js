let inp = document.querySelector('input');
let btn = document.querySelector('button');
let body = document.querySelector('body');
let ul = document.querySelector('ul');

let h2 = document.createElement('h2')
let ul2 = document.createElement('ul');
let div = document.createElement('div');
h2.innerText = 'Task Completed';
div.appendChild(h2);
div.appendChild(ul2);

body.appendChild(div)

btn.addEventListener('click',function(event){
    let li = document.createElement('li');
    let dbtn = document.createElement('button');
    let cbtn = document.createElement('button');
    event.preventDefault();
    if(inp.value){
        li.innerText = inp.value;
        ul.appendChild(li);
        
        dbtn.innerText = 'Delete';
        li.appendChild(dbtn);
        
        cbtn.innerText = 'Complete'
        li.appendChild(cbtn)
        
        dbtn.style.marginLeft = '20px';
        cbtn.style.marginLeft = '20px';
        dbtn.addEventListener('click',function(){
            li.remove();
        })
        cbtn.addEventListener('click',function(){
            let li2 = document.createElement('li');

            li2.innerText = li.innerText.replace('DeleteComplete','');

            ul2.appendChild(li2);

            ul2.classList.add('li');

            cbtn.remove();
        })
           inp.value = "";
    }
})  

