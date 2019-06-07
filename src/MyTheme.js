export const Container = {
  fontFamily: `"Amazon Ember", "Helvetica Neue", sans-serif`,
  fontWeight: "400"
};
export const FormSection = {
  marginBottom: "20px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  textAlign: "left",
  maxWidth: "300px",
  display: "inline-block"
};
export const SectionHeader = {
  color: "#fff",
  backgroundColor: "#f47142",
  borderColor: "#337ab7",
  padding: "10px 15px",
  borderBottom: "1px solid transparent",
  borderTopLeftRadius: "3px",
  borderTopRightRadius: "3px",
  textAlign: "center"
};

export const SectionFooter = {
  color: "#333",
  backgroundColor: "#f5f5f5",
  padding: "10px 15px",
  borderTop: "1px solid #ddd",
  borderTopLeftRadius: "3px",
  borderTopRightRadius: "3px"
};

export const SectionBody = {
  padding: "15px",
  maxHeight: "150px",
  overflow: "auto"
};
export const Input = {
  display: "block",
  width: "100%",
  height: "34px",
  padding: "6px 12px",
  fontSize: "14px",
  lineHeight: "1.42857143",
  color: "#555",
  backgroundColor: "#fff",
  backgroundImage: "none",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
  boxSizing: "border-box",
  transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s"
};

export const Button = {
  display: "inline-block",
  padding: "6px 12px",
  marginBottom: "0",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "1.42857143",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
  userSelect: "none",
  backgroundImage: "none",
  border: "1px solid transparent",
  borderRadius: "4px",
  color: "#333",
  backgroundColor: "#fff",
  borderColor: "#ccc"
};

const MyTheme = {
  container: Container,
  formSection: FormSection,
  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  input: Input,
  button: Button
};

export default MyTheme;
