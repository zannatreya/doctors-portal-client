import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`)
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => handleDelete(email)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;