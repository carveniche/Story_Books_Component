import { useContext, useEffect, useRef, useState } from "react";
import StoryBookPage from "./StoryPage";
import styles from "./StoryBook.module.css";
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StoryBookPageMobile from "./StoryPageMobile";

export default function StoryBookLevelWise({ pageNext,flipBookRef,pagePrev, book,  checkFirstDevice, setViewStory, pageChange, currPage, isLiveClass, role_name, pagechagneTabHandler, pageChangeTab }) {

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
    return isLiveClass ? "80%" : "90%";
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
    setStoryData(totalPages);

    var bookPagesMobile = JSON.parse(book.story_data);
    var totalPagesMobile = [];
    // console.log(bookPagesMobile,"bookPagesMobile")
    let firstPage=true;
    bookPagesMobile.cover_images.forEach((bk) => {
      totalPagesMobile.push({ coverImage: bk.left ? bk.left : bk.right });
      if(firstPage){
        totalPagesMobile.push({ coverImage: bk.left ? bk.left : bk.right });
        firstPage=false;
      }
    });
    bookPagesMobile.pages.forEach((bk) => {
      if (bk.description.length > 1) {
        totalPagesMobile.push({ description: bk.description });
      } else if (bk.question) {
        totalPagesMobile.push({ question: bk.question, answer: bk.answers });
      }
      totalPagesMobile.push({ image: bk.image });
    });
    setStoryDataMobile(totalPagesMobile);
    // console.log(totalPagesMobile,"totalPagesMobiletotalPagesMobile")
  }, [book]);

  // const flipBookRef = useRef(null);
  const [currentPage,setCurrentPage]=useState(0)

  // Modified handlePageChange to sync with flip book
  const handlePageChange = (e) => {
    const newPage = e.data;
    // console.log(newPage,storyDataMobile.length,"newPagechange")
    if (newPage !== currPage) {
      pageChange(newPage);
      setCurrentPage(newPage)
    }
  };

 
  

  
  

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
            <p>{book.name} </p>
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
          {(role_name === "tutor" && checkFirstDevice) && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "10px",
              }}
            >
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  color: "white",
                  backgroundColor: pageChangeTab === "left" ? "#9CA3AF" : "#3B82F6",
                  cursor: pageChangeTab === "left" ? "not-allowed" : "pointer",
                }}
                onClick={() => pagechagneTabHandler("left", currPage - 1)}
                disabled={pageChangeTab === "left" }
              >
                Left Page
                {pageChangeTab === "left" && <span> 📖</span>}
              </button>

              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  color: "white",
                  backgroundColor: pageChangeTab === "right" ? "#9CA3AF" : "#3B82F6",
                  cursor: pageChangeTab === "right" || storyDataMobile.length-1===currentPage ? "not-allowed" : "pointer",
                }}
                onClick={() => pagechagneTabHandler("right", currPage + 1)}
                disabled={pageChangeTab === "right" || storyDataMobile.length-1===currentPage}
              >
                Right Page
                {pageChangeTab === "right" && <span> 📖</span>}
              </button>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: getHeight(),
              width: getWidth(),
              margin: getMargin(),
              position: isMobile ? "relative" : "",
              transition: "transform 0.5s",
            }}
            id="book"
          >
            {!isMobile && (isLiveClass ? role_name === "tutor" : true) && (
              <button
                className={`card_primary_button ${currentPage <= 1 ? "disabled" : ""
                  } ${(isLiveClass && checkFirstDevice && (pageChangeTab !== "left")) || currentPage <= 1 ? "cursor-not-allowed opacity-50 bg-[#FF8652]" : "bg-[#FF8652]"} `}
                style={{
                  height: "fit-content",
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0+ 1, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={pagePrev}
                disabled={currentPage <= 1 || (isLiveClass && checkFirstDevice && (pageChangeTab !== "left"))}
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

            {isMobile?(
              <HTMLFlipBook
              ref={flipBookRef}
                width={500}
                height={500}
                size="fixed"
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={false}
                onFlip={handlePageChange}
                className="demo-book"
                style={{}}
                startPage={1}
                useMouseEvents={false}
              >
                {storyDataMobile.map((selectedbook, index) => (
                  <div key={index} className="demoPage">
                    <StoryBookPageMobile
                      isMobile={isMobile}
                      isIpad={isIpad}
                      key={`${index} ${storyDataMobile.length}`}
                      totalPages={storyDataMobile.length}
                      selectedPage={index + 1}
                      page={selectedbook}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            ) : (
              <HTMLFlipBook
                width={400}
                ref={flipBookRef}
                height={400}
                size="stretch"
                maxShadowOpacity={0.5}
                showCover={true}
                onFlip={handlePageChange}
                className="demo-book"
                startPage={1}
                useMouseEvents={false}
              >
                {storyDataMobile.map((selectedbook, index) => (
                  <div key={index} className="demoPage">
                    <StoryBookPage
                      isMobile={isMobile}
                      isIpad={isIpad}
                      key={`${index} ${storyDataMobile.length}`}
                      totalPages={storyDataMobile.length}
                      selectedPage={index + 1}
                      page={selectedbook}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            )}

            {!isMobile && (isLiveClass ? role_name === "tutor" : true) && (
              <button
                className={`card_primary_button ${currentPage >= storyDataMobile.length - 3 ? "disabled" : ""
                  } ${(isLiveClass && checkFirstDevice && (pageChangeTab !== "right")) || currentPage >= storyDataMobile.length - 3 ? "cursor-not-allowed opacity-50 bg-[#FF8652]" : "bg-[#FF8652]"} `}
                style={{
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                disabled={(currentPage >= storyDataMobile.length - 3 )|| (isLiveClass && checkFirstDevice && (pageChangeTab !== "right"))}
                onClick={pageNext}
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
                className={`card_primary_button ${currentPage <= 1  ? "disabled" : ""}`}
                style={{
                  height: "fit-content",
                  padding: "15px 10px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={pagePrev}
                disabled={currentPage <= 1}
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
                onClick={pageNext}
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