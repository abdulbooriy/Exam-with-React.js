import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineBgColors } from "react-icons/ai";
import { TbCategoryPlus } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";

import "./style.css";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[300px] h-screen bg-[#427DC0]  flex-shrink-0">
        <ul className="text-white flex flex-col gap-5 px-[20px] font-semibold text-[18px] pt-[30px]">
          <li className="text-[28px] mb-5">LOGOO</li>
          <li>
            <NavLink
              className="dashboard__link flex items-center gap-4"
              to={"create-products"}>
              <TbCategoryPlus className="text-2xl" />
              Create Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="dashboard__link flex items-center gap-4"
              to={"products"}>
              <CiEdit className="text-2xl" />
              Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="dashboard__link flex gap-4 items-center"
              to={"colors"}>
              <AiOutlineBgColors className="text-2xl" />
              Colors
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
