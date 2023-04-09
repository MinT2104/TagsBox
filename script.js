var input = document.querySelector('.content-input input');
var addTag = document.querySelector('.content-input');
var close = document.querySelector('.fa-circle-xmark');
var removeAll = document.querySelector('.content button');
var intial = document.querySelector('.open');


var tags = []
function textInput(){
    addTag.innerHTML=''
    for ( let i=0; i < tags.length; i++) 
    {
        const tag = tags[i];
        addTag.innerHTML += 
        `
                <li> 
                ${tag}
                    <i class="fa-solid fa-circle-xmark" onclick="removeTag()"></i>
                </li>
        `
    }

    
    addTag.appendChild(input)
    input.focus()
    }

textInput()
input.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value=''
        textInput()
    }
    
})

       
        function removeTag(index){
            tags.splice(index, 1)
            textInput()
        }
removeAll.addEventListener('click',() =>{
    addTag.innerHTML=''
    addTag.appendChild(input)
    input.value=''
})
function openTag(){
    setTimeout(()=>{
        addTag.parentElement.parentElement.style.display = 'block'},500
    )
    intial.style.display= 'none'
    
}
