import randomstring from 'randomstring'
import * as types from '../Constants/ActionTypes'

var initState = [
    {
        Product :  {
            id: randomstring.generate(),
            name: " Iphone 4",
            description :" Hat dieu rang",
            image : "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
            price : 15,
            rating :1
        },
        Quantity:4
    },
    {
        Product :  {
            id: randomstring.generate(),
            name: " Iphone 5",
            description :" Hat dieu rang",
            image : "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
            price : 17,
            rating :1
        },
        Quantity:2
    },
    {
        Product :  {
            id: randomstring.generate(),
            name: " Iphone 6",
            description :" Hat dieu rang",
            image : "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
            price : 455,
            rating :1
        },
        Quantity:5
    },

]
const findIndex = (array, product)=>{
    var a = -1
    if(array.length>0){
        array.forEach((element, index) => {
            if(element.Product.id === product.id){
                a = index
            }
            
        });
    }
    
    return a;
    // for (var i=0;i< array.length;i++)
    // {
    //     if(array[i].Product.id === id)
    //     {
    //         return i;
    //     }
    // }
    // return -1;
}
var init = []
var myReducer = (state = init, action)=>{
    var temp =[...state]
    switch (action.type) {
        case types.ADD_CART:
        {   
            var product = action.product;
            // console.log(findIndex(temp, product))
            // console.log()
            // console.log(product.id);
            if (findIndex(temp, product) === -1)
            {
                let obj = {
                    Product : product,
                    Quantity : 1
                }
                temp.push(obj)
                return [...temp];
            }else{
                let index = findIndex(temp, product);
                let obj = {
                    Product : product,
                    Quantity : temp[index].Quantity + 1
                }
                console.log(index )
                temp[index] = obj;
                return [...temp];
            }

        }
        case types.CHANGE_QUANTITY:{
            let {value, id} = action;
            console.log(action)
            
            temp.forEach((e, index)=>{
                if(e.Product.id === id){
                    let obj = {
                        Product: e.Product,
                        Quantity : e.Quantity
                    }
                    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                    if(e.Quantity + value >=1 ){
                        obj.Quantity = e.Quantity + value;
                    }
                    temp[index] = obj;
                }
            })

            // for(let i=0;i< state.length;i++)
            // {
            //     if(state[i].Product.id === id){
            //         state[i].Quantity += value
            //     }
            // }
            return temp

        }
        case types.DELETE_ITEM :{
            var {id}=action;
            temp.forEach((e, index)=>{
                if(e.Product.id === id){
                    temp.splice(index,1)
                }
            })
            return temp;
        }
        default:
            return temp;
    }
}

export default myReducer;