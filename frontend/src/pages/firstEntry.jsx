import { FirstEntryComponent } from "../components";

const FirstEntry = () => {
  return (
    <div
      style={{
        background: "black",
      }}
    >
      <div
        style={{
          background: "url('/images/ANIM.gif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          height: "100vh",
          width: "100%",
          display: "flex",
          alginItems: "center",
          justifyContent: "center",
        }}
      >
        <FirstEntryComponent />
      </div>
    </div>
  );
};

export default FirstEntry;
