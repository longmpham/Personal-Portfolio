import React from 'react'

const ProgressBar = ({bgcolor, progress, height}) => {

  // parent div
  const ParentDiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    // margin: 50,
  }

  const ChildDiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius:40,
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  }

  const ProgressText = {
    padding: 10,
    color: "black",
    fontWeight: 700,
    fontSize: `${height}px`
  }

  return (
    <div style={ParentDiv}>
      <div style={ChildDiv}>
        <span style={ProgressText}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar