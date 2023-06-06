/* button scroll to top design */
let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
    if(this.scrollY > 300){
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none';
    }
})
toTop.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Lắng nghe sự kiện click trên các nút "Mua sản phẩm"
const buyButtons = document.querySelectorAll('.btn-more');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const url = `buy.html?id=${productId}`;
    window.location.href = url;
  });
});
