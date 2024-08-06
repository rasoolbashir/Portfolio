var typed = new Typed(".auto-type", {
    strings: ["Front-End Developer", "Graphic Designer", "Freelencer"],
    typeSpeed: 150,
    backSpeed: 150,
    startDelay: 0,
    backDelay: 0,
    loop: true,
    loopCount: Infinity 
});


// contact section start

(function(){
    emailjs.init({
      publicKey: "2MULYXtHyDSZJw89K",
    });
 })();

  function validateForm(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
      return false;
    } else {
      sendMail();
      return true;
    }
  }

  function sendMail() {
    var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    const serviceID = "service_sxbes3i";
    const templateID = "template_drbo0xf";
    
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");
      })
      .catch(err => console.log(err));
  }
  // contact section end
