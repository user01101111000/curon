import "./Converter.css";
import { useFormik } from "formik";
import { amountSchema } from "../../utils/schema";
import Loader from "../Loader/Loader.jsx";
import useGetConvertQuery from "../../hooks/api/useGetConvertQuery";
import { useState } from "react";
import dollar from "../../assets/icons/dollar.png";
import { motion } from "framer-motion";
import Select from "react-select";
import customStyle from "../../utils/styleForSelect.js";

const Converter = ({ currencies }) => {
  const [result, setResult] = useState("Enter currency");
  const { mutateAsync } = useGetConvertQuery();

  const options = currencies.map((x) => ({
    label: x[1],
    value: x[0],
  }));

  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      amount: "",
      baseCurrency: null,
      finalCurrency: null,
    },
    onSubmit,
    validationSchema: amountSchema,
  });

  function onSubmit(values, { setSubmitting }) {
    mutateAsync(values).then((data) => {
      setResult(data);
      setSubmitting(false);
    });
  }

  return (
    <motion.article
      className="converter"
      initial={{ opacity: 0, x: "50%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    >
      <figure className="converter_img">
        <img src={dollar} alt="dollar" />
      </figure>
      <h1 className="converter_header">
        <span className="brandName">Currency</span> Converter
      </h1>
      <form className="converter_form" onSubmit={handleSubmit}>
        <div className="input_box">
          <input
            type="number"
            placeholder="Enter Amount"
            name="amount"
            id="amount"
            value={values.amount}
            onChange={handleChange}
          />
          {errors.amount && <p className="error_text">{errors.amount}</p>}
        </div>
        <div className="input_box">
          <Select
            defaultValue={values.baseCurrency}
            onChange={(e) => setFieldValue("baseCurrency", e)}
            options={options}
            styles={customStyle}
            components={{ IndicatorSeparator: () => null }}
          />
          {errors.baseCurrency && (
            <p className="error_text">{errors.baseCurrency}</p>
          )}
        </div>
        <div className="input_box">
          <Select
            defaultValue={values.finalCurrency}
            onChange={(e) => setFieldValue("finalCurrency", e)}
            options={options}
            styles={customStyle}
            components={{ IndicatorSeparator: () => null }}
          />
          {errors.finalCurrency && (
            <p className="error_text">{errors.finalCurrency}</p>
          )}
        </div>

        <button
          type="submit"
          className={"submit" + (isSubmitting ? " disable_button" : "")}
        >
          {isSubmitting ? <Loader /> : "CONVERT"}
        </button>
      </form>

      <h1 className="result">{result}</h1>
    </motion.article>
  );
};

export default Converter;
