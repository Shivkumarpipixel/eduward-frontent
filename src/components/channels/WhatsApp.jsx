import React, { useState, useEffect, useRef } from "react";
import Loader from "../../components/common/Loader";

const channelUrl = import.meta.env.VITE_CHANNEL_URL;
const WhatsApp = () => {
  const [loading, setLoading] = useState(true);
  const workspaceId = localStorage.getItem("workspace_id");
  const iframeRef = useRef(null);

  const iframeStyle = {
    width: "100%",
    height: "98%",
    border: "none",
    display: loading ? "none" : "block",
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <Loader loading={loading} />
      <iframe
        ref={iframeRef}
        src={`https://${channelUrl}/${workspaceId}#/whatsapp-cloud`}
        title="WhatsApp"
        style={iframeStyle}
      />
    </div>
  );
};

export default WhatsApp;
