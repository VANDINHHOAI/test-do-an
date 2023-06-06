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


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
  
    if (product) {
      document.getElementById('product-image').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-price').textContent = product.price;
      document.getElementById('price_old').textContent = product.price_old;
      document.getElementById('save_price').textContent = product.save_price;
      document.getElementById('description').textContent = product.description;
      document.getElementById('ingredient').textContent = product.ingredient;
    }
  });
  
  // Hàm giả lập lấy thông tin sản phẩm dựa trên ID
  function getProductById(productId) {
    // Giả sử có một danh sách sản phẩm với thông tin
    const products = [
      { id: '1', name: 'Salad rau mùa sốt cam', price: '68.000đ', price_old:'70.000đ', save_price:'2000đ',image:'image/products/1.jpg', description: 'Salad rau mùa sốt cam là sự lựa chọn tuyệt vời cho các tín đồ yêu eat clean. Món ăn có đến 5 loại xà lách (carol, frise, lô lô tím, xà lách mỡ và radicchio tím) kết hợp cùng các loại trái cây như táo, cà chua, ô liu... mang lại nguồn vitamin tổng hợp dồi dào, hỗ trợ tăng cường đề kháng cho cơ thể. Điểm nhấn tạo nên nét chấm phá cho món nằm ở nước sốt cam độc đáo với vị chua ngọt tự nhiên dịu dàng. Salad rau mùa sốt cam thực sự là một bữa tiệc về màu sắc, xua tan cơn nóng mùa hè, đánh thức tối đa vị giác. ',
      ingredient: 'Xà lách carol, xà lách frise, xà lách lô lô tím, xà lách mỡ, xà lách radicchio tím, táo đỏ, táo xanh, cà chua bi, củ cải đường, rau mầm, cà rốt baby, trái olive đen, trái olive xanh.'},
      
      { id: '2', name: 'Salad rau mùa sốt mác mác', price: '68.000đ', price_old:'70.000đ', save_price:'2000đ',image:'image/products/2.jpg', 
      description:'Salad rau mùa sốt mác mác được lựa chọn từ những loại rau củ ẩm thực phương Tây như xà lách lolo, xà lách carron, dầu oliu, kết hợp với hương đồng cỏ nội trong văn hoá ẩm thực Việt Nam là củ dền, táo đỏ, táo xanh, chanh dây và rau quế. Tất cả được hòa quyện dưới lớp sốt mác mác rau mùi được cấu thành bởi 3 thành phần chính là chanh dây, rau mùi và mayonaise, đem đến hương vị độc đáo, giàu vitamin C và chất xơ.',
      ingredient:'Táo đỏ, táo xanh, củ dền, cà rốt, xà lách lolo, xà lách carron, chanh dây, dầu oliu, rau quế, mayonaise,...'},
      
      { id: '3', name: 'Phở cuốn', price: '82.000đ', price_old:'90.000đ', save_price:'8000đ',image:'image/products/3.jpg', 
      description:'Phở cuốn là món ăn được các đầu bếp dành nhiều thời gian dày công chế biến. Với bánh phở tạo ra từ hạt gạo ngâm suốt 12 tiếng liền, sau đó xay và tráng cách thủy mang đến miếng bánh ướt mỏng, dai dai hoàn toàn tự nhiên. Thêm vào đó là sự kết hợp hài hòa cùng nguyên liệu bò Úc thượng hạng tẩm ướp đậm vị và các loại rau thơm nhiệt đới. Khi thưởng thức kèm nước sốt chấm được pha chế đặc biệt mang đến trải nghiệm ẩm thực tuyệt hảo, đầy thú vị.',
      ingredient:'Nạc vai bò Úc, bánh ướt, húng lủi, húng quế, ngò gai, giá sống, cà chua, hành phi, đậu phộng, nước mắm, đường cát Biên Hòa, giấm nuôi, tỏi lột, mè trắng, bột thịt gà, tiêu đen'},
      
      { id: '4', name: 'Gỏi tai heo hoa chuối', price: '125.000đ', price_old:'130.000đ', save_price:'5000đ',image:'image/products/4.jpg', 
      description:'Sử dụng nguyên liệu chuối tây cùng tai heo quen thuộc, các đầu bếp tạo nên sự khác biệt bằng phương pháp luộc hoa chuối để lọc bỏ hết nhựa, tạo cảm giác dễ chịu và an toàn khi ăn. Kết hợp cùng cà rốt, dưa leo, hành tây, củ kiệu, món gỏi chuối tai heo mang màu sắc bắt mắt và những nét chấm phá đặc biệt trong hương vị. Hoàn thiện tất cả là nước mắm chua ngọt dung hòa, tổng thể làm nên món ăn thơm ngon, giàu chất dinh dưỡng và thanh mát ngày hè.',
      ingredient:'Ba rọi heo, tai heo, bắp chuối, cà rốt, dưa leo, hành tây, ớt sừng, tỏi, rau răm, ngò rí, húng cây,...'},
      
      { id: '5', name: 'Gà cuốn lá dứa', price: '168.000đ', price_old:'170.000đ', save_price:'2000đ',image:'image/products/5.jpg', 
      description:'Gà cuốn lá dứa là món ăn mang phong vị ẩm thực Thái Lan, đã được các đầu bếp TASTY Kitchen biến tấu mang đầy mới mẻ và phù hợp với khẩu vị người Việt. Thịt gà lóc xương, giữ nguyên da cắt miếng vừa ăn tẩm ướp suốt hơn 3 tiếng cùng các gia vị đặc trưng của Việt Nam như tỏi, dầu hào, điều,...cân chỉnh với tỷ lệ thích hợp. Thêm điểm nhấn khi kết hợp mùi thơm tự nhiên của lá dứa được trồng tại Đà Lạt cuốn cẩn thận với gà và chiên giòn hấp dẫn. Không chỉ dễ dàng chiêu đãi vị giác món ăn còn mang lại giá trị dinh dưỡng cao, rất tốt cho tim mạch.',
      ingredient:'Đùi gà, lá dứa, xà lách lô lô xanh, xà lách lô lô tím, cà chua bi, hành tây tím, đường cát, tiêu sọ trắng, bột bắp, bột chiên giòn, bột năng, dầu mè, tỏi xay, ngò rí, nước tương, dầu ăn'},
      
      { id: '6', name: 'Ứt gà đút lò phủ lá chanh', price: '185.000đ', price_old:'190.000đ', save_price:'5000đ',image:'image/products/6.jpg', 
      description:'Sử dụng phương pháp nướng cách thủy đặc biệt mang đến hương vị mới mẻ cho món Ức gà đút lò phủ lá chanh vừa giữ được sự mềm dai vừa thấm đều nước sốt hấp dẫn. Với thành phần ức gà giàu đạm, ít béo, kết hợp cùng lá chanh, lá dứa, thịt heo và các loại nấm tạo nên một món ăn đậm đà từ hương đến vị khi dùng kèm cơm trắng. Không chỉ thơm ngon, món ăn còn cung cấp dinh dưỡng phù hợp, là lựa chọn không thể bỏ qua của người ăn kiêng',
      ingredient:'Thịt ức gà, Thịt heo xay, giò sống, nấm mèo, nấm đông cô, tỏi, ớt sừng, phô mai Parmessan, lá chanh, ngũ vị hương, bột ớt cựa gà, bột hành tây, bột ngò, bột tỏi'},
      
      { id: '7', name: 'Sụn gà sóc muối Tây Ninh', price: '135.000đ', price_old:'140.000đ', save_price:'5000đ',image:'image/products/7.jpg', 
      description:'Món sụn gà xóc muối Tây Ninh là một món ăn vặt hoàn hảo với độ giòn từ lớp bột bên ngoài và độ dai dai từ sụn gà bên trong. Các đầu bếp đã sáng tạo khéo léo khi kết hợp muối ớt Tây Ninh và các gia vị hấp dẫn giúp tạo nên một món ăn mới lạ với mùi thơm cùng hương vị đậm đà. Món ăn được gói gọn trong một chiếc tổ chim làm bằng sả chiên, không chỉ đẹp mắt mà thực khách có thể thưởng thức độ giòn thơm, vị vừa ăn.',
      ingredient:'Sụn gà, muối Tây Ninh, trứng gà, sả, nghệ, lá chanh, ớt sừng, hành phi, tỏi phi, tôm khô, chà bông heo, bột chiên xù'},
      
      { id: '8', name: 'Nem lụi nướng mía', price: '158.000đ', price_old:'170.000đ', save_price:'12.000đ',image:'image/products/8.jpg', 
      description:'Nem lụi được biết đến là đặc sản của vùng đất kinh kỳ đồng thời là lựa chọn mà mọi tín đồ yêu thích ẩm thực không thể bỏ qua. Món ăn hấp dẫn ngay từ cái nhìn đầu tiên với màu sắc vàng ươm cùng mùi vị thơm lừng sau khi được nướng lên. Thực khách sẽ cảm nhận trọn vẹn vị đậm đà pha chút mềm dai của thịt heo, giò sống hài hòa với các gia vị đặc biệt. Thêm vào đó, Nem lụi TASTY còn ngon hơn khi dùng kèm bánh tráng, bún tươi, rau sống và nước chấm sền sệt, vị bùi ngậy do chính các đầu bếp TASTY sáng tạo.',
      ingredient:'Mỡ gáy, thịt nạc mông, giò sống heo, mía cây, màu thực phẩm, chất tạo độ dai thực phẩm, bột nở, bột bắp, tiêu đen, tiêu sọ trắng, sả cây, hành tím, tỏi, mật ong, mắm khô, bột ngũ vị hương, bột ngọt, đường cát'},
      
      { id: '9', name: 'Mì spaghetti sốt kem nấm', price: '99.000đ', price_old:'120.000đ', save_price:'21.000đ',image:'image/products/9.jpg', 
      description:'Mì spaghetti sốt kem là món ăn đặc biệt không thể bỏ qua của mọi tín đồ yêu thích ẩm thực nước Ý. Với từng sợi mì vàng óng, mềm dai đấm mình trong nước sốt sền sệt vị béo ngậy, phảng phất mùi thơm đầy hấp dẫn cân bằng với vị mằn mặn của từng lát thịt ba chỉ xông khói, nhấn nhá thêm chút vị ngọt tự nhiên từ nấm đông cô, nấm đùi gà và chẳng thể thiếu một lớp phô mai parmesan bào nhuyển phủ đều bên trên, tất cả hòa quyện mang đến hương vị thơm ngon đúng điệu, dễ dàng đánh thức vị giác của mọi thực khách.',
      ingredient:'Mì spaghetti, ba chỉ xông khói (Bacon), tỏi, hành tây, nấm đông cô, nấm đùi gà, kem sữa nấu, sữa tươi tiệt trùng, trứng gà, phô mai parmesan, dầu ô-liu extra virgin, bơ lạt Anchor, đường cát, muối, tiêu đen'},
      
      { id: '10', name: 'Cơm chiên hải sản', price: '89.000đ', price_old:'99.000đ', save_price:'10.000đ',image:'image/products/10.jpg', 
      description:'Cơm chiên hải sản mang đến hương vị đặc sắc khi dùng nguyên liệu chính là gạo Basmati - môt loại gạo Ấn Độ với những công dụng tuyệt vời cho sức khỏe, cộng hưởng vị ngọt tự nhiên của tôm tươi, thanh cua, trứng cua cùng các nguyên liệu và gia vị phong phú. Bên cạnh đó, lớp trứng bao phủ bên ngoài sẽ giúp lưu giữ độ nóng và hương vị món ăn được nguyên vẹn khi đến tay thực khách.',
      ingredient:'Gạo basmati, Trứng gà, tôm, thanh cua, trứng cá chuồn, bắp hạt, cà rốt, đậu Hà Lan, hành lá, ớt sừng, tỏi, nghệ, mỡ gà, bột gạo, dầu hào'},
      // Thêm các sản phẩm khác vào đây
    ];
  
    return products.find(product => product.id === productId);
  }


  
  var inputField = document.getElementById('inputField');
  var decreaseBtn = document.getElementById('decreaseBtn');
  var increaseBtn = document.getElementById('increaseBtn');

  decreaseBtn.addEventListener('click', function() {
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue)) {
      inputField.value = currentValue - 1;
    }
  });

  increaseBtn.addEventListener('click', function() {
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue)) {
      inputField.value = currentValue + 1;
    }
  });