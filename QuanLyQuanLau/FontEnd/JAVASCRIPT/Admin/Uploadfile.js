// $('input[type="file"]').on('change',function(){
//     var currentIMG = this;
//     var fileData = currentIMG.files[0];
//     var formData = new FormData();
//     formData.append('file',fileData);
//     var ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = function(){
//         if(ajax.status == 200 && ajax.readyState ==4){
//             var imgPath = ajax.responseText;
//             $('#upload-img').attr('src',imgPath);
//             console.log(imgPath);
//         }
//     }
    
//     ajax.open("POST",'InsertTP.html',true);
//     ajax.send(formData);
// });


function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("upload-img");
      preview.src = src;
      preview.style.display = "block";
    }
  }