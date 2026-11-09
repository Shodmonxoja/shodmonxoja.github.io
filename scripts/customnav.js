function createNav() {
    const navbar = document.createElement('div');
    navbar.className = "navigation-bar";
    navbar.innerHTML = `
        <a class="navbutton" href="/index.html">Home</a>
        <div class="dropdown">
          <button class="dropbtn">Products ▾</button>
          <div class="dropdown-content">
            <a href="/pages/games.html">Games</a>
            <a href="/pages/apps.html">Apps</a>
            <a href="/pages/assetstools.html">Assets & Tools</a>
          </div>
        </div>
        <a class="navbutton" href="/pages/experimental.html">Experimental</a>
        <a class="navbutton" href="/pages/aboutme.html">About me</a>
    `;

    return navbar;
}

document.body.prepend(createNav());
