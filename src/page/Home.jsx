import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <header className="navbar">
          <div className="logo">Instagram</div>
          <div className="search-bar">
            <input type="text" placeholder="검색" />
          </div>
          <div className="icons">
            <div className="icon">🏠</div>
            <div className="icon">🔔</div>
            <div className="icon">✉️</div>
          </div>
        </header>

        <main className="content">
          <div className="sidebar">
            <div className="profile">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="profile-pic"
              />
              <p className="username">사용자 이름</p>
            </div>
            <div className="suggestions">
              <h2>회원 추천</h2>
              <ul>
                <li>추천 사용자 1</li>
                <li>추천 사용자 2</li>
                <li>추천 사용자 3</li>
              </ul>
            </div>
          </div>

          <div className="posts">
            <div className="post">
              <header className="post-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="post-user-pic"
                />
                <span className="post-username">사용자 이름</span>
              </header>
              <img
                src="https://via.placeholder.com/500"
                alt="Post Image"
                className="post-image"
              />
              <div className="post-footer">
                <button className="like-btn">❤️ 좋아요</button>
                <button className="comment-btn">💬 댓글</button>
              </div>
            </div>

            <div className="post">
              <header className="post-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="post-user-pic"
                />
                <span className="post-username">사용자 이름</span>
              </header>
              <img
                src="https://via.placeholder.com/500"
                alt="Post Image"
                className="post-image"
              />
              <div className="post-footer">
                <button className="like-btn">❤️ 좋아요</button>
                <button className="comment-btn">💬 댓글</button>
              </div>
            </div>
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
    </div>
  );
};
export default Home;
