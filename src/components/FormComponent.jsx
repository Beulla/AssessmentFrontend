import React, { useState, useEffect } from "react";
import { useCountries } from 'use-react-countries'
import "./styles.css";
import { AiOutlinePaperClip } from "react-icons/ai";
import axios from 'axios';
import logo from "../assets/irembo-gov.svg"
import { RiNewspaperLine } from "react-icons/ri";
const FormComponent = () => {
  const { countries } = useCountries()
  const [formData, setFormData] = useState({
    citizenship:"",
    phoneNumber:"",
    address:"",
    email:"",
    businessType:"",
    companyName:"",
    tinNumber:"",
    registrationDate:"",
    businessaddress:"",
    purposeOfImportation:"",
    productCategory:"",
    Weight:"",
    unitOfMeasurement:"",
    quantity:"",
    description:"",
    NID: "",
    productName: "",
    passport: "",
    otherNames: "",
    surName: "",
    nationality:"",
    specifyPurpose: "",
  });

  const [displaypass, setDisplayPass] = useState("none");
  const [displaynid, setDisplayNid] = useState("none");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "citizenship" && value === "Rwandan") {
      setDisplayPass("none");
      setDisplayNid("block");
    }
    if (name === "citizenship" && value === "Foreigner") {
      setDisplayNid("none");
      setDisplayPass("block");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/api/business/new", formData)
  };
  return (
    <>
    <div> 
                <nav class="bg-blue-700 fixed w-full z-20 top-0 start-0">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://irembo.gov.rw/home/citizen/all_services" class="flex items-center space-x-5 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Irembo-Gov logo"/>
                </a>
                {/* <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 custom-ul-class">
                      <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
                      </li>
                      <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log In</a>
                      </li>
                      <li>
                          <input type="search" name="Search" id="search" placeholder="Find Applications" class="text-white" />
                      </li>
                  </ul>
              </div> */}
                </div>
            </nav>
        </div>
    <div className="container">
      <form>
        <div className="businessownerdetails">
        <div className="bod flex items-center gap-1">
          <RiNewspaperLine /> Business Owner Details
        </div>

          <div style={{ marginLeft: "20px",marginTop:"10px" }}>
            <h4 style={{fontWeight: "bold",}}>Business Owner Details</h4>

            <div style={{ display: "flex", flexDirection: "column", marginTop:"10px" }}>
              <label style={{ fontSize: "13px" }}>
                Applicant Citizenship <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="citizenship"
                style={{ width: "250px", padding: "5px",marginTop:"10px" }}
                value={formData.citizenship}
              >
                <option value="#">Select Citizenship</option>
                <option value="Rwandan">Rwandan</option>
                <option value="Foreigner">Foreigner</option>
              </select>
            </div>
            <div style={{ display: `${displaynid}` }}>
              <label
                style={{
                  fontSize: "13px",
                  display: "block",
                  marginTop:"10px"
                }}
              >
                Identification Document Number
                <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" placeholder="ID number" name="NID" style={{marginTop:"10px"}} value={formData.NID} onChange={handleChange} />
            </div>

            <div style={{ display: `${displaypass}`,marginTop:"10px" }}>
              <label
                style={{
                  fontSize: "13px",
                  display: "block",
                }}
              >
                Passport Number
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="passport number"
                name="passport"
                style={{marginTop:"10px"}}
                value={formData.passport}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
                <label style={{ fontSize: "13px" }}>
                  Other names <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  value={formData.otherNames}
                  name="otherNames"
                  placeholder="Enter other names"
                  style={{marginTop:"10px"}}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",marginTop:"10px"
                }}
              >
                <label style={{ fontSize: "13px" }}>
                  Surname<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="surName"
                  placeholder="Enter an surname"
                  value={formData.surName}
                  style={{marginTop:"10px"}}
                />
              </div>
            </div>
            <div>
            <label htmlFor="nationality" style={{ display: 'block',marginTop:"10px" }}>Nationality</label>
            <select
              id="country"
              value={formData.nationality}
              onChange={handleChange}
              name="nationality"
              style={{ display: 'block', marginTop: '8px' }}
            >
              <option value="" disabled>Select country</option>
              {countries.map(({ name, emoji, alpha2Code }) => (
                <option key={alpha2Code} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
                <label style={{ fontSize: "13px" }}>
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  placeholder="787858685"
                  style={{marginTop:"10px"}}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",marginTop:"10px"
                }}
              >
                <label style={{ fontSize: "13px" }}>
                  E-mail Address
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter an email address"
                  value={formData.email}
                  style={{marginTop:"10px"}}
                />
              </div>
            </div>
            <h4 style={{marginTop:"10px",fontWeight: "bold",}}>Business Owner Address</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px",marginTop:"10px"
              }}
            >
              <label style={{ fontSize: "13px",marginBottom:"10px" }}>
                Location <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="address"
                value={formData.address}
              >
                <option value="#">Select district</option>
                <option value="Musanze">Musaze</option>
                <option value="Kicukiro">Kicukiro</option>
                <option value="Gakenke">Gakenke</option>
                <option value="Rulindo">Rulindo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="businessownerdetails" style={{ marginTop: "40px" }}>
        <div className="bod flex items-center gap-2">
          <RiNewspaperLine /> Business Details
        </div>

          <div style={{ marginLeft: "20px",marginTop:"10px" }}>
            <h4 style={{marginTop:"10px",fontWeight: "bold"}}>Business Details</h4>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "13px",marginTop:"10px" }}>
                  Business Type <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="businessType"
                  value={formData.businessType}
                  style={{marginTop:"10px"}}
                >
                  <option>Select Business Type</option>
                  <option value="retailer">Retailer</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="manufacturer">Manufacturer</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <label style={{ fontSize: "13px",marginTop:"10px" }}>
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  style={{marginTop:"10px"}}
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "13px",marginTop:"10px" }}>
                  TIN Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.tinNumber}
                  name="tinNumber"
                  type="number"
                  placeholder="Enter TIN number"
                  style={{marginTop:"10px"}}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "35px",
                  marginTop:"10px"
                }}
              >
                <label style={{ fontSize: "13px" }}>
                  Registration Date<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.registrationDate}
                  type="date"
                  name="registrationDate"
                  placeholder="Select Date"
                  style={{marginTop:"10px"}}
                />
              </div>
            </div>
            <h4 style={{marginTop:"10px",fontWeight: "bold",}}>Business Address</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
                marginTop:"10px"
              }}
            >
              <label style={{ fontSize: "13px" }}>
                Location <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="businessaddress"
                style={{ width: "250px", padding: "5px",marginTop:"10px" }}
                value={formData.businessaddress}
              >
                <option value="#">Select district</option>
                <option value="Gasabo">Gasabo</option>
                <option value="Musanze">Musanze</option>
                <option value="Rubavu">Rubavu</option>
                <option value="Nyarugenge">Nyarugenge</option>
              </select>
            </div>
          </div>
        </div>

        <div className="businessownerdetails" style={{ marginTop: "40px" }}>
          <div className="bod flex items-center gap-2">
            <RiNewspaperLine />
            Product Information
          </div>
          <div style={{ marginLeft: "20px",marginTop:"10px" }}>
            <h4 style={{fontWeight: "bold",}}>Importation Details</h4>

            <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
              <label style={{ fontSize: "13px" }}>
                Purpose of Importation <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="purposeOfImportation"
                value={formData.purposeOfImportation}
                style={{marginTop:"10px"}}
              >
                <option>Select the purpose of importation</option>
                <option value="direct">Direct Sale</option>
                <option value="personal">Personal Use</option>
                <option value="trial">Trial Sale</option>
                <option value="other">Other</option>
              </select>
            </div>
            {formData.purposeOfImportation === "other" && (
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
              <label style={{ fontSize: "13px" }}>
                Specify purpose for importation <span style={{ color: "red" }}>*</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="specifyPurpose"
                placeholder="Enter purpose of importation"
                value={formData.specifyPurpose}
                style={{ marginTop: "10px" }}
              />
            </div>
          )}
            <h4 style={{marginTop:"10px",fontWeight: "bold",}}>Product Details</h4>

            <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
              <label style={{ fontSize: "13px" }}>
                Product Category <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="productCategory"
                value={formData.productCategory}
                style={{marginTop:"10px"}}
              >
                <option>Select Product Category</option>
                <option value="general">General Purpose</option>
                <option value="construction">Construction Material</option>
                <option value="chemicals">Chemicals</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
              <label style={{ fontSize: "13px" }}>
                Product Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="productName"
                placeholder="Enter product name"
                value={formData.productName}
                style={{marginTop:"10px"}}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
              <label style={{ fontSize: "13px" }}>
                Weight (kg)<span style={{ color: "red" }}>*</span>
              </label>
              <input
                onChange={handleChange}
                type="number"
                value={formData.Weight}
                name="Weight"
                placeholder="Weight"
                style={{marginTop:"10px"}}
              />
            </div>

            <div style={{ display: "flex",marginTop:"10px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "13px" }}>
                  Unit of Measurement <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="unitOfMeasurement"
                  value={formData.unitOfMeasurement}
                  style={{marginTop:"10px"}}
                >
                  <option value="#">Enter Unit Of Measurement</option>
                  <option value="kgs">Kgs</option>
                  <option value="tonnes">Tonnes</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  // marginTop:"10px"
                }}
              >
                <label style={{ fontSize: "13px" }}>
                  Quantity of product(s)<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="quantity"
                  placeholder="Enter Quantity"
                  value={formData.quantity}
                  style={{marginTop:"10px"}}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
              <label style={{  fontSize: "13px" }}>
                Description of Product(s){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={handleChange}
                name="description"
                placeholder="Enter Product Description"
                style={{
                  width: "500px",
                  height: "70px", 
                  border: "1px solid #d1d5db", 
                  borderRadius: "6px",
                  outline: "none",
                  padding: "8px",
                  marginBottom: "30px",
                  marginTop: "10px"
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>

      <input
        onChange={handleChange}
        style={{
          margin: "10px",
          background: "#247AFD",
          border: "none",
          borderRadius: "10px",
          padding: "10px",
          color: "#fff",
          position: "relative",
          // left: "5%",
          cursor: "pointer",
        }}
        type="submit"
        value="Submit"
        name="submit"
        onClick={handleSubmit}
      />
    </div>
    </>
    
  );
};
export default FormComponent;