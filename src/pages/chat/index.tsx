import React, { useState } from "react";
import VidoeChat from "@/components/VidoeChat";
import Conversation from "@/components/Conversation";
import { Button } from "@/components/ui/button";
const Chat: React.FC = () => {
  const [conversationVisible, setConversationVisible] = useState(false);

  const toggleConversation = () => {
    setConversationVisible(!conversationVisible);
  };

  return (
    <div className="flex  flex-col w-full h-full items-center justify-center">
      <div className="relative  top-8  flex justify-center items-center p-5">
        <VidoeChat />
        <div>
          <Button
            variant={"outline"}
            onClick={toggleConversation}
            style={{ display: conversationVisible ? "none" : "block" }}
          >
            Show Conversation
          </Button>
          {conversationVisible && <Conversation onClose={toggleConversation} />}
        </div>
      </div>
    </div>
  );
};

export default Chat;
