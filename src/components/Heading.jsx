import { FaPlaneDeparture } from "react-icons/fa";
export const Heading = () => {
  return (
    <>
      <div className="heading">
        <div className="flex">
          <FaPlaneDeparture color="#ada1e0" size={45} />
          <div>
            <h1 className="">travel planner</h1>
            <p className="light-text">
              Plan you next travel adventure with matargashti!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
