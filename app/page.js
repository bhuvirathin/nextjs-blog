import UsersTable from "./usersList/table"
import { fetchUsers, getFullName } from './api'

export default async function Page(){
    const users = await fetchUsers();
   return (
   <><h1>Users</h1>
   <UsersTable users={users}/></>)
}
