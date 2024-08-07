"use client";

import React, { useEffect, useState } from "react";
import { Chat } from "./chat";
import { userData } from "../data/data";

export function ChatLayout() {
  const [selectedUser, setSelectedUser] = React.useState(userData[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="w-full">
      <Chat
        messages={selectedUser.messages}
        selectedUser={selectedUser}
        isMobile={isMobile}
      />
    </div>
  );
}
