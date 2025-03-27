import { useEffect, useState } from 'react'
// import AxiosInstance from '../Api/AxiosInstance'
// import Endpoints from '../Api/Enpoints'
import { FaEllipsis } from 'react-icons/fa6'
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers, addUser, updateUser, deleteUser } from "../store";
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions/userActions';
import axios from 'axios';

const columns = [
    {
        accessorKey: "_id", // Accesses `id` from the `User` type
        header: "ID",
      },
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
        accessorKey: "address", // Accesses `email` from the `User` type
        header: "Address",
      }
]

function Users({ users, loading, error, fetchUsers, deleteUser }) {


    // const users = useSelector(state => state.users)
    // const dispatch = useDispatch()

    // const [current, setCurrent] = useState(null)
    // useEffect(() => {
    //     // fetchHistory()

    //     dispatch(fetchUsers)
        
        

    //     // const body = document.querySelector('body')

    //     // body.addEventListener('click', () => {
    //     //     setCurrent(null)
    //     // })
    // }, [dispatch])


    //const [incomingData, setIncomingData] = useState([])
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)

    //  async function fetchHistory(){
    //     await AxiosInstance.get(Endpoints.getTransactions).then((res) => {
    //         const data =  res.data
    //         // setIncomingData(data);
    //         setData(data)
    //         setLoading(false)
    //         console.log(data);
    //         console.log(loading);
            
            
    //     }).catch(err => {
    //         console.log(err);
            
    //     })
    // }

    useEffect(() => {
      fetchUsers();

      getstat()
    }, [fetchUsers]);
  
    //console.log(users);

    async function getstat(){
      const res = await axios.get('https://soft-solutions-api.onrender.com/api/user')
      // console.log(res.data);
    }
    
    

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

    const [data, setData] = useState(loading ? [...tableData] : users)
    const [now, setNow] = useState(users)
    console.log(users);
    

    // const [sorting, setSorting] = useState([])
    const [globalFilter, setGlobalFilter] = useState("")

    const table = useReactTable({
        data,
        columns,
        state: {
            // sorting,
            globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        // onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel()
    })

    
  return (
    <div>
       {users && <table className="table-auto border-collapse borde border-gray-300 w-fit">
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

export default connect(mapStateToProps, { fetchUsers, deleteUser }) (Users)







// const handleSubmit = async (id, status) => {
    //     console.log(id, status);
    //     const newStatus = status.toLowerCase() === "pending" ? "completed" : "pending"
        
    //       try {
    //          await AxiosInstance.put(`transaction/${id}`, {status: newStatus});
    //           setCurrent(null)
    //         fetchHistory()
    //       } catch (error) {
    //         console.error("Error:", error);
    //       }
    //     };
  
    //     const deleteTransaction = async (id) => {
          
    //         try {
    //            await AxiosInstance.delete(`transaction/${id}`);
    //             setCurrent(null)
    //           fetchHistory()
    //         } catch (error) {
    //           console.error("Error:", error);
    //         }
    //       };