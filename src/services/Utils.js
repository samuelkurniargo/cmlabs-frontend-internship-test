const Utils = {
  parseRequestURL: () => {
    let url = window.location.hash.slice(1).toLowerCase() || "/";

    let params = url.split("/");
    let request = {
      resource: null,
      id: null,
      verb: null,
    };
    request.resource = params[1];
    request.id = params[2];
    request.verb = params[3];
    return request;
  },
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};

export default Utils;
