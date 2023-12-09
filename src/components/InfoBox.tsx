import { ReactNode } from "react";
type hintBox = {
  mode: "hint";

  children: ReactNode;
};
type Warningbox = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBox = hintBox | Warningbox;
const InfoBox = (props: InfoBox) => {
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className=" infoxbox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infoxbox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
