const customStyle = {
  option: (provided, state) => ({
    ...provided,
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f9a82667",
    },
    backgroundColor: state.isSelected ? "#f9a82667" : "black",
    padding: "1rem",
  }),
  control: (provided) => ({
    ...provided,
    padding: "0.5rem",
    backgroundColor: "black",
    border: "1px solid #f9a82667",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      outline: "none",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "black",
    border: "1px solid #f9a82667",
  }),
};

export default customStyle;
