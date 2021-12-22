import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

function DataList(){
    const[userList, setUserList] = useState([]);

    const columns = [
        {dataField: 'id', text: 'Id'},
        {dataField: 'name', text: 'Name', sort: true},
        {dataField: 'username', text: 'Username', sort: true},
        {dataField: 'email', text: 'Email', sort: true}
        
    ]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setUserList(result))
    .catch(err => console.log(err));
  },[])
    return <div>
        <BootstrapTable bootstrap4 keyField='id' columns={columns} data={userList} />

       {/* <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            {
             userList && userList.length> 0 ?
             userList.map(usr =>
                <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
            </tr>
            
                )
                :'Loading'
            
            }
        </table>*/}
    </div>
}
export default DataList;