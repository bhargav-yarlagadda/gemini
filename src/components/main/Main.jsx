// import { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import "./main1.css";
// import { Context } from "../../context/Context";
// import { Tilt } from 'react-tilt'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// const defaultOptions = {
// 	reverse:        false,  // reverse the tilt direction
// 	max:            35,     // max tilt rotation (degrees)
// 	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
// 	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
// 	speed:          1000,   // Speed of the enter/exit transition
// 	transition:     true,   // Set a transition on enter/exit.
// 	axis:           null,   // What axis should be disabled. Can be X or Y.
// 	reset:          true,    // If the tilt effect has to be reset on exit.
// 	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// }

// const Main = () => {
// 	const {
// 		onSent,
// 		recentPrompt,
// 		showResults,
// 		loading,
// 		resultData,
// 		setInput,
// 		input,
// 	} = useContext(Context);

//     const handleCardClick = (promptText) => {
// 			setInput(promptText);
// 		};
// 		const {
// 			transcript,
// 			listening,
// 			resetTranscript,
// 			browserSupportsSpeechRecognition
// 		  } = useSpeechRecognition();
// 		const [voice,setVoice] = useState(false)
// 		const handleVoice =()=>{
// 				setVoice(!voice)
// 				if(voice === true){
// 					SpeechRecognition.startListening()
// 				}else{
// 					SpeechRecognition.stopListening	()
// 				}
// 		}
		  
// 	return (
// 		<div className="main">
// 			<div className="nav">
// 				<p style={{padding:"10px"}} >Gemini</p>
// 				<img src={assets.user} alt="" />
// 			</div>
// 			<div className="main-container">
// 				{!showResults ? (
// 					<>
// 						<div className="greet">
// 							<p>
// 								<span>Hello ,Bhargav </span>
// 							</p>
// 							<p>How Can i Help You Today?</p>
// 						</div>
// 						<div className="cards">
//                         <Tilt options={defaultOptions} ><div
// 								className="card"
// 								onClick={() =>
// 									handleCardClick("Suggest Some Place To Visit In Kerala")
// 								}
// 							>
// 								<p>Suggest Some Place To Visit In Kerala </p>
// 								<img src={assets.compass_icon} alt="" />
// 							</div></Tilt>
							
//                            <Tilt options={defaultOptions} >
// 							<div
// 								className="card"
// 								onClick={() =>
// 									handleCardClick(
// 										"Brainstorm team bonding activities for our work retreat"
// 									)
// 								}
// 							>
// 								<p>Brainstorm team bonding activities for our work retreat </p>
// 								<img src={assets.message_icon} alt="" />
// 							</div>
//                             </Tilt>
//                             <Tilt options={defaultOptions} >
// 							<div
// 								className="card"
// 								onClick={() =>
// 									handleCardClick("How to Create a Gyroscope using Disc?")
// 								}
// 							>
// 								<p>How to Create a Gyroscope using Disc?</p>
// 								<img src={assets.bulb_icon} alt="" />
// 							</div>
//                             </Tilt>
//                             <Tilt>
// 							<div
// 								className="card"
// 								onClick={() => {
// 									handleCardClick(
// 										"Create a Script for the youtube video about coding "
// 									);
// 								}}
// 							>
// 								<p>Create a Script for the youtube video about coding </p>
// 								<img src={assets.code_icon} alt="" />
// 							</div>
//                             </Tilt>
// 						</div>
// 					</>
// 				) : (
// 					<div className="result">
// 						<div className="result-title">
// 							<img src={assets.user} alt="" />
// 							<p>{recentPrompt}</p>
// 						</div>
// 						<div className="result-data">
// 							<img src={assets.gemini_icon} alt="" />
// 							{loading ? (
// 								<div className="loader">
// 									<hr />
// 									<hr />
// 									<hr />
// 								</div>
// 							) : (
// 								<div className="response-container">
// 									<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
// 								</div>
// 							)}
// 						</div>
// 					</div>
// 				)}

// 				<div className="main-bottom">
// 					<div className="search-box">
// 						<input
// 							onChange={(e) => {
// 								setInput(e.target.value);
// 							}}
// 							value={input}
// 							type="text"
// 							placeholder="Enter the Prompt Here"
// 						/>
// 						<div>
// 							<img  onClick={handleVoice} src={assets.mic_icon} alt="" />
// 							<img
// 								src={assets.send_icon}
// 								alt=""
// 								onClick={() => {
// 									onSent();
// 								}}
// 							/>
// 						</div>
// 					</div>
// 					{/* <div className="bottom-info">
// 						<p>
// 							Gemini may display inaccurate info, including about people, so
// 							double-check its responses. Your privacy & Gemini Apps
// 						</p>
// 					</div> */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Main;
import { useContext, useEffect,useState } from "react";
import { assets } from "../../assets/assets";
import "./main1.css";
import { Context } from "../../context/Context";
import { Tilt } from 'react-tilt'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const [voice, setVoice] = useState(false)
    const handleVoice = () => {
        setVoice(!voice)
        if (voice === true) {
            SpeechRecognition.startListening()
        } else {
            SpeechRecognition.stopListening()
        }
    }
	console.log(listening,resetTranscript,browserSupportsSpeechRecognition)
    // Update input with the transcript when it changes
    useEffect(() => {
        if (transcript !== '') {
            setInput(transcript);
        }
    }, [transcript]);

    return (
        <div className="main">
            <div className="nav">
                <p style={{ padding: "10px" }} >Gemini</p>
                <img src={assets.user} alt="" />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello ,Bhargav </span>
                            </p>
                            <p>How Can i Help You Today?</p>
                        </div>
                        <div className="cards">
                            <Tilt options={defaultOptions}><div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Suggest Some Place To Visit In Kerala")
                                }
                            >
                                <p>Suggest Some Place To Visit In Kerala </p>
                                <img src={assets.compass_icon} alt="" />
                            </div></Tilt>

                            <Tilt options={defaultOptions} >
                                <div
                                    className="card"
                                    onClick={() =>
                                        handleCardClick(
                                            "Brainstorm team bonding activities for our work retreat"
                                        )
                                    }
                                >
                                    <p>Brainstorm team bonding activities for our work retreat </p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                            </Tilt>
                            <Tilt options={defaultOptions} >
                                <div
                                    className="card"
                                    onClick={() =>
                                        handleCardClick("How to Create a Gyroscope using Disc?")
                                    }
                                >
                                    <p>How to Create a Gyroscope using Disc?</p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                            </Tilt>
                            <Tilt>
                                <div
                                    className="card"
                                    onClick={() => {
                                        handleCardClick(
                                            "Create a Script for the youtube video about coding "
                                        );
                                    }}
                                >
                                    <p>Create a Script for the youtube video about coding </p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </Tilt>
                        </div>
                    </>
                ) : (
                        <div className="result">
                            <div className="result-title">
                                <img src={assets.user} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ? (
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                        <div className="response-container">
                                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                        </div>
                                    )}
                            </div>
                        </div>
                    )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                        />
                        <div>
                            <img onClick={handleVoice} src={assets.mic_icon} alt="" />
                            <img
                                src={assets.send_icon}
                                alt=""
                                onClick={() => {
                                    onSent();
                                }}
                            />
                        </div>
                    </div>
                    {/* <div className="bottom-info">
                        <p>
                            Gemini may display inaccurate info, including about people, so
                            double-check its responses. Your privacy & Gemini Apps
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Main;
