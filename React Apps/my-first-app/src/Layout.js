import React from 'react';
export function Form() {
    return (<div>
        <h2>This is a simple form</h2>
        <form>
            Name <input type = 'text' className = 'form-control'></input>
            <br />
            <button className = 'btn btn-primary'>Submit</button>
        </form>
    </div>)
}
export function Table() {
    return (<div>
        <h2>A Simple Table</h2>
        <table className = 'table table-striped'>
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>100</td><td>Raj</td><td>35200</td>
                </tr>
            </tbody>
        </table>
    </div>)
}
function Layout() {
    return (<div className = "container-fluid">
        <div className = 'row'>
            <div className = 'col-3'>
                <Form />
            </div>
            <div className = 'col'>
                <Table />
            </div>
        </div>
    </div>)
}
export default Layout;