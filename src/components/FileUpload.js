import React, { useContext } from "react";
import Resizer from "react-image-file-resizer";
import { AuthContext } from "../context/authContext";
import Image from "./Image";

const FileUpload = ({ setValues, setLoading, values, singleUpload = false, }) => {
  const { state } = useContext(AuthContext);

  const fileResizeAndUpload = () => {};

  const handleImageRemove = (id) => {};

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="form-group">
          <label className="btn btn-primary">
            Upload Image
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={fileResizeAndUpload}
              className="form-control"
              placeholder="Image"
            />
          </label>
        </div>
      </div>
      <div className="col-md-9">
        {/*for single image*/}
        {values.image && (
          <Image
            image={values.image}
            key={values.image.public_id}
            handleImageRemove={handleImageRemove}
          />
        )}

        {/*for multiple images*/}
        {values.images &&
          values.images.map((image) => (
            <Image
              image={image}
              key={image.public_id}
              handleImageRemove={handleImageRemove}
            />
          ))}
      </div>
    </div>
  );
};

export default FileUpload;
