# DriveOFF

WebExtension for e-stores (drive) using Open Food Facts Database

## Compatible Browsers

* [x] Firefox
* [x] Chromium
* [x] Opera
* [x] Vivaldi
* [ ] Edge (*not tested*)

## Introduction

Works with a few e-commerce websites for now, but using a [modular](./docs/drive_config.md) system
Adds the following information to the product pages:

* [x] Nutri-Score (nutritional quality from A to E)
* [x] Nova group (food processing from 1 to 4)
* [x] Eco Score (environmental impact from A to E)
* [ ] Nutrient levels
* [ ] Additives
* [ ] Barcode

## Get in touch
* Page on the French version of Open Food Facts: https://fr.openfoodfacts.org/extension-pour-les-drives
* Collaborative Coordination wikipage: https://wiki.openfoodfacts.org/Drive_OFF_-_Browser_extension_for_shopping
* Slack channel: https://openfoodfacts.slack.com/messages/CCUPSBMNZ/

### Changes
* [x] ES6+ refactor
* [x] Modular Drive configs
* [x] Nutri/Nova/Eco Scores widget injection into products header
* [x] Fallback to search results when product didn't have EAN (disabled)
* [x] Nutri/Nova/Eco Scores widget injection into catalogues and lists

The extension uses data from [Open Food Facts](https://world.openfoodfacts.org/) and the barcode generation library [jsBarcode](https://github.com/lindell/JsBarcode)

## Build

**NPM**

```sh
npm install
npm run-script build
```

**Yarn**

```sh
yarn
yarn build
```

## Installation

_ **DriveOFF** is available on the extension stores, but you can also do the installation from the sources._

* Download the latest release
* Unzip the archive to the location of your choice

### Chromium

* Launch **Chromium**, **Chrome**, **Vivaldi** or **Opera**
* Type in the URL bar `chrome://extensions`
* Activate developer mode
* Click on "Load the unpackaged extension"
* Select the folder where you unzipped the downloaded release.
* Enjoy !

### Firefox

* Launch **Firefox**
* Type in the URL bar `about:debugging#/runtime/this-firefox`
* Click on "Load a temporary add-on ..."
* Open the `manifest.json` file in the folder where you unzipped the downloaded release.
* Enjoy !

## List of compatible drives

* [x] auchan.fr (*product pages only*)
* [x] bio.coop (*product pages only*)
* [x] carrefour.fr
* [ ] cora.fr
* [x] intermarche.com
* [x] walmart.com (*product pages only*)
* [ ] leclercdrive.fr

## Contributors

<a href="https://github.com/openfoodfacts/DriveOFF/graphs/contributors">
  <img alt="List of contributors to this repository" src="https://contrib.rocks/image?repo=openfoodfacts/DriveOFF" />
</a>
