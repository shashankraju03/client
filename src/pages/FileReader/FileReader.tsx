import axios from "axios";
import { useEffect, useState } from "react";

export const FileReader = () => {
  // State to hold the data, loading, and error state
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component is mounted
  useEffect(() => {
    // Replace this URL with your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_HOST + "/file-reader",
          {
            params: {
              lines: 4,
              bufferSizeInBytes: 10,
            },
          }
        ); // Replace with your API URL
        setData(response.data); // Store the API response in state
      } catch (err: any) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after the request
      }
    };

    fetchData(); // Trigger the API call
  }, []); // Empty dependency array means the effect runs once after the initial render

  // Render loading, error, or data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formattedData = data.replace(/\n/g, "<br />");

  return (
    <div>
      <h1>
        <b>API Data</b>
      </h1>
      {/* Use dangerouslySetInnerHTML to render raw HTML content */}
      <div dangerouslySetInnerHTML={{ __html: formattedData }} />
    </div>
  );
};
