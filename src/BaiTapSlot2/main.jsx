import React, { Component } from 'react'
import QuestionList from './QuestionList';
const data = [
    {
        "questionType": 1,
        "id": 1,
        "content": "Đề văn được Đen tiết lộ trong MV mới là gì?",
        "answers": [
            {
                "id": "2",
                "exact": false,
                "content": "Người lái đò sông Đà",
                "STT": null
            },
            {
                "id": "3",
                "exact": false,
                "content": "Người lái thuyền Sông Hương",
                "STT": null
            },
            {
                "id": "4",
                "exact": false,
                "content": "Người vận chuyển",
                "STT": null
            },
            {
                "id": "5",
                "exact": true,
                "content": "Đất Nước",
                "STT": null
            }
        ]
    },
    {
        "questionType": 1,
        "id": 2,
        "content": "Vị tướng nào sau đây là biểu tượng quốc dân của game Liên minh huyền thoại",
        "answers": [
            {
                "id": "3",
                "exact": false,
                "content": "Vayne",
                "STT": null
            },
            {
                "id": "5",
                "exact": true,
                "content": "Yasuo",
                "STT": null
            },
            {
                "id": "7",
                "exact": false,
                "content": "Aphelios",
                "STT": null
            },
            {
                "id": "9",
                "exact": false,
                "content": "Ryze",
                "STT": null
            }
        ]
    },
    {
        "questionType": 1,
        "id": 3,
        "content": "Câu thành ngữ nào sau đây là đúng?",
        "answers": [
            {
                "id": "4",
                "exact": true,
                "content": "Ăn cơm trước kẽng",
                "STT": null
            },
            {
                "id": "7",
                "exact": false,
                "content": "Ăn keng trước cỡm",
                "STT": null
            },
            {
                "id": "10",
                "exact": false,
                "content": "Ăn kem trước cổng",
                "STT": null
            },
            {
                "id": "13",
                "exact": false,
                "content": "Tất cả đều sai",
                "STT": null
            }
        ]
    },
    {
        "questionType": 1,
        "id": 4,
        "content": "Thần chú mở cửa trong Alibaba và 40 tên cướp là gì?",
        "answers": [
            {
                "id": "5",
                "exact": false,
                "content": "Cửa ơi mở hộ",
                "STT": null
            },
            {
                "id": "9",
                "exact": false,
                "content": "Open the door",
                "STT": null
            },
            {
                "id": "13",
                "exact": false,
                "content": "Ai ở nhà hôn?",
                "STT": null
            },
            {
                "id": "17",
                "exact": true,
                "content": "Vừng ơi mở ra",
                "STT": null
            }
        ]
    },
    {
        "questionType": 2,
        "id": 5,
        "content": "MV ca nhạc mà Đen vào vai thám tử Sherlock Home?",
        "answers": [
            {
                "id": "5",
                "exact": null,
                "content": "Lối nhỏ",
                "STT": null
            }
        ]
    },
    {
        "questionType": 2,
        "id": 6,
        "content": "Ca khúc mới nhứt của Sếp là gì?",
        "answers": [
            {
                "id": "6",
                "exact": null,
                "content": "Có chắc yêu là đây?",
                "STT": null
            }
        ]
    },
    {
        "questionType": 2,
        "id": 7,
        "content": "Có ba quả táo trên bàn và bạn lấy đi hai quả. Hỏi bạn còn bao nhiêu quả táo?",
        "answers": [
            {
                "id": "7",
                "exact": null,
                "content": "2",
                "STT": null
            }
        ]
    },
    {
        "questionType": 2,
        "id": 8,
        "content": "Từ gì mà 100% nguời dân Việt Nam đều phát âm sai?",
        "answers": [
            {
                "id": "8",
                "exact": null,
                "content": "Sai",
                "STT": null
            }
        ]
    }
]
export default class Main extends Component {
    state = {
        point: 0,
    }
    count = 0;

    handleCheckAnwserRadio = (value) =>{
       console.log(value);
       if (value) {
           this.count += 1;
       }
    }
    onClickShowDiem = () => {
       this.setState({point: this.count})
    }
    render() {
        return (
            <>
               <QuestionList data={data} handleCheckAnwserRadio={this.handleCheckAnwserRadio} />
               <div className="d-flex" style={{justifyContent: "space-around"}}>
               <button className="btn btn-danger" onClick={()=>{this.onClickShowDiem()}}>Show Điểm</button>
               <h1>Số câu đúng ({this.state.point})</h1>
               </div>
            </>
        
        )
    }
}
