import React, { Component } from "react";

class ModalPopup extends Component {
  render() {
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Payment status</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            </div>
            <div className="modal-body">
              <p>Payment Success</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
