import { createSlice } from "@reduxjs/toolkit";

export const featuresSlices = createSlice({
  name: "features",
  initialState: [
    {
      id: 1,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      logo: "/icon-chat.png",
      alt: "Chat Icon",
    },
    {
      id: 2,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
      logo: "/icon-money.png",
      alt: "money icon",
    },
    {
      id: 3,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
      logo: "./icon-security.png",
      alt: "Security Icon",
    },
  ],
  reducers: {
    getFeatures: (state, action) => {
      state;
      //   console.log(state);
    },
  },
});
