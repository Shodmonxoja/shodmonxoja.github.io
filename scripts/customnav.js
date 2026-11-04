function createNav(){
    const navbar = document.createElement('div');
    navbar.className = "navigation-bar";
    navbar.innerHTML = `
            <a href="/index.html">Home</a>
            <a href="/pages/games.html">Games</a>
            <a href="/pages/apps.html">Apps</a>
            <a href="/privacy-policies/privacypolicies.html">Privacy Policies</a>

    `;

    return navbar;
}

document.body.prepend(createNav());
