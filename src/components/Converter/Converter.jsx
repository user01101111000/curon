import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import { useFormik } from "formik";
import { amountSchema } from "../../utils/schema";
import Loader from "../Loader/Loader.jsx";
import useGetConvertQuery from "../../hooks/api/useGetConvertQuery";
import "./Converter.css";
import { useState } from "react";

const Converter = ({ currencies }) => {
  const [result, setResult] = useState("0.00");
  const { mutateAsync } = useGetConvertQuery();

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      amount: "",
      baseCurrency: "",
      finalCurrency: "",
    },
    onSubmit,
    validationSchema: amountSchema,
  });

  function onSubmit(values) {
    mutateAsync(values).then((data) => {
      setResult(data);
      resetForm();
    });
  }

  return (
    <article className="converter">
      <h1 className="converter_header">Currency Converter</h1>
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
          <CustomSelect
            list={currencies}
            label="Select currency"
            keyName="baseCurrency"
            zIndex={102}
            selectedValue={values.baseCurrency}
            onChange={(e, item) => setFieldValue(e, item)}
          />
          {errors.baseCurrency && (
            <p className="error_text">{errors.baseCurrency}</p>
          )}
        </div>
        <div className="input_box">
          <CustomSelect
            list={currencies}
            keyName="finalCurrency"
            label="Select currency"
            zIndex={100}
            selectedValue={values.finalCurrency}
            onChange={(e, item) => setFieldValue(e, item)}
          />

          {errors.finalCurrency && (
            <p className="error_text">{errors.finalCurrency}</p>
          )}
        </div>

        <button
          type="submit"
          className={"submit" + (isSubmitting ? " disable_button" : "")}
        >
          {isSubmitting ? <Loader /> : "Convert"}
        </button>
      </form>

      <h1 className="result">{result}</h1>
    </article>
  );
};

export default Converter;
