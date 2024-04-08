import client from './index';

class BaseApi {
  handleError(error) {
    const statusCode = error.response?.data?.status?.code;
    if (statusCode >= 400 && statusCode < 500) {
      return new Error(error.response.data.errors[0]?.message);
    }

    return error;
  }

  requestGet(path, config?) {
    return client.get(path, config)
      .then(response => response)
      .catch(err => {
        throw this.handleError(err);
      });
  }

  requestPost(path, data) {
    return client.post(path, data)
      .then(response => response)
      .catch(err => {
        throw this.handleError(err);
      });
  }

  requestPatch(path, patch) {
    return client.patch(path, patch)
      .then(response => response)
      .catch(err => {
        throw this.handleError(err);
      });
  }

  requestPut(path, data) {
    return client.put(path, data)
      .then(response => response)
      .catch(err => {
        throw this.handleError(err);
      });
  }

  requestDelete(path) {
    return client.delete(path)
      .then(response => response)
      .catch(err => {
        throw this.handleError(err);
      });
  }
}

export default BaseApi;
