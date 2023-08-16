
const processApi = (apiFunc) => {
  return async (...args) => {
    const result = {
      data: null,
      error: null,
      loading: true,
    };

    try {
      const response = await apiFunc(...args);
      result.data = response;
    } catch (err) {
      result.error = err?.message || "Some Error Occured!";
    } finally {
      result.loading = false;
    }

    return result;
  };
};

export const Commons ={
  processApi
}
