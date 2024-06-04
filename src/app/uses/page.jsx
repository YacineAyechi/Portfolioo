import Image from "next/image";
import "./uses.css";

const Uses = () => {
  return (
    <div className="uses-container">
      <h1>Uses</h1>
      <p>
        Here&apos;s a list of tools I use for my day to day work. I&apos;ll try
        to always update this list.
      </p>
      <Image
        src="/uses-img.jpg"
        alt=""
        width={831}
        height={450}
        className="uses-img"
      />
      <div className="uses-s">
        <div className="uses-1">
          <h2>Editor & Terminal ⌨️</h2>
          <ul className="ul-uses">
            <li>
              Editor -{" "}
              <a
                href="https://code.visualstudio.com/"
                className="lnk"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                VSCode
              </a>{" "}
              By Microsoft.
            </li>
            <li>
              Color Theme - I was using{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
                className="lnk"
                target="_blank"
                rel="noreferrer"
              >
                Shades Of Purple
              </a>{" "}
              by Ahmad Awais and I just switched to{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode"
                className="lnk"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                SynthWave &apos;84
              </a>{" "}
              by Robb Owen.
            </li>
            <li>
              Coding Font -{" "}
              <a
                href="https://github.com/microsoft/cascadia-code"
                className="lnk"
                target="_blank"
                rel="noreferrer"
              >
                Cascadia Code
              </a>{" "}
              by Microsoft.
            </li>
          </ul>
        </div>

        <div className="uses-2">
          <h2>Desktop & Web Apps 🖥️</h2>
          <ul className="ul-uses">
            <li>Figma - Creating UI/UX Designs.</li>
            <li>Slack - for communication.</li>
            <li>Discord - engaging with the dev community on Discord.</li>
            <li>Notion - for taking notes.</li>
          </ul>
        </div>

        <div className="uses-3">
          <h2>Desk Setup 💻</h2>
          <ul className="ul-uses">
            <li>Asus TUF GAMING FX505DT 16GB RAM</li>
            <li>Redragon H510 Zeus-X RGB Gaming Headset</li>
            <li>Cooler Master CK550 V2 Mechanical Gaming Keyboard</li>
            <li>COBRA-FPS M711-FPS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Uses;
