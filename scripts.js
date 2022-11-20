const filterItem=document.querySelector('.items');
const filterImg=document.querySelectorAll('.image');

window.onload=()=>{
   filterItem.onclick =(selectedItem)=>{ 
    if(selectedItem.target.classList.contains('item')){
        filterItem.querySelector('.active').classList.remove('active');
        selectedItem.target.classList.add('active');
        let filterName=selectedItem.target.getAttribute('data-item')
        filterImg.forEach(img => {
            let filter=img.getAttribute('data-item');
           // console.log(filter);
            if(filter==filterName||filterName=='all')
            {
                img.classList.remove('hide');
                img.classList.add('show')
            }
            else{
                img.classList.add('hide');
                img.classList.remove('show');
            }
        });
    }
 }
}