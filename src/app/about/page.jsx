import Link from "next/link";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-texts">
        <p className="t1">
          I am a self-taught front-end Developer. With over 4 years of
          experience in web development and building tools to help businesses
          grow. I also have some skills in UI/UX design.
        </p>
        <p className="t2">
          I share my experience in web developement, and developer lifestyle in
          my website blog.
        </p>
        <p className="t3">
          I am a self-taught front-end web developer, with 3 trainings:
          <br />
          <br />- The Frontend Developer Career Path By Scrimba (
          <a
            href="https://scrimba.com/certificate/um4Kbws9/gfrontend"
            className="lnk"
            target="_blank"
            rel="noreferrer"
          >
            Certificate
          </a>
          )<br />
          - A local training in Tunisia, ReactJS Training (The certificate is
          not PDF)
          <br />- Front-End Engineer Path By Codecademy (In Progress)
        </p>
        <p className="t4">
          I spend my free time listening to music, playing video games, whenever
          I am not writing code.
        </p>
        <p className="t5">
          I share a lot of resources and tips/tricks in web developement in{" "}
          <Link href="/blog" className="lnk">
            My Blog.
          </Link>
          <br />
          You can also check out{" "}
          <a
            className="lnk"
            href="https://scrimba.com/learn/frontend"
            target="_blank"
            rel="noreferrer"
          >
            Scrimba Frontend Developer Career Path.
          </a>
        </p>
        <p className="t6">
          Say hi to me on Twitter{" "}
          <a
            href="https://twitter.com/Yacineayechi"
            className="lnk"
            target="_blank"
            rel="noreferrer"
          >
            @Yacineayechi
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
