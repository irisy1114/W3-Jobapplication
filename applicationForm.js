$(function () {
    $('#startDate').pickadate({format: 'mm, dd, yyyy'});
    $('#endDate').pickadate({format: 'mm, dd, yyyy'});

    $('#firstEmployeeStartDate').pickadate({format: 'mm, dd, yyyy'});
    $('#firstEmployeeEndDate').pickadate({format: 'mm, dd, yyyy'});

    $('#previousStartDate').pickadate({format: 'mm, dd, yyyy'});
    $('#previousEndDate').pickadate({format: 'mm, dd, yyyy'});

    const nonExperienceJobs = ['', 'Dining Room Server Assistant***', 'Employee Dining Room Crew***', 'Fast Food Crew***', 'Kitchen Crew***',
        'Laundry Help***', 'Room Attendant***'];
    const driverLicenseJobs = ['', 'Boiler Technician (D.L.)', 'Bus Driver/Guide (D.L.)', 'Bus Service Person (D.L.)', 'Campground Attendant (D.L.)',
        'Carpenter (D.L.)', 'Carpet Cleaning Technician (D.L.)', 'Distribution Center Truck Driver (D.L.)', 'Dock Help (D.L.)', 'Electrician (D.L.)',
        'Fire Systems Technician (D.L.)', 'Floor Cleaning Technician (D.L.)', 'Furniture Mover (D.L.)', 'General Maintenance (D.L.)',
        'Heavy Equipment Operator (D.L.)', 'Kitchen Technician (D.L.)', 'Laundry Technician (D.L.)', 'Laundry Truck Driver (D.L.)',
        'Linen Truck Driver (D.L.)', 'Locksmith (D.L.)', 'Marina Fishing Guide (D.L.)', 'Marina Manager (D.L.)', 'Painter (D.L.)', 'Plumber (D.L.)',
        'Recreation Coordinator (D.L.)', 'Recreation Supervisor (D.L.)', 'Recycling Technician (D.L.)', 'Scenic Cruise Operator (D.L.)',
        'Security Guard And Location Safety (D.L.)', 'Tour Guide (D.L.)', 'Touring Car Driver- Interpretive Guide Non CDL (D.L.)', 'Vending Driver (D.L.)'];
    const otherJobs = ['', 'Activities Sales Agent', 'Administrative Assistant Maintenance', 'Asst. HR Manager', 'Audit Clerk', 'Bar Lead', 'Barista',
        'Bartender', 'Bell Porter', 'Cafeteria Management', 'Camper Services Attendants', 'Campground Management', 'Chef', 'Cocktail Server', 'Cook',
        'Cookout Entertainer', 'Dining Room Host', 'Dining Room Host Lead', 'Dining Room Management', 'Dining Room Server', 'Distribution Center Associate',
        'Distribution Lead', 'Dorm Custodian', 'Employee Dining Room Management', 'Employee Pub Crew/Lead', 'Fast Food Management', 'Finish Floor Supervisor',
        'Food and Beverage Management', 'Food and Beverage Office Assistant', 'Front Office Management', 'General Accounting Office', 'Guest Services Agent',
        'Guest Services Agent (Campground)', 'Housekeeping Management', 'Housekeeping Room Inspector', 'Housekeeping Trainer', 'Housekeeping Office Assistant',
        'Housing Manager', 'Internship', 'Location Controller/Assistant', 'Night Auditor', 'Night Guest Services Agent', 'Pantry Supervisor',
        'Personnel Management', 'Pianist', 'Porter', 'Preservation Maintenance Crew Craftsperson', 'Reservations Sales Agent', 'Residence Coordinator',
        'Retail Management', 'Retail Sales Associate', 'R&amp;M Staff Assistant', 'Seamstress', 'Senior Guest Services Agent (Campground)',
        'Snack Shop / Deli Supervisor', 'Sous Chef', 'Steward', 'Storekeeper', 'Traveling Night Auditor', 'Vending Clerk', 'Vending Service Technician',
        'Warehouse Manager', 'Warehouse Help', 'Warehouse Driver (OFI)', 'Wash Deck Supervisor', 'Wash Deck Lead', 'Wrangler/Driver'];

    // const lastLocation = ['Select One', 'Corporate Headquarters', 'Bryce Canyon Lodge', 'Burr Oak State Park', 'Crater Lake National Park',
    //     'Everglades National Park', 'Furnace Creek Inn and Ranch', 'Geneva Marina', 'Gideon Putnam', 'Grand Canyon National Park - North Rim',
    //     'Grand Canyon National Park - South Rim', 'Hueston Woods', 'Maumee Bay State Park', 'Mohican State Park Resort and Conference Center',
    //     'Mount Rushmore', 'Painted Desert Oasis', 'Punderson Manor', 'Salt Fork Resort and State Park', "Scotty's Castle", "Shawnee State Park",
    //     'Silverado Country Club and Resort', 'Stovepipe Wells', 'Yellowstone National Park', 'Zion National Park'];

    loadPositions($('#sel_first_experience'), nonExperienceJobs);
    loadPositions($('#sel_second_experience'), nonExperienceJobs);
    loadPositions($('#sel_first_driverLicense'), driverLicenseJobs);
    loadPositions($('#sel_second_driverLicense'), driverLicenseJobs);
    loadPositions($('#sel_first_others'), otherJobs);
    loadPositions($('#sel_second_others'), otherJobs);

    showToast();

});


