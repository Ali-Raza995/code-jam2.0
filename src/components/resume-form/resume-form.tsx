"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import SkillsSelect from "../react-select";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "@/store/slices/user-slice";
import PreviewVersion from "../shared/preview-version";
import jsPDF from "jspdf";

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
  // skills: Yup.array().min(1).required("Please Enter At least One Skill"),
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
  const dispatch = useDispatch();
  const router = useRouter();
  const [val, setVal] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

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
    onSubmit: async (values: any) => {
      values.skills = val;
      dispatch(getUserData(values));
      toast.success("Resume Generated");
      console.log(values);
      setShowPreview(!showPreview);
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

  const handleClick = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="relative">
      <div
        className={`relative w-full flex flex-col justify-center items-center mt-10`}
      >
        {showPreview && <PreviewVersion handleFunc={handleClick} />}
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
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.fullName && touched.fullName ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.fullName as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.email && touched.email ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.email as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.phone && touched.phone ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.phone as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              placeholder="Enter Your Degree"
              name="degree"
              value={values.degree}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.degree && touched.degree ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.degree as string}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="fullName">Institution</label>
            <input
              type="text"
              placeholder="Enter Your Institution"
              name="institution"
              value={values.institution}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.institution && touched.institution ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.institution as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Enter Your Institution"
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.company && touched.company ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.company as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="company">Role</label>
            <input
              type="text"
              placeholder="Enter Your Role"
              name="role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.role && touched.role ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.role as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="company">Responsibilities</label>
            <textarea
              placeholder="Enter Your Responsibilities"
              name="responsibilities"
              value={values.responsibilities}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.responsibilities && touched.responsibilities ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.responsibilities as string}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="duration">Duration</label>
            <textarea
              placeholder="Enter Your Duration"
              name="duration"
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-4 border-[#ff5c00] text-black"
            />
            <div className="h-6">
              {errors.duration && touched.duration ? (
                <p className="text-red-400 pb-4 text-p">
                  {errors.duration as string}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid md:grid-cols-3 max-sm:grid-cols-1 gap-[1rem]">
            <div className="mb-5 max-sm:mt-[3rem] flex flex-col">
              <p className="text-black">Year</p>
              <DatePicker
                className="h-14 w-full relative -z-50 outline-none border p-4 border-[#ff5c00] text-black"
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
                onChange={(date: any) => {
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
                  <p className="text-red-400 pb-4 text-p">
                    {errors.year as string}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="Skills">Skills</label>
            <SkillsSelect name="skills" setVal={setVal} />
          </div>

          <div className="mt-5 max-w-[24rem] flex gap-2">
            <button className="h-14 w-full outline-none border p-4 border-[#ff5c00] text-black">
              Generate Resume
            </button>
            <div
              onClick={handleClick}
              className="h-14 w-full cursor-pointer text-center outline-none border p-4 border-[#ff5c00] text-black"
            >
              Preview Resume
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
