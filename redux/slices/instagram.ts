import { InstagramState } from "@redux/states";
import { createSlice } from "@reduxjs/toolkit";
import insta1 from "@public/insta1.jpg";
import insta2 from "@public/insta2.jpg";
import insta3 from "@public/insta3.jpg";
import insta4 from "@public/insta4.jpg";
import insta5 from "@public/insta5.jpg";

const initState: InstagramState = {
	instagrams: [
		{
			link: "https://www.instagram.com/p/CVAKcakgv7S/", 
			image: insta1.src,
		},
		{
			link: "https://www.instagram.com/p/CXQh-Jov4fl/", 
			image: insta2.src,
		},
		{
			link: "https://www.instagram.com/p/CX1FDnnPCzX/", 
			image: insta3.src,
		},
		{
			link: "https://www.instagram.com/p/CWsz_Hgjppj/", 
			image: insta4.src,
		},
		{
			link: "https://www.instagram.com/p/CVaV18zs5xo/", 
			image: insta5.src,
		},
	]
};

const instagramSlice = createSlice({
  initialState: initState,
  name: "instagram",
  reducers: {},
});

export const instagramReducer = instagramSlice.reducer;
