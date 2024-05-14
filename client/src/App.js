import "./App.css";
import Chats from "./component/Chats";
import React, { useEffect, useState } from "react";
import { MdOutlineGroups } from "react-icons/md";
import { IoSyncCircleOutline } from "react-icons/io5";
import { RiChatVoiceFill } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { TbSettings } from "react-icons/tb";
import { MdChat } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import Profile from "./component/Profile";
import Communities from "./component/Communities";
import Status from "./component/Status";
import Channels from "./component/Channels";
import Sattings from "./component/Sattings";
import Starredmessage from "./component/Starredmessage";
import Users from "./component/Users";
import Archived from "./component/Archived";
import Help from "./component/satting/Help";
import Loaderhome from "./component/Loaderhome";

function App() {
  // loader.................
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  // profile...............
  const [activeButton, setActiveButton] = useState("chats");
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const [userClickChat, setUserClickChat] = useState("mainses");
  const handelUserChatsClick = (toggleUserChat) => {
    setUserClickChat(toggleUserChat);
  };
  return (
    <div className="">
      {loading ? <Loaderhome /> :
        <div className="bg-dark2 flex flex-row justify-center">
        <div className="user-right-border bg-dark6 w-[33%] h-screen text-white">
          <div className="flex flex-row w-full h-screen">
            <div
              className={`w-[11%] bg-dark3 flex flex-col items-center justify-between py-5`}
            >
              <div className="flex flex-col gap-5 text-slate-400 text-2xl">
                <button
                  onClick={() => handleButtonClick("chats")}
                  className={`p-2 ${
                    activeButton === "chats"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <MdChat />
                </button>
                <button
                  onClick={() => handleButtonClick("communities")}
                  className={`p-2 ${
                    activeButton === "communities"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <MdOutlineGroups />
                </button>
                <button
                  onClick={() => handleButtonClick("channels")}
                  className={`p-2 ${
                    activeButton === "channels"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <RiChatVoiceFill />
                </button>
                <button
                  onClick={() => handleButtonClick("status")}
                  className={`user-top-bottom-border p-2 ${
                    activeButton === "status"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <IoSyncCircleOutline />
                </button>
                <button
                  onClick={() => handleButtonClick("archived")}
                  className={`p-2 ${
                    activeButton === "archived"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <RiInboxArchiveLine />
                </button>
                <button
                  onClick={() => handleButtonClick("starrdemessage")}
                  className={`p-2 ${
                    activeButton === "starrdemessage"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <IoIosStar />
                </button>
              </div>
              <div className="flex flex-col gap-5 text-slate-400 text-2xl">
                <button
                  onClick={() => handleButtonClick("help")}
                  className={` px-1 py-3 text-xs ${
                    activeButton === "help"
                      ? "rounded-full bg-dark5"
                      : "bg-none shadow"
                  }`}
                >
                  BEAT
                </button>
                <button
                  onClick={() => handleButtonClick("sattings")}
                  className={`p-2 ${
                    activeButton === "sattings"
                      ? "rounded-full bg-dark5"
                      : "bg-none"
                  }`}
                >
                  <TbSettings />
                </button>
                <button
                  onClick={() => handleButtonClick("profile")}
                  className="rounded-full border-2 overflow-hidden bg-slate-500 border-white w-10 h-10"
                >
                  <img src="amitimg.png" alt="Bird" />
                </button>
              </div>
            </div>
            <div className="w-[89%]">
              {activeButton === "chats" && (
                <Users handelUserChatsClick={handelUserChatsClick} />
              )}
              {activeButton === "help" && <Help />}
              {activeButton === "profile" && <Profile />}
              {activeButton === "communities" && (
                <Communities handelUserChatsClick={handelUserChatsClick} />
              )}
              {activeButton === "status" && <Status />}
              {activeButton === "channels" && (
                <Channels handelUserChatsClick={handelUserChatsClick} />
              )}
              {activeButton === "sattings" && <Sattings />}
              {activeButton === "starrdemessage" && <Starredmessage />}
              {activeButton === "archived" && (
                <Archived handelUserChatsClick={handelUserChatsClick} />
              )}
            </div>
          </div>
        </div>
        <div className="bg-dark2 w-[67%] h-screen text-white">
          {userClickChat === "mainses" && (
            <div className="w-full h-screen bg-dark3 flex flex-col items-center justify-center">
              <div className="w-full flex justify-center">
                <img src="frontchat.png" alt="Bird" />
              </div>
              <h1 className="text-4xl font-light text-center py-3">
                Download WhatsApp for Windows
              </h1>
              <h1 className="text-sm text-slate-400 w-full text-center py-3">
                Make Calls, share your screen and get a faster experience when
                you download the <br />
                Windows app.
              </h1>
              <div className="w-full flex justify-center py-3">
                <button className="px-5 py-2 rounded-full text-black bg-teal-500">
                  Get from Microsoft Store
                </button>
              </div>
            </div>
          )}
          {userClickChat === "userchats" && <Chats />}
        </div>
      </div>
      }
    </div>
  );
}

export default App;