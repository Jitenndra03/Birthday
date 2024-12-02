const imagesData = [
    { src: 'images/image1.jpg', message: '🎈 dekh kya rha h thank you bol' },
    { src: 'images/image2.jpg', message: '🎂 Narak mein bhi jgh nhi milegi hm dono ko pta h naaa 🍷' },
    { src: 'images/image3.jpg', message: '🎉 Kuch bhi bol luu tumse h to mera dost hi 🕺' },
    { src: 'images/image4.jpg', message: '😂 Thank you for always being with me honestly I don’t even remember ki kitni baar tumhare saath hone se hi I feel a lot better jb bhi mood krab hota h ' },
    { src: 'images/image5.jpg', message: '🎁 Happy happy wala birthday 🤭' },
    { src: 'images/image6.jpg', message: '📱 Chalo mene to bahoot kuch bol liya h ab bhabi ji ko bolne deta hunn' },
    { src: 'images/image7.jpg', message: '🎊 You know we are both cooked.....I dont even need to tell you 🙌' },
    { src: 'images/image8.jpg', message: '😎 kya kya krna pd rha h bday party ke liye 🛠️' },
    { src: 'images/image9.jpg', message: '👋 baal h ki ........ikyk very well 😂' },
    { src: 'images/image10.jpg', message: '🎈 Isliye khte h nasha nhi krna chaiye 🤣' },
    { src: 'images/image11.jpg', message: '🎉 Kya be ungli kisko dikha rha 🎯' },
    { src: 'images/image12.jpeg', message: '🤫 Just dont change, teri gaali, tere gande karm sab pyaare h' },
    { src: 'images/image13.jpeg', message: '🔄 Bhaiii ab to SUDHAR JAA!!! 😆' },
    { src: 'images/image14.jpeg', message: '📴 YOU are very special to us aur sath to rhena hi pade ga humesha! 😂' },
   // { src: 'images/image15.jpeg', message: '📴 Now you’re officially too old to use emojis. 😂' },
    { src: 'images/image16.jpeg', message: '📴 Rahe ga tu chota hi! Bada hoke kya badal gya? 😂' },
    { src: 'images/image19.jpeg', message: '📴 Just another year of khub saari masti, bachpana, ajab gajab ideas and soo much more!!!🌟😂' },
    { src: 'images/image18.jpeg', message: '📴 ek din bhai PSIT ke bagal emin tera naam golden words mein likha jayega😂' },
    { src: 'images/image17.jpeg', message: '📴 Last birthday se ab tak group kaafi chota hogya, but we stayed and will always🫶🏻 Happy 20 pagal! 😂' },
];

const gallery = document.getElementById('gallery');

imagesData.forEach(({ src, message }) => {
    const container = document.createElement('div');
    container.className = 'image-container';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Birthday Image';

    // Add inline styles for image15
    /*if (src === 'images/image15.jpeg') {
        img.style.width = '400px';  // Set custom width
        img.style.height = '150px'; // Set custom height
    }*/

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;

    container.addEventListener('mouseenter', () => {
        img.classList.add('hidden');
        messageDiv.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
        img.classList.remove('hidden');
        messageDiv.style.display = 'none';
    });

    container.appendChild(img);
    container.appendChild(messageDiv);
    gallery.appendChild(container);
});

