import React from "react";
import { SiUnity, SiJupyter, SiAndroidstudio, SiPycharm, SiAutodesk, SiVscodium  } from "react-icons/si";

const platforms = [
  { name: "Unity Engine", icon: <SiUnity size={60} color="#ffffff" /> },
  { name: "VS Code", icon: <SiVscodium  size={60} color="#007ACC" /> },
  { name: "PyCharm", icon: <SiPycharm size={60} color="#21D789" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter size={60} color="#F37626" /> },
  { name: "Android Studio", icon: <SiAndroidstudio size={60} color="#3DDC84" /> },
  { name: "AutoCAD", icon: <SiAutodesk size={60} color="#0696D7" /> }
];

const PlatformData = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {platforms.map((platform, index) => (
        <div key={index} className="flex flex-col items-center">
          {platform.icon}
          <p className="text-sm mt-3 text-gray-300">{platform.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PlatformData;
