import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { getVideoStreams, analyzeVideo } from '../services/api'

function VideoAnalysis() {
  const [videoStreams, setVideoStreams] = useState([])
  const [selectedStream, setSelectedStream] = useState('')
  const [analysisResult, setAnalysisResult] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchVideoStreams()
  }, [])

  const fetchVideoStreams = async () => {
    try {
      const response = await getVideoStreams()
      setVideoStreams(response.data)
    } catch (err) {
      setError('Failed to fetch video streams')
    }
  }

  const handleStreamSelect = (e) => {
    setSelectedStream(e.target.value)
  }

  const handleAnalyze = async () => {
    if (!selectedStream) {
      setError('Please select a video stream')
      return
    }
    try {
      const result = await analyzeVideo(selectedStream)
      setAnalysisResult(result.data)
    } catch (err) {
      setError('Failed to analyze video')
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Video Analysis</h1>
        {error && <p className="error">{error}</p>}
        <select value={selectedStream} onChange={handleStreamSelect}>
          <option value="">Select a video stream</option>
          {videoStreams.map((stream) => (
            <option key={stream.id} value={stream.id}>
              {stream.name}
            </option>
          ))}
        </select>
        <button onClick={handleAnalyze}>Analyze</button>
        {analysisResult && (
          <div>
            <h2>Analysis Result</h2>
            <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoAnalysis