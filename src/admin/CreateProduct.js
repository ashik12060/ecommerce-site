import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../pages/axiosInstance";
// import axiosInstance from "../pages/axiosInstance";
// import { modules } from "../components/moduleToolbar";
// import Parser from "html-react-parser";
// import DOMPurify from "dompurify";

const validationSchema = yup.object({
  title: yup
    .string("Add a product title")
    .min(4, "Product title should have a minimum of 4 characters")
    .required("Product title is required"),
  content: yup
    .string("Add text content")
    .min(10, "Text content should have a minimum of 10 characters")
    .required("Text content is required"),
feature1: yup.string("Add text content"),
feature2: yup.string("Add text content"),
feature3: yup.string("Add text content"),
feature4: yup.string("Add text content"),
feature5: yup.string("Add text content"),
feature6: yup.string("Add text content"),
feature7: yup.string("Add text content"),
feature8: yup.string("Add text content"),
feature0: yup.string("Add text content"),
feature10: yup.string("Add text content"),
  techSpec1: yup.string("Add text content"),
  techSpec2: yup.string("Add text content"),
  techSpec3: yup.string("Add text content"),
  techSpec4: yup.string("Add text content"),
  techSpec5: yup.string("Add text content"),
  techSpec6: yup.string("Add text content"),
  techSpec7: yup.string("Add text content"),
  techSpec8: yup.string("Add text content"),
  techSpec9: yup.string("Add text content"),
  techSpec10: yup.string("Add text content"),
  techSpec11: yup.string("Add text content"),
  techSpec12: yup.string("Add text content"),
});


const CreateProduct = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: null,
      feature1: "",
      feature2:"",
      feature3:"",
      feature4:"",
      feature5:"",
      feature6:"",
      feature7:"",
      feature8:"",
      feature9:"",
      feature10:"",
      techSpec1:"",
      techSpec2:"",
      techSpec3:"",
      techSpec4:"",
      techSpec5:"",
      techSpec6:"",
      techSpec7:"",
      techSpec8:"",
      techSpec9:"",
      techSpec10:"",
      techSpec11:"",
      techSpec12:"",
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewProduct(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const [error, setError] = useState(null);
  const observedElementRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      try {
        // Your logic that could potentially throw an error
      } catch (error) {
        if (error.name === 'ResizeObserver loop completed') {
          setError('ResizeObserver loop error');
        } else {
          // Handle other errors
        }
      }
    });

    if (observedElementRef.current) {
      resizeObserver.observe(observedElementRef.current);
    }

    return () => {
      if (observedElementRef.current) {
        resizeObserver.unobserve(observedElementRef.current);
      }
    };
  }, [observedElementRef]);
