import React from 'react';

function Result({ videoURL }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Cartoonized Video</h2>
      <video controls src={videoURL} className="w-full" />
      <a href={videoURL} download className="bg-green-500 text-white px-4 py-2 inline-block">Download</a>
    </div>
  );
}

export default Result;
