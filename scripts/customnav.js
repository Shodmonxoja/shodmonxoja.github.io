function createNav(){
    const navbar = document.createElement('div');
    navbar.className = "navigation-bar";
    navbar.innerHTML = `
            <a href="/index.html">Home</a>
            <a href="#">Games</a>
            <a href="#">Links</a>
            <a href="/privacy-policies/privacypolicies.html">Privacy Policies</a>
    `;

    return navbar;
}

document.body.prepend(createNav());