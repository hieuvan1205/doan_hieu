const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list= document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products= [
    {
        id:1,
        name:"Đường Đen Sữa Đá",
        image:"https://product.hstatic.net/1000075078/product/1686716532_dd-suada_c180c6187e644babbac7019a2070231e.jpg",
        price: 45000,
    },
    {
        id:2,
        name:"Cà Phê Đen Đá",
        image:"//product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_6f4766ec0f8b4e929a8d916ae3c13254_large.jpg",
        price: 45000,
    },
    {
        id:3,
        name:"Cà Phê Sữa Nóng",
        image:"https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_9a47f58888e7444a9979e0d117d49ad3_large.jpg",
        price: 45000
    },
    {
        id:4,
        name:"Cà Phê Đen",
        image:"https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/posts/uong-ca-phe-den-2.webp",
        price: 40000,
    },
    {
        id:5,
        name:"Cà Phê Đá",
        image:"https://product.hstatic.net/1000075078/product/1686716532_dd-suada_c180c6187e644babbac7019a2070231e.jpg",
        price: 45000,
    },
    {
        id:6,
        name:"Cà Phê Đen Nóng",
        image:"https://product.hstatic.net/1000075078/product/espressonong_612688_41d0812d5efb47aaaebaea91a3b206db_large.jpg",
        price: 45000,
    },
    {
        id:7,
        name:"Sữa Đá",
        image:"https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
        price: 45000,
    },
    {
        id:8,
        name:"Bạc Sỉu",
        image:"https://product.hstatic.net/1000075078/product/1639377904_bac-siu_525b9fa5055b41f183088c8e479a9472_large.jpg",
        price: 45000,

    },
    {
        id:9,
        name:"Caramel Macchiato",
        image:"https://product.hstatic.net/1000075078/product/caramel-macchiato_143623_0e070a39d0e54e808db4d91049430b51_large.jpg",
        price: 45000,
    },
    {
        id:10,
        name:" Marble Latte",
        image:"https://product.hstatic.net/1000075078/product/1686716537_dd-latte_785591205184481597a2a79b9331e03b_large.jpg",
        price: 45000,
    },
    {
        id:11,
        name:"Cappuccino",
        image:"https://product.hstatic.net/1000075078/product/capu-da_487470_e06d3835cbc84e51bd635b04d541494e_large.jpg",
        price: 45000,
    },
    {
        id:12,
        name:"Espresso",
        image:"https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_1515261ef60b482eb58e1c545e7410a3_large.jpg",
        price: 45000,
    },
    {
        id:13,
        name:"Americano",
        image:"https://product.hstatic.net/1000075078/product/classic-cold-brew_791256_d4d8388a3d724f879845680c0239ff68_large.jpg",
        price: 45000,
    },
    {
        id:14,
        name:"Latte",
        image:"https://product.hstatic.net/1000075078/product/latte-da_438410_ff2be8d76067434385f8e27b33fed780_large.jpg",
        price: 50000,
    },
    {
        id:15,
        name:"Trà Sữa Khoai Môn",
        image:"https://hunufa.vn/wp-content/uploads/2024/10/hinh-ly-tra-sua-dep-25.webp",
        price: 45000,
    },
    {
        id:16,
        name:"Trà Sữa Truyền Thống",
        image:"https://thuytinhluminarc.com/wp-content/uploads/2022/08/Anh-tra-sua-6-1.jpg",
        price: 39000,
    },
    {
        id:17,
        name:"Trà Sữa Matcha",
        image:"https://lynhuasaigon.com/wp-content/uploads/2022/04/tra-matcha.jpg",
        price: 40000,
    },
    {
        id:18,
        name:"Trà Sữa Socola",
        image:"https://tantienloi.com/upload/filemanager/cach-lam-tra-sua-socola-4.jpg",
        price: 45000,
    },
    {
        id:19,
        name:"Trà Sữa Dâu Tây",
        image:"https://thieuhoafood.com/wp-content/uploads/2022/08/Tra-sua-dau-tay.jpg",
        price: 45000,
    },
    {
        id:20,
        name:"Trà Sữa Socola Đậm",
        image:"https://lynhuasaigon.com/wp-content/uploads/2022/04/tra-sua-socola.jpg",
        price: 45000,
    },
    {
        id:21,
        name:"Trà Sữa Matcha Thạch",
        image:"https://lynhuasaigon.com/wp-content/uploads/2022/04/tra-sua-tran-chau-vang.jpg",
        price: 40000,
    },
    {
        id:22,
        name:"Trà Sữa Coffee",
        image:"https://lynhuasaigon.com/wp-content/uploads/2022/04/ly-tra-sua-matcha.jpg",
        price: 40000,
    },
    {
        id:23,
        name:"Sinh Tố Berry",
        image:"https://cdn.pixabay.com/photo/2023/11/10/04/39/food-8378725_640.jpg",
        price: 35000,
    },
    {
        id:24,
        name:"Sinh Tố 3 Tầng",
        image:"https://cdn.pixabay.com/photo/2015/04/16/13/24/cocktail-725570_640.jpg",
        price: 45000,
    },
    {
        id:25,
        name:"Sinh Tố Bơ",
        image:"https://baobinhduong.vn/image/fckeditor/upload/2020/20200427/images/bo2.jpg",
        price: 45000,
    },
    {
        id:26,
        name:"Sinh Tố Dâu Tây",
        image:"https://png.pngtree.com/thumb_back/fh260/background/20221113/pngtree-strawberry-smoothie-on-white-background-milkshake-nutrition-still-photo-image_3204777.jpg",
        price: 25000,
    },
    {
        id:27,
        name:"Sinh Tố Sầu Riêng",
        image:"https://bearvietnam.vn/wp-content/uploads/2023/06/sinh-to-bo-sau-rieng-5.jpg",
        price: 25000,
    },
    {
        id:28,
        name:"Sinh Tố Việt Quất",
        image:"https://www.shutterstock.com/image-photo/rich-blueberryalmond-smoothie-clear-glass-260nw-2503383111.jpg",
        price: 25000,
    },
    {
        id:29,
        name:"Sinh Tố Xoài",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp-7f10RFGDPavpNLioyXyE7DU7RL4659JQ&s",
        price: 25000,
    },{
        id:30,
        name:"Sinh Tố Kiwi",
        image:"//file.hstatic.net/200000031322/file/cach-pha-che-sinh-to-kiwi-3_5fcc407b434d42a8b19365b5b58e32d0_grande.jpg",
        price: 25000,
    },
    {
        id:31,
        name:"Sinh Tố Măng Cầu",
        image:"https://1shop.vn/datafiles/11/2024-07/46844238-mang-cau.jpeg",
        price: 35000,
    },
    {
        id:32,
        name:"Sinh Tố Nho",
        image:"https://monngon.tv/wp-content/uploads/2020/09/8dcdc1cb24354afd3cc164dbb466f7d8-cach-lam-sinh-to-nho-s.jpg",
        price: 25000,
    },
    {
        id:33,
        name:"Sinh Tố Dưa Hấu",
        image:"https://tiki.vn/blog/wp-content/uploads/2023/04/cach-lam-sinh-to-dua-hau-768x550.jpg",
        price: 20000,
    },
    {
        id:34,
        name:"Măng Cầu Phô Mai",
        image:"https://product.hstatic.net/1000075078/product/1717387907_man-cau-pho-mai_211483feb4e64f6a86bc23552155a3ce_large.jpg",
        price: 40000,
    },
    {
        id:35,
        name:"Nho Phô Mai Tươi",
        image:"https://product.hstatic.net/1000075078/product/1717387602_nho-pho-mai_343a2e5a5bae4da59a7ba19953220f74_large.jpg",
        price: 29000,
    },
    {
        id:36,
        name:"Dâu Phô Mai Tươi",
        image:"https://product.hstatic.net/1000075078/product/1717387639_dau-pho-mai_de092bfb88614bf1bfe9bd9defc6522f_large.jpg",
        price: 30000,
    },
    {
        id:37,
        name:"Mận Phô Mai Tươi",
        image:"https://product.hstatic.net/1000075078/product/1717387385_man-pho-mai_76b43ef7a40b497f94c1ee695b400754_large.jpg",
        price: 30000,
    },
    {
        id:38,
        name:"Cupcake Coffee",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QQju1PrwZSetx1OL6kh8GCAu3bZA56QO0A&s",
        price: 15000,
    },
    {
        id:39,
        name:"Cupcake Socola",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9truXcSQ5lHkSZubh7RUNMcQAC69pgKotnN7vkSO-wdvZBeegH7YTYK9P8bf8RBvdE1o&usqp=CAU",
        price: 15000,
    },
    {
        id:40,
        name:"Tiramiru Socola",
        image:"https://bizweb.dktcdn.net/100/163/301/products/32fbc6237d26cbbd232f7ed8853722ef-df925575-65dd-4cd5-938a-2b769bd2b6c4-1b1b2ad6-c8c8-4be4-bf1e-34da8565ae74-562fc52d-6f6e-4080-8a3d-03c9050a3812.png?v=1701313182080",
        price: 10000,
    },
    {
        id:41,
        name:"Tiramiru Matcha",
        image:"https://www.huongnghiepaau.com/wp-content/uploads/2019/01/lam-banh-tiramisu-tra-xanh.jpg",
        price: 10000,
    },
    {
        id:42,
        name:"Bánh Sừng Bò",
        image:"https://cdn.tgdd.vn/Files/2021/08/06/1373418/cach-lam-banh-sung-bo-banh-croissant-ngan-lop-thom-ngon-noi-tieng-cua-phap-202202150903261906.jpg",
        price: 20000,
    },
    {
        id:43,
        name:"Bánh Kem Dâu",
        image:"https://gato.com.vn/wp-content/uploads/2015/12/gato-d%C3%A2u-t%C3%A2y_2.jpg",
        price: 20000,
    },
    {
        id:44,
        name:"Bánh Cuộn Quế",
        image:"https://blog.onelife.vn/wp-content/uploads/2021/10/cach-lam-banh-mi-cuon-que-banh-banh-ngot-656439737363.jpg",
        price: 25000,
    },
    {
        id:45,
        name:"Croissant trứng muối",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0BMXxdebL6XbLAILqMg7u3U4Jz0vUus-3A&s",
        price: 40000,
    },
    {
        id:46,
        name:"Mochi Trà xanh",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZkYD00hAQcb98FgB4fIR3GjuhD6euuUsBQ&s",
        price: 15000,
    },
    {
        id:47,
        name:"Mochi Socola",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbBpNlWmoPumqfD-RBPRXA-fwvpsytuPQKg&s",
        price: 15000,
    },
    {
        id:48,
        name:"Mochi Dâu Tây",
        image:"https://kisinfood.com.vn/wp-content/uploads/2024/03/1683366315_ks-0110_mochi-strawberry-e1712287505128.jpg",
        price: 14000,
    },
    {
        id:49,
        name:"Mochi Truyền Thống",
        image:"https://file1.hutech.edu.vn/file/editor/cunhannhatban/nguon%20goc.jpg",
        price: 10000,
    },
];

let listCards = [];

const iniApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="${value.image}">
        <div class ="title">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Đặt order</button>
        `;
        list.appendChild(newDiv)
    })
}
iniApp()


const addToCard = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }

    reloadCard();
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML =`
                <div><img src ="${value.image}"></div>
                <div class ="cardTile">${value.name}</div>
                <div class ="cardPrice">${value.price.toLocaleString
                ()}</div>
                
                <div>
                    <button style="background-color:#560bad;"
                    class ="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class ="count">${value.quantity}</div>
                    <button style="background-color:#560bad;"
                    class ="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) => {
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }

    reloadCard();
}