const imagesData = [
    { src: 'images/image1.jpg', message: '🎈 You’re like a cloud… fluffy and useless.' },
    { src: 'images/image2.jpg', message: '🎂 Birthdays suit you. You’re like fine wine… stale. 🍷' },
    { src: 'images/image3.jpg', message: '🎉 You’re living proof that age is just a number. #ForeverYoung 🕺' },
    { src: 'images/image4.jpg', message: '😂 Happy Birthday! Another year older and still clueless!' },
    { src: 'images/image5.jpg', message: '🎁 Remember when you were young and cool? Me neither. 🤭' },
    { src: 'images/image6.jpg', message: '📱 You’re aging like a smartphone… quickly obsolete.' },
    { src: 'images/image7.jpg', message: '🎊 At least you’re not as old as you’ll be next year. 🙌' },
    { src: 'images/image8.jpg', message: '😎 Don’t worry, you’re not old… just vintage. 🛠️' },
    { src: 'images/image9.jpg', message: '👋 You bring everyone so much joy… when you leave the room. 😂' },
    { src: 'images/image10.jpg', message: '🎈 Don’t let your age get you down… it’s too hard to get back up! 🤣' },
    { src: 'images/image11.jpg', message: '🎉 Congratulations on surviving another year of bad decisions. 🎯' },
    { src: 'images/image12.jpeg', message: '🤫 Your secrets are safe with me. I never even listen when you tell me them.' },
    { src: 'images/image13.jpeg', message: '🔄 You’re like a software update. Whenever I see you, I think “Not now.” 😆' },
    { src: 'images/image14.jpeg', message: '📴 Now you’re officially too old to use emojis. 😂' },
];

const gallery = document.getElementById('gallery');

imagesData.forEach(({ src, message }) => {
    const container = document.createElement('div');
    container.className = 'image-container';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Birthday Image';

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
