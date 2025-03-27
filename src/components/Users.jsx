import { useEffect, useState } from 'react'
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { connect } from 'react-redux';
import { fetchUsers, deleteUser, updateUser } from '../actions/userActions';
import { FaEllipsisH } from 'react-icons/fa';

const columns = [
    // {
    //     accessorKey: "_id", // Accesses `id` from the `User` type
    //     header: "ID",
    //   },
      {
        accessorKey: "firstname", // Accesses `name` from the `User` type
        header: "firstname",
      },
      {
        accessorKey: "lastname", // Accesses `email` from the `User` type
        header: "lastname",
      },
      {
        accessorKey: "email", // Accesses `email` from the `User` type
        header: "Email",
      },
      {
        accessorKey: "status", // Accesses `email` from the `User` type
        header: "Status",
      }
]

function Users({ users, loading, error, fetchUsers, updateUser, deleteUser }) {

    useEffect(() => {
      fetchUsers();

    }, [fetchUsers]);
    
    

    const tableData = [
        {
            id: '019834',
            name: 'Babatunde Gabriel',
            email: 'babatundegabriel@gmail.com',
            dateJoined: 'Jan 6 2024',
            phone: '+234 126813804',
            status: 'Inactive'
        },
        {
            id: '019834',
            name: 'Babatunde Gabriel',
            email: 'babatundegabriel@gmail.com',
            dateJoined: 'Jan 6 2024',
            phone: '+234 126813804',
            status: 'Inactive'
        },
        {
            id: '019834',
            name: 'Babatunde Gabriel',
            email: 'babatundegabriel@gmail.com',
            dateJoined: 'Jan 6 2024',
            phone: '+234 126813804',
            status: 'Inactive'
        },
        {
            id: '019834',
            name: 'Babatunde Gabriel',
            email: 'babatundegabriel@gmail.com',
            dateJoined: 'Jan 6 2024',
            phone: '+234 126813804',
            status: 'Inactive'
        },
        {
            id: '019834',
            name: 'Babatunde Gabriel',
            email: 'babatundegabriel@gmail.com',
            dateJoined: 'Jan 6 2024',
            phone: '+234 126813804',
            status: 'Inactive'
        },
    ]

    const [data, setData] = useState(!users ? [...tableData] : users)

    useEffect(() => {
      setData(users)
    }, [users])
    
    

    const [globalFilter, setGlobalFilter] = useState("")

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel()
    })

    const [editor, setEditor] = useState(null)

    const body = document.querySelector('body')
    body.addEventListener('click', () => {
      setEditor(null)
    })

    
  return (
    <div className='w-11/12 max-w-[700px] lg:w-[48%] overflow-x-scroll px-1 py-3'>
       {users && <table className="table-auto border-collapse borde border-gray-300 w-full">
        <thead className="bg-[#F3F3F3]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* {header.isPlaceholder
                    ? null
                    : header.column.columnDef.header} */}
                    <div {...{
                                                className: header.column.getCanSort()
                                                ? "cursor-pointer select-none flex items-center text-center"
                                                : "",
                                                onClick: header.column.getToggleSortingHandler()
                                            }}>
                                                {
                                                    flexRender(
                                                        header.column.columnDef.header, header.getContext()
                                                    )
                                                }
                                            </div>
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='hover:bg-gray-50 border-b border-b-[#E4E4E4]'>
              {/* {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {cell.renderCell()}
                </td>
              ))} */}
              {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            }
                                        </td>
                                    ))
                                }
                                <td className='relative cursor-pointer' onClick={(e) => {
                                  e.stopPropagation()
                                  if(editor == row.original._id){
                                    setEditor(null)
                                  } else {
                                    setEditor(row.original._id)
                                  }
                                  
                                }}><FaEllipsisH />
                                 <ul className={`absolute bg-zinc-100 shadow-2xl w-[140px] z-50 top-[-30px] text-center right-6 ${editor ==  row.original._id ? 'block' : 'hidden'}`} >
                                  <li className="border-b-1 py-2" onClick={() => {
                                    const newStatus = row.original.status == 'active' ? 'inactive' : 'active'
                                    updateUser(row.original._id, {status:  newStatus})
                                  }}>Change Status</li>
                                  <li className="py-2" onClick={() => deleteUser(row.original._id)}>Delete User</li>
                                  </ul></td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps, { fetchUsers, deleteUser, updateUser }) (Users)