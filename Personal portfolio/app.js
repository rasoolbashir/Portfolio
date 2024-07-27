var typed = new Typed(".auto-type", {
    strings: ["Front-End Developer", "Graphic Designer", "Freelencer"],
    typeSpeed: 150,
    backSpeed: 150,
    startDelay: 0,
    backDelay: 0,
    loop: true,
    loopCount: Infinity 
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can replace this part with your email handling logic
    // Example: Use an email sending service like EmailJS
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Your message has been sent successfully!');
  })