import c1_1 from "@public/1_1.png";
import c1_2 from "@public/1_2.png";
import c2_1 from "@public/2_1.png";
import c2_2 from "@public/2_2.png";
import c3_1 from "@public/3_1.png";
import c3_2 from "@public/3_2.png";
import c4_1 from "@public/4_1.png";
import c4_2 from "@public/4_2.png";
import { MatchedState } from "@redux/states";
import { createSlice } from "@reduxjs/toolkit";

const initState: MatchedState = {
  matches: [
    {
      first: {
        gender: "female",
        image: c1_2.src,
        personalityType: "ENTJ",
      },
      second: {
        gender: "male",
        image: c1_1.src,
        personalityType: "INTP",
      },
    },
    {
      first: {
        gender: "female",
        image: c2_2.src,
        personalityType: "ENFJ ",
      },
      second: {
        gender: "male",
        image: c2_1.src,
        personalityType: "INFP",
      },
    },
    {
      first: {
        gender: "female",
        image: c3_2.src,
        personalityType: "ISFP",
      },
      second: {
        gender: "male",
        image: c3_1.src,
        personalityType: "ESTJ",
      },
    },
    {
      first: {
        gender: "female",
        image: c4_2.src,
        personalityType: "INFJ",
      },
      second: {
        gender: "male",
        image: c4_1.src,
        personalityType: "ENFP",
      },
    },
  ],
};

const matchedSlice = createSlice({
  initialState: initState,
  name: "matched",
  reducers: {},
});

export const matchedReducer = matchedSlice.reducer;
