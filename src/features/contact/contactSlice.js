import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "./contactServices";
import { toast } from "react-toastify";

export const postQuery = createAsyncThunk(
  "enquiry/post-enquirie",
  async (contactData,thunkAPI) => {
    try {
      return await contactService.postQuery(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ContactState = {
  contact: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: ContactState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
        if (state.isSuccess === true) {
            toast.success("Contact Submitted Success")
        }
      })
      .addCase(postQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Something went wrong")
      }
      });
  },
});

export default contactSlice.reducer;
