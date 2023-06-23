import Modal from "antd/es/modal/Modal";

const CvModal = ({ cv, open,  closeModal }) => (
    <Modal
      title={cv?.name || 'Name Here'}
      open={open}
      onOk={closeModal}
      onCancel={closeModal}
      cancelButtonProps={{ disabled: true }}
    >
      <p><b>Email: </b><span>{cv?.email || 'example@gmail.com'}</span></p>
      <p><b>Summary: </b><span>{cv?.summary || 'write a short summary for job you applying for'}</span></p>
      <p><b>Experience: </b><span>{cv?.experience || 'write about previous jobs or any other experience'}</span></p>
      <p><b>Skills: </b><span>{cv?.skills || 'mention your technical and interpersonal skills'}</span></p>
      <p><b>Address: </b><span>{cv?.address || '#351,G.F, Barotiwala, Baddi, Himachal'}</span></p>
      <p><b>Contact number: </b><span>{cv?.phone || '+91 000-000-0000'}</span></p>
    </Modal>
);
export default CvModal  