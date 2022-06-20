const postNewInventory = ({
    site,
    computer,
    computerQuantity,
    monitors,
    monitorQuantity,
    monoHeadset,
    monoHeadsetQuantity,
    duoHeadset,
    duoHeadsetQuantity,
    keyboard,
    keyboardQuantity,
    mouse,
    mouseQuantity,
  }) => {
    const yearPurchased =  new Date().getFullYear();

    if (computer) {
      fetch("http://localhost:3001/computers", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: "Storage",
          yearPurchased: yearPurchased,
          quantity: computerQuantity, 
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (monitors) {
      fetch("http://localhost:3001/monitors", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: "Storage",
          style: "2022 Purchased",
          quantity: monitorQuantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (monoHeadset) {
      fetch("http://localhost:3001/headsets", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: "Storage",
          style: "Mono",
          quantity: monoHeadsetQuantity
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (duoHeadset) {
        fetch("http://localhost:3001/headsets", {
          method: "POST",
          body: JSON.stringify({
            site: site,
            location: "Storage",
            style: "Duo",
            quantity: duoHeadsetQuantity,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    if (keyboard) {
      fetch("http://localhost:3001/keyboards", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: "Storage",
          quantity: keyboardQuantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (mouse) {
      fetch("http://localhost:3001/mouses", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: "Storage",
          quantity: mouseQuantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  
  export default postNewInventory;