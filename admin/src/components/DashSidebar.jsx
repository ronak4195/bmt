import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function DashSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie} onClick={() => navigate('/')}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/create-movies')}>
            Create Movies
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/create-reservation')}>
            Create Reservation
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/create-showtimes')}>
            Create Showtimes
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/create-theatre')}>
            Create Theatre
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/create-user')}>
            Create User
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/dashboard/users')}>
            Dashboard Users
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/dashboard/movies')}>
            Dashboard Movies
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/dashboard/theatre')}>
            Dashboard Theatre
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/dashboard/reservation')}>
            Reservation
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag} onClick={() => navigate('/dashboard/showtimes')}>
            ShowTimes
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight} onClick={() => navigate('/sign-in')}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item icon={HiTable} onClick={() => navigate('/sign-up')}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
