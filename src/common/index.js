const backendDomain = "http://localhost:3002";

const SummaryApi = {
  signup: {
    url: `${backendDomain}/api/signup`,
    method: "POST",
  },
  login: {
    url: `${backendDomain}/api/signin`,
    method: "POST",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "GET",
  },
};

export default SummaryApi;
