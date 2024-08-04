document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('themeSelect');
    const faviconSelect = document.getElementById('faviconSelect');
    const faviconUpload = document.getElementById('faviconUpload');
    const titleInput = document.getElementById('titleInput');
    const saveButton = document.getElementById('saveSettings');

    // Load saved settings
    const savedTheme = localStorage.getItem('siteTheme');
    const savedFavicon = localStorage.getItem('siteFavicon');
    const savedTitle = localStorage.getItem('siteTitle');
    if (savedTheme) themeSelect.value = savedTheme;
    if (savedFavicon) faviconSelect.value = savedFavicon;
    if (savedTitle) titleInput.value = savedTitle;

    // Apply saved theme
    applyTheme(savedTheme);

    saveButton.addEventListener('click', function() {
        const selectedTheme = themeSelect.value;
        const selectedFavicon = faviconSelect.value;
        const newTitle = titleInput.value;
        const uploadedFavicon = faviconUpload.files[0];

        // Save settings to localStorage
        localStorage.setItem('siteTheme', selectedTheme);
        if (uploadedFavicon) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('siteFavicon', e.target.result);
                applyFavicon(e.target.result);
            }
            reader.readAsDataURL(uploadedFavicon);
        } else {
            localStorage.setItem('siteFavicon', selectedFavicon);
            applyFavicon(selectedFavicon);
        }
        localStorage.setItem('siteTitle', newTitle);

        // Apply settings
        applyTheme(selectedTheme);
        document.title = newTitle;

        alert('Settings saved!');
    });

    function applyTheme(theme) {
        switch (theme) {
            case 'dark':
                document.body.style.backgroundColor = '#1e1e1e';
                document.body.style.color = '#ffffff';
                break;
            case 'light':
                document.body.style.backgroundColor = '#ffffff';
                document.body.style.color = '#000000';
                break;
            case 'mocha':
                document.body.style.backgroundColor = '#3e2723';
                document.body.style.color = '#ffffff';
                break;
            case 'purple':
                document.body.style.backgroundColor = '#4a148c';
                document.body.style.color = '#ffffff';
                break;
            case 'majestic':
                document.body.style.backgroundColor = '#311b92';
                document.body.style.color = '#ffffff';
                break;
        }
    }

    function applyFavicon(favicon) {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(newLink);
        }
        if (favicon.startsWith('data:')) {
            link.href = favicon;
        } else {
            switch (favicon) {
                case 'default':
                    link.href = 'favicon.ico';
                    break;
                case 'gamepad':
                    link.href = 'gamepad.ico';
                    break;
                case 'mars':
                    link.href = 'mars.ico';
                    break;
                case 'star':
                    link.href = 'star.ico';
                    break;
            }
        }
    }
});
