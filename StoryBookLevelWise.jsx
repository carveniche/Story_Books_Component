import { useContext, useEffect, useState } from "react";
import StoryBookPage from "./StoryPage";
import styles from "./StoryBook.module.css";
import { FlippingPages } from "flipping-pages";
import "flipping-pages/dist/style.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import StoryBookPageMobile from "./StoryPageMobile";



export default function StoryBookLevelWise({ book, activeSide, checkFirstDevice, setViewStory, pageChange, currPage, isLiveClass, role_name, pagechagneTabHandler, pageChangeTab }) {

  console.log(checkFirstDevice, "pageChangeTabpageChangeTab")

  const getHeight = () => {
    let output;

    if (isLiveClass) {
      output = isMobile || isIpad ? "520px" : "490px";
    } else {
      output = isMobile || isIpad ? "520px" : "600px";
    }

    return output;
  };

  const getWidth = () => {
    return isLiveClass ? "80%" : "95%";
  };
  const getMargin = () => {
    return isLiveClass ? "0px auto" : "5% auto";
  }


  const [storyData, setStoryData] = useState([]);
  const [storyDataMobile, setStoryDataMobile] = useState([]);
  const theme = useTheme();
  const isMobile = isLiveClass
    ? useMediaQuery(theme.breakpoints.down("lg"))
    : useMediaQuery(theme.breakpoints.down("sm"));

  const isIpad = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    var bookPages = JSON.parse(book?.story_data);
    const coverPage = [
      {
        left_cover_image: bookPages.cover_images[0].left,
        right_cover_image: bookPages.cover_images[1].right,
        iscoverImage: true,
      },
    ];
    const totalPages = [...coverPage, ...bookPages.pages];
    console.log(totalPages, "totalPagesMobilelaptop")
    setStoryData(totalPages);

    var bookPagesMobile = JSON.parse(book.story_data);
    var totalPagesMobile = [];

    bookPagesMobile.cover_images.forEach((bk) => {
      totalPagesMobile.push({ coverImage: bk.left ? bk.left : bk.right });
    });
    bookPagesMobile.pages.forEach((bk) => {
     
      if(bk.description.length>1){
        totalPagesMobile.push({ description: bk.description });
      }else if(bk.question){
        totalPagesMobile.push({ question: bk.question, answer:bk.answers });
      }
      totalPagesMobile.push({ image: bk.image });
    });
    console.log("totalPagesMobile", totalPagesMobile);

    setStoryDataMobile(totalPagesMobile);
  }, [book]);
  console.log({ storyDataMobile });







  return (
    <>
      {storyData.length > 0 ? (
        <>
          {!isLiveClass && <div
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
          }
          {(role_name === "tutor" && checkFirstDevice) &&
            (<div class="flex justify-evenly p-[10px]">
              <button
                className={`px-4 py-2 rounded text-white ${activeSide === "left" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                  }`}
                onClick={() => pagechagneTabHandler("left", currPage - 1)}
                disabled={activeSide === "left"}
              >
                Left Page
                {activeSide === "left" && <span> ✅</span>}
              </button>

              <button
                className={`px-4 py-2 rounded text-white ${activeSide === "right" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                  }`}
                onClick={() => pagechagneTabHandler("right", currPage + 1)}
                disabled={activeSide === "right"}
              >
                Right Page
                {activeSide === "right" && <span> ✅</span>}
              </button>
            </div>)
          }
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: getHeight(),
              // height: isMobile ? "520px" : isIpad ? "520px" : "600px",
              // width: "95%",
              width: getWidth(),
              // margin: "5% auto",
              margin: getMargin(),
              position: isMobile ? "relative" : "",
              // left: isMobile ? "-50vw" : "",
              transition: "transform 0.5s",
            }}
            id="book"
          >
            {!isMobile && (isLiveClass ? role_name === "tutor" : true) && (
              <button
                className={`card_primary_button ${currPage == 0 ? "disabled" : ""
                  } ${(isLiveClass && checkFirstDevice && (activeSide !== "left"))|| currPage == 0  ? "cursor-not-allowed opacity-50":""} `}
                style={{
                  height: "fit-content",
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor:"#FF8652",
                }}
                onClick={() => pageChange(currPage - 1)}
                disabled={currPage <= 0  || (isLiveClass && checkFirstDevice && (activeSide !== "left"))}
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
                    stroke="black"
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
            {!isMobile && (isLiveClass ? role_name === "tutor" : true) && (
              <button
              className={`card_primary_button ${
                currPage >= storyData.length - 1  ? "disable" : ""
              } ${(isLiveClass && checkFirstDevice && (activeSide !== "right")) || currPage >= storyData.length - 1  ? "cursor-not-allowed opacity-50":""} `}
              
                style={{
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor:"#FF8652",
                }}
                disabled={currPage >= storyData.length - 1 || (isLiveClass && checkFirstDevice && (activeSide !== "right"))}
                onClick={() => {
                  setTimeout(() => {
                    pageChange(currPage + 1);
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
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            )}
          </div>
          {isMobile && (isLiveClass ? role_name === "tutor" : true) && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "50%",
                margin: "auto",
              }}
            >
              <button
                className={`card_primary_button ${currPage == 0 ? "disabled" : ""}`}
                style={{
                  height: "fit-content",
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={() => pageChange(currPage - 1)}
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
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
              <button
                className={`card_primary_button ${isMobile
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
                    pageChange(currPage + 1);
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
                    stroke="black"
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