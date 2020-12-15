import Burn from "../slot5/img/burn.jpg";
import khanh from "../slot5/img/khanh.jpg";
import kimAnh from "../slot5/img/kimAnh.jpg";
import mai from "../slot5/img/mai.jpg";
const initialState = {
  data: [
    {
      name: "burn",
      age: 20,
      follower: 5000,
      img: Burn,
      priceBooking: 300000000,
      id: 1
    },
    {
      name: "khanh",
      age: 19,
      follower: 7000,
      img: khanh,
      priceBooking: 500000000,
      id: 2
    },
    {
      name: "kim anh",
      age: 21,
      follower: 4000,
      img: kimAnh,
      priceBooking: 400000000,
      id: 3
    },
    {
      name: "mai",
      age: 22,
      follower: 6000,
      img: mai,
      priceBooking: 350000000,
      id: 4
    }
  ],
  detailGirl: null,
  arrCart: []
};

const girlReducer = (state = initialState, action) => {
  // console.log(action);
  // clone mảng ra
  const arrCartCopy = [...state.arrCart];
  // tìm vị trí
  const index = arrCartCopy.findIndex(item => {
    return item.id === action.payload.id;
  });
  // clone object để tạo countday
  const item = { ...action.payload, countDay: 1 };
  switch (action.type) {
    case "seeDetail":
      state.detailGirl = action.payload;
      break;
    case "addToCart":
      // nếu !==- 1 là tồn tại r thì tăng count <=> push
      if (index !== -1) {
        arrCartCopy[index].countDay += 1;
      } else {
        arrCartCopy.push(item);
      }
      state.arrCart = arrCartCopy;
      
      // thằng cart
      break;
    case "delete":
            console.log(action);
      // tìm vị trí
      if (index !== -1) { // tồn tại != -1
        if ( arrCartCopy[index].countDay > 1) { // thì mình count > 0  count -- còn count < 0 là xoá
            arrCartCopy[index].countDay-- 
        }else{
            arrCartCopy.splice(index, 1)
        }
      }
      state.arrCart = arrCartCopy;
     
      
      break;
    default:
      break;
  }
  return { ...state };
};
export default girlReducer;
