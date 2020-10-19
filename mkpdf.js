const fs = require("fs").promises;
const puppeteer = require("puppeteer");

(async () => {
    // load contents of print stylesheet and header/footer templates
    const printCss = await fs.readFile("public/print.css");
    const headerHtml = await fs.readFile("themes/startwords/layouts/pdf/header.html");

    // adapted from examples:
    // https://developers.google.com/web/tools/puppeteer/get-started#usage
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.argv[2], { waitUntil: "networkidle2" });
    await page.pdf({
        path: "puppeteer.pdf",
        displayHeaderFooter: true,
        preferCSSPageSize: true,    // obey the @page size rule in css
        printBackground: true,  // make content of pseudoelements render
        headerTemplate: `<style>${printCss}</style>${headerHtml}`,
    });
    await browser.close();
})();
