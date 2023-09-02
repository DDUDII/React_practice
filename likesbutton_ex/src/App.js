import { useState } from "react";
import "./App.css";
import Modal from "./components/modal";

function App() {
  let name = "추천 아이템";
  const [post, setPost] = useState([
    "남자 코트 추천",
    "코딩 학원 추천",
    "강남 맛집 추천",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [inputPost, setInputPost] = useState("");

  // input창 제어 부분
  const inputControl = (e) => {
    e.preventDefault();
    if (inputPost === "") {
      alert("제목을 입력해주세요!");
      return;
    }
    const updatedPost = [...post, inputPost];
    setPost(updatedPost);
    setInputPost("");
  };
  // post 삭제 제어 부분
  const removePost = (index) => {
    const newPost = [...post];
    newPost.splice(index, 1);
    setPost(newPost);
  };
  // 하트 버튼 제어 부분
  const likeControl = (index) => {
    setLike((prevLike) => {
      const newLike = [...prevLike];
      newLike[index] += 1;
      return newLike;
    });
  };
  // 모달창 제어 부분
  const modalControl = () => {
    setModal(!modal);
  };
  // post 수정 제어 부분
  const postRewrite = () => {
    let copy = [...post];
    copy[0] = "여자 코트 추천";
    setPost(copy);
  };

  // post 정렬 제어 부분
  const postSort = () => {
    let postCopy = [...post];
    let likeCopy = [...like];

    // post 와 하트 부분 index로 연결 시키기
    postCopy = postCopy.map((value, index) => ({
      value,
      like: likeCopy[index],
    }));
    postCopy.sort((a, b) => a.value.localeCompare(b.value)); //객체 내림차순으로 만들어줌

    setPost(postCopy.map((item) => item.value));
    setLike(postCopy.map((item) => item.like));
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{name}</h4>
      </div>
      <button onClick={postRewrite}>포스트수정</button>
      <button onClick={postSort}>포스트정렬</button>

      {post.map((value, index) => {
        //map을 사용하여 배열 나타나게

        return (
          //반복문으로 html문을 생성하면 key값이 필요
          <div className="list" key={index}>
            <h4
              onClick={() => {
                modalControl();
                setTitle(index);
              }}
            >
              {value}
            </h4>
            <span onClick={() => likeControl(index)}>💟 {like[index]}</span>
            <p>2월 17일 발행</p>
            <button onClick={() => removePost(index)}>❌</button>
          </div>
        );
      })}

      <form onSubmit={inputControl}>
        <input
          onChange={(e) => {
            setInputPost(e.target.value);
          }}
          type="text"
          value={inputPost}
        ></input>
        <button className="input-btn" type="submit">
          제출
        </button>
      </form>

      {modal === true ? (
        <Modal
          post={post}
          postRewrite={postRewrite}
          title={title}
          modalControl={modalControl}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
