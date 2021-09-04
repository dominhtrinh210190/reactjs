import React, { Component } from 'react';

class AddUser extends Component {

    constructor(){
        super();
        this.state = {
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }

    isChange(event){ 
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });

        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;  
    }

    kiemTraTrangThai() {
        if (this.props.hienThiForm) {
            return (
                <div className="col-2">
                    <div className="card text-center">
                        <div className="card-header">
                            Thêm mới user
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group text-left">
                                    <label htmlFor="ten">Tên</label>
                                    <input onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" />
                                </div> 
                                <div className="form-group text-left">
                                    <label htmlFor="dienthoai">Điện thoại</label>
                                    <input onChange={(event) => this.isChange(event)} name="tel" className="form-control"/>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="phanquyen">Phân quyền</label>
                                    <select onChange={(event) => this.isChange(event)} name="permission" defaultValue={1} className="browser-default custom-select">
                                        <option value={0}>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <input type="reset" onClick={() => this.props.getNewUserData(this.state.name,this.state.tel,this.state.permission)} className="btn btn-primary btn-block" value="Thêm" /> 
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<></>)
        }
    }

    render() {
        return (
            this.kiemTraTrangThai()
        )
    }
}

export default AddUser;