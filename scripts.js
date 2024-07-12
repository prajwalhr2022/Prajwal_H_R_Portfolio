document.addEventListener('DOMContentLoaded', function() {
    const helloElement = document.querySelector('.hello');
    helloElement.classList.add('fade-in');

    // Update gradient background on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight; // Total scrollable document height
        const body = document.querySelector('body');

        // Calculate gradient colors based on scroll position
        const color1 = interpolateColor(scrollPosition, 0, documentHeight - windowHeight, '#a64dff', '#ffffff'); // Start color: #a64dff, End color: #ffffff
        const color2 = interpolateColor(scrollPosition, 0, documentHeight - windowHeight, 'rgba(255, 255, 255, 0)', '#ffffff'); // Start color: transparent white, End color: #ffffff

        // Apply gradient background
        body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    });

    // Function to interpolate colors based on scroll position
    function interpolateColor(scrollPos, minScroll, maxScroll, color1, color2) {
        const scrollRange = maxScroll - minScroll;
        const factor = Math.min(scrollPos / scrollRange, 1); // Clamp factor to 1 to prevent exceeding maxScroll

        // Parse colors into RGBA values
        const color1RGB = parseColor(color1);
        const color2RGB = parseColor(color2);

        // Interpolate RGB values
        const interpolatedColor = {
            r: Math.round(color1RGB.r + factor * (color2RGB.r - color1RGB.r)),
            g: Math.round(color1RGB.g + factor * (color2RGB.g - color1RGB.g)),
            b: Math.round(color1RGB.b + factor * (color2RGB.b - color1RGB.b)),
            a: color1RGB.a + factor * (color2RGB.a - color1RGB.a)  // Interpolating alpha channel
        };

        return `rgba(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b}, ${interpolatedColor.a})`;
    }

    // Function to parse color string into RGBA object
    function parseColor(color) {
        let rgba = { r: 255, g: 255, b: 255, a: 1 }; // Default to white

        if (color.startsWith('rgba')) {
            const rgbaArray = color.slice(5, -1).split(',').map(val => parseFloat(val.trim()));
            rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: rgbaArray[3] };
        } else if (color.startsWith('rgb')) {
            const rgbArray = color.slice(4, -1).split(',').map(val => parseFloat(val.trim()));
            rgba = { r: rgbArray[0], g: rgbArray[1], b: rgbArray[2], a: 1 };
        } else if (color.startsWith('#')) {
            rgba = hexToRGBA(color);
        }

        return rgba;
    }

    // Function to convert hex color to RGBA
    function hexToRGBA(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b, a: 1 };
    }document.addEventListener('DOMContentLoaded', function() {
        const helloElement = document.querySelector('.hello');
        helloElement.classList.add('fade-in');
    
        // Update gradient background on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight; // Total scrollable document height
            const body = document.querySelector('body');
    
            // Calculate gradient colors based on scroll position
            const color1 = interpolateColor(scrollPosition, 0, documentHeight - windowHeight, '#a64dff', '#ffffff'); // Start color: #a64dff, End color: #ffffff
            const color2 = interpolateColor(scrollPosition, 0, documentHeight - windowHeight, 'rgba(255, 255, 255, 0)', '#ffffff'); // Start color: transparent white, End color: #ffffff
    
            // Apply gradient background
            body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        });
    
        // Function to interpolate colors based on scroll position
        function interpolateColor(scrollPos, minScroll, maxScroll, color1, color2) {
            const scrollRange = maxScroll - minScroll;
            const factor = Math.min(scrollPos / scrollRange, 1); // Clamp factor to 1 to prevent exceeding maxScroll
    
            // Parse colors into RGBA values
            const color1RGB = parseColor(color1);
            const color2RGB = parseColor(color2);
    
            // Interpolate RGB values
            const interpolatedColor = {
                r: Math.round(color1RGB.r + factor * (color2RGB.r - color1RGB.r)),
                g: Math.round(color1RGB.g + factor * (color2RGB.g - color1RGB.g)),
                b: Math.round(color1RGB.b + factor * (color2RGB.b - color1RGB.b)),
                a: color1RGB.a + factor * (color2RGB.a - color1RGB.a)  // Interpolating alpha channel
            };
    
            return `rgba(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b}, ${interpolatedColor.a})`;
        }
    
        // Function to parse color string into RGBA object
        function parseColor(color) {
            let rgba = { r: 255, g: 255, b: 255, a: 1 }; // Default to white
    
            if (color.startsWith('rgba')) {
                const rgbaArray = color.slice(5, -1).split(',').map(val => parseFloat(val.trim()));
                rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: rgbaArray[3] };
            } else if (color.startsWith('rgb')) {
                const rgbArray = color.slice(4, -1).split(',').map(val => parseFloat(val.trim()));
                rgba = { r: rgbArray[0], g: rgbArray[1], b: rgbArray[2], a: 1 };
            } else if (color.startsWith('#')) {
                rgba = hexToRGBA(color);
            }
    
            return rgba;
        }
    
        // Function to convert hex color to RGBA
        function hexToRGBA(hex) {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return { r, g, b, a: 1 };
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
});

// Smooth scrolling for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
