import React, { useState } from "react";
import VidoeChat from "@/components/VidoeChat";
import Conversation from "@/components/Conversation";

const Chat: React.FC = () => {
  const [conversationVisible, setConversationVisible] = useState(false);

  const toggleConversation = () => {
    setConversationVisible(!conversationVisible);
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="relative top-20">
        <VidoeChat />
        <button onClick={toggleConversation} style={{ display: conversationVisible ? 'none' : 'block' }}>
          Show Conversation
        </button>
        {conversationVisible && (
          <Conversation onClose={toggleConversation} />
        )}
      </div>
    </div>
  );
};

export default Chat;
