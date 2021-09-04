import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './DataUser.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

    constructor() {
        super()
        this.state = {
            hienThiForm: false,
            data: DataUser,
            searchText: '',
            editUserStatus: true,
            editUserObject: {}
        }
    }

    deleteRow(id) {
        debugger;
        var dataClone = this.state.data;
        dataClone = dataClone.filter(x=> x.id !== id);
        this.setState({
            data:dataClone
        })
    }

    changeEditUserStatus = () => {
        this.setState({
            editUserStatus: !this.state.editUserStatus
        })
    }

    editClick3 = (user) => {
        this.setState({
            editUserObject: user,
            editUserStatus: true
        })
    }

    getNewUserData(name, tel, permission) {

        var obj = {};
        obj.id = uuidv4();
        obj.name = name;
        obj.tel = tel;
        obj.permission = parseInt(permission);

        var items = this.state.data;
        items = items.push(obj);
        this.setState({ data: items });
    }

    handelSearch(data) {
        this.setState({
            searchText: data
        });
    }

    doiTrangThai() {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        })
    }

    render() {
    console.log(this.state.data)
        return (
            <div className="jumbotron">
                <div className="container-plus">
                    <Header />
                    <Search
                        editUserObject={this.state.editUserObject}
                        changeEditUserStatus={() => this.changeEditUserStatus()} editUserStatus={this.state.editUserStatus} doiTrangThai={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} handelSearch={(data) => this.handelSearch(data)} />

                    <div className="row">
                        <div className="col">
                            <TableData
                                dataUser={this.state.data}
                                deleteRow={(id) => this.deleteRow(id)}
                                editClickApp={(user) => this.editClick3(user)} />
                        </div>
                        <AddUser getNewUserData={(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm={this.state.hienThiForm} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
