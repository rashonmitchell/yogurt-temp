<template>
  <div class="profile mt-3 mb-3">
    <b-container class="bv-example-row">
      <UserSettingsHeader :user="user" />

    <b-row>
      <UserSettingsMenu/>

      <b-col cols="8" class="tab-content" id="myTabContent">
        <b-card 
        class="tab-pane active fade"
        v-bind:class="{ 'active show': (this.activeItem === 'nav-profile-tab') }" 
        id="nav-profile-tab" 
        title="Edit Profile" 
        align="left">
          <b-form-group
            label="Name"
            label-for="displayName"
          >
            <b-form-input id="displayName" :placeholder="user.displayName "></b-form-input>
          </b-form-group>

          <b-form-group
            label="Bio"
            label-for="textarea"
          >
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
              rows="2"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label="Location"
            label-for="location"
          >
            <b-form-input id="location" ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Country or Region"
            label-for="country_select"
          >
            <b-form-select
              class="mb-3 form-control"
              value-field="item"
              text-field="country_select"
            >
            </b-form-select>
          </b-form-group>

          <!-- <b-form-group
            label="Country or Region"
            label-for="country_select"
          >
            <select id="user_country" name="user[country]"><option value="">--Select--</option>&lt;option value="" disabled="disabled"&gt;-------------&lt;/option&gt;
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, The Democratic Republic Of The</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="CI">Côte D'Ivoire</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard and McDonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic Of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic Of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, the Former Yugoslav Republic Of</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States Of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="RE">Réunion</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts And Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">Saint Pierre And Miquelon</option>
              <option value="VC">Saint Vincent And The Grenedines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard And Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Republic Of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US" selected="selected">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela, Bolivarian Republic of</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
              <option value="AX">Åland Islands</option>
            </select>
          </b-form-group> -->

          <b-form-group
            label="Timezone"
            label-for="timezone"
          >
            <b-form-select
              class="mb-3 form-control"
              value-field="item"
              text-field="timezone"
            >
            </b-form-select>
          </b-form-group>
          <!-- <b-form-group>
            <select detect-tz="" id="user_timezone" name="user[timezone]" style="min-width: auto" tabindex="8" user-tz="America/Chicago" class="ng-isolate-scope"><option value="Pacific/Midway">International Date Line West (GMT -11)</option>
            <option value="Pacific/Midway">Midway Island (GMT -11)</option>
            <option value="Pacific/Pago_Pago">American Samoa (GMT -11)</option>
            <option value="Pacific/Honolulu">Hawaii (GMT -10)</option>
            <option value="America/Juneau">Alaska (GMT -9)</option>
            <option value="America/Los_Angeles">Pacific Time (US &amp; Canada) (GMT -8)</option>
            <option value="America/Tijuana">Tijuana (GMT -8)</option>
            <option value="America/Denver">Mountain Time (US &amp; Canada) (GMT -7)</option>
            <option value="America/Phoenix">Arizona (GMT -7)</option>
            <option value="America/Chihuahua">Chihuahua (GMT -7)</option>
            <option value="America/Mazatlan">Mazatlan (GMT -7)</option>
            <option value="America/Chicago" selected="selected">Central Time (US &amp; Canada) (GMT -6)</option>
            <option value="America/Regina">Saskatchewan (GMT -6)</option>
            <option value="America/Mexico_City">Guadalajara (GMT -6)</option>
            <option value="America/Mexico_City">Mexico City (GMT -6)</option>
            <option value="America/Monterrey">Monterrey (GMT -6)</option>
            <option value="America/Guatemala">Central America (GMT -6)</option>
            <option value="America/New_York">Eastern Time (US &amp; Canada) (GMT -5)</option>
            <option value="America/Indiana/Indianapolis">Indiana (East) (GMT -5)</option>
            <option value="America/Bogota">Bogota (GMT -5)</option>
            <option value="America/Lima">Lima (GMT -5)</option>
            <option value="America/Lima">Quito (GMT -5)</option>
            <option value="America/Halifax">Atlantic Time (Canada) (GMT -4)</option>
            <option value="America/Caracas">Caracas (GMT -5)</option>
            <option value="America/La_Paz">La Paz (GMT -4)</option>
            <option value="America/Santiago">Santiago (GMT -3)</option>
            <option value="America/St_Johns">Newfoundland (GMT -4)</option>
            <option value="America/Sao_Paulo">Brasilia (GMT -3)</option>
            <option value="America/Argentina/Buenos_Aires">Buenos Aires (GMT -3)</option>
            <option value="America/Guyana">Georgetown (GMT -4)</option>
            <option value="America/Godthab">Greenland (GMT -3)</option>
            <option value="Atlantic/South_Georgia">Mid-Atlantic (GMT -2)</option>
            <option value="Atlantic/Azores">Azores (GMT -1)</option>
            <option value="Atlantic/Cape_Verde">Cape Verde Is. (GMT -1)</option>
            <option value="Europe/Dublin">Dublin (GMT 0)</option>
            <option value="Europe/London">Edinburgh (GMT 0)</option>
            <option value="Europe/Lisbon">Lisbon (GMT 0)</option>
            <option value="Europe/London">London (GMT 0)</option>
            <option value="Africa/Casablanca">Casablanca (GMT 0)</option>
            <option value="Africa/Monrovia">Monrovia (GMT 0)</option>
            <option value="Etc/UTC">UTC (GMT 0)</option>
            <option value="Europe/Belgrade">Belgrade (GMT 1)</option>
            <option value="Europe/Bratislava">Bratislava (GMT 1)</option>
            <option value="Europe/Budapest">Budapest (GMT 1)</option>
            <option value="Europe/Ljubljana">Ljubljana (GMT 1)</option>
            <option value="Europe/Prague">Prague (GMT 1)</option>
            <option value="Europe/Sarajevo">Sarajevo (GMT 1)</option>
            <option value="Europe/Skopje">Skopje (GMT 1)</option>
            <option value="Europe/Warsaw">Warsaw (GMT 1)</option>
            <option value="Europe/Zagreb">Zagreb (GMT 1)</option>
            <option value="Europe/Brussels">Brussels (GMT 1)</option>
            <option value="Europe/Copenhagen">Copenhagen (GMT 1)</option>
            <option value="Europe/Madrid">Madrid (GMT 1)</option>
            <option value="Europe/Paris">Paris (GMT 1)</option>
            <option value="Europe/Amsterdam">Amsterdam (GMT 1)</option>
            <option value="Europe/Berlin">Berlin (GMT 1)</option>
            <option value="Europe/Berlin">Bern (GMT 1)</option>
            <option value="Europe/Rome">Rome (GMT 1)</option>
            <option value="Europe/Stockholm">Stockholm (GMT 1)</option>
            <option value="Europe/Vienna">Vienna (GMT 1)</option>
            <option value="Africa/Algiers">West Central Africa (GMT 1)</option>
            <option value="Europe/Bucharest">Bucharest (GMT 2)</option>
            <option value="Africa/Cairo">Cairo (GMT 2)</option>
            <option value="Europe/Helsinki">Helsinki (GMT 2)</option>
            <option value="Europe/Kiev">Kyiv (GMT 2)</option>
            <option value="Europe/Riga">Riga (GMT 2)</option>
            <option value="Europe/Sofia">Sofia (GMT 2)</option>
            <option value="Europe/Tallinn">Tallinn (GMT 2)</option>
            <option value="Europe/Vilnius">Vilnius (GMT 2)</option>
            <option value="Europe/Athens">Athens (GMT 2)</option>
            <option value="Europe/Istanbul">Istanbul (GMT 2)</option>
            <option value="Europe/Minsk">Minsk (GMT 3)</option>
            <option value="Asia/Jerusalem">Jerusalem (GMT 2)</option>
            <option value="Africa/Harare">Harare (GMT 2)</option>
            <option value="Africa/Johannesburg">Pretoria (GMT 2)</option>
            <option value="Europe/Moscow">Moscow (GMT 3)</option>
            <option value="Europe/Moscow">St. Petersburg (GMT 3)</option>
            <option value="Europe/Moscow">Volgograd (GMT 3)</option>
            <option value="Asia/Kuwait">Kuwait (GMT 3)</option>
            <option value="Asia/Riyadh">Riyadh (GMT 3)</option>
            <option value="Africa/Nairobi">Nairobi (GMT 3)</option>
            <option value="Asia/Baghdad">Baghdad (GMT 3)</option>
            <option value="Asia/Tehran">Tehran (GMT 3)</option>
            <option value="Asia/Muscat">Abu Dhabi (GMT 4)</option>
            <option value="Asia/Muscat">Muscat (GMT 4)</option>
            <option value="Asia/Baku">Baku (GMT 4)</option>
            <option value="Asia/Tbilisi">Tbilisi (GMT 4)</option>
            <option value="Asia/Yerevan">Yerevan (GMT 4)</option>
            <option value="Asia/Kabul">Kabul (GMT 4)</option>
            <option value="Asia/Yekaterinburg">Ekaterinburg (GMT 5)</option>
            <option value="Asia/Karachi">Islamabad (GMT 5)</option>
            <option value="Asia/Karachi">Karachi (GMT 5)</option>
            <option value="Asia/Tashkent">Tashkent (GMT 5)</option>
            <option value="Asia/Kolkata">Chennai (GMT 5)</option>
            <option value="Asia/Kolkata">Kolkata (GMT 5)</option>
            <option value="Asia/Kolkata">Mumbai (GMT 5)</option>
            <option value="Asia/Kolkata">New Delhi (GMT 5)</option>
            <option value="Asia/Kathmandu">Kathmandu (GMT 5)</option>
            <option value="Asia/Dhaka">Astana (GMT 6)</option>
            <option value="Asia/Dhaka">Dhaka (GMT 6)</option>
            <option value="Asia/Colombo">Sri Jayawardenepura (GMT 5)</option>
            <option value="Asia/Almaty">Almaty (GMT 6)</option>
            <option value="Asia/Novosibirsk">Novosibirsk (GMT 6)</option>
            <option value="Asia/Rangoon">Rangoon (GMT 6)</option>
            <option value="Asia/Bangkok">Bangkok (GMT 7)</option>
            <option value="Asia/Bangkok">Hanoi (GMT 7)</option>
            <option value="Asia/Jakarta">Jakarta (GMT 7)</option>
            <option value="Asia/Krasnoyarsk">Krasnoyarsk (GMT 7)</option>
            <option value="Asia/Shanghai">Beijing (GMT 8)</option>
            <option value="Asia/Chongqing">Chongqing (GMT 8)</option>
            <option value="Asia/Hong_Kong">Hong Kong (GMT 8)</option>
            <option value="Asia/Urumqi">Urumqi (GMT 6)</option>
            <option value="Asia/Kuala_Lumpur">Kuala Lumpur (GMT 8)</option>
            <option value="Asia/Singapore">Singapore (GMT 8)</option>
            <option value="Asia/Taipei">Taipei (GMT 8)</option>
            <option value="Australia/Perth">Perth (GMT 8)</option>
            <option value="Asia/Irkutsk">Irkutsk (GMT 8)</option>
            <option value="Asia/Ulaanbaatar">Ulaan Bataar (GMT 8)</option>
            <option value="Asia/Seoul">Seoul (GMT 9)</option>
            <option value="Asia/Tokyo">Osaka (GMT 9)</option>
            <option value="Asia/Tokyo">Sapporo (GMT 9)</option>
            <option value="Asia/Tokyo">Tokyo (GMT 9)</option>
            <option value="Asia/Yakutsk">Yakutsk (GMT 9)</option>
            <option value="Australia/Darwin">Darwin (GMT 9)</option>
            <option value="Australia/Adelaide">Adelaide (GMT 9)</option>
            <option value="Australia/Melbourne">Canberra (GMT 10)</option>
            <option value="Australia/Melbourne">Melbourne (GMT 10)</option>
            <option value="Australia/Sydney">Sydney (GMT 10)</option>
            <option value="Australia/Brisbane">Brisbane (GMT 10)</option>
            <option value="Australia/Hobart">Hobart (GMT 10)</option>
            <option value="Asia/Vladivostok">Vladivostok (GMT 10)</option>
            <option value="Pacific/Guam">Guam (GMT 10)</option>
            <option value="Pacific/Port_Moresby">Port Moresby (GMT 10)</option>
            <option value="Asia/Magadan">Magadan (GMT 10)</option>
            <option value="Asia/Magadan">Solomon Is. (GMT 10)</option>
            <option value="Pacific/Noumea">New Caledonia (GMT 11)</option>
            <option value="Pacific/Fiji">Fiji (GMT 12)</option>
            <option value="Asia/Kamchatka">Kamchatka (GMT 12)</option>
            <option value="Pacific/Majuro">Marshall Is. (GMT 12)</option>
            <option value="Pacific/Auckland">Auckland (GMT 12)</option>
            <option value="Pacific/Auckland">Wellington (GMT 12)</option>
            <option value="Pacific/Tongatapu">Nuku'alofa (GMT 13)</option>
            <option value="Pacific/Fakaofo">Tokelau Is. (GMT 13)</option>
            <option value="Pacific/Apia">Samoa (GMT 13)</option></select>
          </b-form-group> -->
          
          <b-link href="#" class="card-link btn btn-outline-success">Update Profile</b-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</div>

  
