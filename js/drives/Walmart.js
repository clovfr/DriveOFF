drivesList.push(
  class USWalmart extends Drive {
    static get driveName() {
      return "Walmart";
    }
    static get domain() {
      return /walmart\.com$/;
    }
    static get lang() {
      return "en-US";
    }
    static get country() {
      return "United States of America";
    }

    static get structure() {
      return {
        productView: {
          base: ".buy-box-container",
          name: "#main-title",
          mainDescription: "#main-title",
          description:
            ".buy-box-container > div:nth-child(1) > section:nth-child(2)",
          ean: () => {
            try {
              return JSON.parse(
                document.querySelector("#__NEXT_DATA__").innerHTML
              ).props.pageProps.initialData.data.product.upc;
            } catch (error) {}
          },
        },
      };
    }
  }
);
