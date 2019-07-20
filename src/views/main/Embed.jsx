import React from "react";

export default function Embed({ ...props }) {
  const { link, title } = props;
  return (
    <div
      className="embed-responsive embed-responsive-16by9"
      style={{ margin: "10px" }}
    >
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${link}?rel=0`}
        allowFullScreen
        title={title}
      />
    </div>
  );
}
