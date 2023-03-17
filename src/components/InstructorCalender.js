import axios from "axios";
import { useEffect, useState } from "react";
import UseAxios from "../hooks/Useaxios";

const InstructorCalender = ({ userToken }) => {
  const [roster, setRoster] = useState();
  const [NoData, setNoData] = useState();
  const { data } = UseAxios({
    url: `http://localhost:4000/api/v1/activities`,
  });

  useEffect(() => {
    (async function () {
      const activities = data ? data.map((item) => item.instructorId) : "";

      const userId =
        activities &&
        activities.filter((activity) => activity === userToken.userId);
      if (userId.length <= 0) {
        setNoData(true);
      }
      const res = await axios.get(
        `http://localhost:4000/api/v1/users/${userToken.userId}/roster/${userId}`,
        { headers: { Authorization: "Bearer " + userToken.token } }
      );
      setRoster(res.data);
    })();
  }, [data, userToken.userId, userToken.token]);
  const header = roster ? roster[0].activity : null;
  return (
    <div className="bg-purple text-grey flex mb-12 flex-col items-center justify-center">
      <h1 className="text-grey text-big self-start pl-5 py-5">
        {header ? header : "Du er ikke instrutør for nogle"}
      </h1>
      {roster &&
        roster.map((item) => (
          <div className="text-medium self-start ml-5 gap-0">
            <p>
              {item.firstname} {item.lastname}
            </p>
            {console.log(item)}
          </div>
        ))}
      {NoData && ""}
    </div>
  );
};

export default InstructorCalender;
