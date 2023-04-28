import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UploadMovies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch("https://cineplanet-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  console.log(categories);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const catagories = event.target.productCatagories.value;
    const desc = event.target.desc.value;
    const titleImg = event.target.titleImg.value;
    const img = event.target.bannerImg.value;
    const year = event.target.year.value;
    const time = event.target.duration.value;
    const language = event.target.language.value;
    const writer = event.target.writer.value;
    const Director = event.target.Director.value;
    const rate = event.target.rate.value;
    const poster_path = event.target.poster_path.files[0];
    const video = event.target.video.files[0];
    const like = 0;
    const viewed = 0;
    // const video = event.target.video.value
    const name = event.target.name.value;
    let catagoriesWithOutSpace = catagories;
    let movieWithoutSpaces = catagoriesWithOutSpace.replace(/ /g, "");

    const formData = new FormData();
    formData.append("imageFile", poster_path);

    const formvideo = new FormData();
    formvideo.append("filename", video);
    setLoading(true);

    const url = "https://cineplanet-server.vercel.app/uploadPhoto";

    // video upload firebase-------------------------
    fetch("https://cineplanet-server.vercel.app/uploadVideo", {
      method: "POST",
      body: formvideo,
    })
      .then((res) => res.json())
      .then((result) => {
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((ImageData) => {
            const addMovie = {
              name,
              desc,
              poster: ImageData.url,
              video: result.url,
              category: movieWithoutSpaces,
              like,
              titleImg,
              img,
              year,
              time,
              language,
              writer,
              Director,
              rate,
              viewed

              // video
            };
            console.log(addMovie);
            fetch("https://cineplanet-server.vercel.app/addMovie", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(addMovie),
            })
              .then((res) => res.json())
              .then((data) => {
                navigate(from, { replace: true });
                setLoading(false);
                alert("Your Product is added successfully");
              });
          });
      });

    // video upload firebase-------------------------
  };

  return (
    <div className="bg-slate-900 w-full  rounded-lg text-center">
      <div className="hero my-4 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Uploaded Your Movie</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card mt-4 w-full">
              <div className="card-body grid lg:grid-cols-2 grid-cols-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Movie Title</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Movie Title"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="desc"
                    placeholder="Description"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Card Image</span>
                  </label>
                  <input
                    type="url"
                    required
                    name="titleImg"
                    placeholder="Card Image"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Banner Img</span>
                  </label>
                  <input
                    type="url"
                    required
                    name="bannerImg"
                    placeholder="Banner Image"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Poster Upload</span>
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      multiple
                      required
                      name="poster_path"
                      accept="image/*"
                      id="files"
                      className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                    />
                  </div>
                </div>
                {/* this is video upload  */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Video Upload</span>
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      required
                      name="video"
                      id="files"
                      className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Catagories </span>
                  </label>
                  <select
                    name="productCatagories"
                    className="input rounded-md bg-transparent input-bordered"
                  >
                    {categories?.map((cate) => (
                      <option className="bg-slate-900">
                        {cate.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Release year</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="year"
                    placeholder="Release Year"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Language</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="language"
                    placeholder="Language"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Duration</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="duration"
                    placeholder="Duration"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Writer</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="writer"
                    placeholder="Writer"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Director</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="Director"
                    placeholder="Director"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="rate"
                    placeholder="Rating"
                    className="input bg-transparent rounded-md input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className=" font-bold p-3 rounded-lg bg-green-700">
                  {loading ? "Loading..." : "Upload"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMovies;
