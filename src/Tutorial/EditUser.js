import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class EditUser extends Component {

    render() {
        return (
            <Row>
                <div className="col-6 mb-3">
                    <div className="card text-center">
                        <div className="card-header">
                            Sửa user
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group text-left">
                                    <label htmlFor="ten">Tên</label>
                                    <input defaultValue={this.props.editUserObject.name} name="name" type="text" className="form-control" />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="dienthoai">Điện thoại</label>
                                    <input defaultValue={this.props.editUserObject.tel} name="tel" className="form-control" />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="phanquyen">Phân quyền{this.props.editUserObject.permission}</label>

                                    <select
                                        name="permission"
                                        defaultValue={parseInt(this.props.editUserObject.permission)}
                                        className="browser-default custom-select">
                                        <option value={0}>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>

                                </div>
                                <input className="btn btn-primary btn-block" value="Lưu" onClick={() => this.props.changeEditUserStatus()} />
                            </form>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}

export default EditUser;