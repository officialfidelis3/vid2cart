import React, { useState } from 'react';
import axios from 'axios';

function Upload({ setVideoURL }) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', video);
    setLoading(true);
    const res = await axios.post('http://localhost:5000/upload', formData);
    setLoading(false);
    setVideoURL(`http://localhost:5000${res.data.video_url}`);
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2">{loading ? 'Processing...' : 'Upload & Cartoonize'}</button>
    </div>
  );
}

export default Upload;
