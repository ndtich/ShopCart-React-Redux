var initialState = [
    {
        id: 1,
        name : "iPhone 7 Plus",
        image: 'https://didongthongminh.vn/upload_images/2017/10/iphone7-plus-jetblack.png',
        description: "Sản phẩm do Apple sản xuất",
        price: 600,
        inventory: 20,
        rating: 5
    },
    {
        id: 2,
        name : "Samsung galaxy S8",
        image: 'https://didongthongminh.vn/upload_images/2018/06/samsung-galaxy-s8-plus-black.png',
        description: "Sản phẩm do Samsung sản xuất",
        price: 400,
        inventory: 30,
        rating: 3
    },
    {
        id: 3,
        name : "Oppo F1s",
        image: 'https://cdn.didongthongminh.vn/upload_images/2017/10/oppo-f1s-gold.png',
        description: "Sản phẩm do Oppo sản xuất",
        price: 500,
        inventory: 40,
        rating: 4
    },
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
};

export default products;