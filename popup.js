document.getElementById('openLink').addEventListener('click', function() {

    const links = [
        'https://mynews13.com/fl/orlando/news/2024/01/22/kissimmee-kid-considered-a-genius-at-age-5',
        'https://www.kidschaupal.com/young_xpert/soborno-isaac-bari',
        'https://www.braingainmag.com/meet-kairan-quazi-who-is-only-nine-and-already-in-college.htm',
        'https://www.forbes.com/profile/livia-voigt/',
        'https://x.com/canadahonk'
    ]

    const randomLink = links[Math.floor(Math.random() * links.length)];

    window.open(randomLink, '_blank');
});