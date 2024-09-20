import { useEffect, useState } from "react";
import "./CustomSelect.css";
import { SlArrowDown } from "react-icons/sl";

export default function CustomSelect({
  list = [],
  label = "",
  onChange = () => {},
  selectedValue = "",
  keyName = "",
  zIndex = 0,
}) {
  const [selectedText, setSelectedText] = useState(selectedValue || label);
  const [show, setShow] = useState(false);
  const liBoxes = list.map((item, i) => (
    <li key={i} onClick={() => selectedItem(item[1])}>
      {item[1]}
    </li>
  ));

  function selectedItem(item) {
    setSelectedText(item);
    onChange(keyName, list.find((x) => x[1] == item)[0].toUpperCase());
  }

  useEffect(() => {
    setSelectedText(selectedValue || label);
  }, [label, selectedValue]);

  return (
    <div
      className="CustomSelect"
      style={{
        zIndex: zIndex,
      }}
      onClick={() => setShow((prev) => !prev)}
    >
      <h1>{selectedText}</h1>
      <SlArrowDown />

      {show && <ul className="CustomSelect_list">{liBoxes}</ul>}
    </div>
  );
}
