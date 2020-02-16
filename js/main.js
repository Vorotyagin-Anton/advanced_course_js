const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA22LL?wid=100&hei=100&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1496944005839"},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = "http://dummyimage.com/100x100/4d494d/686a82.gif&text=placeholder+image") => `<div class="product-item">
                                                                                                                            <div class="product-item__image" style="background-image: url(${img})"></div>
                                                                                                                            <h3>${title}</h3>
                                                                                                                            <p>${price}</p>
                                                                                                                            <button class="by-btn">Добавить в корзину</button>
                                                                                                                         </div>`;

const renderProducts = (list) => {
    list.forEach((item, index) => {document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item.title, item.price, item.img))[index])});
};

renderProducts(products);
