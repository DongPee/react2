import "./Home.css";

const Home = () => {
  // 5개의 더미 게시글 데이터를 배열로 정의
  const postsData = [1, 2, 3, 4, 5]; // 5번 반복

  return (
    <div className="Home">
      <header className="navbar">
        <div className="camera">
          <div className="icon">📷</div>
        </div>
        <div className="logo">Instagram</div>

        <div className="icons">
          <div className="icon">✉️</div>
        </div>
      </header>

      <main className="content">
        <div className="posts">
          {/* 5개의 게시글을 반복 */}
          {postsData.map((post, index) => (
            <div className="post" key={index}>
              <header className="post-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="post-user-pic"
                />
                <div className="post-usertext">
                  <span className="post-username">사용자 이름</span>
                  <span className="post-userwords">사용자 이름</span>
                </div>
              </header>
              <img
                src="https://via.placeholder.com/500"
                alt="Post Image"
                className="post-image"
              />
              <div className="post-footer">
                <div>
                  <button className="like-btn">❤️ </button>
                  <button className="comment-btn">💬 </button>
                  <button className="chat-btn">✉️</button>
                </div>
                <div>
                  <div className="save-btn">💾</div>
                </div>
              </div>
              <div className="post-text">내용</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-icons">
          <div className="footer-icon">🏠</div>
          <div className="footer-icon">🔍</div>
          <div className="footer-icon">➕</div>
          <div className="footer-icon">❤️</div>
          <div className="footer-icon">👤</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
