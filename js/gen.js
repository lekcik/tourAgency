let nav = document.querySelector('.navJs');
let aside = document.querySelector('.asideJs');

nav.innerHTML = `
        <ul>
            <li class="logoLi">
                <a href="index.html">
                    <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 365.892 365.892" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle cx="182.945" cy="286.681" r="41.494"></circle> <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726 c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954 c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726 C252.285,193.373,218.606,176.029,182.946,176.029z"></path> <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044 c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439 s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043 C282.641,128.621,233.883,106.873,182.946,106.873z"></path> <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579 c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522 c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242 C367.637,131.238,367.745,119.562,360.611,112.293z"></path> </g> </g></svg>
                    SpeedNet
                </a>
            </li>
            <li>
                <svg class="menuIcon" onclick="menuHandler();" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </li>
            <div class="compNavWrapper">
                <li class="compNav">
                    <a href="index.html">
                        <h5>Home</h5>
                    </a>
                </li>
                <li class="compNav">
                    <a href="about.html">
                        <h5>About us</h5>
                    </a>
                </li>
                <li class="compNav">
                    <a href="services.html">
                        <h5>Services</h5>
                    </a>
                </li>
                <li class="compNav">
                    <a href="contact.html">
                        <h5>Contact us</h5>
                    </a>
                </li>
            </div>
        </ul>
        <hr>
`;

aside.innerHTML = `
        <ul>
            <li>
                <svg onclick="menuHandler();" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon> </g> </g> </g></svg>
            </li>
            <li>
                <a href="index.html">
                    <h3>Home</h3>
                </a>
            </li>
            <li>
                <a href="about.html">
                    <h3>About us</h3>
                </a>
            </li>
            <li>
                <a href="services.html">
                    <h3>Services</h3>
                </a>
            </li>
            <li>
                <a href="contact.html">
                    <h3>Contact us</h3>
                </a>
            </li>
        </ul>
`;

let navLinks = document.querySelectorAll('.compNav a, aside a');

let currentPath = window.location.pathname;
let filename = currentPath.split("/").pop();

navLinks.forEach(link => {
    let href = link.getAttribute('href');
    
    if (href === filename) {
        link.setAttribute('aria-page', 'current');
    } else {
        link.removeAttribute('aria-page');
    }
});

let footer = document.querySelector('.footerJs');

footer.innerHTML = `
        <nav class="navigation footer" aria-label="footer navigation">
            <a href="about.html">
                <h5>About us</h5>
            </a>
            <a href="services.html">
                <h5>Services</h5>
            </a>
            <a href="contact.html">
                <h5>Contact us</h5>
            </a>
        </nav>
        <div class="socialMedia">
            <a href="https://www.instagram.com/">
                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 169.063 169.063" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"></path> <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"></path> <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"></path> </g> </g></svg>
            </a>
            <a href="https://www.facebook.com/">
                <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_21_"> <g> <g> <path d="M460,0H30C13.458,0,0,13.458,0,30v430c0,16.542,13.458,30,30,30h430c16.542,0,30-13.458,30-30V30 C490,13.458,476.542,0,460,0z M470,460c0,5.514-4.486,10-10,10H30c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h430 c5.514,0,10,4.486,10,10V460z"></path> <path d="M345,180h-50v-49.965c0.076-0.015,0.151-0.027,0.219-0.035H335c5.523,0,10-4.477,10-10V50c0-5.522-4.477-10-10-10h-60 c-41.268,0-60.95,22.039-70.194,40.528C195.111,99.916,195,119.189,195,120v60h-50c-5.523,0-10,4.477-10,10v80 c0,5.523,4.477,10,10,10h40v155c0,5.523,4.477,10,10,10h90c5.523,0,10-4.477,10-10V270h40c4.977,0,9.196-3.659,9.899-8.586l10-70 c0.41-2.87-0.445-5.776-2.345-7.966C350.655,181.258,347.899,180,345,180z M326.327,250H285c-5.523,0-10,4.477-10,10v165h-70V270 c0-5.522-4.477-10-10-10h-40v-60h50c5.523,0,10-4.477,10-10v-69.969c0.001-0.158,0.189-15.92,7.977-31.119 C232.81,69.728,250.313,60,275,60h50v50h-30c-9.695,0-20,7.009-20,20v60c0,5.523,4.477,10,10,10h48.47L326.327,250z"></path> </g> </g> </g> </g></svg>
            </a>
            <a href="https://x.com/home">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9999 5.9246C21.2644 6.25051 20.4744 6.47071 19.6437 6.57025C20.4911 6.06289 21.1411 5.25782 21.4477 4.29948C20.6549 4.76984 19.7767 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.5819 4 11.7445 5.8374 11.7445 8.10464C11.7445 8.42526 11.7815 8.73707 11.8502 9.03832C8.43877 8.86656 5.41666 7.23263 3.39252 4.75046C3.04019 5.35823 2.8376 6.06289 2.8376 6.81335C2.8376 8.23677 3.56252 9.4937 4.66267 10.2292C3.98972 10.2072 3.35729 10.0231 2.80413 9.71567V9.76852C2.80413 11.7565 4.21786 13.4151 6.09577 13.7921C5.75049 13.8855 5.38847 13.9348 5.015 13.9348C4.75075 13.9348 4.49267 13.9102 4.24252 13.8626C4.76485 15.4921 6.27987 16.6795 8.07587 16.7112C6.67095 17.8122 4.90137 18.4684 2.97942 18.4684C2.64823 18.4684 2.32144 18.449 1.99994 18.4112C3.8162 19.5765 5.97246 20.2547 8.28903 20.2547C15.8377 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.9599 8.2262 19.952 8.05003C20.7536 7.47045 21.4494 6.74905 21.9982 5.92724L21.9999 5.9246Z" stroke="#000000" stroke-linejoin="round"></path> </g></svg>
            </a>
        </div>
        <div class="rights">
            <p>SpeedNet 2024. All rights received</p>
        </div>
`;