import React from 'react'

const ProgressBar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '70%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: "20px 50px 30px"
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		// textAlign: 'right',
        textAlign: 'center',
	}
	
	const progresstext = {
        display: "inline-block",
        padding: "2px 0",
		color: 'whitesmoke',
		fontWeight: 900,
        
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default ProgressBar;


