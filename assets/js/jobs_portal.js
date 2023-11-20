const searchBox = document.getElementById('job-search-box');
const searchButton = document.getElementById('job-search-button');
const searchResults = document.getElementById('search-results');
const loading = document.getElementById('loading-screen');

searchButton.addEventListener('click', searchAction);

const settings = {
    async: true,
    crossDomain: true,
    url: 'https://jsearch.p.rapidapi.com/search?query=node%20JS&page=1&num_pages=1',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0f9ed84da9mshb82be9459438c07p1dfab0jsnf67a21ac29d2',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
};

async function searchAction() {
    try {
        var searchTerm = searchBox.value;
        if(searchTerm.length != 0){
            searchTerm = searchTerm.replace(/ /g, '%20');
            // console.log(searchTerm);
            settings.url = `https://jsearch.p.rapidapi.com/search?query=${searchTerm}&page=2&num_pages=2`;
            loading.style.display = 'flex';
            await $.ajax(settings).done(function (response) {
                searchResults.innerHTML = '';
                if (response.data.length != 0) {
                    for (let i of response.data) {
                        const liElement = document.createElement('li');
                        liElement.innerHTML = `<div class="col">
                                <div class="card mb-4 rounded-3 shadow-sm border-success">
                                    <div class="card-header py-3 text-bg-success border-success">
                                        <h4 class="my-0 fw-normal">${i.job_title}</h4>
                                    </div>
                                    <div class="card-body">
                                        <img src="${i.employer_logo}"
                                            alt="Company Logo" width="75px" height="75px" onerror="this.src='/images/no_image.png';">
                                        <br>
                                        <h4 class="card-title pricing-card-title">
                                        ${i.employer_name}
                                        </h4>
                                        <ul class="p-0 m-0 mb-4 w-100 list-group list-group-flush">
                                            <li class="w-100 list-group-item"><b>Employer's Website:</b> <a href='${i.employer_website}' target="_blank">${i.employer_website}</a></li>
                                            <li class="w-100 list-group-item"><b>Employer's Company Type:</b> ${i.employer_company_type}</li>
                                            <li class="w-100 list-group-item"><b>Job Type:</b> ${i.job_employment_type}</li>
                                            <li class="w-100 list-group-item"><b>Job Location:</b> ${i.job_city}, ${i.job_state}-${i.job_country}</li>
                                            <li class="w-100 list-group-item"><b>Experienced Required:</b> ${i.job_required_experience.required_experience_in_months} months</li>
                                        </ul>
                                        <button type="button" class="w-50 btn btn-lg btn-info" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            More Details
                                        </button>
                                        <!-- Modal -->
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${i.job_title}</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h4>Job Description</h4>
                                                        <p>${i.job_description}</p>
                                                        <br>
                                                        <h4>Job Responsibilities</h4>
                                                        <p>${i.job_highlights.Responsibilities}</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <a href='${i.job_apply_link}' target="_blank"><button type="button" class="btn btn-primary">Apply Now</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        searchResults.appendChild(liElement);
                    }
                    loading.style.display = 'none';
                } else {
                    loading.style.display = 'none';
                    window.alert("No search found for your input !");
                }
            });
        }else{
            window.alert("Please input the keyword for job search !");
        }
    } catch (error) {
        window.alert("Server internal error please try again later !");
    }
}