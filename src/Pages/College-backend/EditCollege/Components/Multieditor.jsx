import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

const Multieditor = ({ editorValue, value, onChange }) => {
  editorValue = useRef(null);

  return (
    <>
      <>
        <Editor
          apiKey={"auh3xewmclw99k94f5893eiyewtq7ctglvk9fv29izdog7kz"}
          value={value}
          onInit={(evt, editor) => (editorValue.current = editor)}
          init={{
            height: 200,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help |table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | image",

            // Here we just have to call the api where we are uploading the image and in return we have to return a location JSON and it will automatically put it in the image in editor.

            images_upload_url: "www.imageuploadurl.com/uploadimage",

            // Here we do all the computation that we need to perform before an image is being uploaded to the server. we don't need both we just need any one of these two...

            images_upload_handler: function (blobInfo, success, failure) {
              success(
                "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
              );
            },

            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={onChange}
        />
      </>
    </>
  );
};

export default Multieditor;
