import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import logonoback from "../../Assets/logonoback.png";
import heroimg from "../../Assets/heroimg.png";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  const [togglepassword, settogglepassword] = useState(true);
  return (
    <div className="md:flex items-center h-screen">

      <div className="w-[30%] bg-[#F6F6F6] py-4 px-6 h-screen fixed hidden md:block">
        <div className="flex space-x-2 items-center cursor-pointer">
          <h1 className="font-satoshibold text-base text-black">flutterair</h1>
        </div>
        <div className="items-center align-middle mt-24">
          <div className="flex space-x-2 items-start mt-4">
            <div className="h-8 w-8 rounded-full bg-[#0e3b0f] border border-white justify-center flex px-1">
              <div className="h-4 w-4 rounded-full bg-[#ffffff] border border-white mt-1"></div>
            </div>
            <div>
              <h1 className="font-satoshibold text-sm">Flutterair Launchpad</h1>
              <p className="font-satoshiregular text-xs text-[#475569]">
                Incorporate your business in Nigeria and US from anywhere in the
                world, easy setup in just few minutes.
              </p>
            </div>
          </div>

          <div className="flex space-x-2 items-start mt-12">
            <div className="h-8 w-8 rounded-full bg-[#0e3b0f] border border-white justify-center flex px-1">
              <div className="h-4 w-4 rounded-full bg-[#ffffff] border border-white mt-1"></div>
            </div>
            <div>
              <h1 className="font-satoshibold text-sm">
                Flutterair Compliance
              </h1>
              <p className="font-satoshiregular text-xs text-[#475569]">
                We handle compliance, tax filings, ensuring you are up to date
                with government regulations and much more
              </p>
            </div>
          </div>

          <div className="flex space-x-2 items-start mt-12">
            <div className="h-8 w-8 rounded-full bg-[#0e3b0f] border border-white justify-center flex px-1">
              <div className="h-4 w-4 rounded-full bg-[#ffffff] border border-white mt-1"></div>
            </div>
            <div>
              <h1 className="font-satoshibold text-sm">Flutterair Sync</h1>
              <p className="font-satoshiregular text-xs text-[#475569]">
                Integrate with over 2000+ apps with amazing discounts, from
                banking, to equity, payroll and so much more.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-0 absolute w-[40%]">
          <img src={heroimg} />
        </div>
      </div>



      <div className="md:w-[70%] w-[100%] md:ml-[40%] py-4 md:px-6 px-4 relative flex text-start h-screen">

        <Link to={"/"}>
          <div className="absolute top-6 md:right-10 right-4 border border-[#51bf55] py-2 px-4 rounded-md">
            <h1 className="font-satoshimedium text-[#51bf55] text-xs">
              Already have an account ? Log in
            </h1>
          </div>
        </Link>

        <div className="md:w-[70%] w-[100%] mt-20 md:mx-10">
          <h1 className="font-satoshibold text-lg">Create an account</h1>
          <p className="font-satoshiregular text-sm text-[#475569]">
            Welcome to flutterair, where ideas meet reality
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <div className="flex flex-col w-[50%]">
              <input
                placeholder="First Name"
                type="text"
                className="md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]"
              />
            </div>

            <div className="flex flex-col w-[50%]">
              <input
                placeholder="Last Name"
                type="text"
                className="md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <select className="md:text-sm text-xs font-satoshiregular py-3 px-4 pr-8 h-12 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]">
              <option value="" selected="selected">
                Select Country
              </option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">
                Congo, The Democratic Republic of The
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D'ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </option>
              <option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People's Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia and Montenegro">
                Serbia and Montenegro
              </option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">
                South Georgia and The South Sandwich Islands
              </option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan, Province of China">
                Taiwan, Province of China
              </option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">
                Virgin Islands, British
              </option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>

          <div className="mt-4 flex flex-col">
            <input
              placeholder="Company Name"
              type="text"
              className="md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <select className="md:text-sm text-xs h-12 font-satoshiregular py-3 px-4 pr-8 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]">
            <option value={""} className="text-xs font-satoshiregular">
               Select Country of incorporation
              </option>
              <option value={"Nigeria"} className="text-xs font-satoshiregular">
                Nigeria
              </option>
              <option
                value={"United States"}
                className="text-xs font-satoshiregular"
              >
                United States
              </option>
              <option
                value={"Already Incorporated"}
                className="text-xs font-satoshiregular"
              >
                Already Incororated
              </option>
            </select>
          </div>

          <div className="mt-4 flex flex-col">
            <input
              placeholder="Email Address"
              type="text"
              className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <div className="flex justify-between items-center"></div>

            <div className="md:text-sm text-xs flex items-center space-x-2 font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]">
              <input
                autoFocus={false}
                autoSave={false}
                autoComplete={false}
                type={togglepassword == true ? "password" : "text"}
                placeholder="Password"
                className="outline-none px-4 w-[90%] autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
              />
              <h1
                className="font-satoshiregular text-xs cursor-pointer text-[#51bf55]"
                onClick={() => settogglepassword(!togglepassword)}
              >
                {togglepassword == true ? " Show" : " Hide"}
              </h1>
            </div>
          </div>

          <Link to={"/create/incorporation"}>
            <div className="mt-6 flex items-center justify-center bg-black py-3 px-3 text-center cursor-pointer">
              <h1 className="font-satoshibold text-white md:text-sm text-xs">
                Create your account
              </h1>
            </div>
          </Link>

          <p className="text-xs font-satoshiregular mt-4 pb-10">
            By clicking create your account, I acknowledge that I have read and
            do hereby accept the terms and conditions in the Flutterair's Terms
            of Use, Merchant Agreement and Privacy Policy.
          </p>
          
        </div>
      </div>
    </div>
  );
}
