import React, { Component } from 'react';

class TableDataRow extends Component {

    getPermission(permission){
        if(permission === 0) return "Chọn quyền mặc định";
        else if(permission === 1) return "Admin";
        else if(permission === 2) return "Modrator";
        else if(permission === 3) return "Normal";
    }

    deleteRow(id){
        this.props.deleteRow(id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{ this.getPermission(this.props.permission)}</td>
                <td className="text-center">
                    <input type="button" className="btn btn-success mr-3" defaultValue="Sửa" onClick={()=> this.props.editClick2()} />
                    <input type="button" className="btn btn-danger" defaultValue="Xóa" onClick={()=> this.deleteRow(this.props.id)} />
                </td>
            </tr>
        );
    }
}

export default TableDataRow;