</template>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import UserSettingsHeader from '@/components/User/Settings/UserSettingsHeader'
import UserSettingsMenu from '@/components/User/Settings/UserSettingsMenu'
export default {
  name: "settings",
  data:() => ({
    activeItem: 'nav-profile-tab',
    // selected: [], // Must be an array reference!
    //   options: [
    //     { text: 'Orange', value: 'orange' },
    //     { text: 'Apple', value: 'apple' },
    //     { text: 'Pineapple', value: 'pineapple' },
    //     { text: 'Grape', value: 'grape' }
    //   ]
    isProfileEditMode: false,
  }),
  methods: {
    setActive (menuItem) {
      console.log(menuItem)
      this.activeItem = menuItem
    }
  },
  components: {
    FontAwesomeIcon,
    UserSettingsHeader,
    UserSettingsMenu
  },
  props: ["user"]
}
</script>

<style lang="scss">
.form-control {
	// height: 27px;
  background-color: transparent;
	border: none;
  border-radius: 0;
	border-bottom: 2px solid #e6e6e6;
	width: 100%;
	color: #666;
	&:focus {
		border-color: #42b983;
	}
	&::-webkit-input-placeholder { 
		color: #999;
	}
	&::-moz-placeholder { 
		color: #999;
	}
	&:-ms-input-placeholder { 
		color: #999;
	}
	&:-moz-placeholder { 
		color: #999;
	}
}

.list-type {
  list-style-type: none;
}

select.form-control {
	-moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    color: #999;
    option[value=""][disabled] {
 		display: none;
    padding: 8px 0;
 	}
}
textarea.form-control {
	padding: 8px 0;
}

</style>
