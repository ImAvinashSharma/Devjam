import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function Leave() {
  const [data, setData] = React.useState("Not Found");
  return (
    <div>
      <Header />
      <h1>Leaves</h1>
      //TODO: applcation for leave component //TODO: Status //TODO: scanner only to watchmen -- annimation
      {/* <BarcodeScannerComponent
        width={500}
        height={500}
        delay={10}
        torch={true}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p> */}
      <Footer />
    </div>
  );
}

export default Leave;
