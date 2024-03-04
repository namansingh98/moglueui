import React from "react";
import { Button } from "./ui/button";

interface ConversationProps {
  onClose: () => void;
}

const Conversation: React.FC<ConversationProps> = ({ onClose }) => {
  return (
    <div className="conversation-container">
      <div className="flex justify-end  flex-wrap items-center">
        <Button variant={"outline"} onClick={onClose}>
          Close
        </Button>
      </div>
      {/* Place your conversation content here */}
      <div className="flex flex-row justify-between items-center">
        <div className="bg-red-500">
          Conversation Content Goes Here Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam totam ea, quos voluptates consequuntur
          accusamus, facere dolor vitae quod distinctio quibusdam amet ex. Porro
          laborum, accusamus maiores consequatur inventore natus.
        </div>
      </div>
    </div>
  );
};

export default Conversation;
