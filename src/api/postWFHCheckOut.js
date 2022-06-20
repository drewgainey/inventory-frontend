const postWFHCheckOut = ({
  site,
  currentEmployee,
  newChecked,
  computer,
  computerYear,
  monitors,
  monitorQuantity,
  monitor1Style,
  monitor2Style,
  headset,
  headsetMono,
  keyboard,
  mouse,
  location,
}) => {
  if (newChecked) {
    if (computer) {
      fetch("http://localhost:3001/computers", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: location,
          yearPurchased: computerYear,
          employee: currentEmployee,
          quantity: 1,
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
          location: location,
          style: monitor1Style,
          employee: currentEmployee,
          quantity: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (monitorQuantity === 2) {
        fetch("http://localhost:3001/monitors", {
          method: "POST",
          body: JSON.stringify({
            site: site,
            location: location,
            style: monitor2Style,
            employee: currentEmployee,
            quantity: 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    }
    if (headset) {
      let headsetStyle = headsetMono ? "Mono" : "Duo";

      fetch("http://localhost:3001/headsets", {
        method: "POST",
        body: JSON.stringify({
          site: site,
          location: location,
          style: headsetStyle,
          employee: currentEmployee,
          quantity: 1,
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
          location: location,
          employee: currentEmployee,
          quantity: 1,
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
          location: location,
          employee: currentEmployee,
          quantity: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
  if(!newChecked) {
    if (computer) {
      fetch("http://localhost:3001/computers/location", {
        method: "PUT",
        body: JSON.stringify({
          location: location,
          employee: currentEmployee,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
};

export default postWFHCheckOut;
