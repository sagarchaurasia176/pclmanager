import React from "react";
import { useNavigate } from "react-router-dom";

const MeetingRequest = () => {
  const navigates = useNavigate();
  const MoveToNextHandler = () => {
    navigates("/meeting");
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Meeting Request
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Do you want to meeting with your guide ?
          </h3>
          <div class="w-full mt-4 ">
            <label for="options">Choose Your Guide</label>

            <select id="options" name="options" className=" w-full mb-9 p-3">
              <br></br>

              <option value="option1"></option>
              <option value="option2">sagar</option>
              <option value="option3">aditya</option>
              <option value="option4">Raju</option>
              <option value="option5">Gunal</option>
            </select>
          </div>


          {/* time slot  */}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => MoveToNextHandler()} className="btn">
                Move to Next
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MeetingRequest;
