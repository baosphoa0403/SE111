import React from "react";
import {useDispatch, useSelector} from "react-redux";
export default function ReduxSaga() {
    const dispatch = useDispatch();
    const  data = useSelector(state => state.movieReducers.listShoes)
    const Loading = useSelector(state => state.Loading.isLoading)
    console.log(Loading);
    console.log(data);
    React.useEffect(() => {
        dispatch({
            type: "getShoesApi",
            payload: 2
        })
    }, [])
  return (
    <div>
      {!Loading && (
          <div>
              <h1>Redux saga</h1>
          <button type="button" class="btn btn-primary" onClick={()=>{
              dispatch({
                  type: "getShoesApi",
                  payload: 2
              })
          }}>
            dispatch Action Saga
          </button>
          <table class="table">
              <thead>
                  <tr>
                      <th>name</th>
                      <th>img</th>
                      <th>price</th>
                  </tr>
              </thead>
              <tbody>
                 {
                     data.map((item)=>{
                    return (
                        <tr>
                        <td scope="row">{item.name}</td>
                        <td>{item.price.toLocaleString()}</td>
                        <td><img src={item.img} style={{width: "200px", height: "200px"}}/></td>
                    </tr>
                    )
                     })
                 }
              </tbody>
          </table>
          </div>
      )}
      {!Loading && (
          <h1>is loading</h1>
      )}
    </div>
  );
}
