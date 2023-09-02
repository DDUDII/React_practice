import "./modal.css";

const Modal = ({ post, postRewrite, title, modalControl }) => {
  const closeModal = () => {
    modalControl();
  };
  return (
    <div className="modal">
      <h4>{post[title]}</h4>
      <p>날짜</p>
      <p>내용</p>
      <button onClick={postRewrite}>모달 제목 수정</button>
      <button onClick={closeModal}>❌</button>
    </div>
  );
};

export default Modal;
