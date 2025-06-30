import React, { useEffect } from 'react'
import { useGetUsersQuery } from '../../../redux/services/Userservice';
import DynamicPage from '../../../components/Admin/DynamicPage';
function Users() {
  let {data, isLoading, isError} = useGetUsersQuery({ page: 0, size: 10 });
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;
console.log(data);

  // console.log("aslan",data.data.users);
  
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'Username',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];
  return (
  <DynamicPage columns={columns} data={data.data.users} />
  )
}

export default Users