//stop
  const createNewProduct = async (values) => {
    try {
       const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/product/create`, values);
      
       if (result?.data?.success === true) {
        toast.success("product created");
        // Navigate("/admin/dashboard");
      }
       
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  // const modules = {
  //   toolbar: [
  //     [{ header: "1" }, { header: "2" }],
  //     ["bold", "italic", "underline"],
  //     ["link", "image"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["clean"],
  //   ],
  //   clipboard: {
  //     matchVisual: false, // Disable copying/pasting visual elements like p and br tags
  //   },
  // };

  // const handleProductContent = () => {
  //   // Strip HTML tags from the content
  //   const strippedContent = values.content.replace(/<[^>]+>/g, "");

  //   // Create an object with the data to send to MongoDB
  //   // const dataToSend = {
  //     const dataProductToSend={
  //     title: values.title,
  //     content: strippedContent, // Content with HTML tags removed
  //     feature1: values.feature1, // Content with HTML tags removed
  //     feature2: values.feature2, // Content with HTML tags removed
  //     feature3: values.feature3, // Content with HTML tags removed
  //     feature4: values.feature4, // Content with HTML tags removed
  //     feature5: values.feature5, // Content with HTML tags removed
  //     feature6: values.feature6, // Content with HTML tags removed
  //     feature7: values.feature7, // Content with HTML tags removed
  //     feature8: values.feature8, // Content with HTML tags removed
  //     feature9: values.feature9, // Content with HTML tags removed
  //     feature10: values.feature10, // Content with HTML tags removed
  //     techSpec1: values.techSpec1, // Content with HTML tags removed
  //     techSpec2: values.techSpec2, // Content with HTML tags removed
  //     techSpec3: values.techSpec3, // Content with HTML tags removed
  //     techSpec4: values.techSpec4, // Content with HTML tags removed
  //     techSpec5: values.techSpec5, // Content with HTML tags removed
  //     techSpec6: values.techSpec6, // Content with HTML tags removed
  //     techSpec7: values.techSpec7, // Content with HTML tags removed
  //     techSpec8: values.techSpec8, // Content with HTML tags removed
  //     techSpec9: values.techSpec9, // Content with HTML tags removed
  //     techSpec10: values.techSpec10, // Content with HTML tags removed
  //     techSpec11: values.techSpec11, // Content with HTML tags removed
  //     techSpec12: values.techSpec12,// Content with HTML tags removed
  //     image: values.image,
  //   };

  //   // Make the API request to send data to MongoDB
  //   createNewProduct(dataProductToSend);
  //   console.log("create product component");
  // };

  return (
    <div ref={observedElementRef}>

{error ? (
        <div>Error: {error}</div>
      ) : (
      
      <Box sx={{ bgcolor: "white",
      padding: "20px",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto", }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Create Medicine{" "}
        </Typography>
        {/* onSubmit={handleSubmit} */}
        
        {/* noValidate */}
        <Box component="form"  onSubmit={handleSubmit}  sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3}}
            fullWidth
            id="title"
            label="Post title"
            name="title"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Post title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}

          />

          <Box sx={{ mb: 3 }}>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="content"
              label="Content"
              name="content"
              multiline
              rows={4}
              placeholder="Write the post content..."
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.content && Boolean(errors.content)}
              helperText={touched.content && errors.content}
            />

            {/* features start */}
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature1"
              label="feature1"
              name="feature1"
              multiline
              rows={4}
              placeholder="Write the feature1..."
              value={values.feature1}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature1 && Boolean(errors.feature1)}
              helperText={touched.feature1 && errors.feature1}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature2"
              label="feature2"
              name="feature2"
              multiline
              rows={4}
              placeholder="Write the feature2..."
              value={values.feature2}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature2 && Boolean(errors.feature2)}
              helperText={touched.feature2 && errors.feature2}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature3"
              label="feature3"
              name="feature3"
              multiline
              rows={4}
              placeholder="Write the feature3..."
              value={values.feature3}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature3 && Boolean(errors.feature3)}
              helperText={touched.feature3 && errors.feature3}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature4"
              label="feature4"
              name="feature4"
              multiline
              rows={4}
              placeholder="Write the feature4..."
              value={values.feature4}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature4 && Boolean(errors.feature4)}
              helperText={touched.feature4 && errors.feature4}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature5"
              label="feature5"
              name="feature5"
              multiline
              rows={4}
              placeholder="Write the feature5..."
              value={values.feature5}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature5 && Boolean(errors.feature5)}
              helperText={touched.feature5 && errors.feature5}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature6"
              label="feature6"
              name="feature6"
              multiline
              rows={4}
              placeholder="Write the feature6..."
              value={values.feature6}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature6 && Boolean(errors.feature6)}
              helperText={touched.feature6 && errors.feature6}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature7"
              label="feature7"
              name="feature7"
              multiline
              rows={4}
              placeholder="Write the feature7..."
              value={values.feature7}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature7 && Boolean(errors.feature7)}
              helperText={touched.feature7 && errors.feature7}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature8"
              label="feature8"
              name="feature8"
              multiline
              rows={4}
              placeholder="Write the feature8..."
              value={values.feature8}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature8 && Boolean(errors.feature8)}
              helperText={touched.feature8 && errors.feature8}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature9"
              label="feature9"
              name="feature9"
              multiline
              rows={4}
              placeholder="Write the feature9..."
              value={values.feature9}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature9 && Boolean(errors.feature9)}
              helperText={touched.feature9 && errors.feature9}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="feature10"
              label="feature10"
              name="feature10"
              multiline
              rows={4}
              placeholder="Write the feature10..."
              value={values.feature10}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.feature10 && Boolean(errors.feature10)}
              helperText={touched.feature10 && errors.feature10}
            />

              {/* features end */}


              {/* Technical Specification start */}
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec1"
              label="techSpec1"
              name="techSpec1"
              multiline
              rows={4}
              placeholder="Write the techSpec1..."
              value={values.techSpec1}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec1 && Boolean(errors.techSpec1)}
              helperText={touched.techSpec1 && errors.techSpec1}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec2"
              label="techSpec2"
              name="techSpec2"
              multiline
              rows={4}
              placeholder="Write the techSpec2..."
              value={values.techSpec2}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec2 && Boolean(errors.techSpec2)}
              helperText={touched.techSpec2 && errors.techSpec2}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec3"
              label="techSpec3"
              name="techSpec3"
              multiline
              rows={4}
              placeholder="Write the techSpec3..."
              value={values.techSpec3}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec3 && Boolean(errors.techSpec3)}
              helperText={touched.techSpec3 && errors.techSpec3}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec4"
              label="techSpec4"
              name="techSpec4"
              multiline
              rows={4}
              placeholder="Write the techSpec4..."
              value={values.techSpec4}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec4 && Boolean(errors.techSpec4)}
              helperText={touched.techSpec4 && errors.techSpec4}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec5"
              label="techSpec5"
              name="techSpec5"
              multiline
              rows={4}
              placeholder="Write the techSpec5..."
              value={values.techSpec5}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec5 && Boolean(errors.techSpec5)}
              helperText={touched.techSpec5 && errors.techSpec5}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec6"
              label="techSpec6"
              name="techSpec6"
              multiline
              rows={4}
              placeholder="Write the techSpec6..."
              value={values.techSpec6}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec6 && Boolean(errors.techSpec6)}
              helperText={touched.techSpec6 && errors.techSpec6}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec7"
              label="techSpec7"
              name="techSpec7"
              multiline
              rows={4}
              placeholder="Write the techSpec7..."
              value={values.techSpec7}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec7 && Boolean(errors.techSpec7)}
              helperText={touched.techSpec7 && errors.techSpec7}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec8"
              label="techSpec8"
              name="techSpec8"
              multiline
              rows={4}
              placeholder="Write the techSpec8..."
              value={values.techSpec8}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec8 && Boolean(errors.techSpec8)}
              helperText={touched.techSpec8 && errors.techSpec8}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec9"
              label="techSpec9"
              name="techSpec9"
              multiline
              rows={4}
              placeholder="Write the techSpec9..."
              value={values.techSpec9}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec9 && Boolean(errors.techSpec9)}
              helperText={touched.techSpec9 && errors.techSpec9}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec10"
              label="techSpec10"
              name="techSpec10"
              multiline
              rows={4}
              placeholder="Write the techSpec10..."
              value={values.techSpec10}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec10 && Boolean(errors.techSpec10)}
              helperText={touched.techSpec10 && errors.techSpec10}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec11"
              label="techSpec11"
              name="techSpec11"
              multiline
              rows={4}
              placeholder="Write the techSpec11..."
              value={values.techSpec11}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec11 && Boolean(errors.techSpec11)}
              helperText={touched.techSpec11 && errors.techSpec11}
            />
              <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="techSpec12"
              label="techSpec12"
              name="techSpec12"
              multiline
              rows={4}
              placeholder="Write the techSpec12..."
              value={values.techSpec12}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.techSpec12 && Boolean(errors.techSpec12)}
              helperText={touched.techSpec12 && errors.techSpec12}
            />

          </Box>

          <Box border="2px dashed blue" sx={{ p: 1 }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              //maxFiles={3}
              onDrop={(acceptedFiles) =>
                acceptedFiles.map((file, index) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    setFieldValue("image", reader.result);
                  };
                  return null;
                })
              }
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <Box
                  {...getRootProps()}
                  p="1rem"
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    bgColor: isDragActive ? "#cceffc" : "#fafafa",
                  }}
                >
                  <input name="banner" {...getInputProps()} />
                  {isDragActive ? (
                    <>
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        {" "}
                        Drop here!
                      </p>
                    </>
                  ) : values.image === null ? (
                    <>
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        Drag and Drop here or click to choose
                      </p>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img
                            style={{ maxWidth: "100px" }}
                            src={values.image}
                            alt=""
                          />
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </Dropzone>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            elevation={0}
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
            // onClick={handleProductContent}
            // disabled={loading}
          >
            Post Medicine
          </Button>
          
        </Box>
        
      </Box>
      )}
    </div>
  );
};

export default CreateProduct;
