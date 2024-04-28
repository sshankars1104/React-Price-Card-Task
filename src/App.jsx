import "remixicon/fonts/remixicon.css";
import "./App.css";
import React from "react";
import PriceList from "./PriceList";

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      storage: "5 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      isPrivateProjects: false,
      isPhoneSupport: false,
      isSubDomain: false,
      isReports: false,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      storage: "50 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      isPrivateProjects: true,
      isPhoneSupport: true,
      isSubDomain: true,
      isReports: false,
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      storage: "150 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      isPrivateProjects: true,
      isPhoneSupport: true,
      isSubDomain: true,
      isReports: true,
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <PriceList key={index} {...item} />
      ))}
    </>
  );
}

export default App;
