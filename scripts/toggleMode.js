// Retrieve user's preference from localStorage
const isLightModePreferred = localStorage.getItem('isLightMode') === 'true';

function setInitialMode() {
    const toggleSwitch = document.getElementById('toggle-switch');
    toggleSwitch.checked = isLightModePreferred;

    // Set initial mode based on the user's preference
    toggleMode();
}

function toggleMode() {
    console.log('Toggle switch clicked');
    const root = document.documentElement;
    const toggleSwitch = document.getElementById('toggle-switch');
    const isLightMode = toggleSwitch.checked;

    // Save user's preference to localStorage
    localStorage.setItem('isLightMode', isLightMode);

    // Toggle light and dark mode classes on project pages
    const projectPages = document.querySelectorAll('.project-page');
    projectPages.forEach(page => {
        page.classList.toggle('light-mode', isLightMode);
        page.classList.toggle('dark-mode', !isLightMode);
    });

    // Toggle styles on main page
    if (isLightMode) {
        root.style.setProperty('--mainBgColor', 'var(--mainBgColor-light)');
        root.style.setProperty('--mainTextColor', 'var(--mainTextColor-light)');
        root.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-light)');
        root.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-light)');
        root.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-light)');
        root.style.setProperty('--toggleSliderColor', 'black');
    } else {
        root.style.setProperty('--mainBgColor', 'var(--mainBgColor-dark)');
        root.style.setProperty('--mainTextColor', 'var(--mainTextColor-dark)');
        root.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-dark)');
        root.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-dark)');
        root.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-dark)');
        root.style.setProperty('--toggleSliderColor', 'white');
    }
}

// Set initial mode when page loads
document.addEventListener('DOMContentLoaded', setInitialMode);
