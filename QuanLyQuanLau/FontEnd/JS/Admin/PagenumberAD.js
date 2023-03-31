let list = document.querySelectorAll('.show-thucpham .thucpham');
const perPage=5;
let thisPage=1;
const totalPage=Math.ceil(list.length/perPage);
console.log(list);

function getPage(thisPage){
    start = (thisPage -1)*perPage;
    end = perPage*thisPage-1;
}

function loadItem(){
    let start = (thisPage -1)*perPage;
    let end = perPage*thisPage-1;
    list.forEach((item,key)=> {
        if(key >= start && key <= end){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
    console.log(start,end);
}

function listPage(){
        const btnPrev=document.querySelector('.pagination .btn-prev');
        btnPrev.addEventListener('click',()=>{
        thisPage--;
        if(thisPage <= 1){
            thisPage=1;
        }
        if(thisPage==1){
            $('.btn-prev').addClass('btn-active');
        }
        $('.btn-next').removeClass('btn-active');
        $('.numberpage li').removeClass('active');
        $('.numberpage li:eq(${thisPage-1})').addClass('active');
        start = (thisPage -1)*perPage;
        end = perPage*thisPage-1;
        loadItem();
        })

        const btnNext=document.querySelector('.btn-next');
        btnNext.addEventListener('click',()=>{
        thisPage++;
        if(thisPage>totalPage){
            thisPage=totalPage;
        }
        if(thisPage==totalPage){
            $('.btn-next').addClass('btn-active');
        }
        $('.btn-prev').removeClass('btn-active');
        $('.numberpage li').removeClass('active');
        $('.numberpage li:eq(${thisPage-1})').addClass('active');
        start = (thisPage -1)*perPage;
        end = perPage*thisPage-1;
        loadItem();
        })
}

function changePage(){
    const currenPage=document.querySelectorAll('.numberpage li');
    console.log(currenPage);
    for(let i=0;i<currenPage.length;i++){
        currenPage[i].addEventListener('click',()=>{
            let value = i+1;
            thisPage = value;
            $('.numberpage li').removeClass('active');
            currenPage[i].classList.add('active');
            if(thisPage >1 && thisPage < totalPage){
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if(thisPage==1){
                $('.btn-prev').addClass('btn-active');
            }
            if(thisPage==totalPage){
                $('.btn-next').addClass('btn-active');
            }
            getPage(thisPage);
            console.log(getPage(thisPage));
            loadItem();
        })
    }
}

loadItem();
listPage();
changePage();