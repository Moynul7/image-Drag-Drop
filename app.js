

const dragarea = document.querySelector('.d-box'),
dragtext = dragarea.querySelector('h3'),
button = dragarea.querySelector('button'),
input = dragarea.querySelector('input');

let myfile; //undifine value

button.onclick = function(){
    input.click(); 
}

input.addEventListener('change', function () {
    myfile = this.files[0];
    dragarea.classList.add('active');
    showResult();
});

dragarea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragarea.classList.add('active');
    dragtext.textContent = 'Please Upload or Drag File';
});

dragarea.addEventListener('dragleave',  (e) => {
    e.preventDefault();
    dragarea.classList.remove('active');
    dragtext.textContent = 'Drag & Drop';
});


dragarea.addEventListener('drop', (e) => {
    e.preventDefault();
    myfile = e.dataTransfer.files[0];

    showResult();
});

function showResult(){
    let filetype = myfile.type;
    let validfl = ['image/jpg', 'image/png', 'image/jpeg',];

    if(validfl.includes(filetype)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = [`<img src="${imgUrl}" alt="">`];
            dragarea.innerHTML = img;
        } 
        fileReader.readAsDataURL(myfile);


    } else{
        alert('This is file not supported'); // Don't find valid file
        dragarea.classList.remove('active');
        dragtext.textContent = 'Drag & Drop';
    }
}


// const dragarea = document.querySelector('.d-box'),
// dragtext = dragarea.querySelector('h3'),
// button = dragarea.querySelector('button'),
// input = dragarea.querySelector('input');

// let myfile;

// button.onclick = function(){
//     input.click();
// };


// input.addEventListener('change', function(){
//     myfile = this.files[0];
//     dragarea.classList.add('active');
//     showResult();
// });

// dragarea.addEventListener('dragover', (e)=>{
//     e.preventDefault();
//     dragarea.classList.add('active');
//     dragtext.textContent = 'Rlease upload your file';
// });

// dragarea.addEventListener('dragleave', (e)=>{
//     e.preventDefault();
//     dragtext.textContent = 'Drag & Drop';
// });

// dragarea.addEventListener('drop', (e)=>{
//     e.preventDefault();
//     myfile = e.dataTransfer.files[0];
//     showResult();
// });

// function showResult(){
//     let filetype = myfile.type;
//     let Validfl = ['image/jpeg', 'image/jpg', 'image/png'];

//     if(Validfl.includes(filetype)){
//         let fileReader = new FileReader;
        
//         fileReader.onload = () => {
//             let imgUrl = fileReader.result;
//             let img = [`<img src="${imgUrl}" alt="">`];
//             dragarea.innerHTML = img;
//         }
//         fileReader.readAsDataURL(myfile);

//     } else {
//         alert('This is File Not Supported');
//         dragarea.classList.add('active');
//         dragtext.textContent = 'Drag or Drop';
//     }
// }