var ul = document.getElementById('list')
var li

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);




function removeItem(){
    //console.log('remove button clicked')
    li = ul.children
    for (let index=0; index < li.length; index++){
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index])
        }
    }
}

function addItem(){
    var input = document.getElementById('input')
    var myValue = input.value;
    var textnode = document.createTextNode(myValue)

    if(myValue===''){
        // var print = document.createElement('p'); 
        // print.textContent = 'Enter Your TODO' 
        // document.querySelector('body').appendChild(print);
        return false
        
    }else{
        //create li
        li = document.createElement('li');
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        var label = document.createElement('label');

        //add these to the page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        input.value='';//clearing the input field
    }
}