function workProof(id, no = false) {
    const section = document.getElementById(id);
    // if yes and section exists, do nothing
    if (!no && section) return;
    // if no
    if (no) {
        // if section exists, remove the element
        if (section) $('#' + id).remove();
        return;
    }

    // create element
    const proof = `<div class="" id="` + id + `">
                        <div class="card card-body">
                            International applicants you must have a sponsoring agency to continue completing this
                            application please select from below options. These are the only sponsoring agencies we
                            accept.
                            <p><input class="form-check-input" type="radio" name="flexRadioDefault" id="aspire">
                                <label class="form-check-label" for="aspire">
                                    Aspire
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="ciee">
                                <label class="form-check-label" for="ciee">
                                    Ciee
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="ccusa">
                                <label class="form-check-label" for="ccusa">
                                    Ccusa
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="interexchange">
                                <label class="form-check-label" for="interexchange">
                                    Interexchange
                                </label>
                            </p>
                        </div>`
    // add to parent
    $('#' + id + 'Proof').append(proof);
}


function backgroundCheck(id, no = false) {
    const section = document.getElementById(id);
    // if yes and section exists, do nothing
    if (!no && section) return;
    // if no
    if (no) {
        // if section exists, remove content
        if (section) $('#' + id).remove();
        return;
    }

    // create element
    const check = `<div class="" id="` + id + `">
                        <div class="card card-body">
                            If yes, state details and dates
                            <div class="mb-3">
                                <label for="details" class="form-label"></label>
                                <textarea class="form-control" id="details" rows="3"></textarea>
                            </div>
                        </div>
                  </div>`


    // add to parent id
    $('#' + id + 'Check').append(check);
}


// display positions for three choices
function loadPositions(sel, jobs) {
    for (var i = 0; i < jobs.length; i++) {
        sel.append(new Option(jobs[i]))
    }
}

function loadEmployeeInfo(id, no = false) {
    const section = document.getElementById(id);
    // if yes and section exists, do nothing
    if (!no && section) return;
    // if no
    if (no) {
        // if section exists, remove the field
        if (section) $('#' + id).remove();
        return;
    }

    // create element
    const employeeInfo = `<div class="" id="` + id + `">
                        <div class="row">
                        <div class="col-sm-6">
                            <label for="employeeNum" class="form-label">Please enter your employee number:</label>
                            <input type="text" class="form-control" id="employeeNum">
                        </div>
                        <div class="col-sm-6">
                            <label for="lastLocation" class="form-label">Select last location worked:</label>
                            <select id="lastLocation" class="form-control">
                                <option value="">Select One</option>
                                <option>Corporate Headquarters</option>
                                <option>Bryce Canyon Lodge</option>
                                <option>Burr Oak State Park</option>
                                <option>Crater Lake National Park</option>
                                <option>Everglades National Park</option>
                                <option>Furnace Creek Inn and Ranch</option>
                                <option>Geneva Marina</option>
                                <option>Gideon Putnam</option>
                                <option>Grand Canyon National Park - North Rim</option>
                                <option>Grand Canyon National Park - South Rim</option>
                                <option>Hueston Woods</option>
                                <option>Maumee Bay State Park</option>
                                <option>Mohican State Park Resort and Conference Center</option>
                                <option>Mount Rushmore</option>
                                <option>Painted Desert Oasis</option>
                                <option>Punderson Manor</option>
                                <option>Salt Fork Resort and State Park</option>
                                <option>Scotty's Castle</option>
                                <option>Shawnee State Park</option>
                                <option>Silverado Country Club and Resort</option>
                                <option>Stovepipe Wells</option>
                                <option>Yellowstone National Park</option>
                                <option>Zion National Park</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label for="previousStartDate">Enter the date started:</label>
                            <input type="text" class="form-control picker__input" id="previousStartDate"
                                   readonly="">
                        </div>
                        <div class="col-sm-6">
                            <label for="previousEndDate">and the date ended:</label>
                            <input type="text" class="form-control picker__input" id="previousEndDate"
                                   readonly="">
                        </div>
                        </div>
                    </div>`
    // add to parent
    $('#' + id + 'Info').append(employeeInfo);
}

