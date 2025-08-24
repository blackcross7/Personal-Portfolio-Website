import React from "react";
import {
  SiUnity,
  SiJupyter,
  SiAndroidstudio,
  SiPycharm,
  SiAutodesk,
  SiVscodium,
} from "react-icons/si";

/* Power BI Custom Icon (SVG) */
const PowerBIIcon = ({ size = 60 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
  >
    <rect width="48" height="48" rx="8" fill="#F2C811" />
    <path
      fill="#000"
      d="M12 34h4V20h-4v14zm8 0h4V14h-4v20zm8 0h4V18h-4v16zm8 0h4V24h-4v10z"
    />
  </svg>
);

const platforms = [
  { name: "Unity Engine", icon: <SiUnity size={60} color="#ffffff" /> },
  { name: "VS Code", icon: <SiVscodium size={60} color="#007ACC" /> },
  { name: "PyCharm", icon: <SiPycharm size={60} color="#21D789" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter size={60} color="#F37626" /> },
  { name: "Android Studio", icon: <SiAndroidstudio size={60} color="#3DDC84" /> },
  { name: "AutoCAD", icon: <SiAutodesk size={60} color="#0696D7" /> },
  { name: "Power BI", icon: <PowerBIIcon size={60} /> }, // ✅ Added Power BI
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
