# Extension Buddy - Template Getting Started Guide

This guide will help you quickly get started with creating a browser extension using Extension Buddy's Manifest V3 Templates.

## Prerequisites

Before you begin, ensure you have a modern web browser installed that supports extensions.

## What's Included
- 📐 This amazing browser extension template
- ⚡️  Build scripts for quick releasing
- 💰 [Extension Buddy Monetize SDK](https://github.com/Extension-Buddy/extension-buddy-sdk) - Monetize your extensions and turn your innovative ideas into a profitable business.

---

## Quick Start

### Clone the Template

Clone this template to your local machine, and copy the template **folder** to your desired location. Rename the extension as needed.

### Build the Template

1. **Navigate to the Template Folder**

    ```bash
    cd template-name-folder
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Build the Template**

    ```bash
    make build
    ```

   After building, you will have a `/dist` folder and a `lastBuild.zip` file that you can use to test or submit to extension stores.

### Install the Template

1. **Access Extension Settings**

   Open your browser and navigate to the extensions settings page. You can typically find this in the browser’s menu or by entering a specific URL (e.g., `chrome://extensions/` for Chrome).

2. **Activate Developer Mode**

   Enable Developer Mode by toggling the switch or selecting the corresponding option on the extensions page.

3. **Load Your Extension**

   Click on the "Load unpacked" button (or equivalent) and choose the `/dist` directory from your extension template folder.

4. **Launch the Extension**

   Your extension should now appear in the list of installed extensions. Click its icon in the browser toolbar to start using it. Consider pinning it for easier access.

### Testing the Template

You can run your [Jest](https://jestjs.io/) tests using:

```bash
npm run test
```

<hr>

## Manifest V3 Resources

- [Manifest V3 Overview](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Manifest File Format](https://developer.chrome.com/docs/extensions/mv3/manifest/)
- [Background Scripts](https://developer.chrome.com/docs/extensions/mv3/background_pages/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
- [Extension APIs](https://developer.chrome.com/docs/extensions/reference/)
- [FAQs](https://developer.chrome.com/docs/extensions/mv3/faq/)

## License

This project is licensed under the [MIT License](LICENSE).