function loadLocation(id, no = false) {
    const section = document.getElementById(id);
    // if selected yes and exists, do nothing
    if (!no && section) return;
    if (no) {
        //delete section if exists
        if (section) $('#' + id).remove();
        return;
    }

    //create element
    const locationAndName = `<div class="" id="` + id + `">
                    <div class="row">
                        <div class="col-sm-6">
                            <label for="employeeNum" class="form-label">If yes, indicate the name(s)</label>
                            <input type="text" class="form-control" id="employeeNum">
                        </div>
                        <div class="col-sm-6">
                            <label for="lastLocation" class="form-label">and location</label>
                            <select id="lastLocation2" class="form-control">
                                <option value="">Select One</option>
                                <option>Corporate Headquarters</option>
                                <option>Bryce Canyon Lodge</option>
                                <option>Burr Oak State Park</option>
                                <option>Crater Lake National Park</option>
                                <option>Everglades National Park</option>
                                <option>Furnace Creek Inn and Ranch</option>
                                <option>Geneva Marina</option>
                                <option>Gideon Putnam</option>
                                <option>Grand Canyon National Park - North Rim</option>
                                <option>Grand Canyon National Park - South Rim</option>
                                <option>Hueston Woods</option>
                                <option>Maumee Bay State Park</option>
                                <option>Mohican State Park Resort and Conference Center</option>
                                <option>Mount Rushmore</option>
                                <option>Painted Desert Oasis</option>
                                <option>Punderson Manor</option>
                                <option>Salt Fork Resort and State Park</option>
                                <option>Scotty's Castle</option>
                                <option>Shawnee State Park</option>
                                <option>Silverado Country Club and Resort</option>
                                <option>Stovepipe Wells</option>
                                <option>Yellowstone National Park</option>
                                <option>Zion National Park</option>
                            </select>
                        </div>
             
                    </div>
                </div>`;
    //add to parent
    $('#' + id + '_locationName').append(locationAndName);

}

function positionsTab() {
    var positionsTabTriggerEl = document.querySelector('#positions-tab');
    var tab = new bootstrap.Tab(positionsTabTriggerEl);

    tab.show();
}

function workExperienceTab() {
    var workExperienceTabTriggerEl = document.querySelector('#workExperience-tab');
    var tab = new bootstrap.Tab(workExperienceTabTriggerEl);

    tab.show();
}


function educationTab() {
    var educationTabTriggerEl = document.querySelector('#education-tab');
    var tab = new bootstrap.Tab(educationTabTriggerEl);

    tab.show();
}

function generalInfoTab() {
    var generalInfoTabTriggerEl = document.querySelector('#generalInfo-tab');
    var tab = new bootstrap.Tab(generalInfoTabTriggerEl);

    tab.show();
}

function setChoice(className, select) {
    const firstChoices = document.getElementsByClassName(className);
    for (let i = 0; i < firstChoices.length; i++) {
        if (firstChoices[i].id == select.id)
            continue;
        firstChoices[i].value = '';
    }
}

