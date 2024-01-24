"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Pagination from './pagination';
import { paginate } from "../utils";
import styles from "../../styles/Home.module.css";

export default function UsersTable({users}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageUsers, setCurrentPageUsers] = useState([]);
  const pageSize = 5;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(()=>{
    const paginatedUsersList = paginate(users, currentPage, pageSize);
    setCurrentPageUsers(paginatedUsersList)
  },[currentPage])
  return (
    <div className="root">
          <table className={styles.userstable}>
            <thead  className={styles.userstableHead}>
              <tr>
                <th className={styles.cellWidthAvatar}>
                  Avatar
                </th>
                <th className={styles.cellWidth}>
                  First Name
                </th>
                <th className={styles.cellWidth}>
                  Last Name
                </th>
                <th className={styles.cellWidth}>
                  Username
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageUsers.map((user) => (
                <tr className={styles.tr}
                  key={user.id}
                >
                  <td className={styles.cellWidthAvatar}>
                    <div>
                      <Image
                        src={user.avatar_url}
                        className={styles.rounded}
                        width={28}
                        height={28}
                        alt={`${user.login}'s profile picture`}

                      />
                    </div>
                  </td>
                  <td className={styles.cellWidth}>
                    {user.name?.split(' ')[0]}
                  </td>
                  <td className={styles.cellWidth}>
                  {user.name?.split(' ')[1]}
                  </td>
                  <td className={styles.cellWidth}>
                    <Link  href={{ pathname: '/userDetails', query: { name: user.login }, }} >{user.login}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
       items={users?.length || 10} // 100
       currentPage={currentPage} // 1
       pageSize={pageSize} // 10
       onPageChange={onPageChange}
        />
        </div>
   );
}
