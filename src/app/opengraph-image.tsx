import { ImageResponse } from "next/og";

export const alt = "Luis Fernando (WhoAmI) | Desarrollador Full Stack en Perú";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#10141c",
          color: "#e9eef6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#e08a48",
              color: "#10141c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            LF
          </div>
          <div style={{ fontSize: 28, color: "#8b97ab" }}>
            Luis Fernando (WhoAmI)
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Desarrollador Full Stack en Perú
          </div>
          <div style={{ fontSize: 28, color: "#8b97ab", maxWidth: 820 }}>
            Backend, web y mobile · Huancayo, Perú
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
