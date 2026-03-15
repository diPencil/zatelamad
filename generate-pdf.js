
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    console.log('Starting PDF generation...');

    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to a standard desktop size to ensure layout renders correctly
    await page.setViewport({ width: 1440, height: 900 });

    try {
        // Navigate to the local server
        // NOTE: Make sure your app is running on port 3001!
        console.log('Navigating to http://localhost:3001...');
        await page.goto('http://localhost:3001', {
            waitUntil: 'networkidle2', // Wait until network is mostly idle (allows open HMR socket)
            timeout: 60000
        });

        // Add a small delay to ensure all animations/images are settled
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Generating PDF...');

        // Define output path
        const outputPath = path.join(__dirname, 'public', 'Zat-Profile.pdf');

        // Ensure public folder exists
        if (!fs.existsSync(path.join(__dirname, 'public'))) {
            fs.mkdirSync(path.join(__dirname, 'public'));
        }

        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                right: '0.5cm',
                bottom: '1cm',
                left: '0.5cm'
            },
            displayHeaderFooter: false,
            preferCSSPageSize: true
        });

        console.log(`PDF successfully generated at: ${outputPath}`);

    } catch (error) {
        console.error('Error generating PDF:', error);
    } finally {
        await browser.close();
    }
})();
