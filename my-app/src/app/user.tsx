"use client";
import React from 'react';
import {Table} from 'antd';

interface User{
  name:String;
  surname:String;
}

interface UserTableProps{
  users: User[];
}

const UserTable: React.FC<UserTableProps>=({users})=>{
  const columns=[
    {
    title:"Name",
    dataIndex:"name",
    key:"name",
    render:(text:String)=> <span className='text-blue-600'>{text}</span>,
    },

    {
      title:"Surname",
      dataIndex:"surname",
      key:"surname",
      render:(text:String)=><span className='text-blue-600'>{text}</span>
    },
  ];

  return(
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4 text-center'>User table</h1>
      <Table
      columns={columns}
      dataSource={users}
      rowKey={(record)=>`${record.name || ""}${record.surname || ""}`}
      pagination={false}
      className='shadow-lg border rounded-lg'></Table>
    </div>
  )
}

export default UserTable;