import React from 'react';
import Upload from './Upload';
import Result from './Result';

function App() {
  const [videoURL, setVideoURL] = React.useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cartoon Video Converter</h1>
      {!videoURL ? <Upload setVideoURL={setVideoURL} /> : <Result videoURL={videoURL} />}
    </div>
  );
}

export default App;
