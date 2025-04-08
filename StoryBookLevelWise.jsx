import { useContext, useEffect, useState } from "react";
import StoryBookPage from "./StoryPage";
import styles from "./StoryBook.module.css";
import { FlippingPages } from "flipping-pages";
import "flipping-pages/dist/style.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import StoryBookPageMobile from "./StoryPageMobile";

export default function StoryBookLevelWise({ book, setViewStory }) {
  // console.log({ book });
  // console.log(book);

  const [currPage, setCurrpage] = useState(0);
  const [storyData, setStoryData] = useState([]);
  const [storyDataMobile, setStoryDataMobile] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    var bookPages = JSON.parse(book.story_data);
    const coverPage = [
      {
        left_cover_image: bookPages.cover_images[0].left,
        right_cover_image: bookPages.cover_images[1].right,
        iscoverImage: true,
      },
    ];
    const totalPages = [...coverPage, ...bookPages.pages];
    setStoryData(totalPages);

    var bookPagesMobile = JSON.parse(book.story_data);
    var totalPagesMobile = [];

    bookPagesMobile.cover_images.forEach((bk) => {
      totalPagesMobile.push({ coverImage: bk.left ? bk.left : bk.right });
    });
    bookPagesMobile.pages.forEach((bk) => {
      totalPagesMobile.push({ description: bk.description });
      totalPagesMobile.push({ image: bk.image });
    });
    console.log("totalPagesMobile", totalPagesMobile);

    setStoryDataMobile(totalPagesMobile);
  }, [book.id]);
  console.log({ storyDataMobile });

  return (
    <>
      {storyData.length > 0 ? (
        <>
          <div
            style={{
              fontFamily: "Reddit Sans, sans-serif",
              textAlign: "center",
              display: "flex",
              gap: "15px",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {/* <div style={{ width: "100%" }}> */}
            <p>{book.name} </p>
            {/* </div> */}
            <button
              className="card_primary_button"
              style={{
                position: isMobile ? "relative" : "absolute",
                width: isMobile ? "50%" : "18%",
                left: isMobile ? "" : "73%",
                height: "fit-content",
                padding: "15px 0",
              }}
              onClick={() => setViewStory(false)}
            >
              Go Back / Library
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: isMobile ? "520px" : isIpad ? "520px" : "600px",
              width: "95%",
              margin: "5% auto",
              position: isMobile ? "relative" : "",
              // left: isMobile ? "-50vw" : "",
              transition: "transform 0.5s",
            }}
            id="book"
          >
            {!isMobile && (
              <button
                className={`card_primary_button ${
                  currPage == 0 ? "disabled" : ""
                }`}
                style={{
                  height: "fit-content",
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={() => {
                  setCurrpage(currPage - 1);
                }}
                disabled={currPage <= 0}
                id="prev-btn"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 19l-6-6 6-6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            )}

            <FlippingPages
              // direction={isMobile ? "bottom-to-top" : "right-to-left"}
              direction={"right-to-left"}
              selected={currPage}
              animationDuration={800}
              shadowBackground={"white"}
              // shadowBackground={"rgb(0, 0, 0, 0.25)"}
              disableSwipe={true}
            >
              {isMobile
                ? storyDataMobile.map((selectedbook) => {
                    return (
                      <StoryBookPageMobile
                        isMobile={isMobile}
                        isIpad={isIpad}
                        key={`${currPage} ${storyDataMobile.length}`}
                        totalPages={storyDataMobile.length}
                        selectedPage={currPage + 1}
                        page={selectedbook}
                      />
                    );
                  })
                : storyData.map((selectedbook) => {
                    return (
                      <StoryBookPage
                        isMobile={isMobile}
                        isIpad={isIpad}
                        key={`${currPage} ${storyData.length}`}
                        totalPages={storyData.length}
                        selectedPage={currPage + 1}
                        page={selectedbook}
                      />
                    );
                  })}
            </FlippingPages>
            {!isMobile && (
              <button
                className={`card_primary_button ${
                  currPage >= storyData.length - 1 ? "disabled" : ""
                }`}
                style={{
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                disabled={currPage >= storyData.length - 1}
                onClick={() => {
                  setTimeout(() => {
                    setCurrpage(currPage + 1);
                  }, [200]);
                }}
                id="next-btn"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5l6 6-6 6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            )}
          </div>
          {isMobile && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "50%",
                margin: "auto",
              }}
            >
              <button
                className={`card_primary_button ${
                  currPage == 0 ? "disabled" : ""
                }`}
                style={{
                  height: "fit-content",
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={() => {
                  setCurrpage(currPage - 1);
                }}
                disabled={currPage <= 0}
                id="prev-btn"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 19l-6-6 6-6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
              <button
                className={`card_primary_button ${
                  isMobile
                    ? currPage >= storyDataMobile.length - 1
                      ? "disabled"
                      : ""
                    : currPage >= storyData.length - 1
                    ? "disabled"
                    : ""
                }`}
                style={{
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                disabled={
                  isMobile
                    ? currPage >= storyDataMobile.length - 1
                    : currPage >= storyData.length - 1
                }
                onClick={() => {
                  setTimeout(() => {
                    setCurrpage(currPage + 1);
                  }, [200]);
                }}
                id="next-btn"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5l6 6-6 6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
