// Contact form 
const form = document.querySelector('.contact-form');
const result = document.getElementById('result');

if (form && result) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        result.style.display = "block";
        result.className = "contact-result loading";
        result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.className = "contact-result success";
                    result.innerHTML = "Form submitted successfully";
                } else {
                    console.log(response);
                    result.className = "contact-result error";
                    result.innerHTML = "error " + json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.className = "contact-result error";
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });
}