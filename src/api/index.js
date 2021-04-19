import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(BASE_URL);

    console.log({ confirmed, recovered, deaths, lastUpdate });

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.error(err);
  }
};
