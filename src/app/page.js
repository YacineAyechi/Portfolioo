import Link from "next/link";
import {
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "./Home.css";
import blogsData from "@/data/blogsData";

export default function Home() {
  const latestArticles = blogsData.slice(-3);

  return (
    <div className="home-container">
      <div className="rl-container">
        <div className="left">
          <h1>Hello, I am Yacine Ayachi.</h1>
          <p>
            I am a 20 year-old front-end web developer guy based in Tunisia.
          </p>
          <div className="socials">
            <a
              href="https://github.com/YacineAyechi"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="social-icon" />
            </a>
            <a
              href="https://twitter.com/Yacineayechi"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/Mohamed.Yacine.Ayachi"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/yacine.ayachi/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yacine-ayachi/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="social-icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src="./me.png" alt="Me" className="me" />
        </div>
      </div>

      <div className="articles">
        <div className="flexArticles">
          <h2 className="title">Latest Articles</h2>
          <Link href="/blog" className="all-articles">
            All articles 📝
          </Link>
        </div>

        <div className="card-container">
          {latestArticles.map((blog) => (
            <div key={blog.id} className="card">
              <Link href={`/blog/${blog.id}`}>
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-desc">{blog.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="getintouch">
        <h3>Get In Touch</h3>
        <div className="box">
          <p>Want to work together or have any questions?</p>
          <a href="mailto:yacineayachi9@gmail.com" className="btn-hello">
            Say Hello 👋
          </a>
        </div>
        <div className="links">
          <a
            href="./resume.pdf"
            target="_blank"
            className="link-item"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="https://github.com/YacineAyechi"
            target="_blank"
            className="link-item"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://buymeacoffee.com/yacineayechi"
            target="_blank"
            className="link-item"
            rel="noreferrer"
          >
            Support Me
          </a>
        </div>
        <div className="footer">
          <p>
            Designed and Developed by <span className="me">Yacine Ayachi</span>
          </p>
        </div>
      </div>
    </div>
  );
}
