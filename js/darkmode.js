// Function to apply the theme based on localStorage
const applyTheme = () => {
    const darkmode = localStorage.getItem('dark');
    if (darkmode === 'active') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
};

// Run on initial load
// Since the script is 'defer', document.body will be available
applyTheme();

// Set up the toggle button listener
const switch_button = document.getElementById("theme_switch");
if (switch_button) {
    switch_button.addEventListener("click", () => {
        const darkmode = localStorage.getItem('dark');
        if (darkmode !== "active") {
            localStorage.setItem('dark', 'active');
        } else {
            localStorage.setItem('dark', 'inactive');
        }
        applyTheme();
    });
}