function AddWorkExperience() {
    const nextNum = $('.workexperience').length + 1;
    if (nextNum > 5) {
        alert('Sorry, the maximum work experience of 5 is reached.');
        return;
    }
    // add more work experience
    const workExperience = `<hr class="workExperience-divider">
            <div id="workexperience1" class="workexperience">
                <p><b>Employer #` + nextNum + `</b></p>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label For="firstEmployeeName" class="form-label">Employee Name</label>
                        <input type="text" class="form-control" id="firstEmployeeName" placeholder="" value=""
                               required="">
                            <div class="invalid-feedback">
                                Valid employee name is required.
                            </div>
                    </div>
                    <div class="col-md-6">
                        <label For="firstEmployeePhone" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="firstEmployeePhone" placeholder="" required="">
                            <div class="invalid-feedback">
                                Phone number is required.
                            </div>
                    </div>
                    <div class="col-sm-12">
                        <label For="firstEmployeeAddress" class="form-label">Street Address</label>
                        <input type="text" class="form-control" id="firstEmployeeAddress" placeholder="" value=""
                               required="">
                            <div class="invalid-feedback">
                                Street Address is required.
                            </div>
                    </div>
                    <!--                                city/state/zip-->
                    <div class="col-md-4">
                        <label For="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="firstEmployeecity" placeholder="" required="">
                            <div class="invalid-feedback">
                                City is required.
                            </div>
                    </div>
                    <div class="col-md-3">
                        <label For="firstEmployeeState" class="form-label">State</label>
                        <select class="form-select" id="firstEmployeeState" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div class="col-md-2">
                        <label For="firstEmployeeZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="firstEmployeeZip" placeholder="" required="">
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                    </div>
                    <div class="col-md-3">
                        <label For="firstEmployeeCountry" class="form-label">Country</label>
                        <select class="form-select" id="firstEmployeeCountry" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="firstEmployeePosition" class="form-label">Position</label>
                        <input type="text" class="form-control" id="firstEmployeePosition" placeholder=""
                               required="">
                            <div class="invalid-feedback">
                                Position is required.
                            </div>
                    </div>
                    <div class="col-md-6">
                        <label for="firstEmployeeSupervisor" class="form-label">Supervisor's Name and
                            Title</label>
                        <input type="text" class="form-control" id="firstEmployeeSupervisor" placeholder=""
                               required="">
                            <div class="invalid-feedback">
                                Supervisor's name and title are required.
                            </div>
                    </div>
                    <div class="col-sm-6">
                        <label for="firstEmployeeStartDate">Start Date</label>
                        <input type="text" class="form-control picker__input" id="firstEmployeeStartDate"
                               readOnly="">
                    </div>
                    <div class="col-sm-6">
                        <label for="firstEmployeeEndDate">End Date</label>
                        <input type="text" class="form-control picker__input" id="firstEmployeeEndDate"
                               readOnly="">
                    </div>

                    <p>
                        May we contact this employer?
                        <a>
                            <input class="form-check-input" type="radio" name="radio"
                                   id="yes_firstEmployeeRadio"></a>
                        <label class="form-check-label" for="yes_firstEmployeeRadio">
                            Yes</label>

                        <input class="form-check-input" type="radio" name="radio" id="no_firstEmployeeRadio">
                            <label class="form-check-label" for="no_firstEmployeeRadio">
                                No</label>
                                </p>
                            <div class="col-md-6">
                                <label for="firstEmployeeDuties" class="form-label">Specific Duties</label>
                                <input type="text" class="form-control" id="firstEmployeeDuties" placeholder=""
                                       required="">
                                    <div class="invalid-feedback">
                                        Specific duties are required.
                                    </div>
                            </div>
                            <div class="col-md-6">
                                <label for="firstEmployeeReason" class="form-label">Reason For Leaving</label>
                                <input type="text" class="form-control" id="firstEmployeeReason" placeholder=""
                                       required="">
                                    <div class="invalid-feedback">
                                        Reason for leaving is required.
                                    </div>
                            </div>
                </div>
            </div>`;
    $('#workexperiences').append(workExperience);
    document.getElementById("btnAddExperience").scrollIntoView();
}

function AddMoreSchools() {
    const nextNum = $('.education').length + 1;
    if (nextNum > 5) {
        alert('Sorry, the maximum schools of 5 is reached.');
        return;
    }
    // add more schools <=5
    const tr = `<tr class="education">
                        <td><input type="text" id="firstSchoolName" placeholder=""></td>
                        <td><input type="text" id="firstSchoolLocation" placeholder=""></td>
                        <td><input type="text" id="firstSchoolDegree" placeholder=""></td>
                        <td><input type="text" id="firstSchoolField" placeholder=""></td>
                        <td><a>
                            <input class="form-check-input" type="radio" name="radio" id="check_graduation"></a>
                            <label class="form-check-label" for="check_graduation">
                                Yes</label>

                            <input class="form-check-input" type="radio" name="radio" id="uncheck_graduation">
                            <label class="form-check-label" for="uncheck_graduation">
                                No</label></td>
                    </tr>`;

    $('#tableRow').append(tr);
}

function showToast() {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLive = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLive);

            toast.show();
        })
    }
}

