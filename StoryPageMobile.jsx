import { useContext, useEffect, useRef, useState } from "react";
import styles from "./StoryBook.module.css";
import axios from "axios";
import BaseUrl from "../../../../api/ApiConfig";
import "./story_books.css";
export default function StoryBookPageMobile({
  page,
  totalPages,
  selectedPage,
  isMobile,
  isIpad,
  sidePage,
  isLiveClass
}) {
  console.log("isMobile", isMobile);
  console.log("isIpad", isIpad);
  console.log(sidePage, "sidePagesidePagesidePage")

  var orangeFlippedShadowLeft =
    "linear-gradient(270deg,var(--Surface-Default, #FF8652) .65%,hsla(0,0%,100%,.2) 1.53%,hsla(0,0%,100%,.1) 2.38%,var(--Surface-Default, #FF8652) 3.26%,hsla(0,0%,100%,.14) 5.68%,hsla(0,0%,96%,0) 6.96%)";
  var orangeFlippedShadowRight =
    "linear-gradient(90deg,var(--Surface-Default, #FF8652) .65%,hsla(0,0%,100%,.2) 1.53%,hsla(0,0%,100%,.1) 2.38%,var(--Surface-Default, #FF8652) 3.26%,hsla(0,0%,100%,.14) 5.68%,hsla(0,0%,96%,0) 6.96%)";
  var orangeFlippedShadowBottom =
    "linear-gradient(0deg,var(--Surface-Default, #FF8652) .65%,hsla(0,0%,100%,.2) 1.53%,hsla(0,0%,100%,.1) 2.38%,var(--Surface-Default, #FF8652) 3.26%,hsla(0,0%,100%,.14) 5.68%,hsla(0,0%,96%,0) 6.96%)";
  var orangeFlippedShadowTop =
    "linear-gradient(180deg,var(--Surface-Default, #FF8652) .65%,hsla(0,0%,100%,.2) 1.53%,hsla(0,0%,100%,.1) 2.38%,var(--Surface-Default, #FF8652) 3.26%,hsla(0,0%,100%,.14) 5.68%,hsla(0,0%,96%,0) 6.96%)";
  var blackFlippedShadowLeft =
    "linear-gradient(270deg,rgba(0,0,0,.118) .65%,hsla(0,0%,100%,.2) 1.53%,hsla(0,0%,100%,.1) 2.38%,rgba(0,0,0,.05) 3.26%,hsla(0,0%,100%,.14) 5.68%,hsla(0,0%,96%,0) 6.96%)";
  var blackFlippedShadowRight =
    "linear-gradient(90deg,rgba(0,0,0,.118) .65%,hsla(0,0%,100%,.2) 1.53%,hsla(0,0%,100%,.1) 2.38%,rgba(0,0,0,.05) 3.26%,hsla(0,0%,100%,.14) 5.68%,hsla(0,0%,96%,0) 6.96%)";

  var wordddd = {
    word: "exploring",
    type: "verb",
    meaning:
      "Examining or evaluating an unfamiliar area or subject for the purpose of discovering information or something new",
    usage:
      "John loves exploring the forest behind his house for new kinds of bugs and plants.",
  };
  const EarIcon = () => {
    return (
      <svg
        className="gptResponseDiv"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 512 512"
      >
        <path
          className="gptResponseDiv"
          d="m460.292 450.719-.905-.095c.08.072-.667 2.741-3.163 5.959-3.671 4.902-10.694 10.964-19.68 15.398-9.002 4.489-19.879 7.484-31.63 7.476-13.706-.04-28.698-3.893-44.707-14.968-15.334-10.702-23.28-19.276-28.578-27.904-3.973-6.523-6.65-13.499-9.209-22.5-3.838-13.436-7.134-31.161-14.293-54.321-7.174-23.184-18.274-51.707-37.835-87.666-15.604-28.562-29-71.164-28.912-111.494 0-16.915 2.288-33.409 7.389-48.481 5.116-15.095 12.959-28.777 24.368-40.631 26.982-27.872 58.095-38.867 87.683-38.947 21.412-.016 41.958 5.982 58.618 16.041 16.701 10.05 29.334 24.026 35.786 39.574l30.032-12.521c-9.582-22.962-27.236-41.792-49.022-54.933C414.409 7.572 388.261.016 360.819 0c-37.843-.08-78.292 14.762-111.105 48.91-15.024 15.556-25.337 33.719-31.773 52.788-6.451 19.084-9.096 39.082-9.104 58.905.095 47.329 14.849 93.721 32.868 127.035 16.518 30.406 26.37 54.52 32.996 74.462 4.965 14.969 8.128 27.602 10.9 39.082 4.188 17.114 7.397 32.194 15.414 47.377 3.996 7.532 9.185 14.841 15.85 21.873 6.674 7.039 14.778 13.824 24.757 20.768 21.094 14.723 43.19 20.848 63.291 20.8 23.819-.032 44.572-8.183 59.842-19.124 7.659-5.514 14.016-11.734 18.799-18.568 4.72-6.857 8.263-14.388 8.374-23.589h-31.636z"
        ></path>
        <path
          className="gptResponseDiv"
          d="M392.036 257.033c-11.394 2.121-21.778 8.613-28.928 18.345-7.206 9.726-11.187 22.477-11.17 37.001 0 7.778 1.119 16.097 3.463 24.876 4.044 15.136 10.988 27.49 20.236 36.309 9.192 8.811 20.944 13.952 33.139 13.92 12.696.032 25.25-5.529 35.403-15.477 6.722-6.547 10.853-14.889 13.3-23.787 2.462-8.931 3.337-18.608 3.353-28.889-.016-17.154-2.526-36.094-5.8-55.695-3.29-19.585-7.381-39.805-10.734-59.08-3.679-20.856-9.486-43.134-21.222-61.455-5.88-9.129-13.396-17.313-23.009-23.2-9.582-5.895-21.198-9.272-34.117-9.24-.985 0-1.97.015-2.956.055-15.755.5-29.159 6.372-38.232 15.938-9.121 9.526-13.824 21.841-15.588 34.521-.93 6.682 3.726 12.847 10.408 13.769 6.674.93 12.839-3.726 13.761-10.4v-.008c1.256-9.041 4.418-16.208 9.026-20.975 4.648-4.728 10.837-7.961 21.547-8.454l2.034-.039c8.851.032 15.533 2.113 21.373 5.657 8.692 5.276 15.771 14.595 21.245 26.79 5.474 12.125 9.184 26.776 11.687 41.22 3.146 18.067 6.769 36.42 9.813 54.011a56.662 56.662 0 0 0-26.894-6.769 59.264 59.264 0 0 0-11.138 1.056zm44.079 56.076c.024.191.088.366.12.557.064 1.882.19 3.869.19 5.665.016 8.819-.818 16.478-2.462 22.405-1.653 5.975-3.996 10.043-6.802 12.776-6.531 6.285-12.744 8.541-18.385 8.564-5.426-.023-10.901-2.097-16.311-7.19-5.355-5.085-10.392-13.316-13.483-24.924-1.852-6.944-2.638-13.157-2.638-18.584.015-10.17 2.701-17.504 6.379-22.492 3.726-4.974 8.43-7.818 13.857-8.875a35.343 35.343 0 0 1 6.594-.627c8.096.015 15.596 2.812 21.436 8.096 5.816 5.315 10.242 13.165 11.505 24.629zM148.621 156.83c-3.385-5.825-10.853-7.802-16.677-4.402-5.832 3.392-7.794 10.853-4.41 16.685 2.686 4.616 5.212 9.296 7.468 14.071 25.202 53.216 22.08 112.631-3.234 161.27-3.106 5.99-.786 13.348 5.188 16.462 5.991 3.107 13.348.795 16.463-5.188 28.682-55.076 32.233-122.601 3.638-183-2.62-5.538-5.481-10.822-8.436-15.898zM96.096 183.358c-3.393-5.824-10.862-7.802-16.693-4.418-5.824 3.401-7.794 10.87-4.418 16.693 1.915 3.281 3.687 6.547 5.252 9.86 17.67 37.326 15.469 78.935-2.272 113.051-3.114 5.975-.786 13.348 5.188 16.462 5.975 3.115 13.348.787 16.463-5.187 21.118-40.537 23.74-90.273 2.686-134.766-1.948-4.108-4.053-7.985-6.206-11.695zM46.844 215.901c-1.32-2.781-2.718-5.236-4.005-7.469-3.384-5.832-10.853-7.818-16.685-4.441-5.832 3.384-7.818 10.861-4.433 16.685v.008c1.184 2.042 2.232 3.917 3.058 5.657 10.146 21.444 8.844 45.192-1.342 64.793-3.123 5.982-.795 13.34 5.18 16.454 5.975 3.122 13.34.803 16.446-5.172l.016-.008c11.854-22.724 14.682-50.007 6.134-75.645a99.94 99.94 0 0 0-4.369-10.862z"
        ></path>
      </svg>
    );
    return (
      <svg
        className="gptResponseDiv"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="gptResponseDiv"
          id="SVGRepo_bgCarrier"
          strokeWidth="0"
        ></g>
        <g
          className="gptResponseDiv"
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g className="gptResponseDiv" id="SVGRepo_iconCarrier">
          <path
            className="gptResponseDiv"
            d="M105.488 117.524C113.408 99.7187 120.359 78.852 137.7 68.0142C219.412 16.9436 304.012 96.8239 291.596 183.735C284.41 234.037 231.516 260.946 210.472 303.034C192.435 339.108 121.338 372.909 115.629 321.526"
            stroke="#000000"
            strokeOpacity="0.9"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            className="gptResponseDiv"
            d="M229.563 238.612C271.782 193.835 261.136 88.7032 191.386 91.8739C138.895 94.26 151.137 164.677 163.351 189.103"
            stroke="#000000"
            strokeOpacity="0.9"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            className="gptResponseDiv"
            d="M152.723 155.103C208.642 151.222 227.658 210.091 191.382 246.368C181.932 255.816 163.669 242.087 152.723 247.56C141.774 253.035 133.574 270.289 122.785 257.701"
            stroke="#000000"
            strokeOpacity="0.9"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    );
  };

  const [storyWords, setStoryWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState({});
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const spanRef = useRef(null);
  const [wordMeaningAndUsage, setWordMeaningAndUsage] = useState("");
  const [voices, setVoices] = useState([]);
  const [gptErrorMessage, setGptErrorMessage] = useState("");
  const form = new FormData();
  const getWordMeaning = async (word) => {
    form.append(
      'prompt_text',
      `Please give me menaing, type of the word and a example usage for the word ${word}, for smaller grade students to understand,  in json format with keys word,type,give single usage with key usage,and meaning`
    );
    try {
      const response = await axios.post(BaseUrl + '/app_teachers/gpt_response', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      const res = response.data; // Axios automatically parses JSON
      const content = res?.data?.choices?.[0]?.message?.content;

      if (content) {
        console.log("GPT Response:", content);
        setWordMeaningAndUsage(JSON.parse(content));
        // Optional: parse content if it's a JSON string
        const parsed = JSON.parse(content);
        console.log("Word:", parsed.word);
        console.log("Type:", parsed.type);
        console.log("Usage:", parsed.usage);
        console.log("Meaning:", parsed.meaning);
      } else {
        console.warn("No content in response.");
      }
    } catch (error) {
      console.error("ErrorErrorErrorError", error);
      if (error.response.data.error)
        setGptErrorMessage(
          "Unable to complete you request, Please try after some time"
        );
    }
  };

  console.log(page, "tssdfhkasdfhkasdhfkldashfdalf")
  var wordMeaning = {
    to: {
      word: "to",
      type: "preposition",
      use: "indicating direction or destination",
      meaning: "Shows the direction or destination of movement.",
    },
    shining: {
      word: "shining",
      type: "adjective",
      use: "describing something that emits or reflects light",
      meaning: "Giving off or reflecting a lot of light; radiant.",
    },
    Lucas: {
      word: "Lucas",
      type: "proper noun",
      use: "personal name",
      meaning:
        "Lucas is a common given name of Latin origin, meaning 'light' or 'illumination'. It is derived from the Latin name 'Lucius'.",
    },
  };
  var wordMeaning2 = {
    word: "to",
    type: "preposition",
    use: "indicating direction or destination",
    meaning: "Shows the direction or destination of movement.",
  };
  const handleOutsideClick = (event) => {
    if (!event) return;
    if (!event.target.classList.contains("gptrepsonse")) {
      setShowPopup(false);
      setWordMeaningAndUsage("");
    }
  };
  function getOffsetRelativeToContainer(container, element) {
    let offsetTop = 0;
    let offsetLeft = 0;

    while (element && element !== container) {
      offsetTop += element.offsetTop;
      offsetLeft += element.offsetLeft;
      element = element.offsetParent;
    }
    return { top: offsetTop, left: offsetLeft };
  }
  function resizePopup() {
    const popup = document.querySelector("#gptResponseDiv");
    popup.style.width = `${window.innerWidth * 0.8}px`;
    popup.style.height = `${window.innerHeight * 0.8}px`;
  }

  const RightPage = () => (
    <div
      className="rightPage"
      style={{
        width: "100%",
        height: "90%",
        overflow: "visible",
        // position: "relative",
        display: "flex",
        alignItems: page.description ? "flex-start" : "center",
        justifyContent: "center",
        background: "white",
        // borderLeft: isMobile ? "" : "1px solid var(--Surface-Default, #FF8652)",
        // borderTop: isMobile ? "1px solid var(--Surface-Default, #FF8652)" : "",
        // background:
        //   selectedPage == totalPages
        //     ? ""
        //     : isMobile
        //     ? orangeFlippedShadowTop
        //     : orangeFlippedShadowRight,
      }}
    >
      {/* <img
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "90%",
          height: "-webkit-fill-available",
          padding: isMobile ? "0" : "",
          margin: isMobile ? "20px " : "50px",
        }}
        src={page.iscoverImage ? page.right_cover_image : page.image}
        alt={"storyImage"}
      /> */}
      <div
        style={{
          backgroundColor: page.coverImage || page.image ? "white" : "wheat",
          padding: page.iscoverImage ? "0" : "10px",
          margin: "5% auto",
          width: isMobile ? "90%" : "70%",
          border:
            page.coverImage || page.image
              ? "0"
              : "1px solid var(--Surface-Default, #FF8652)",
          borderRadius: "10px",
          position: "relative",
          display: page.description ? "block" : "flex",
          justifyContent: page.iscoverImage ? "center" : "center",
          alignItems: page.iscoverImage ? "center" : "center",
          height: page.iscoverImage ? "90%" : "",
          fontSize: page.iscoverImage ? "30px" : "20px",
          height: "fit-content",
          overflow: "visible",
          scrollbarWidth: "none",
        }}
      >
        {!isLiveClass && ((page.coverImage || page.image) ? (
          <>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "90%",
              }}
              src={page.coverImage || page.image}
              alt={"storyImage"}
            />
          </>
        ) : (
          <>
            {storyWords.map((word, index) => (
              <span
                ref={spanRef}
                key={`${word} ${index}`}
                style={{
                  cursor: "pointer",
                  width: "fit-content",
                  fontFamily: "Reddit Sans, sans-serif",
                  borderRadius: "6px",
                  position: "relative",
                  backgroundColor:
                    selectedWord == `${word} ${index}`
                      ? "var(--Surface-Default, #FF8652)"
                      : "transparent",
                }}
                onClick={(e) => {
                  setWordMeaningAndUsage("");
                  setSelectedWord(`${word} ${index}`);
                  getWordMeaning(word);
                  const viewportWidth = window.innerWidth;
                  const viewportHeight = window.innerHeight;

                  // Get click position relative to the viewport
                  const clickXX = e.clientX;
                  const clickYY = e.clientY;

                  // Convert to vw and vh
                  const clickXvw = (clickXX / viewportWidth) * 100;
                  const clickYvh = (clickYY / viewportHeight) * 100;

                  console.log(
                    `Click Position: ${clickXvw.toFixed(2) - 5}vw, ${
                      clickYvh.toFixed(2) - 14
                    }vh`
                  );
                  console.log(e.target);
                  console.log(e.clientX);
                  const currEle = e.target;
                  const asdad = currEle.getBoundingClientRect();
                  console.log(asdad.left, ":::::", asdad.top);
                  console.log(e.clientX);
                  console.log(e.clientY);
                  const clickX = e.clientX;
                  const clickY = e.clientY;
                  const parentDiv = e.target.parentElement;
                  const parentRect = parentDiv.getBoundingClientRect();
                  console.log(parentRect.left, " parentRect ", parentRect.top);
                  let element = e.target; // Target element
                  let container = e.target.parentElement;
                  console.log({ element, container });
                  let offset = getOffsetRelativeToContainer(element, container);
                  console.log(offset);
                  console.log(
                    "Distance from container top: " + (offset.top - 40)
                  );
                  console.log(
                    "Distance from container left: " + (offset.left - 40)
                  );

                  const relativeX = clickX - parentRect.left;
                  const relativeY = clickY - parentRect.top;
                  console.log(relativeX, "-----------------", relativeY);
                  var viewwidth = clickXvw.toFixed(2) - 25;
                  var viewheight = clickYvh.toFixed(2) - 14;
                  console.log("window.innerWidth", window.innerWidth);
                  if (spanRef.current) {
                    var adjust = isMobile ? 50 : 115;
                    console.log({ adjust });
                    // top: relativeY + (isMobile ? 50 : 115),
                    // left: relativeX + (isMobile ? 0 : 135),
                    setPopupPosition({
                      top:
                        window.innnerWidth > 600 && window.innnerWidth < 830
                          ? relativeX
                          : relativeX,
                      // offset.top - (isMobile ? 80 : isIpad ? 110 : 80) - 100,
                      // offset.top - 40,
                      left: offset.left - 40,

                      // top: offset.top - 100,
                      // left: offset.left - 60,
                      // top: `${viewheight}vh`,
                      // left: `${viewwidth}vw`,
                    });
                    setShowPopup(true);
                  }
                }}
              >
                {` ${word}  `}
                {selectedWord == `${word} ${index}`
                  ? gptRepsonseWordMeaning()
                  : ""}
              </span>
            ))}
          </>
        ) )}

        {isLiveClass && ((sidePage === "right")  ? (
          (page.image || page.right_cover_image) ? (
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "90%",
                height: "100%", 
              }}
              src={page.image || page.right_cover_image}
              alt="storyImage"
            />
          ) : null
        ) :
        ( page.left_cover_image) ? (
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "90%",
              height: "100%", 
            }}
            src={ page.left_cover_image}
            alt="storyImage"
          />
        ) :
         (
          storyWords.map((word, index) => (
            <span
              ref={spanRef}
              key={`${word} ${index}`}
              style={{
                cursor: "pointer",
                width: "fit-content",
                fontFamily: "Reddit Sans, sans-serif",
                borderRadius: "6px",
                position: "relative",
                backgroundColor:
                  selectedWord === `${word} ${index}`
                    ? "var(--Surface-Default, #FF8652)"
                    : "transparent",
              }}
              onClick={(e) => {
                setWordMeaningAndUsage("");
                setSelectedWord(`${word} ${index}`);
                getWordMeaning(word);

                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const clickXvw = (e.clientX / viewportWidth) * 100;
                const clickYvh = (e.clientY / viewportHeight) * 100;

                const currEle = e.target;
                const parentRect = currEle.parentElement.getBoundingClientRect();
                const offset = getOffsetRelativeToContainer(currEle, currEle.parentElement);
                const relativeX = e.clientX - parentRect.left;
                const relativeY = e.clientY - parentRect.top;

                if (spanRef.current) {
                  const adjust = isMobile ? 50 : 115;

                  setPopupPosition({
                    top: relativeY,
                    left: offset.left - 40,
                  });

                  setShowPopup(true);
                }
              }}
            >
              {` ${word} `}
              {selectedWord === `${word} ${index}` ? gptRepsonseWordMeaning() : ""}
            </span>
          ))
        ))}
      </div>
    </div>
  );
  function speak(speech) {
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(speech);
      console.log({ voices });
      utterance.voice = voices[12];
      utterance.onend = () => resolve();
      utterance.onerror = (event) => console.log("ERROR", event.error);
      speechSynthesis.speak(utterance);
    });
  }
  function stopSpeaking() {
    speechSynthesis.cancel();
  }
  const gptRepsonseWordMeaning = () => {
    return (
      <div
        className="gptResponseDiv"
        id="gptResponseDiv"
        style={{
          display: `${showPopup ? "flex" : "none"}`,
          flexDirection: "column",
          gap: "19px",
          width: isIpad ? "85%" : "300px",
          borderRadius: "10px",
          height: "fit-content",
          // position: "absolute",
          position: "fixed",
          padding: "3px 8px",
          fontSize: "18px",
          border: "1px solid #ff8652",
          zIndex: "2",
          left: isIpad ? "10%" : "0",
          right: "10px",
          // left: `${Number(popupPosition.left)}px`,
          // top: `${Number(popupPosition.top) + 10}px`,
          // left: popupPosition.left,
          // top: popupPosition.top,
          maxHeight: "350px",
          // background: "var(--Surface-Default, #FF8652)",
          background: "var(--Surface-Default, #FF8652)",
        }}
      >
        {showPopup && (
          <>
            <div
              ref={popupRef}
              id={"GPTRESPONSE"}
              style={{
                width: "20px",
                height: "20px",
                transform: "rotateZ(45deg)",
                border: "1px solid white",
                // background: "#ff8652",
                position: "absolute",
                borderWidth: "3px 0 0 3px",
                borderColor: "#ff8652",
                background: "white",
                top: "-7px",
                className: "gptResponseDiv",
                zIndex: "-1",
                // left: "20px",
                left: `${isIpad ? popupPosition.top : popupPosition.top}px`,
              }}
            ></div>

            {wordMeaningAndUsage ? (
              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "7px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  onClick={() => {
                    setShowPopup(false);
                    setWordMeaningAndUsage("");
                  }}
                  style={{
                    width: "25px",
                    color: "black",
                    cursor: "pointer",
                    height: "25px",
                    textAlign: "center",
                    left: "89%",
                    position: "absolute",
                    top: "4%",
                  }}
                >
                  X
                </div>
                <div
                  className="gptResponseDiv"
                  style={{ display: "flex", alignItems: "center", gap: "5%" }}
                >
                  <div
                    className="gptResponseDiv"
                    style={{ width: "fit-content" }}
                  >
                    {wordMeaningAndUsage.word && (
                      <p
                        className="gptResponseDiv"
                        style={{
                          fontSize: "25px",
                          margin: "0",
                          fontWeight: "675",
                        }}
                      >
                        {`${wordMeaningAndUsage.word
                          .split("")
                          .map((alphabet, index) =>
                            index === 0 ? alphabet.toUpperCase() : alphabet
                          )
                          .join("")}`}
                      </p>
                    )}
                    <p
                      className="gptResponseDiv"
                      style={{ fontSize: "13px", margin: "0 " }}
                    >{`(${wordMeaningAndUsage.type})`}</p>
                  </div>
                  <div
                    className="gptResponseDiv"
                    onClick={async () => {
                      setIsSpeaking(true);
                      try {
                        await speak(wordMeaningAndUsage.word);
                        console.log("Speech completed successfully.");
                      } catch (error) {
                        console.error("Error during speaking:", error);
                      } finally {
                        setIsSpeaking(false);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="gptResponseDiv" style={{ width: "20px" }}>
                      <EarIcon />
                      {/* Listen */}
                    </div>
                  </div>
                </div>
                <div
                  className="gptResponseDiv"
                  style={{ display: "flex", alignItems: "center", gap: "5%" }}
                >
                  <p
                    className="gptResponseDiv"
                    style={{ fontSize: "14px", width: "85%" }}
                  >{`Meaning : ${wordMeaningAndUsage.meaning}`}</p>
                  <div
                    className="gptResponseDiv"
                    onClick={async () => {
                      setIsSpeaking(true);
                      try {
                        await speak(wordMeaningAndUsage.meaning);
                      } catch (error) {
                        console.error("Error during speaking:", error);
                      } finally {
                        setIsSpeaking(false);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    <div className="gptResponseDiv" style={{ width: "20px" }}>
                      <EarIcon />
                      {/* Listen */}
                    </div>
                  </div>
                </div>
                <p
                  className="gptResponseDiv"
                  style={{ fontSize: "14px", margin: "0" }}
                >{`Usage : ${wordMeaningAndUsage.usage}`}</p>
              </div>
            ) : gptErrorMessage ? (
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  background: "white",
                  borderRadius: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p>{gptErrorMessage}</p>
              </div>
            ) : (
              <>
                {/* <p>Loading</p> */}
                <div
                  style={{
                    height: "250px",
                    display: "flex",
                    background: "white",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className="loader"></span>
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  };
  window.addEventListener("beforeunload", stopSpeaking);
  useEffect(() => {
    stopSpeaking();
  }, [showPopup]);
  useEffect(() => {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) setVoices(voices);
    function handleClickOutside(event) {
      if (
        !event.target.classList.contains("gptResponseDiv") &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setShowPopup(false);
        setSelectedWord("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      stopSpeaking();
    };
  }, []);
  const popupRef = useRef(null);
  useEffect(() => {
    if (page.description) {
      setStoryWords(page.description.split(" "));
      stopSpeaking();
    } else {
      setStoryWords([]);
      stopSpeaking();
    }
  }, [page.pageNo, page.description]);

  return (
    <div
      style={{
        // width: !isMobile && isIpad ? "85%" : isMobile ? "98%" : "100%",
        width: isMobile ? "98%" : isIpad ? "90%" : "100%",
        height: "95%",
        margin: "auto",
        backfaceVisibility: "none",
      }}
    >
      <div
        className={"book"}
        style={{
          padding: " 0 10px ",
          margin: "1rem auto",
          width: "95%",
          gap: "1px",
          borderRadius: "20px",
          border: "1px solid var(--Surface-Default, #FF8652)",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          // flexDirection: isMobile ? "column" : "row",
        }}
      >
        <RightPage />
        {/* {page.coverImage || page.description ? <RightPage /> : "checking"} */}
        {/* <LeftPage />
        <RightPage /> */}
      </div>
      <div
        className="gptResponseDiv"
        style={{
          display: `${showPopup ? "none" : "none"}`,
          flexDirection: "column",
          gap: "19px",
          width: "300px",
          borderRadius: "10px",
          height: "fit-content",
          position: "absolute",
          padding: "3px 8px",
          fontSize: "18px",
          border: "1px solid #ff8652",
          zIndex: "2",
          left: `${Number(popupPosition.left)}px`,
          top: `${Number(popupPosition.top) + 10}px`,
          // left: popupPosition.left,
          // top: popupPosition.top,
          maxHeight: "350px",
          // background: "var(--Surface-Default, #FF8652)",
          background: "var(--Surface-Default, #FF8652)",
        }}
      >
        {showPopup && (
          <>
            <div
              ref={popupRef}
              id={"GPTRESPONSE"}
              style={{
                width: "20px",
                height: "20px",
                transform: "rotateZ(45deg)",
                border: "1px solid white",
                // background: "#ff8652",
                position: "absolute",
                borderWidth: "3px 0 0 3px",
                borderColor: "#ff8652",
                background: "white",
                top: "-7px",
                className: "gptResponseDiv",
                zIndex: "-1",
                left: "25px",
              }}
            ></div>

            {wordMeaningAndUsage ? (
              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "7px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  onClick={() => {
                    setShowPopup(false);
                    setWordMeaningAndUsage("");
                  }}
                  style={{
                    width: "25px",
                    color: "black",
                    cursor: "pointer",
                    height: "25px",
                    textAlign: "center",
                    left: "89%",
                    position: "absolute",
                    top: "4%",
                  }}
                >
                  X
                </div>
                <div
                  className="gptResponseDiv"
                  style={{ display: "flex", alignItems: "center", gap: "5%" }}
                >
                  <div
                    className="gptResponseDiv"
                    style={{ width: "fit-content" }}
                  >
                    {wordMeaningAndUsage.word && (
                      <p
                        className="gptResponseDiv"
                        style={{
                          fontSize: "25px",
                          margin: "0",
                          fontWeight: "675",
                        }}
                      >
                        {`${wordMeaningAndUsage.word
                          .split("")
                          .map((alphabet, index) =>
                            index === 0 ? alphabet.toUpperCase() : alphabet
                          )
                          .join("")}`}
                      </p>
                    )}
                    <p
                      className="gptResponseDiv"
                      style={{ fontSize: "13px", margin: "0 " }}
                    >{`(${wordMeaningAndUsage.type})`}</p>
                  </div>
                  <div
                    className="gptResponseDiv"
                    onClick={async () => {
                      setIsSpeaking(true);
                      try {
                        await speak(wordMeaningAndUsage.word);
                        console.log("Speech completed successfully.");
                      } catch (error) {
                        console.error("Error during speaking:", error);
                      } finally {
                        setIsSpeaking(false);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="gptResponseDiv" style={{ width: "20px" }}>
                      <EarIcon />
                      {/* Listen */}
                    </div>
                  </div>
                </div>
                <div
                  className="gptResponseDiv"
                  style={{ display: "flex", alignItems: "center", gap: "5%" }}
                >
                  <p
                    className="gptResponseDiv"
                    style={{ fontSize: "14px", width: "85%" }}
                  >{`Meaning : ${wordMeaningAndUsage.meaning}`}</p>
                  <div
                    className="gptResponseDiv"
                    onClick={async () => {
                      setIsSpeaking(true);
                      try {
                        await speak(wordMeaningAndUsage.meaning);
                      } catch (error) {
                        console.error("Error during speaking:", error);
                      } finally {
                        setIsSpeaking(false);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    <div className="gptResponseDiv" style={{ width: "20px" }}>
                      <EarIcon />
                      {/* Listen */}
                    </div>
                  </div>
                </div>
                <p
                  className="gptResponseDiv"
                  style={{ fontSize: "14px", margin: "0" }}
                >{`Usage : ${wordMeaningAndUsage.usage}`}</p>
              </div>
            ) : (
              <>
                {/* <p>Loading</p> */}
                <div
                  style={{
                    height: "250px",
                    display: "flex",
                    background: "white",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className="loader"></span>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
