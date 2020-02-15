import randomstring from 'randomstring';
var initState = [
    {
        id: randomstring.generate(),
        name: " Iphone 199",
        description :" Hat dieu rang",
        image : "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
        price : 15,
        rating :1
    },
    {
        id: randomstring.generate(),
        name: " Iphone 78975546",
        description :" apple",
        image : "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
        price : 15,
        rating:2
    },
    {
        id: randomstring.generate(),
        name: " Dau do",
        description :" sam sung",
        image : "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
        price : 15,
        rating :3
    }
 
]
var Products = (state = initState, action)=>{
    switch (action.type) {
      
        default:
            return [...state]
    }
}
export default Products;