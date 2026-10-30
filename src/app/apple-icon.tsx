import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10141c",
          color: "#e9eef6",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -2,
          lineHeight: 1,
        }}
      >
        LF
      </div>
    ),
    { ...size },
  );
}
