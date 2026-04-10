// reusable API handler
const apiHandler = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);

    // check response
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data = await res.json();
    return { success: true, data };

  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};