import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchText: ''
        }
    }

    isChange(event) {
        this.setState({ searchText: event.target.value })
    }
 
    render() {
        return (
            <>
                {
                    this.props.editUserStatus?<EditUser editUserObject={this.props.editUserObject} changeEditUserStatus={() => this.props.changeEditUserStatus()} />:''
                }
                <div className="row">
                    <div className="input-group col-3 searchForm">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa" />
                        <div className="input-group-append">
                            <button className="btn btn-success" type="button" onClick={() => this.props.handelSearch(this.state.searchText)}>Tìm kiếm</button>
                        </div>
                    </div>
                    <div className="input-group col-3">
                        {
                            this.props.hienThiForm === true ?
                                <button type="button" className="btn btn-outline-secondary mr-3" onClick={() => this.props.doiTrangThai()}>Đóng lại</button>
                                :
                                <button type="button" className="btn btn-outline-success" onClick={() => this.props.doiTrangThai()}>Thêm mới</button>
                        }
                    </div>
                </div>
                <hr className="my-2" />
            </>
        );
    }
}

export default Search;