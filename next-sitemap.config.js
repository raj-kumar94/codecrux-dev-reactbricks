/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://codecrux.dev',
    generateRobotsTxt: true, // (optional)
    exclude: [`/admin*`, '/preview', '/carousel', '/home', '/blog/tag/*']
    // ...other options
}