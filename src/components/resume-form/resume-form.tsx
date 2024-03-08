"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const resumeDeatailsSchema = Yup.object({
  fullName: Yup.string().required("Please Enter FullName"),
  email: Yup.string().email().required("Please Enter Your Email"),
  phone: Yup.number().required("Please Enter Phone"),
  year: Yup.string().required("Please Select Year"),
  degree: Yup.string().required("Please Enter Degree"),
  institution: Yup.string().required("Please Enter Institution"),
  company: Yup.string().required("Please Enter Company"),
  role: Yup.string().required("Please Enter Company"),
  responsibilities: Yup.string().required("Please Enter Company"),
  duration: Yup.string().required("Please Enter Company"),
});

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  year: "",
  degree: "",
  institution: "",
  company: "",
  role: "",
  responsibilities: "",
  duration: "",
};

const ResumeForm = () => {
  const router = useRouter();

  const {
    values,
    errors,
    touched,
    setTouched,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
    },
    validationSchema: resumeDeatailsSchema,
  });
  const handleButtonClick = (e: any) => {
    e.preventDefault();
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    if (Object.keys(errors).length > 0) {
      toast.error(`Please Fill all the required fields`);
    } else {
      handleSubmit();
    }
  };

  return (
    <div>
      <div
        className={`relative w-full flex flex-col justify-center items-center mt-10`}
      >
        <p className=" text-h1 text-center font-extrabold">Generate Resume</p>
        <form onSubmit={handleButtonClick} className="lg:w-[60%] w-[80%]">
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.fullName && touched.fullName ? (
                <p className="text-red pb-4 text-p">
                  {errors.fullName as string}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid md:grid-cols-3 max-sm:grid-cols-1 gap-[1rem]">
            <div className="mb-5 max-sm:mt-[3rem] flex flex-col">
              <p className="text-white">Year</p>
              <DatePicker
                className="h-14 w-full p-4 outline-none"
                selected={values.year ? new Date(values.year) : null}
                placeholderText="Select Date"
                showYearPicker
                dateFormat="yyyy"
                name="year"
                customInput={
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="Select Date"
                    value={values.year}
                    onChange={(e) => {
                      const inputYear = e.target.value;
                      const selectedYear =
                        inputYear.length <= 4
                          ? inputYear
                          : inputYear.slice(0, 4);
                      setFieldValue("year", selectedYear);
                      handleChange({
                        target: {
                          name: "year",
                          value: selectedYear,
                        },
                      });
                    }}
                    onBlur={() => {
                      handleBlur({ target: { name: "year" } });
                    }}
                  />
                }
                onChange={(date) => {
                  const selectedYear = date
                    ? date.getFullYear().toString()
                    : "";
                  setFieldValue("year", selectedYear);
                  handleChange({
                    target: {
                      name: "year",
                      value: selectedYear,
                    },
                  });
                }}
              />
              <div className="h-6">
                {errors.year && touched.year ? (
                  <p className="text-red pb-4 text-p">
                    {errors.year as string}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <div className="mt-[1rem]">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // errors={errors.fullName as string}
                  // touched={touched.fullName}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 max-sm:grid-cols-1 gap-[1rem]">
            <div>
              <div className="mt-[1rem]">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // errors={errors.fullName as string}
                  // touched={touched.fullName}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button>Generate Resume</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
