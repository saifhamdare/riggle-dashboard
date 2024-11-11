import React, { useEffect, useState } from "react";
import fetchData from "../api/apiStore";

function Teams() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTeamData = async () => {
    setLoading(true);
    try {
      const response = await fetchData("503c16d9-da3c-406b-b162-1414e969e83c");
      console.log(response.team_snapshot);
      setTeamData(response.team_snapshot);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(teamData.length ? teamData.map((item) => item) : []);
  useEffect(() => {
    if (teamData.length === 0) {
      fetchTeamData();
    }
  }, []);
  return (
    <div className="bg-white border-2 border-[#39CEF3] py-4 my-5">
      <div className="flex justify-between flex-wrap">
        <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
          Team Snapshot
        </div>
     </div>
      <div className="tab-container flex justify-evenly flex-wrap">
        <div className="max-w-xs w-full">
          <div className="tab p-1 m-2 border-[#39CEF3] border-2 h-96 overflow-y-scroll overflow-hidden scrollbar-custom">
            <h3 className="bg-[#39CEF3] text-white text-base text-center py-2 rounded-md">
              TEAM PERFORMANCE
            </h3>
            {teamData.achievement_leaderboard &&
              teamData.achievement_leaderboard.map((item, idx) => (
                <div
                  key={item.id}
                  className="team-member-tab  border-b-2 border-slate-200 p-2  grid grid-cols-12 items-center"
                >
                  <h4 className="col-span-1">{idx + 1}</h4>
                  <div className="col-span-2 avatar-container    rounded-full">
                    <picture>
                      <source srcSet={item.image} />
                      <img
                        className="w-full rounded-full h-12 border-2 border-slate-500"
                        loading="lazy"
                        src={"https://i.ibb.co/2yYLBBN/avatar.png"}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="col-span-7">
                    <div className="employee-info  font-medium text-sm ">
                      <h2 className="text-sm">
                        {item.first_name + " " + item.last_name}{" "}
                      </h2>
                      <h4 className=" text-sm ">({item.designation_name})</h4>
                    </div>
                    <div className="sales-info sm:flex text-[8px]  justify-evenly">
                      <h2 className=" text-[10px] ">
                        Target: {item.new_actiation_target}
                      </h2>
                      <h4 className=" text-[10px] ">
                        Achieved :{item.achievement}
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div
                      style={{ boxShadow: "0px 4px 4px 0px #FFFFFF80 inset" }}
                      className="bg-[#907EFF] border-2 w-7 h-7 border-[#907EFF] text-white text-[7px] px-1 py-2 rounded-full text-center"
                    >
                      {item.achievement} %
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-end ">
            <p className="border-b-2 text-[#39CEF3] border-[#39CEF3] mr-4">
              View All
            </p>
          </div>
        </div>
        <div className="max-w-xs w-full">
          <div className="tab p-1 m-2 border-[#39CEF3] border-2 h-96 overflow-y-scroll overflow-hidden scrollbar-custom">
            <h3 className="bg-[#39CEF3] text-white text-base text-center py-2 rounded-md">
              NEW ACTIVATION
            </h3>
            {teamData.new_activation_leaderboard &&
              teamData.achievement_leaderboard.map((item, idx) => (
                <div
                  key={item.id}
                  className="team-member-tab  border-b-2 border-slate-200 p-2  grid grid-cols-12 items-center"
                >
                  <h4 className="col-span-1">{idx + 1}</h4>
                  <div className="col-span-2 avatar-container   rounded-full">
                    <picture>
                      <source srcSet={item.image} />
                      <img
                        className="w-full rounded-full h-12 border-2 border-slate-500"
                        loading="lazy"
                        src={"https://i.ibb.co/2yYLBBN/avatar.png"}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="col-span-7">
                    <div className="employee-info  font-medium text-sm ">
                      <h2 className="text-sm">
                        {item.first_name + " " + item.last_name}{" "}
                      </h2>
                      <h4 className=" text-sm ">({item.designation_name})</h4>
                    </div>
                    <div className="sales-info sm:flex text-[8px]  justify-evenly">
                      <h2 className=" text-[10px] ">
                        Target: {item.new_actiation_target}
                      </h2>
                      <h4 className=" text-[10px] ">
                        Achieved :{item.achievement}
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div
                      style={{ boxShadow: "0px 4px 4px 0px #FFFFFF80 inset" }}
                      className="bg-[#907EFF] border-2 w-7 h-7 border-[#907EFF] text-white text-[7px] px-1 py-2 rounded-full text-center"
                    >
                      {item.achievement} %
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-end ">
            <p className="border-b-2 text-[#39CEF3] border-[#39CEF3] mr-4 ">
              View All
            </p>
          </div>
        </div>
        <div className="max-w-xs w-full">
          <div className="tab p-1 m-2 border-[#39CEF3] border-2 h-96 overflow-y-scroll overflow-hidden scrollbar-custom">
            <h3 className="bg-[#39CEF3] text-white text-base text-center py-2 rounded-md">
              SKU PERFORMANCE (SET)
            </h3>
            {teamData.sku_achievement_leaderboard &&
              teamData.achievement_leaderboard.map((item, idx) => (
                <div
                  key={item.id}
                  className="team-member-tab border-b-2 border-slate-200 p-2  grid grid-cols-12 items-center"
                >
                  <h4 className="col-span-1">{idx + 1}</h4>
                  <div className="col-span-2 avatar-container    rounded-full">
                    <picture>
                      <source srcSet={item.image} />
                      <img
                        className="w-full rounded-full h-12 border-2 border-slate-500"
                        loading="lazy"
                        src={"https://i.ibb.co/2yYLBBN/avatar.png"}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="col-span-7">
                    <div className="employee-info  font-medium text-sm ">
                      <h2 className="text-sm">
                        {item.first_name + " " + item.last_name}{" "}
                      </h2>
                      <h4 className=" text-sm ">({item.designation_name})</h4>
                    </div>
                    <div className="sales-info sm:flex text-[8px]  justify-evenly">
                      <h2 className=" text-[10px] ">
                        Target: {item.new_actiation_target}
                      </h2>
                      <h4 className=" text-[10px] ">
                        Achieved :{item.sku_achievement}
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div
                      style={{ boxShadow: "0px 4px 4px 0px #FFFFFF80 inset" }}
                      className="bg-[#907EFF] border-2 w-7 h-7 border-[#907EFF] text-white text-[7px] px-1 py-2 rounded-full text-center"
                    >
                      {item.achievement} %
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-end ">
            <p className="border-b-2 text-[#39CEF3] border-[#39CEF3] mr-4">
              View All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
