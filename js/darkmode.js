// Function to apply the theme based on localStorage
const applyTheme = () => {
    let darkmode = localStorage.getItem('dark');
    
    // Default to 'inactive' (light mode) if no value is set
    if (darkmode === null) {
        localStorage.setItem('dark', 'inactive');
        darkmode = 'inactive';
    }

    if (darkmode === 'active') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// Run on initial load
applyTheme();

// Set up the toggle button listener
document.addEventListener('DOMContentLoaded', () => {
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
});
