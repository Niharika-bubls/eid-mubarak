document.getElementById('loveButton').addEventListener('click', function() {
    // Display an alert message
    alert('I love you!');

    // Create an image element for "I love you" message
    const loveImage = document.createElement('img');
    loveImage.src = ''; // Replace with your image URL for "I love you"
    loveImage.alt = 'Love Image';
    loveImage.style.position = 'absolute';
    loveImage.style.top = '50%';
    loveImage.style.left = '50%';
    loveImage.style.transform = 'translate(-50%, -50%)'; // Center the image
    loveImage.style.width = '500px'; // Adjust image width
    loveImage.style.opacity = '0'; // Initially hide the image
    loveImage.style.transition = 'opacity 1s ease'; // Fade-in animation

    // Append the love image to the body
    document.body.appendChild(loveImage);

    // Trigger the animation after a short delay
    setTimeout(function() {
        loveImage.style.opacity = '1'; // Fade-in the image
    }, 100); // 100ms delay before showing the image (adjust as needed)

    // Ask "Do you hate me for doing this?" question
    const answer = confirm('Do you hate me for doing this? Click OK for yes, Cancel for no.');

    // Create an image element based on the answer
    const responseImage = document.createElement('img');
    responseImage.style.position = 'absolute';
    responseImage.style.top = '50%';
    responseImage.style.left = '50%';
    responseImage.style.transform = 'translate(-50%, -50%)'; // Center the image
    responseImage.style.width = '800px'; // Adjust image width

    if (answer) {
        responseImage.src = 'https://www.bing.com/th/id/OGC.77248e5d7115492118f18d13e72ce77c?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fP9k4-UJF2fMAAAAC%2fcute-sad.gif&ehk=5dfMb72zVG%2fkIDf7LnZ%2bhfIjrS5gXxiedvKAeQCC8Qo%3d'; // Replace with your image URL for "Yes"
        responseImage.alt = 'https://www.bing.com/th/id/OGC.1045ecfdeb1de088d103ae75c816fab1?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fTp1fuMiId54AAAAC%2fsad-crying-cute.gif&ehk=8aQ5yB8dD37nPTs7ycBP4uoJY9jDfC5h5BziWBqRSNc%3d';
    } else {
        responseImage.src = 'https://th.bing.com/th/id/OIP.SY_QJ0xOaCus9wnwQiPY3QHaDt?w=324&h=175&c=7&r=0&o=5&dpr=1.4&pid=1.7'; // Replace with your image URL for "No"
        responseImage.alt = 'https://th.bing.com/th/id/OIP.YjoBFgQ1-7R0mnzNITlUEwHaE7?w=243&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7';
    }

    // Append the response image to the body
    document.body.appendChild(responseImage);
});
