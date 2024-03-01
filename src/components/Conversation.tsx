import React from "react";

interface ConversationProps {
  onClose: () => void;
}

const Conversation: React.FC<ConversationProps> = ({ onClose }) => {
  return (
    <div className="conversation-container">
      <button onClick={onClose}>Close</button>
      {/* Place your conversation content here */}
      <div>Conversation Content Goes Here</div>
    </div>
  );
};

export default Conversation;
