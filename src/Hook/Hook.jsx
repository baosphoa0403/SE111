import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function Hook() {
  // funtional programming
  // useEffect,
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET"
    })
      .then(rs => {
        console.log(rs.data);
        setData(rs.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // console.log(data);
  // useState
  // const [count, setCount] = React.useState(0)
  // const [number, setnumber] = React.useState(0)
  // // life cycle
  // // useEffect
  // // 3 thằng
  // React.useEffect(() => {
  //   console.log('always runs');

  // })

  // React.useEffect(() => {
  //     console.log('runs 1 lần duy nhất');
  //     // componentDidMount
  // }, [])

  // React.useEffect(() => {
  //     console.log('runs khi number thay đổi');
  // }, [number])

  // useCallBack, useMemo
  return (
    <div className={classes.root}>
      <h1>hello HOok</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      {/* count: {count}
            <button type="button" class="btn btn-primary" onClick={()=>{setCount(count + 1)}}>Tăng count</button>
             number: {number}
            <button type="button" class="btn btn-primary" onClick={()=>{setnumber(number + 1)}}>Tăng count</button> */}
    </div>
  );
}
