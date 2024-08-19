fetch('https://valvaapi.onrender.com')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            let i=0;
            let services = document.getElementById('services');
            let content = ` <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="${i+100}">
            <div class="icon flex-shrink-0"><i class="${element.icon}"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">${element.title}</a></h4>
              <p class="description">${element.description}</p>
            </div>
          </div>`;
            let e = document.createElement('div');
            e.innerHTML = content;
            services.appendChild(e);
        });
    })