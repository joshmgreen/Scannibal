# Scannibal

> QR codes that are so good, you'll devour the URL.

A simple CLI tool that takes any URL and generates a QR code image from it. It also keeps a running history of every URL you've scanned.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+

## Installation

```bash
git clone https://github.com/joshmg/Scannibal.git
cd Scannibal
npm install
```

## Usage

```bash
node index.js
```

You'll be prompted to enter a URL. After submitting:

- A PNG QR code is saved as `<your-url>_img.png` in the current directory
- The URL is appended to `URL_history.txt` for future reference

## Example

```
? Feed me a URL, and I'll devour it to spit out a tasty QR code! 🩸 https://github.com
```

Output: `https:__github.com_img.png` (a scannable QR code image)

## Dependencies

| Package | Purpose |
|---|---|
| [inquirer](https://github.com/SBoudrias/Inquirer.js) | Interactive CLI prompt |
| [qr-image](https://github.com/alexeyten/qr-image) | QR code generation |

## License

ISC — Josh Green
