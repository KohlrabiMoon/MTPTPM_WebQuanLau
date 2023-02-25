var menu = document.querySelectorAll(".dropdown > li");


for(var i=0; i<menu.length; i++){
    menu[i].addEventListener('click',function(){
        var menu_item = document.querySelectorAll(".dropdown > li > ul");
        for(var j=0; j<menu_item.length; j++){
            menu_item[j].style.display = "none";
        }
        this.children[1].style.display = "block";
    });
}