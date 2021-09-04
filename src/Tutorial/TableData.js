import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dataUser.map((value, key) => (
                            <TableDataRow 
                            editClick2={() => this.props.editClickApp(value)} 
                            deleteRow = {(id)=> this.props.deleteRow(id)}
                            id={value.id} stt={value.id} name={value.name} tel={value.tel} permission={value.permission} key={key} />
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default TableData;

