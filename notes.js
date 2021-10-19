var note=document.getElementById('notes');
var submit=document.getElementById('save');
var parent=document.getElementById('parent');


class card{

    constructor(text){
        if(text!=''){
            this.create(text);
        }
        else{
            alert("Enter the notes");
        }
        
    }
    create(text){
        var msg=document.createElement('div');
        msg.classList.add('card');
        
        var show=document.createElement('textarea');
        show.classList.add('written');
        show.innerHTML=text;
        show.disabled='true';
        var edit=document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML='EDIT';
        edit.addEventListener('click',() => this.edit_note(show));
        var remove=document.createElement('button');
        remove.classList.add('delete');
        remove.innerHTML='remove';
        remove.addEventListener('click',() => this.remove_note(msg));
        parent.appendChild(msg);
        msg.appendChild(show);
        msg.appendChild(edit);
        msg.appendChild(remove);
        note.value='';
        


    }
    edit_note(show){
        show.disabled=!show.disabled;
    }
    remove_note(msg){
        parent.removeChild(msg);
    }
}
submit.addEventListener('click',() =>new card(note.value) );
