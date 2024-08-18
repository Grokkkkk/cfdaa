const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
});


document.addEventListener('DOMContentLoaded', () =>{
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoHeight: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})
  document.addEventListener('DOMContentLoaded', ()  => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        autoplay: true,
        parallax: true,


        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination:{
            el: '.swiper-pagination',
        }
    });
    })

     
        function loadForm() {
            var formSelector = document.getElementById('formSelector').value;
            var formContainer = document.getElementById('formContainer');

            if (formSelector === 'formA') {
                formContainer.innerHTML = `
                <section class="bady">
        <section class="container8">
                    <form id="formA" class='form'>
                        <form action="#" class="form">
                            <p class="documentation">The following documentation will be needed to proceed:</p>
                <label style="font-weight: 900; font-size: 20PX;">APPLICANT INFORMATION</label>
                <br>
                <div class="column">
                    <div class="input-box">
                        <label>FIRST NAME</label>
                        <input type="text" placeholder="" required>
                    </div>
                    <div class="input-box">
                        <label>MIDDLE NAME</label>
                        <input type="text" placeholder="" required>
                    </div>
                    <div class="input-box">
                        <label>LAST NAME</label>
                        <input type="text" placeholder="" required>
                    </div>
                </div>
                <div class="column">
                    <div class="input-box">
                        <label>PHONE NUMBER</label>
                        <input type="number" placeholder="" required>
                    </div>
                    <div class="input-box">
                        <label>EMAIL</label>
                        <input type="text" placeholder="" required>
                    </div>
                </div>
                <div class="input-box">
                    <label>DATE OF BIRTH</label><br>
                    <input type="date" placeholder="" required>
                </div>
 
                <div class="gender-box">
                    <h3>GENDER</h3>
                    <div class="gender-option">
                        <div class="gender">
                            <input type="radio" id="check-male" name="gender" checked>
                            <label for="check-male">MALE</label>
                        </div>
                        <div class="gender">
                            <input type="radio" id="check-female" name="gender">
                            <label for="check-female">FEMALE</label>
                        </div>
                    </div>
                </div>
                <br>
 
                <div class="input-box address">
                    <label style="font-weight: 900; font-size: 20PX;">PHYSICAL ADDRESS</label>
                    <br>
                    <br>
                    <label>STREET ADDRESS</label>
                    <input type="Street Address" placeholder="" required>
                    <br>
                    <br>
                    <label>APT / SUITE</label>
                    <input type="APT / SUITE" placeholder="" required>
                    <br>
                    <br>
                    <label>STATE</label>
                    <div class="column">
                        <div class="select-box">
                            <select>
                                <option></option>
                                <option>AL </option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>IA</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>ME</option>
                                <option>MD</option>
                                <option>MA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>MO</option>
                                <option>MT</option>
                                <option>NE</option>
                                <option>NV</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VT</option>
                                <option>VA</option>
                                <option>WA</option>
                                <option>WV</option>
                                <option>WI</option>
                                <option>WY</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label>CITY</label>
                            <input type="CITY" placeholder="" required>
                        </div>
                        <div class="input-box">
                            <label>ZIP CODE</label>
                            <input type="ZIP CODE" placeholder="" required>
                        </div>
                    </div>
                </div>
                <div class="gender-box">
                    <h3>IS YOUR HOME ADDRESS THE SAME AS YOUR MAILING ADDRESS</h3>
                    <div class="gender-option">
                        <div class="gender">
                            <input type="radio" id="check-male" name="gender" checked>
                            <label for="check-male">YES</label>
                        </div>
                        <div class="gender">
                            <input type="radio" id="check-female" name="gender">
                            <label for="check-female">NO</label>
                        </div>
                    </div>
                </div>
 
                <div class="input-box address">
                    <label style="font-weight: 900; font-size: 20PX;">MAILING ADDRESS</label>
                    <br>
                    <br>
                    <label>STREET ADDRESS</label>
                    <input type="Street Address" placeholder="" required>
                    <div class="column"></div>
                    <br>
                    <label>APT / SUITE</label>
                    <input type="APT / SUITE" placeholder="" required>
                    <br>
                    <br>
                    <label>STATE</label>
                    <div class="column">
                        <div class="select-box">
                            <select>
                                <option></option>
                                <option>AL </option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>IA</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>ME</option>
                                <option>MD</option>
                                <option>MA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>MO</option>
                                <option>MT</option>
                                <option>NE</option>
                                <option>NV</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VT</option>
                                <option>VA</option>
                                <option>WA</option>
                                <option>WV</option>
                                <option>WI</option>
                                <option>WY</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label>CITY</label>
                            <input type="CITY" placeholder="" required>
                        </div>
                        <div class="input-box">
                            <label>ZIP CODE</label>
                            <input type="ZIP CODE" placeholder="" required>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <label style="font-weight: 900; font-size: 20PX;">PERSONAL IDENTIFICATION</label>
 
                <div class="input-box">
                    <label>IN WHAT CITY WERE YOU BORN</label>
                    <input type="text" placeholder="" required>
                </div>
                <div class="input-box">
                    <label>WHAT IS YOUR MOTHER'S MAIDEN NAME</label>
                    <input type="text" placeholder="" required>
                </div>
                <br>
                <br>
                <label>MEANS OF IDENTIFICATION</label>
                <div class="column">
                    <div class="select-box">
                        <select name="identification">
                            <option></option>
                            <option value="driver_license">DRIVER'S LICENSE</option>
                            <option value="state_id">STATE ISSUED ID</option>
                            <option value="us_passport">PASSPORT</option>
                        </select>
                    </div>
                </div>
                <div class="columnn">
                    <div class="input-box">
                        <label>FRONT VIEW OF IDENTIFICATION</label>
                        <input type="file" required="required" name="frontid" aria-required="true">
                    </div>
                    <div class="input-box">
                        <label>BACK VIEW OF IDENTIFICATION</label>
                        <input type="file" required="required" name="backid" aria-required="true">
                    </div>
                </div>
                <div class="input-box">
                    <label>SOCIAL SECURITY NUMBER / SOCIAL INSUARANCE NUMBER / EMPLOYEE IDENTIFICATION NUMBER</label>
                    <input type="text" maxlength="9" placeholder="" name="ssn">
                </div>
                </div>
                <br>
                <br>
                <label style="font-weight: 900; font-size: 20PX;">GRANT ENQUIRIES</label>
                <br>
                <div class="input-box">
                    <label>GRANT PROGRAM</label>
                    <div class="column">
                        <div class="select-box">
                            <select name="grant_type">
                                <option value=""></option>
                                <option value="workers_grant">WORKERS GRANT</option>
                                <option value="retire_fund_grant">RETIREE FUND GRANT</option>
                                <option value="veteran_fund_grant">VETERAN FUND GRANT</option>
                                <option value="student_fund_grant">STUDENT FUND GRANT</option>
                                <option value="employee_worker_grant">SMALL BUSINESS GRANT</option>
                                <option value="citizen_home_buyer_grant">CITIZEN HOME BUYER GRANT</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-box">
                        <label>GRANT AMOUNT</label>
                        <div class="column">
                            <div class="select-box">
                                <select name="grant_amount">
                                    <option value=""></option>
                                    <option value="$150,000 - $250,000">$150,000 - $250,000</option>
                                    <option value="$250,000 - $350,000">$250,000 - $350,000</option>
                                    <option value="$350,000 - $450,000">$350,000 - $450,000</option>
                                    <option value="$450,000 - $750,000">$450,000 - $750,000</option>
                                    <option value="$750,000 - $1,000,000">$750,000 - $1,000,000</option>
                                </select>
                            </div>
                        </div>
                        <div class="columnn">
                            <div class="input-box">
                                <label>PAYMENT MEANS OF RECEIVING GRANT</label>
 
                                <div class="select-box">
                                    <select name="grant_recieve_method">
                                        <option value=""></option>
                                        <option value="direct_deposit">DIRECT DEPOSIT</option>
                                        <option value="check_payment">CHECK PAYMENT</option>
                                    </select>
                                </div>
 
                                <div class="input-box">
                                    <label>ACCOUNT TYPE</label>
                                    <div class="select-box">
                                        <select name="account_type">
                                            <option value=""></option>
                                            <option value="Checkings">CHECKINGS</option>
                                            <option value="Savings">SAVINGS</option>
                                        </select>
                                    </div>
 
                                    <div class="input-box">
                                        <label>BANK</label>
                                        <input type="text" placeholder="" required>
                                    </div>
 
                                    <div class="column">
                                        <div class="input-box">
                                            <label>ABA ROUTING NUMBER</label>
                                            <input type="text" maxlength="9" placeholder="" required>
                                        </div>
                                        <div class="input-box">
                                            <label>ACCOUNT NUMBER</label>
                                            <input type="text" maxlength="20" placeholder="" required>
                                        </div>
                                    </div>
                                    <div class="columnn">
                                        <div class="input-box">
                                            <label>UTILITY BILL</label>
 
                                            <input type="file" required="required" name="frontid" aria-required="true">
                                        </div>
                                    </div>
                                    <div class="input-box">
                                        <label>HOW DID YOU HEAR ABOUT THE CFDA</label>
                                        <div class="select-box">
                                            <select name="hear_about_us">
                                                <option value=""></option>
                                                <option value="Friends_Family">FRIENDS, FAMILY</option>
                                                <option value="Previous_Qualifier">PREVIOUS QUALIFIER</option>
                                                <option value="Blog">BLOG OR PUBLICATION</option>
                                                <option value="Social_Media">SOCIAL MEDIA</option>
                                            </select>
                                        </div>
                                    </div>
                                      <button class="clone">SUBMIT</button>
 
                    </form>
                `;
            } else if (formSelector === 'formB') {
                formContainer.innerHTML = `
                <section class="bady">
        <section class="container8">
                    <form id="formB" class="form">
                    <p class="documentation">The following documentation will be needed to proceed:</p>
                        <label style="font-weight: 900; font-size: 20PX;">APPLICANT INFORMATION</label>
    <div class="column">
        <div class="input-box">
            <label>FIRST NAME</label>
            <input type="text" placeholder="" required>
        </div>
        <div class="input-box">
            <label>MIDDLE NAME</label>
            <input type="text" placeholder="">
        </div>
        <div class="input-box">
            <label>LAST NAME</label>
            <input type="text" placeholder="" required>
        </div>
    </div>
    <div class="column">
        <div class="input-box">
            <label>PHONE NUMBER</label>
            <input type="number" placeholder="" required>
        </div>
        <div class="input-box">
            <label>EMAIL</label>
            <input type="text" placeholder="" required>
        </div>
    </div>
    <div class="input-box">
        <label>DATE OF BIRTH</label>
        <input type="date" placeholder="" required>
    </div>
    
    <div class="gender-box">
        <h3>GENDER</h3>
        <div class="gender-option">
            <div class="gender">
                <input type="radio" id="check-male" name="gender" checked>
                <label for="check-male">MALE</label>
            </div>
            <div class="gender">
                <input type="radio" id="check-female" name="gender">
                <label for="check-female">FEMALE</label>
            </div>
        </div>
    </div>
    <br>
    
    <div class="input-box address">
        <label style="font-weight: 900; font-size: 20PX;">PHYSICAL ADDRESS</label>
        <br>
        <br>
        <label>STREET ADDRESS</label>
        <input type="Street Address" placeholder="" required>
        <br>
        <br>
        <label>APT / SUITE</label>
        <input type="APT / SUITE" placeholder="" required>
        <br>
        <br>
        <div class="column">
            <div class="input-box">
                <label>CITY</label>
        <input type="CITY" placeholder="" required>
        </div>
        <div class="input-box">
            <label>STATE</label>
            <input type="STATE" placeholder="" required>
            </div>
            </div>
        
    <br>
        <br>
        <label>COUNTRY</label>
        <div class="column">
            <div class="select-box">
                <select>
                    <option></option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
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
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
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
                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories</option>
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
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                    <option value="Korea, Republic of">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
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
                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
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
                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
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
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select>
            </div>
    </div>
        
        </div>
        <div class="gender-box">
            <h3>IS YOUR HOME ADDRESS THE SAME AS YOUR MAILING ADDRESS</h3>
            <div class="gender-option">
                <div class="gender">
                    <input type="radio" id="check-male" name="gender" checked>
                    <label for="check-male">YES</label>
                </div>
                <div class="gender">
                    <input type="radio" id="check-female" name="gender">
                    <label for="check-female">NO</label>
                </div>
            </div>
        </div>

        <div class="input-box address">
            <label style="font-weight: 900; font-size: 20PX;">MAILING ADDRESS</label>
            <br>
            <br>
            <label>STREET ADDRESS</label>
        <input type="Street Address" placeholder="" required>
        <br>
        <br>
        <label>APT / SUITE</label>
        <input type="APT / SUITE" placeholder="" required>
        <br>
        <br>
        <div class="column">
            <div class="input-box">
                <label>CITY</label>
        <input type="CITY" placeholder="" required>
        </div>
        <div class="input-box">
            <label>STATE</label>
            <input type="STATE" placeholder="" required>
            </div>
            </div>
        
    <br>
        <br>
        <label>COUNTRY</label>
        <div class="column">
            <div class="select-box">
                <select>
                    <option></option>
                    <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
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
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
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
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
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
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
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
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
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
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
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
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                </select>
            </div>
    </div>
        </div>
            <br>
            <br>
            <label style="font-weight: 900; font-size: 20PX;">PERSONAL IDENTIFICATION</label>

            <div class="input-box">
                <label>IN WHAT CITY WERE YOU BORN</label>
                <input type="text" placeholder="" required>
            </div>
            <div class="input-box">
                <label>WHAT IS YOUR MOTHER'S MAIDEN NAME</label>
                <input type="text" placeholder="" required>
            </div>
            <br>
            <br>
            <label>MEANS OF IDENTIFICATION</label>
            <div class="column">
                <div class="select-box">
                    <select name="identification">
                        <option></option>
                        <option value="driver_license">DRIVER'S LICENSE</option>
                        <option value="state_id">STATE ISSUED ID</option>
                        <option value="us_passport">PASSPORT</option>
                    </select>
                </div>
            </div>
            <div class="columnn">
                <div class="input-box">
                    <label>FRONT VIEW OF IDENTIFICATION</label>
                    <input type="file"  required="required" name="frontid" aria-required="true">
                </div>
                <div class="input-box">
                    <label>BACK VIEW OF IDENTIFICATION</label>
                    <input type="file"  required="required" name="backid" aria-required="true">
                </div>
            </div>
        </div>
            <br>
            <br>
            <label style="font-weight: 900; font-size: 20PX;">GRANT ENQUIRIES</label>
            <br>
            <div class="input-box">
                <label>GRANT PROGRAM</label>
            <div class="column">
                <div class="select-box">
                    <select name="grant_type">
                        <option value=""></option>
                        <option value="workers_grant">WORKERS GRANT</option>
                        <option value="retire_fund_grant">RETIREE FUND GRANT</option>
                        <option value="veteran_fund_grant">VETERAN FUND GRANT</option>
                        <option value="student_fund_grant">STUDENT FUND GRANT</option>
                        <option value="employee_worker_grant">SMALL BUSINESS GRANT</option>
                        <option value="citizen_home_buyer_grant">CITIZEN HOME BUYER GRANT</option>
                    </select>
                </div>
            </div>
            <div class="input-box">
                <label>GRANT AMOUNT</label>
            <div class="column">
                <div class="select-box">
                    <select name="grant_amount">
                        <option value=""></option>
                        <option value="$150,000 - $250,000">$150,000 - $250,000</option>
                        <option value="$250,000 - $350,000">$250,000 - $350,000</option>
                        <option value="$350,000 - $450,000">$350,000 - $450,000</option>
                        <option value="$450,000 - $750,000">$450,000 - $750,000</option>
                        <option value="$750,000 - $1,000,000">$750,000 - $1,000,000</option>
                    </select>
                </div>
            </div>
            <div class="columnn">
                <div class="input-box">
                    <label>PAYMENT MEANS OF RECEIVING GRANT</label>
                <div class="select-box">
                    <select name="grant_recieve_method">
                        <option value=""></option>
                        <option value="direct_deposit">DIRECT DEPOSIT</option>
                        <option value="check_payment">CHECK PAYMENT</option>
                    </select>
                </div>

                <div class="input-box">
                    <label>ACCOUNT TYPE</label>
                <div class="select-box">
                    <select name="account_type">
                        <option value=""></option>
                        <option value="Checkings">CHECKINGS</option>
                        <option value="Savings">SAVINGS</option>
                    </select>
                </div>

                <div class="input-box">
                    <label>BANK</label>
                    <input type="text" placeholder="" required>
                </div>

                <div class="column">

                    <div class="input-box">
                        <label>ACCOUNT NUMBER</label>
                        <input type="text" maxlength="20" placeholder="" required>
                    </div>
                </div>
                <div class="columnn">
                    <div class="input-box">
                        <label>UTILITY BILL</label>
                        
                        <input type="file"  required="required" name="frontid" aria-required="true">
                    </div>
                </div>
                <div class="input-box">
                    <label>HOW DID YOU HEAR ABOUT THE CFDA</label>
                <div class="select-box">
                    <select name="hear_about_us">
                        <option value=""></option>
                        <option value="Friends_Family">FRIENDS, FAMILY</option>
                        <option value="Previous_Qualifier">PREVIOUS QUALIFIER</option>
                        <option value="Blog">BLOG OR PUBLICATION</option>
                        <option value="Social_Media">SOCIAL MEDIA</option>
                    </select>
                </div>
                </div>

    <button class="clone">SUBMIT</button>
                    </form>
                `;
            } else if (formSelector === 'none') {
                formContainer.innerHTML = ''; // Clear the form container for "None" option
            }
        }

document.getElementById("track-tab").addEventListener("click", function() {
    showSection("tracking-section");
    setActiveTab("track-tab");
});

document.getElementById("faq-tab").addEventListener("click", function() {
    showSection("faq-section");
    setActiveTab("faq-tab");
});

function showSection(sectionId) {
    document.getElementById("tracking-section").style.display = "none";
    document.getElementById("faq-section").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

function setActiveTab(tabId) {
    document.getElementById("track-tab").classList.remove("active");
    document.getElementById("faq-tab").classList.remove("active");
    document.getElementById(tabId).classList.add("active");
}

let li = document.querySelectorAll(".faq-text li");
        for (var i = 0; i < li.length; i++) {
          li[i].addEventListener("click", (e)=>{
            let clickedLi;
            if(e.target.classList.contains("question-arrow")){
              clickedLi = e.target.parentElement;
            }else{
              clickedLi = e.target.parentElement.parentElement;
            }
           clickedLi.classList.toggle("showAnswer");
          });
        }